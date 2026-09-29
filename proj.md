OxyFlow Product Page

Context

The repository is empty (single init commit, no source files). We will scaffold a Next.js 15 + TypeScript + Tailwind CSS + shadcn/ui app and ship one polished product page as the homepage (/).

Product positioning (from your infographics): OxyFlow is a cloud-based hospital oxygen delivery monitoring system. It uses flow and humidity sensors (ESP32-based IoT device) to monitor oxygen delivery conditions, detect unintended flow or disconnections, and alert clinical staff via a web/mobile dashboard — replacing manual periodic checks and decentralized paper records.

Pricing: ₹2,500 per device (INR)

Download: Direct APK download (configurable URL in lib/constants.ts; README explains placing the file in public/).

Provided assets: Four images will be copied into public/images/:

oxyflow-logo.png — official OxyFlow logo (oxygen mask icon + wordmark); used in header, footer, hero, and as favicon

oxyflow-product.png — wall-mounted OxyFlow device in a hospital room; primary product hero image

oxyflow-overview.jpg — problem, challenges, MVP approach, and impact (4-quadrant)

oxyflow-architecture.jpg — hardware setup, data simulation/detection, and system data flow

The product image and infographics render via next/image with rounded corners and a soft shadow for a polished, clinical look.

Product story (page copy source)

The problem — how it works today

Oxygen is supplied from the hospital source to the patient

Healthcare staff manually set the required flow rate

The patient receives oxygen through a mask

Staff periodically check the patient and setup; usage is monitored through existing hospital processes

What makes it challenging

Healthcare staff must manually and periodically check the patient and oxygen setup

It is difficult to detect when oxygen is not reaching the patient (mask removed, tube disconnected)

Oxygen usage records are not centralized — usage data and abnormal events are not stored in a single digital record

OxyFlow MVP solution

Cloud-based software that monitors oxygen delivery conditions using flow and humidity data

Applies predefined decision rules to identify unintended oxygen flow

Provides alerts to clinical staff and hospital administration

Records events in the cloud and provides a digital dashboard with real-time status, alerts, usage info, and event history

MVP impact (benefits)

Real-time information — oxygen flow and mask condition for each patient on a dashboard

Staff alerts — immediate notification when oxygen flow is zero or mask is not used properly

Digital records — stores oxygen usage data and abnormal-flow events for better monitoring and decision support

System architecture (how it works technically)

flowchart LR
  Sensors["Flow and Humidity Sensors"] --> ESP32["ESP32 Controller"]
  ESP32 --> LocalOut["Local Output\nOLED + RGB LED"]
  ESP32 -->|"Wi-Fi MQTT/HTTP"| Cloud["Cloud Platform"]
  Cloud --> Dashboard["Web / Mobile Dashboard"]

ESP32 processing pipeline:

Read flow and humidity inputs

Filter and process data

Compare against predefined thresholds

Determine system status

Create timestamped events

Detection states (color-coded):

Status

Color

Condition

Normal

Green

Within threshold range

Alert

Yellow

Possible unintended flow (below limit)

Inactive

Red

No flow or abnormal condition

Dashboard capabilities: real-time flow (L/min) and humidity (%), status display, flow & humidity trend graphs, alerts/notifications, event logs, audit trails, historical reports.

Hardware (per device): Wall-mountable brushed-metal unit with integrated digital display (Flow, Humidity, Mode, Status), ON/OFF and MODE tactile buttons, green status LED, braided oxygen delivery hose, and hospital headwall mounting. Internally powered by ESP32 with flow/humidity sensors, Wi-Fi connectivity, and OLED-equivalent display panel.

MVP note (from architecture infographic): The current prototype uses simulated flow/humidity inputs (laptop → ESP32) to validate detection logic without physical sensors. The product page will present OxyFlow as a production-ready monitoring system (real flow + humidity sensing at the bedside) while the technical architecture and FAQ can mention that the platform was validated through a simulation-based MVP.

Site structure

