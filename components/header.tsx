"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, MapPin } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  // { name: "Track Shipment", href: "/track" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar - dark with contact info */}
      <div className="bg-neutral-900 text-white">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 text-xs sm:px-6 lg:px-8">
          <div className="hidden items-center gap-6 sm:flex">
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3" />
              <span>+254 736 758 613</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3" />
              <span>auraexpressafrica@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3" />
            <span>Mombasa, Kenya</span>
          </div>
        </div>
      </div>

      {/* Main nav - white background */}
      <div className="border-b border-border bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="AURA EXPRESS AFRICA LTD"
              width={140}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-black/70 hover:text-black"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button size="sm" asChild>
              <Link href="/quote">Request Quote</Link>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-black">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-white p-6">
              <div className="mb-6">
                <Image
                  src="/images/logo.png"
                  alt="AURA EXPRESS AFRICA LTD"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-medium transition-colors ${
                      pathname === item.href
                        ? "text-primary"
                        : "text-black hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-6 border-t border-border pt-6">
                  <Button className="w-full" asChild>
                    <Link href="/quote" onClick={() => setIsOpen(false)}>
                      Request Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
