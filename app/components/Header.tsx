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

  // Track active section for highlighting in menu - but only on homepage
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
      checkActiveSection(); // Initial check
      return () => window.removeEventListener("scroll", checkActiveSection);
    } else {
      // Reset active section when not on homepage
      setActiveSection("");
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

  // Function to determine if a link is active
  const isLinkActive = (link: { href: string; label: string }) => {
    // For home page
    if (link.href === "/" && pathname === "/") {
      return !activeSection; // Home is active only when no section is active
    }
    
    // For sections on home page
    if (link.href.startsWith("/#") && pathname === "/") {
      const section = link.href.split("#")[1];
      return section === activeSection;
    }
    
    // For other pages
    if (!link.href.includes("#")) {
      return pathname === link.href;
    }
    
    return false;
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
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs lg:text-sm xl:text-base font-medium ${
                    active ? "text-[#d89b1d]" : "text-white hover:text-[#d89b1d]"
                  } transition-colors`}
                  onClick={(e) => handleNavClick(link.href, e)}
                >
                  <span className={`px-3 py-2 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5 ${
                    active ? "bg-[#d89b1d]/30" : "bg-[#655b5e]/30 hover:bg-[#655b5e]/40"
                  } rounded-full transition-colors`}>
                    {link.label}
                  </span>
                </Link>
              );
            })}
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
            <Button
              variant="ghost"
              size="sm"
              className="relative text-white hover:bg-[#655b5e]/30 p-1.5 overflow-hidden rounded-full"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Improved version */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden" onClick={() => setIsMenuOpen(false)}>
          <div 
            className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-gradient-to-b from-[#030303] to-[#1a1618] shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="sticky top-0 flex h-16 sm:h-18 items-center justify-between px-4 sm:px-6 border-b border-[#655b5e]/40 bg-[#030303]/95 backdrop-blur">
              <Link href="/" className="flex items-center group" onClick={() => setIsMenuOpen(false)}>
                <div className="relative h-10 w-32 sm:h-12 sm:w-40 transition-all duration-300">
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
                className="text-white hover:bg-[#655b5e]/30 p-2 rounded-full"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Mobile Menu Links */}
            <nav className="flex flex-col px-4 sm:px-6 py-6 space-y-3">
              {navLinks.map((link, index) => {
                const active = isLinkActive(link);
                
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      active 
                        ? "bg-[#d89b1d]/20 text-[#d89b1d] border-l-4 border-[#d89b1d]" 
                        : "bg-[#655b5e]/20 text-white hover:bg-[#655b5e]/30 hover:text-[#d89b1d]"
                    }`}
                    onClick={(e) => handleNavClick(link.href, e)}
                    style={{
                      animationDelay: `${index * 0.05}s`,
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              
              {/* Register button in mobile menu */}
              <div className="pt-4">
                <Link
                  href="https://www.mihvnrvjiet.org/event-details-registration/ecficio-7-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center font-bold text-[#030303] bg-[#d89b1d] px-4 py-3.5 rounded-lg hover:bg-[#e6a935] transition-all shadow-md hover:shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register Now
                </Link>
              </div>
            </nav>

            {/* Social Media Links or Additional Info */}
            <div className="mt-auto px-6 py-8 border-t border-[#655b5e]/30">
              <p className="text-sm text-gray-400 text-center">
                Ecficio 7.0H - The Human Side of Technology
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}