flowchart TB
  subgraph page [Product Page Sections]
    Nav[StickyNav]
    Hero[Hero]
    Problem[ProblemToday]
    Challenges[Challenges]
    Solution[OxyFlowSolution]
    Features[FeaturesGrid]
    HowItWorks[SystemArchitecture]
    Benefits[MVPImpact]
    Hardware[HardwareComponents]
    Specs[TechnicalSpecs]
    Pricing[Pricing]
    Download[AppDownload]
    FAQ[FAQ]
    CTA[FinalCTA]
    Footer[Footer]
  end
  Nav --> Hero --> Problem --> Challenges --> Solution --> Features --> HowItWorks --> Benefits --> Hardware --> Specs --> Pricing --> Download --> FAQ --> CTA --> Footer

Section

Content

Sticky nav

oxyflow-logo.png (links to top), anchor links, "Download App" + "Request Quote" CTAs

Hero

Two-column layout: left — logo, headline ("Monitor Every Breath. Protect Every Patient."), subhead, CTAs; right — **oxyflow-product.png** as the hero product shot with subtle shadow/rounded frame

Problem today

4-step visual: oxygen source → staff sets flow → patient receives O2 → periodic manual checks

Challenges

3 pain-point cards: manual observation, hard to detect interruptions, decentralized records

OxyFlow solution

3 pillars: cloud monitoring, automated rules & alerts, digital dashboard; optional full-width infographic image

Features

6 cards: real-time monitoring, flow & humidity trends, smart alerts, event logs & audit trails, historical reports, Manual/Auto modes

How it works

End-to-end data flow diagram (sensors → ESP32 → cloud → dashboard); detection logic with Normal/Alert/Inactive states; optional system architecture infographic image

Benefits (MVP impact)

3 cards: real-time patient info, immediate staff alerts, centralized digital records

Hardware

Product image (smaller, inset) + device components grid: digital display, ON/OFF & MODE buttons, status LED, braided hose, wall-mount kit, Wi-Fi module — with brief descriptions

Technical specs

Table: connectivity (Wi-Fi MQTT/HTTP), display, status indicators, modes, power, alert latency

Pricing

₹2,500 per device — product thumbnail (oxyflow-product.png), includes wall-mount unit, cloud dashboard access, mobile app; contact for volume pricing

App download

"Download OxyFlow App (APK)" button, Android requirements, install steps

FAQ

Installation, hospital compatibility, alert configuration, data privacy, support, warranty

Final CTA

"Ready to modernize oxygen monitoring?" + download + contact

Footer

Logo (smaller), nav links, support email placeholder, copyright

Tech setup

Scaffold with create-next-app (App Router, TypeScript, Tailwind, ESLint) into a temp dir, move to repo root.

Add shadcn/ui — Button, Card, Badge, Accordion (FAQ), Separator.

Fonts — Geist via next/font for a clean medical/enterprise look.

Brand colors (from logo) — Tailwind/CSS variables derived from the OxyFlow logo:

Navy #1A365D — headings, "Oxy" text, primary dark surfaces

Teal #00A3AD — links, accents, gradient midpoint

Green #48BB78 — success/normal states, gradient end

Gradient CTA — from-teal to-green on primary buttons (Download, Request Quote)

Section tints from infographics retained: blue (problem), red (challenges), green (solution), yellow (alert/impact)

Favicon — app/icon.png generated from logo icon crop, or oxyflow-logo.png referenced in metadata

Dev server on port 43123.

README — project overview, run instructions, APK setup, image asset locations.

Key files to create

File

Role

[app/layout.tsx](app/layout.tsx)

Root layout, SEO metadata

[app/page.tsx](app/page.tsx)

Composes all sections

[app/globals.css](app/globals.css)

Tailwind + theme variables

[lib/constants.ts](lib/constants.ts)

All copy, pricing, APK URL, detection states, features

[components/layout/site-header.tsx](components/layout/site-header.tsx)

Sticky nav with logo image

[components/layout/site-footer.tsx](components/layout/site-footer.tsx)

Footer with logo

[components/ui/logo.tsx](components/ui/logo.tsx)

Reusable  — next/image wrapper, size prop (sm/md/lg)

[components/sections/hero.tsx](components/sections/hero.tsx)

Hero + CTAs + product image

[components/sections/problem.tsx](components/sections/problem.tsx)

"How it works today"

[components/sections/challenges.tsx](components/sections/challenges.tsx)

Pain points

[components/sections/solution.tsx](components/sections/solution.tsx)

MVP approach + infographic image

[components/sections/features.tsx](components/sections/features.tsx)

