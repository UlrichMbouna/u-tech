"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/#propos" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "https://wa.me/message/HSGYTYPVLT6EP1", external: true },
];

const WHATSAPP_URL = "https://wa.me/message/HSGYTYPVLT6EP1";

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function navLinkClass(isActive: boolean) {
  return isActive
    ? "text-secondary font-bold border-b-2 border-secondary pb-1"
    : "text-on-surface-variant hover:text-primary transition-colors";
}

function mobileNavLinkClass(isActive: boolean) {
  return isActive
    ? "bg-secondary/10 text-secondary border border-secondary/30"
    : "text-on-surface-variant border border-white/5 hover:border-primary/30 hover:text-primary";
}

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-white/10 shadow-md">
      <div className="max-w-container-max mx-auto px-4 sm:px-gutter">
        <div className="flex justify-between items-center py-3 md:py-4">
          <Link
            aria-label="Ulrich-TECH Accueil"
            className="flex items-center gap-2 shrink-0"
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              alt="Ulrich-TECH Logo"
              className="h-9 md:h-10 w-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu0uAWlZIq5rZy0RTQmU7SbYMwyvjEN94T1-VKddNK0gyCPO63q4Fnkwzg4QwKEVWTzZJqkmHDipJoq56jfrJwzk41T6CWXW2-zkZRWWuOrqTLZzOE_KplyljTKvuXulyaGII2L3XvhxjS3xjToAaqHcHLdVRTaKAqqcGcpFjmRS9QqPFBojtwYVKv1qpGWuMtchU9BYLw2RyvqUlEgKJwJ3XI5YnVFmRk_mSMopKw9mXe5cAIxbpGTEBOSd2k8Gp0LuCAo_Xo9uM"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8 font-body-md text-body-md">
            {navItems.map((item) => {
              const isActive = !item.external && isActiveRoute(pathname, item.href);

              return item.external ? (
                <a
                  className={navLinkClass(isActive)}
                  href={item.href}
                  key={item.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  className={navLinkClass(isActive)}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              className="hidden sm:inline-flex bg-secondary text-white font-bold px-4 lg:px-6 py-2 rounded-lg hover:brightness-110 hover:shadow-[0_0_20px_rgba(255,98,0,0.4)] transition-all active:scale-95 whitespace-nowrap"
              href={WHATSAPP_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Demander un devis
            </a>
            <button
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
              className="lg:hidden w-11 h-11 rounded-lg border border-white/10 text-on-surface flex items-center justify-center hover:bg-white/5 transition-colors"
              onClick={() => setIsMenuOpen((current) => !current)}
              type="button"
            >
              <span className="material-symbols-outlined">
                {isMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="lg:hidden pb-4">
            <div className="glass-card rounded-xl p-3 flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive =
                  !item.external && isActiveRoute(pathname, item.href);

                return item.external ? (
                  <a
                    className={`rounded-lg px-4 py-3 font-bold transition-colors ${mobileNavLinkClass(isActive)}`}
                    href={item.href}
                    key={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    className={`rounded-lg px-4 py-3 font-bold transition-colors ${mobileNavLinkClass(isActive)}`}
                    href={item.href}
                    key={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                className="sm:hidden mt-2 bg-secondary text-white font-bold px-4 py-3 rounded-lg text-center"
                href={WHATSAPP_URL}
                onClick={() => setIsMenuOpen(false)}
                rel="noopener noreferrer"
                target="_blank"
              >
                Demander un devis
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
