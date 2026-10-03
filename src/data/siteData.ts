import { Product, SlideItem, NavProductCategory, HardwareCategoryGroup } from '../types';
import hpeDl380Image from '../assets/images/hpe_dl380_server_1787412420025.jpg';

export const siteConfig = {
  companyName: 'MSPB Technologies Pte Ltd',
  displayName: 'MSPB Technologies',
  uen: '202350916Z',
  tagline: 'Global Technology Solutions. Local APAC Expertise.',
  positioning: {
    title: 'Company Positioning',
    headline: 'Global Technology Solutions. Local APAC Expertise.',
    paragraph1:
      'MSPB Technologies is a Singapore-based technology solutions company delivering IT hardware trading, data center and IT infrastructure services, IT asset disposition, and annual maintenance and technical support services.',
    paragraph2:
      'We serve businesses across Singapore, Malaysia, India, Japan, Australia, New Zealand, Southeast Asia, and the wider APAC region, while also supporting international companies from Europe, the Middle East, North America, South America, and other global markets.',
    paragraph3:
      'Our business combines global IT hardware capabilities with local technical expertise and regional field support, providing customers with a reliable partner throughout the IT asset and infrastructure lifecycle.',
  },
  regions: {
    apac: ['Singapore (HQ)', 'Malaysia', 'India', 'Japan', 'Australia', 'New Zealand', 'Southeast Asia & wider APAC'],
    international: ['Europe', 'Middle East', 'North America', 'South America', 'Global Markets'],
  },
  contact: {
    address: '67 Ubi Crescent, #04-05, Singapore 408560',
    street: '67 Ubi Crescent',
    unit: '#04-05',
    postalCode: 'Singapore 408560',
    country: 'Singapore',
    phone: '+65 84363635',
    mobile: '+65 84363635',
    whatsapp: '+65 84363635',
    email: 'contact@mspb-tech.com',
    quoteEmail: 'contact@mspb-tech.com',
    secondaryEmail: 'ashikerogan@mspb-tech.com',
    emails: ['contact@mspb-tech.com', 'ashikerogan@mspb-tech.com'],
    socials: {
      whatsapp: 'https://wa.me/6584363635',
      linkedin: 'https://linkedin.com/company',
      instagram: 'https://instagram.com/',
      skype: 'skype:mspbtechnologies?chat',
    }
  }
};

export const heroSlides: SlideItem[] = [
  {
    id: 1,
    badge: 'Singapore Headquarters • Global Reach',
    title: 'Global Technology Solutions. Local APAC Expertise.',
    subtitle:
      'Delivering IT Hardware Trading, Data Center & Infrastructure Services, IT Asset Disposition, and Multi-Vendor Annual Maintenance.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80',
    primaryCtaText: 'Request a Quote',
    primaryCtaAction: '#contact',
    secondaryCtaText: 'Explore Divisions',
    secondaryCtaAction: '#divisions',
  },
  {
    id: 2,
    badge: '01 — IT Hardware Trading',
    title: 'BUY. SELL. SOURCE. SUPPLY.',
    subtitle:
      'International IT equipment trading for enterprise servers, storage arrays, networking gear, computing systems, and OEM spare components.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2000&q=80',
    primaryCtaText: 'Request Hardware Quote',
    primaryCtaAction: '#contact',
    secondaryCtaText: 'Sell Your IT Equipment',
    secondaryCtaAction: '#contact',
  },
  {
    id: 3,
    badge: '02 — Data Center Infrastructure',
    title: 'DEPLOY. INSTALL. CONNECT. SUPPORT.',
    subtitle:
      'Full lifecycle data center services: Rack & Stack, Structured Cabling, MTP/MPO Fiber Infrastructure, Hardware Deployment & Decommissioning.',
    image: 'https://images.unsplash.com/photo-1597852074816-d933c4d2b988?auto=format&fit=crop&w=2000&q=80',
    primaryCtaText: 'Discuss Data Center Project',
    primaryCtaAction: '#contact',
    secondaryCtaText: 'View Infrastructure Scope',
    secondaryCtaAction: '#division-datacenter',
  },
  {
    id: 4,
    badge: '03 — IT Asset Disposition (ITAD)',
    title: 'SECURE. RECOVER. REMARKET. RECYCLE.',
    subtitle:
      'NIST-compliant certified data sanitization, comprehensive auditing, maximum value recovery, and certified sustainable e-waste recycling.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000&q=80',
    primaryCtaText: 'Inquire About ITAD',
    primaryCtaAction: '#contact',
    secondaryCtaText: 'Learn About Asset Recovery',
    secondaryCtaAction: '#division-itad',
  },
];

