import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { NAV_LINKS, PRODUCT } from "@/lib/constants";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border bg-[var(--oxy-navy)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo size="sm" muted />
            <p className="mt-4 text-sm text-white/70">
              Smart oxygen monitoring for hospitals. Device + desktop app with
              real-time alerts and digital records.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-[var(--oxy-teal)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Contact
            </h3>
            <p className="text-sm text-white/70">
              Support:{" "}
              <a
                href={`mailto:${PRODUCT.supportEmail}`}
                className="text-[var(--oxy-teal)] hover:underline"
              >
                {PRODUCT.supportEmail}
              </a>
            </p>
            <p className="mt-2 text-sm text-white/70">
              <Link
                href={PRODUCT.desktopDownloadUrl}
                className="text-[var(--oxy-teal)] hover:underline"
              >
                Download Desktop App
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © {year} {PRODUCT.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
