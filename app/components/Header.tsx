"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header({
  scrollToSection,
}: {
  scrollToSection?: (ref: React.RefObject<HTMLElement>) => void;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section for highlighting in menu
  useEffect(() => {
    const checkActiveSection = () => {
      const sections = ["about", "highlights"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      setActiveSection(currentSection || "");
    };

    if (pathname === "/") {
      window.addEventListener("scroll", checkActiveSection);
      return () => window.removeEventListener("scroll", checkActiveSection);
    }
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#highlights", label: "Highlights" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/members", label: "Members" },
    { href: "/events", label: "Events" },
  ];

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    if (href.startsWith("/#")) {
      e?.preventDefault();
      window.location.href = href; // Use window.location for hash-based navigation
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Header with increased contrast and better visibility */}
      <header
        className={`fixed top-0 z-50 w-full border-b border-[#655b5e]/40 backdrop-blur transition-all duration-300 ${
          scrolled
            ? "bg-[#030303]/95 supports-[backdrop-filter]:bg-[#030303]/90"
            : "bg-[#030303]/90"
        }`}
      >
        <div className="container mx-auto flex h-16 sm:h-18 md:h-20 items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Logo with improved visibility */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-32 xs:h-12 xs:w-40 sm:h-14 sm:w-44 md:h-16 md:w-52 lg:w-64 transition-all duration-300">
              <Image
                src="/images/ecficio-logo.png"
                alt="Ecficio 7.0H Logo"
                fill
                className="object-contain brightness-110 contrast-110"
                priority
                sizes="(max-width: 480px) 8rem, (max-width: 640px) 10rem, (max-width: 768px) 12rem, (max-width: 1024px) 15rem, 16rem"
              />
            </div>
          </Link>

          {/* Desktop Navigation with improved contrast */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-4 xl:gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs lg:text-sm xl:text-base font-medium text-white hover:text-[#d89b1d] transition-colors"
                onClick={(e) => handleNavClick(link.href, e)}
              >
                <span className="px-3 py-2 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5 bg-[#655b5e]/30 rounded-full hover:bg-[#655b5e]/40 transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
            <Link
              href="https://www.mihvnrvjiet.org/event-details-registration/ecficio-7-0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs lg:text-sm xl:text-base font-bold text-[#030303] bg-[#d89b1d] px-4 py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 rounded-full hover:bg-[#e6a935] transition-all shadow-lg shadow-[#d89b1d]/50"
            >
              Register
            </Link>
          </nav>

          {/* Mobile Controls: Register Button and Menu Button with better visibility */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="https://www.mihvnrvjiet.org/event-details-registration/ecficio-7-0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-bold text-[#030303] bg-[#d89b1d] px-3 py-1.5 rounded-full hover:bg-[#e6a935] transition-all shadow-md shadow-[#d89b1d]/40"
            >
              Register
            </Link>
            {/*
            <Button
              variant="ghost"
              size="sm"
              className="relative text-white hover:bg-[#655b5e]/30 p-1.5 overflow-hidden rounded-full"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
            */}
          </div>
        </div>

        {/* Mobile Menu Overlay with improved contrast */}
        <div
          className={`fixed inset-0 z-50 bg-gradient-to-b from-[#030303] to-[#1a1618] md:hidden flex flex-col transform transition-all duration-400 ease-in-out ${
            isMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          } overflow-y-auto`}
        >
          {/* Mobile Menu Header */}
          <div className="flex h-16 sm:h-18 items-center justify-between px-4 sm:px-6 border-b border-[#655b5e]/40 bg-[#030303]">
            <Link href="/" className="flex items-center group">
              <div className="relative h-10 w-32 xs:h-12 xs:w-40 sm:h-14 sm:w-48 transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/images/ecficio-logo.png"
                  alt="Ecficio 7.0H Logo"
                  fill
                  className="object-contain brightness-110 contrast-110"
                  priority
                  sizes="(max-width: 480px) 8rem, (max-width: 640px) 10rem, 12rem"
                />
              </div>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-[#655b5e]/30 p-2 rounded-full transition-transform hover:rotate-90 duration-300"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Mobile Menu Links with improved contrast */}
          <nav className="flex flex-col items-center justify-start gap-4 sm:gap-5 py-6 px-5 flex-grow overflow-y-auto">
            {/* {navLinks.map((link, index) => {
              const isActive =
                link.href === pathname ||
                (link.href.includes("#") && link.href.includes(activeSection));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`w-full max-w-xs text-center text-base sm:text-lg font-medium transition-all duration-300 ${
                    isActive ? "text-[#d89b1d]" : "text-white"
                  } hover:text-[#d89b1d] transform hover:translate-y-[-2px]`}
                  onClick={(e) => handleNavClick(link.href, e)}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <span
                    className={`block px-4 py-3 sm:px-5 sm:py-4 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-[#d89b1d]/30 border-l-4 border-[#d89b1d]"
                        : "bg-[#655b5e]/30 hover:bg-[#655b5e]/40"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })} */}

            {/* Register button in mobile menu with enhanced visibility */}
            <Link
              href="https://www.mihvnrvjiet.org/event-details-registration/ecficio-7-0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs text-center text-base sm:text-lg font-bold text-[#030303] bg-gradient-to-r from-[#d89b1d] to-[#e6a935] px-4 py-3 sm:px-5 sm:py-4 rounded-xl hover:bg-[#e6a935] transition-all shadow-lg hover:shadow-xl shadow-[#d89b1d]/40 hover:shadow-[#d89b1d]/60 mt-4 transform hover:translate-y-[-2px]"
              style={{ animationDelay: `${navLinks.length * 0.1}s` }}
              onClick={() => setIsMenuOpen(false)}
            >
              Register Now
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
