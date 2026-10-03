import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// API route to receive quote submissions and forward/dispatch to contact@mspb-tech.com
app.post('/api/quote', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      inquiryType,
      inquiryCategory,
      hardwareDetails,
      message,
    } = req.body;

    const recipient = process.env.QUOTE_RECIPIENT_EMAIL || 'contact@mspb-tech.com';
    const ccRecipient = process.env.QUOTE_CC_EMAIL || 'ashikerogan@mspb-tech.com';
    const type = inquiryType || inquiryCategory || 'Enterprise Hardware Quote';
    const details = hardwareDetails || message || 'No details provided';

    const mailSubject = `New quote request from ${name || 'Prospective Client'}${company ? ` (${company})` : ''}`;
    const mailText = `
Hello MSPB Technologies,

A new quote request has been submitted through the website.

Customer Details:
- Full Name: ${name || 'N/A'}
- Email Address: ${email || 'N/A'}
- Phone / WhatsApp: ${phone || 'N/A'}
- Company: ${company || 'N/A'}
- Inquiry Type: ${type}

Requirements / Hardware Details:
${details}

Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Singapore' })} (SGT)

Best regards,
MSPB Technologies Website
    `.trim();

    console.log(`[QUOTE RECEIVED] Preparing notification for: ${recipient} & ${ccRecipient}`);
    console.log(mailText);

    let emailDispatched = false;
    const formSubmitToken = process.env.FORMSUBMIT_TOKEN;

    // 1. Dispatch via FormSubmit automated mailer when a valid token is configured.
    if (formSubmitToken) {
      try {
        const formSubmitPayload = {
          _subject: mailSubject,
          _replyto: email || undefined,
          _cc: ccRecipient,
          _template: 'table',
          'Website Source': 'https://mspb-tech.com',
          'Customer Name': name || 'N/A',
          'Email Address': email || 'N/A',
          'Phone / WhatsApp': phone || 'N/A',
          'Company / Organization': company || 'N/A',
          'Inquiry Category': type,
          'Hardware / BOM Requirements': details,
          'Submitted At': new Date().toLocaleString('en-US', { timeZone: 'Asia/Singapore' }) + ' SGT',
        };

        const fsRes = await fetch(`https://formsubmit.co/ajax/${formSubmitToken}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Origin': 'https://mspb-tech.com',
            'Referer': 'https://mspb-tech.com/',
          },
          body: JSON.stringify(formSubmitPayload),
        });
        const fsData = await fsRes.json().catch(() => ({}));
        console.log(`[FormSubmit Dispatch] Response:`, fsData);

        if (fsData.success === 'true' || fsData.success === true) {
          emailDispatched = true;
          console.log('[FormSubmit] Dispatched successfully');
        } else if (fsData.message && typeof fsData.message === 'string' && fsData.message.toLowerCase().includes('activation')) {
          console.warn(`[FormSubmit Activation Required] ${fsData.message}`);
        }
      } catch (fsErr) {
        console.warn('[FormSubmit Error]:', fsErr);
      }
    } else {
      console.warn('[FormSubmit] No FORMSUBMIT_TOKEN configured; skipping FormSubmit fallback.');
    }

    // 2. If SMTP credentials are configured in .env, send actual email via nodemailer.
    if (!emailDispatched && process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: process.env.SMTP_SECURE === 'true',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.SMTP_FROM || `"MSPB Tech Quotes" <${process.env.SMTP_USER}>`,
          to: recipient,
          cc: ccRecipient,
          replyTo: email || undefined,
          subject: mailSubject,
          text: mailText,
        });
        emailDispatched = true;
        console.log(`[SMTP] Successfully dispatched quote email to ${recipient} & ${ccRecipient}`);
      } catch (smtpErr) {
        console.warn('[SMTP Warning] Failed to send via SMTP:', smtpErr);
      }
    }

    if (!emailDispatched) {
      return res.status(502).json({
        success: false,
        recipient,
        ccRecipient,
        emailDispatched: false,
        message: 'Quote request was received, but no email delivery provider is configured. Set FORMSUBMIT_TOKEN or SMTP_* credentials.',
        quote: {
          name,
          email,
          phone,
          company,
          type,
          details,
          timestamp: new Date().toISOString(),
        },
      });
    }

    return res.json({
      success: true,
      recipient,
      ccRecipient,
      emailDispatched: true,
      message: `Quote request routed to ${recipient} and ${ccRecipient}`,
      quote: {
        name,
        email,
        phone,
        company,
        type,
        details,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error: any) {
    console.error('Error handling /api/quote:', error);
    return res.status(500).json({
      success: false,
      error: error?.message || 'Internal server error processing quote',
    });
  }
});

// Dev server with Vite middleware vs Production static serving
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
