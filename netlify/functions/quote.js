const nodemailer = require('nodemailer');

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({
        success: false,
        message: 'Method not allowed',
      }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const {
      name,
      email,
      phone,
      company,
      inquiryType,
      inquiryCategory,
      hardwareDetails,
      message,
    } = body;

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

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return {
        statusCode: 502,
        body: JSON.stringify({
          success: false,
          recipient,
          ccRecipient,
          emailDispatched: false,
          message: 'Quote request was received, but no email delivery provider is configured. Set SMTP_* credentials.',
        }),
      };
    }

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
      from: process.env.SMTP_FROM || 'MSPB Tech Quotes <contact@mspb-tech.com>',
      to: recipient,
      cc: ccRecipient,
      replyTo: email || undefined,
      subject: mailSubject,
      text: mailText,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        recipient,
        ccRecipient,
        emailDispatched: true,
        message: `Quote request routed to ${recipient} and ${ccRecipient}`,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error && error.message ? error.message : 'Internal server error processing quote',
      }),
    };
  }
};
