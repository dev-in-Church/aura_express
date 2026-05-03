import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  services: [
    { name: "Standard Freight", href: "/services" },
    { name: "Express Freight", href: "/services" },
    { name: "Cross-Border Freight", href: "/services" },
    { name: "Heavy Freight", href: "/services" },
    { name: "Warehousing", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/about" },
    { name: "News", href: "/about" },
    { name: "Partners", href: "/about" },
  ],
  support: [
    { name: "Track Shipment", href: "/track" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/contact" },
    { name: "Documentation", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/images/logo.png"
                alt="AURA EXPRESS AFRICA LTD"
                width={100}
                height={100}
                className="h-30 w-30 object-contain bg-white rounded-full"
              />
            </Link>
            <p className="mt-4 text-sm text-neutral-400">
              Your trusted logistics partner for seamless road freight across
              East Africa.
            </p>
            <p className="mt-2 text-sm text-neutral-400">Mombasa, Kenya</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-8 sm:flex-row">
          <p className="text-xs text-neutral-400">
            2026 AURA EXPRESS AFRICA LTD. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-neutral-400 transition-colors hover:text-primary"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-xs text-neutral-400 transition-colors hover:text-primary"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