Feature grid

[components/sections/how-it-works.tsx](components/sections/how-it-works.tsx)

Data flow + detection logic

[components/sections/benefits.tsx](components/sections/benefits.tsx)

MVP impact cards

[components/sections/hardware.tsx](components/sections/hardware.tsx)

Device components

[components/sections/specs.tsx](components/sections/specs.tsx)

Specs table

[components/sections/pricing.tsx](components/sections/pricing.tsx)

₹2,500/device card

[components/sections/download.tsx](components/sections/download.tsx)

APK download block

[components/sections/faq.tsx](components/sections/faq.tsx)

Accordion FAQ

[components/sections/cta.tsx](components/sections/cta.tsx)

Final call-to-action

[public/images/oxyflow-logo.png](public/images/oxyflow-logo.png)

Official OxyFlow logo (from provided asset)

[public/images/oxyflow-product.png](public/images/oxyflow-product.png)

Wall-mounted device in hospital room (from provided asset)

[public/images/oxyflow-overview.jpg](public/images/oxyflow-overview.jpg)

Problem/solution infographic (from provided asset)

[public/images/oxyflow-architecture.jpg](public/images/oxyflow-architecture.jpg)

System architecture infographic (from provided asset)

[app/icon.png](app/icon.png)

Favicon derived from logo

Config pattern in [lib/constants.ts](lib/constants.ts):

export const PRODUCT = {
  name: "OxyFlow",
  tagline: "Monitor Every Breath. Protect Every Patient.",
  pricePerDevice: 2500,
  currency: "INR",
  apkDownloadUrl: "/oxyflow-app.apk",
  supportEmail: "[support@oxyflow.com](mailto:support@oxyflow.com)",
};

export const DETECTION_STATES = [
  { status: "Normal", color: "green", description: "Within threshold range" },
  { status: "Alert", color: "yellow", description: "Possible unintended flow" },
  { status: "Inactive", color: "red", description: "No flow or abnormal condition" },
];

Visual / UX details

Logo usage:

Header: full logo, ~140px wide, links to #top

Hero: larger logo (~200px) above tagline

Footer: smaller logo (~100px), slightly muted opacity

Favicon: icon portion of logo for browser tab

Brand motifs from logo: EKG pulse line as subtle section dividers; teal-to-green gradient on primary CTAs; navy headings with "Flow" accent in gradient text where appropriate

Icons: lucide-react in navy/teal — Wind, Droplets, Activity, Bell, Cloud, Monitor, Shield, ClipboardList

Product image (oxyflow-product.png):

Hero: large, right-column focal point (~50% width on desktop), rounded-xl + shadow-lg

Hardware section: medium inset image alongside component cards

Pricing card: small thumbnail above price

Alt text: "OxyFlow wall-mounted oxygen monitoring device in a hospital room"

Infographic images: Displayed responsively with next/image in Solution and How It Works sections

Status badges: Green/yellow/red pills matching detection states; display readings match product image — Flow 2.5 L/min, Humidity 45%, Mode Auto, Status Normal

Responsive: Single column mobile; 2–4 column grids on larger screens; logo scales down on mobile nav

SEO title: "OxyFlow | Hospital Oxygen Delivery Monitoring"

SEO description: Cloud-based oxygen flow and humidity monitoring with real-time alerts and digital records for healthcare facilities

OG image: oxyflow-product.png as default social share image (product in context); logo used for favicon only

APK download behavior

Button: "Download OxyFlow App (APK)" → href={PRODUCT.apkDownloadUrl} with download attribute

Subtext: Android 8.0+, install instructions (enable unknown sources)

README documents placing oxyflow-app.apk in public/ or setting an external CDN URL in constants

Out of scope

Auth, database, e-commerce checkout

Contact form backend (mailto: link for now)

iOS App Store

Multi-page site (about, blog)

Live dashboard demo (static mockup only)

Verification

npm run dev — page loads at [http://127.0.0.1:43123](http://127.0.0.1:43123)

All sections render with accurate OxyFlow copy from infographics

Logo displays in header, hero, footer, and favicon; product image displays in hero, hardware, and pricing; infographics display correctly

Pricing shows ₹2,500 per device

APK download button has correct href

Responsive at mobile and desktop widths

Commit and push to main