// FOUR CORE BUSINESS DIVISIONS
export const coreDivisions = [
  {
    number: '01',
    id: 'division-trading',
    title: 'IT Hardware Trading',
    tagline: 'BUY. SELL. SOURCE. SUPPLY.',
    description:
      'IT hardware trading is one of the core businesses of MSPB Technologies. We buy, sell, source and supply IT equipment across international markets, supporting businesses, data centers, system integrators, resellers, distributors and other technology organizations.',
    equipmentTypes: [
      'New Equipment',
      'Used Equipment',
      'Refurbished Equipment',
      'Excess Inventory',
      'Surplus Equipment',
      'End-of-Life Equipment',
      'Bulk / Wholesale Equipment',
    ],
    globalMarkets: ['APAC', 'Europe', 'North America', 'South America', 'Middle East'],
    categories: [
      {
        name: 'Laptops & Computing',
        items: ['Business Laptops', 'Professional Workstations', 'Desktop Computers', 'Mini PCs', 'Refurbished Computers', 'Computer Accessories']
      },
      {
        name: 'Servers & Storage',
        items: ['Rack Servers', 'Tower Servers', 'Blade Servers', 'Enterprise Servers', 'Storage Systems', 'HDDs', 'SSDs', 'Server Accessories']
      },
      {
        name: 'Networking Equipment',
        items: ['Network Switches', 'Routers', 'Firewalls', 'Wireless Equipment', 'Network Modules', 'Transceivers', 'Optical Modules', 'Networking Accessories']
      },
      {
        name: 'Components & Spare Parts',
        items: ['CPUs / Processors', 'RAM / Memory', 'Graphics Cards / GPUs', 'Motherboards', 'SSDs', 'HDDs', 'Power Supplies', 'Server Components', 'Replacement Parts']
      },
      {
        name: 'Data Center Equipment',
        items: ['Servers', 'Storage', 'Network Switches', 'Racks & Accessories', 'Patch Panels', 'Fiber Equipment', 'MTP / MPO Components', 'Optics & Transceivers']
      },
    ]
  },
  {
    number: '02',
    id: 'division-datacenter',
    title: 'Data Center Infrastructure Installation & Cabling',
    tagline: 'DEPLOY. INSTALL. CONNECT. SUPPORT.',
    headline: 'Data Center Installation. Cabling. Precision. Reliability.',
    description:
      'We provide end-to-end physical data center infrastructure services for network, server and IT equipment deployments. Our experienced field engineers deliver safe, organized and documentation-driven installations in live and new data center environments.',
    subDescription:
      'Professional physical infrastructure services for data center deployments, including rack installation, power, fiber optic cabling, network cabling, cable management, labeling, QA/QC and deployment support.',
    serviceGroups: [
      {
        title: 'Rack & Equipment Installation',
        items: [
          'Server, network switch and hardware rack installation',
          'Equipment positioning and mounting',
          'Heavy equipment handling using approved data-center lifting equipment',
          'Rack-unit verification and physical installation'
        ]
      },
      {
        title: 'Power & PDU Installation',
        items: [
          'PDU installation and rack power distribution',
          'Equipment power cabling',
          'Power connection verification according to approved power plans',
          'PSU-to-PDU port verification'
        ]
      },
      {
        title: 'Fiber Optic & Network Cabling',
        items: [
          'MTP/MPO fiber installation',
          'MTP/MPO-to-LC cassette connectivity',
          'LC-LC fiber patching',
          'UTP/Ethernet cabling',
          'Intra-rack and inter-rack connectivity',
          'High-density fiber deployments'
        ]
      },
      {
        title: 'Cable Dressing & Management',
        items: [
          'Professional cable routing and dressing',
          'Fiber bend-radius compliance',
          'Cable pathway management',
          'Separation and organization of power and data cabling',
          'Clean and structured rack presentation'
        ]
      },
      {
        title: 'Labeling & Port Mapping',
        items: [
          'Cable and equipment labeling',
          'Source-to-destination port verification',
          'Implementation according to approved cable matrices and port maps',
          'Accurate connection identification and traceability'
        ]
      },
      {
        title: 'Physical QA/QC',
        items: [
          'Rack and equipment inspection',
          'Power connection verification',
          'Fiber and network connection verification',
          'Connector and cable condition checks',
          'Label and port-mapping verification',
          'Installation quality inspection'
        ]
      },
      {
        title: 'Migration & Deployment Support',
        items: [
          'Physical support for network equipment migration',
          'New equipment deployment and cutover support',
          'Old equipment removal',
          'Decommissioning and physical infrastructure cleanup'
        ]
      },
      {
        title: 'Documentation & Handover',
        items: [
          'Installation progress reporting',
          'Before/after photo documentation',
          'QA/QC documentation',
          'Equipment and material inventory',
          'As-built/connection documentation support',
          'Project handover'
        ]
      }
    ],
    installationProcess: [
      {
        step: '01',
        title: 'Site Assessment',
        description: 'Review the site requirements, rack locations, equipment list, drawings and installation documentation.'
      },
      {
        step: '02',
        title: 'Equipment Verification',
        description: 'Check equipment against the BOM and verify quantities, models and physical condition.'
      },
      {
        step: '03',
        title: 'Rack & Power Installation',
        description: 'Install equipment and PDUs according to the approved rack and power layout.'
      },
      {
        step: '04',
        title: 'Cabling',
        description: 'Install fiber, Ethernet and power connections according to the approved cable matrix.'
      },
      {
        step: '05',
        title: 'Dressing & Labeling',
        description: 'Route, dress and label all cables for a clean, structured and traceable installation.'
      },
      {
        step: '06',
        title: 'QA/QC Verification',
        description: 'Perform detailed physical checks of racks, power, ports, cables and labels.'
      },
      {
        step: '07',
        title: 'Documentation & Handover',
        description: 'Complete photo documentation, inventory and project handover.'
      }
    ]
  },
  {
    number: '03',
    id: 'division-itad',
    title: 'IT Asset Disposition (ITAD)',
    tagline: 'SECURE. RECOVER. REMARKET. RECYCLE.',
    description:
      'MSPB Technologies provides IT asset lifecycle and disposition services for organizations managing retired, surplus or end-of-life IT equipment. We help customers securely manage equipment while maximizing potential asset recovery and ensuring responsible end-of-life handling.',
    serviceGroups: [
      {
        title: 'IT Equipment Collection & Logistics',
        items: ['Secure regional pickup', 'Chain of custody tracking', 'On-site packing & inventory auditing', 'Cross-border transport management']
      },
      {
        title: 'Certified Data Sanitization',
        items: ['NIST SP 800-88 compliant wiping', 'DoD 5220.22-M sanitization', 'Physical drive degaussing & shredding', 'Certificate of Data Destruction']
      },
      {
        title: 'Asset Testing & Grading',
        items: ['Component functionality verification', 'Diagnostic health reporting', 'Cosmetic and performance grading', 'Serial number reconciliation']
      },
      {
        title: 'Value Recovery & Remarketing',
        items: ['Global secondary market remarketing', 'Component harvesting', 'Revenue sharing & direct buyback', 'Maximizing residual asset ROI']
      },
      {
        title: 'Sustainable E-Waste Recycling',
        items: ['Zero-landfill compliance', 'Hazardous material disposal', 'WEEE / ISO 14001 alignment', 'Environmental compliance reporting']
      }
    ]
  },
  {
    number: '04',
    id: 'division-maintenance',
    title: 'Annual Maintenance & Technical Support',
    tagline: 'MAINTAIN. MONITOR. EXTEND. RESOLVE.',
    description:
      'We provide comprehensive Third-Party Maintenance (TPM) and engineering SLA support for multi-vendor servers, storage arrays, network components and enterprise hardware across Singapore and the APAC region.',
    serviceGroups: [
      {
        title: 'Multi-Vendor Hardware Support',
        items: ['Dell PowerEdge & PowerVault', 'HPE ProLiant, Apollo & 3PAR', 'IBM Power & Storage Systems', 'Cisco UCS & Catalyst/Nexus', 'Lenovo ThinkSystem', 'EMC / NetApp SAN Systems']
      },
      {
        title: 'Customizable SLA Tiers',
        items: ['24x7x365 4-Hour On-Site Response', 'Next Business Day (NBD) On-Site Support', '99.9% Uptime Commitment', 'Dedicated Service Account Manager']
      },
      {
        title: 'Lifecycle Extension (TPM / EOSL)',
        items: ['Post-warranty hardware support', 'End-of-Service-Life (EOSL) coverage', 'Capex reduction up to 60%', 'No forced hardware refresh cycles']
      },
      {
        title: 'Spare Parts & Certified Engineers',
        items: ['Locally warehoused OEM spare parts', 'Rapid parts dispatch in Singapore', 'Factory-trained certified engineers', 'Preventive health check-ups']
      }
    ]
  }
];

