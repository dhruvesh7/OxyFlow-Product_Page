import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PRODUCT, IMAGES } from "@/lib/constants";
import { SplashScreen } from "@/components/splash-screen";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingWidget } from "@/components/ui/floating-widget";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OxyFlow | Hospital Oxygen Delivery Monitoring",
  description: PRODUCT.description,
  openGraph: {
    title: "OxyFlow | Hospital Oxygen Delivery Monitoring",
    description: PRODUCT.description,
    images: [{ url: IMAGES.product, width: 800, height: 600, alt: "OxyFlow device" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OxyFlow | Hospital Oxygen Delivery Monitoring",
    description: PRODUCT.description,
    images: [IMAGES.product],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-slate-950 text-[var(--oxy-navy)] dark:text-white transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SplashScreen />
          {children}
          <FloatingWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
