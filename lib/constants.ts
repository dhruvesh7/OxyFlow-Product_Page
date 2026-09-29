export const PRODUCT = {
  name: "OxyFlow",
  tagline: "Monitor Every Breath. Protect Every Patient.",
  description:
    "Smart hospital oxygen monitoring — device + desktop app with real-time alerts and digital records.",
  pricePerDevice: 2500,
  monthlyCharge: 199,
  monthlyChargeNote:
    "AWS cloud hosting and monthly device maintenance check",
  replacementWarrantyMonths: 3,
  serviceWarrantyYears: 1,
  currency: "INR",
  desktopDownloadUrl: "/OxyFlow-Setup.exe",
  supportEmail: "support@oxyflow.com",
};

export const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Why OxyFlow", href: "#why" },
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const WHY_POINTS = [
  {
    title: "Stop Manual Rounds",
    description:
      "Replace periodic bedside checks with always-on monitoring from your desktop dashboard.",
    icon: "Eye",
  },
  {
    title: "Catch Problems Early",
    description:
      "Get instant alerts when oxygen flow drops, the mask is off, or a tube disconnects.",
    icon: "Bell",
  },
  {
    title: "One Place for Everything",
    description:
      "Usage data, alerts, and patient status — all in a single digital record.",
    icon: "Shield",
  },
];

export const PRODUCT_HIGHLIGHTS = [
  { label: "Flow", value: "2.5 L/min", status: "normal" },
  { label: "Humidity", value: "45%", status: "normal" },
  { label: "Mode", value: "Auto", status: "neutral" },
  { label: "Status", value: "Normal", status: "normal" },
];

export const FEATURES = [
  {
    id: "monitoring",
    title: "Live Dashboard",
    description:
      "See oxygen flow and humidity for every patient in real time — right from your desktop.",
    icon: "Activity",
    highlight: "Real-time readings on your PC",
    image: "/images/features/monitoring.png",
  },
  {
    id: "alerts",
    title: "Smart Alerts",
    description:
      "Desktop notifications the moment something goes wrong — zero flow, mask off, or abnormal readings.",
    icon: "Bell",
    highlight: "Instant desktop notifications",
    image: "/images/features/alerts.png",
  },
  {
    id: "trends",
    title: "Trend Graphs",
    description:
      "Track flow and humidity patterns over time with clear, interactive charts.",
    icon: "TrendingUp",
    highlight: "Visual trend analysis",
    image: "/images/features/trends.png",
  },
  {
    id: "records",
    title: "Digital Records",
    description:
      "Every event logged automatically — no more paper trails or scattered notes.",
    icon: "ClipboardList",
    highlight: "Automated event logging",
    image: "/images/features/records.png",
  },
  {
    id: "reports",
    title: "Reports",
    description:
      "Generate usage and incident reports for your team in seconds.",
    icon: "BarChart3",
    highlight: "One-click reporting",
    image: "/images/features/reports.png",
  },
  {
    id: "auth",
    title: "Authentication",
    description:
      "Secure AWS Cognito login with strict role-based access for your entire clinical team.",
    icon: "ShieldCheck",
    highlight: "Secure AWS authentication",
    image: "/images/features/auth.png",
  },
];

export const SIMPLE_STEPS = [
  {
    step: 1,
    title: "Mount the Device",
    description: "Wall-mount OxyFlow at the bedside — connects to your oxygen line.",
    icon: "Anchor",
  },
  {
    step: 2,
    title: "Install Desktop App",
    description: "Download and run OxyFlow on your hospital PC or nursing station.",
    icon: "Monitor",
  },
  {
    step: 3,
    title: "Monitor & Act",
    description: "Watch live readings, get alerts, and keep digital records — all from one screen.",
    icon: "Activity",
  },
];

export const PRICING_INCLUDES = [
  "Wall-mount monitoring device",
  "OxyFlow desktop application",
  "Cloud dashboard access",
  "Installation support",
  "Alerts & event logging",
  "3-month replacement warranty",
  "1-year service warranty",
];

export const INSTALL_STEPS = [
  "Click Download below to get OxyFlow-Setup.exe.",
  "Run the installer on your Windows PC (Windows 10 or later).",
  "Follow the setup wizard — takes less than 2 minutes.",
  "Launch OxyFlow and connect to your hospital devices.",
];

export const FAQ_ITEMS = [
  {
    question: "What do I get when I purchase OxyFlow?",
    answer:
      "Each unit includes the wall-mount monitoring device, the OxyFlow desktop application, cloud dashboard access, installation support, a 3-month replacement warranty, and a 1-year service warranty.",
  },
  {
    question: "What does the ₹199/month charge cover?",
    answer:
      "₹199 per month covers AWS cloud hosting and a monthly maintenance check of your OxyFlow device to keep monitoring reliable.",
  },
  {
    question: "What warranty is included?",
    answer:
      "Every device includes a 3-month replacement warranty and a 1-year service warranty for repairs and support.",
  },
  {
    question: "Which operating system does the desktop app support?",
    answer:
      "OxyFlow runs on Windows 10 and later. Download the .exe installer directly from this page.",
  },
  {
    question: "How is the device installed?",
    answer:
      "The unit mounts on the hospital headwall near the patient. It connects to the oxygen line and syncs with the desktop app over your hospital network.",
  },
  {
    question: "How do alerts work?",
    answer:
      "When flow or humidity goes outside safe thresholds, OxyFlow sends instant notifications on your desktop app so staff can respond immediately.",
  },
  {
    question: "Is patient data secure?",
    answer:
      "All data is encrypted in transit and stored with access controls. Event logs include full audit trails for compliance.",
  },
  {
    question: "What support is available?",
    answer:
      "Email us at support@oxyflow.com for installation help, training, and ongoing support.",
  },
];

export const IMAGES = {
  logo: "/images/oxyflow-logo.png",
  product: "/images/oxyflow-product.png",
  overview: "/images/oxyflow-overview.svg",
};