export const hardwareCategoryGroups: HardwareCategoryGroup[] = [
  {
    id: 'laptops-computing',
    name: 'Laptops & Computing',
    subtitle: 'Enterprise-grade mobile & office computing',
    icon: 'Laptop',
    items: [
      'Business Laptops',
      'Professional Workstations',
      'Desktop Computers',
      'Mini PCs',
      'Refurbished Computers',
      'Computer Accessories'
    ]
  },
  {
    id: 'servers-storage',
    name: 'Servers & Storage',
    subtitle: 'Mission-critical enterprise compute & data arrays',
    icon: 'Server',
    items: [
      'Rack Servers',
      'Tower Servers',
      'Blade Servers',
      'Enterprise Servers',
      'Storage Systems',
      'HDDs',
      'SSDs',
      'Server Accessories'
    ]
  },
  {
    id: 'networking',
    name: 'Networking Equipment',
    subtitle: 'Core routing, switching & optical connectivity',
    icon: 'Network',
    items: [
      'Network Switches',
      'Routers',
      'Firewalls',
      'Wireless Equipment',
      'Network Modules',
      'Transceivers',
      'Optical Modules',
      'Networking Accessories'
    ]
  },
  {
    id: 'components',
    name: 'Components & Spare Parts',
    subtitle: 'OEM processors, memory, GPUs & replacement parts',
    icon: 'Cpu',
    items: [
      'CPUs / Processors',
      'RAM / Memory',
      'Graphics Cards / GPUs',
      'Motherboards',
      'SSDs & HDDs',
      'Power Supplies',
      'Server Components',
      'Replacement Parts'
    ]
  },
  {
    id: 'datacenter',
    name: 'Data Center Equipment',
    subtitle: 'High-density racks, optics & infrastructure hardware',
    icon: 'HardDrive',
    items: [
      'Servers',
      'Storage Arrays',
      'Network Switches',
      'Racks & Accessories',
      'Patch Panels',
      'Fiber Equipment',
      'MTP / MPO Components',
      'Optics & Transceivers'
    ]
  }
];

export const navProductCategories: NavProductCategory[] = [
  {
    id: 'nav-servers',
    title: 'Servers & Storage',
    href: '#products',
    subItems: [
      { id: 'sub-dell-srv', title: 'Dell PowerEdge', href: '#products' },
      { id: 'sub-hp-srv', title: 'HPE ProLiant', href: '#products' },
      { id: 'sub-cisco-srv', title: 'Cisco UCS', href: '#products' },
      { id: 'sub-ibm-srv', title: 'IBM Systems', href: '#products' },
      { id: 'sub-storage-srv', title: 'Storage Arrays & SAN', href: '#products' },
    ]
  },
  {
    id: 'nav-workstation',
    title: 'Workstations',
    href: '#products',
    subItems: [
      { id: 'sub-dell-ws', title: 'Dell Precision', href: '#products' },
      { id: 'sub-hp-ws', title: 'HP Z Series', href: '#products' },
      { id: 'sub-lenovo-ws', title: 'Lenovo ThinkStation', href: '#products' },
    ]
  },
  {
    id: 'nav-laptops',
    title: 'Laptops & Computing',
    href: '#products',
    subItems: [
      { id: 'sub-dell-lap', title: 'Dell Latitude & XPS', href: '#products' },
      { id: 'sub-hp-lap', title: 'HP EliteBook & ProBook', href: '#products' },
      { id: 'sub-lenovo-lap', title: 'Lenovo ThinkPad', href: '#products' },
      { id: 'sub-apple-lap', title: 'Apple MacBook Pro', href: '#products' },
      { id: 'sub-surface-lap', title: 'Microsoft Surface', href: '#products' },
    ]
  },
  {
    id: 'nav-networking',
    title: 'Networking & DC',
    href: '#products',
    subItems: [
      { id: 'sub-cisco-net', title: 'Cisco Catalyst & Nexus', href: '#products' },
      { id: 'sub-switch-net', title: 'Enterprise Switches', href: '#products' },
      { id: 'sub-firewall-net', title: 'Firewalls & Routers', href: '#products' },
      { id: 'sub-optics-net', title: 'Transceivers & Optical Modules', href: '#products' },
      { id: 'sub-fiber-net', title: 'MTP / MPO Fiber Infrastructure', href: '#products' },
    ]
  },
  {
    id: 'nav-components',
    title: 'Components & Spares',
    href: '#products',
    subItems: [
      { id: 'sub-cpu', title: 'Intel Xeon & AMD EPYC CPUs', href: '#products' },
      { id: 'sub-ram', title: 'DDR4 / DDR5 ECC Memory', href: '#products' },
      { id: 'sub-hdd', title: 'Enterprise SAS/SATA & NVMe', href: '#products' },
      { id: 'sub-gpu', title: 'NVIDIA RTX & Data Center GPUs', href: '#products' },
      { id: 'sub-psu', title: 'Redundant Power Supplies', href: '#products' },
    ]
  }
];

// Curated Enterprise Hardware Catalog
export const productsData: Product[] = [
  {
    id: 'srv-dell-r750',
    name: 'Dell PowerEdge R750 Rack Server',
    brand: 'Dell',
    category: 'Servers & Storage',
    subCategory: 'Rack Servers',
    formFactor: '2U Rack Mount',
    processor: '2x Intel Xeon Gold 6338 (64 Cores Total, 2.00 GHz)',
    memory: '128GB (4x32GB) DDR4 ECC Registered RDIMM',
    storage: '2x 960GB Enterprise NVMe + 4x 2.4TB SAS 10K',
    description: 'Flagship 2-socket 2U enterprise workhorse server built for demanding virtualization, high-density analytics, and cloud databases.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    condition: 'New',
    inStock: true,
    featured: true,
  },
  {
    id: 'srv-hp-dl380-gen10',
    name: 'HPE ProLiant DL380 Gen10 Plus Server',
    brand: 'HP',
    category: 'Servers & Storage',
    subCategory: 'Rack Servers',
    formFactor: '2U Rack Mount',
    processor: '2x Intel Xeon Silver 4314 (32 Cores, 2.40 GHz)',
    memory: '64GB (2x32GB) DDR4 SmartMemory',
    storage: '8x 1.2TB SAS 12G 10K SFF HDD Hot-Plug',
    description: 'Industry-standard secure enterprise server delivering world-class performance and versatility for hybrid cloud workloads.',
    image: hpeDl380Image,
    condition: 'Refurbished',
    inStock: true,
    featured: true,
  },
  {
    id: 'ws-dell-5820-new',
    name: 'Dell Precision 5820 Tower Workstation',
    brand: 'Dell',
    category: 'Workstations',
    subCategory: 'Dell Precision',
    formFactor: 'Mid-Tower Chassis',
    processor: 'Intel Xeon W-2245 (8 Cores / 16 Threads, 3.90 GHz)',
    memory: '32GB DDR4 2933MHz ECC',
    storage: '1TB PCIe NVMe Class 40 SSD',
    description: 'Reliable single-socket CAD/CAM and digital content creation workstation with ISV certified graphics support.',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80',
    condition: 'New',
    inStock: true,
    featured: false,
  },
  {
    id: 'lap-lenovo-t14',
    name: 'Lenovo ThinkPad T14 Gen 4 Ultrabook',
    brand: 'Lenovo',
    category: 'Laptops & Computing',
    subCategory: 'Business Laptops',
    formFactor: '14-inch FHD+ Ultrabook',
    processor: 'Intel Core i7-1365U vPro (10 Cores, up to 5.20 GHz)',
    memory: '16GB DDR5 5200MHz',
    storage: '512GB PCIe Gen4 Performance NVMe SSD',
    description: 'Mil-spec tested corporate business laptop built with enterprise security, rapid charging, and long battery life.',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    condition: 'New',
    inStock: true,
    featured: true,
  },
  {
    id: 'net-cisco-c9300',
    name: 'Cisco Catalyst 9300 Series 48-Port Switch',
    brand: 'Cisco',
    category: 'Networking Equipment',
    subCategory: 'Enterprise Switches',
    formFactor: '1U Fixed Managed Switch',
    processor: 'Cisco UADP 2.0 Architecture',
    memory: '16GB RAM / 16GB Flash',
    storage: 'Modular Uplinks (10G/25G/40G)',
    description: 'Enterprise stackable switching platform architected for security, IoT, mobility, and high-bandwidth corporate backbones.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    condition: 'Refurbished',
    inStock: true,
    featured: true,
  },
  {
    id: 'comp-intel-xeon-gold',
    name: 'Intel Xeon Gold 6248R Server Processor',
    brand: 'Intel',
    category: 'Components & Spare Parts',
    subCategory: 'CPUs / Processors',
    formFactor: 'FCLGA3647 Socket',
    processor: '24 Cores / 48 Threads, 3.00 GHz Base (4.00 GHz Turbo)',
    memory: '6-Channel DDR4-2933 MHz Support',
    storage: '35.75MB Cache, 205W TDP',
    description: 'OEM enterprise server CPU upgrade delivering high clock speeds and reliability for virtualization clusters.',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80',
    condition: 'New',
    inStock: true,
    featured: false,
  }
];

export const aboutUsItems = [
  {
    id: 'about-story',
    title: 'Our Story & Heritage',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    alt: 'Singapore enterprise IT team working on systems',
    description:
      'MSPB Technologies is a Singapore-based technology solutions company delivering IT hardware trading, data center and IT infrastructure services, IT asset disposition, and annual maintenance and technical support services.',
  },
  {
    id: 'about-reach',
    title: 'Regional & Global Footprint',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    alt: 'Global network connectivity',
    description:
      'We serve businesses across Singapore, Malaysia, India, Japan, Australia, New Zealand, Southeast Asia, and the wider APAC region, while also supporting international clients across Europe, North America, South America, and the Middle East.',
  },
  {
    id: 'about-promise',
    title: 'Lifecycle Reliability',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    alt: 'High security data center servers',
    description:
      'Our business combines global IT hardware sourcing capabilities with local technical expertise and regional field engineers, providing customers with an end-to-end reliable partner throughout the IT asset and infrastructure lifecycle.',
  },
];
