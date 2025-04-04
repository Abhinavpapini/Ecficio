"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header({ scrollToSection }: { scrollToSection?: (ref: React.RefObject<HTMLElement>) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/members", label: "Members" },
    { href: "/events", label: "Events" },
  ]

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-[#655b5e]/20 backdrop-blur transition-all duration-300 ${
      scrolled ? "bg-[#030303]/95 supports-[backdrop-filter]:bg-[#030303]/60" : "bg-[#030303]/80"
    }`}>
      <div className="container mx-auto flex h-auto py-2 sm:h-20 items-center justify-between px-4 md:px-8">
        {/* Logo with improved sizing */}
        <Link href="/" className="flex items-center">
          <div className="relative h-16 sm:h-20 w-48 sm:w-64 md:w-80 lg:w-96 transition-all duration-300">
            <Image 
              src="/images/ecficio-logo.png" 
              alt="Ecficio 7.0H Logo" 
              fill 
              className="object-contain" 
              priority 
              sizes="(max-width: 640px) 12rem, (max-width: 768px) 16rem, (max-width: 1024px) 20rem, 24rem"
            />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-sm lg:text-base font-medium text-[#f1e8eb] hover:text-[#d89b1d] transition-colors"
            >
              <span className="px-3 py-2 lg:px-4 lg:py-2 bg-[#655b5e]/20 rounded-full hover:bg-[#655b5e]/30 transition-colors">
                {link.label}
              </span>
            </Link>
          ))}
          {scrollToSection && (
            <>
              <button 
                onClick={() => scrollToSection({ current: document.getElementById("about") })} 
                className="text-sm lg:text-base font-medium text-[#f1e8eb] hover:text-[#d89b1d] transition-colors"
              >
                <span className="px-3 py-2 lg:px-4 lg:py-2 bg-[#655b5e]/20 rounded-full hover:bg-[#655b5e]/30 transition-colors">
                  About
                </span>
              </button>
              <button 
                onClick={() => scrollToSection({ current: document.getElementById("highlights") })} 
                className="text-sm lg:text-base font-medium text-[#f1e8eb] hover:text-[#d89b1d] transition-colors"
              >
                <span className="px-3 py-2 lg:px-4 lg:py-2 bg-[#655b5e]/20 rounded-full hover:bg-[#655b5e]/30 transition-colors">
                  Highlights
                </span>
              </button>
            </>
          )}
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-[#f1e8eb] hover:bg-[#655b5e]/20" 
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#030303] md:hidden flex flex-col">
          {/* Mobile Menu Header */}
          <div className="flex h-20 items-center justify-between px-4 border-b border-[#655b5e]/20">
            <Link href="/" className="flex items-center">
              <div className="relative h-16 w-48">
                <Image 
                  src="/images/ecficio-logo.png" 
                  alt="Ecficio 7.0H Logo" 
                  fill 
                  className="object-contain" 
                  priority 
                  sizes="12rem"
                />
              </div>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-[#f1e8eb] hover:bg-[#655b5e]/20" 
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Mobile Menu Links */}
          <nav className="flex flex-col items-center gap-6 py-8 px-4 flex-grow">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-full max-w-xs text-center text-lg font-medium text-[#f1e8eb] hover:text-[#d89b1d] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="block px-5 py-4 bg-[#655b5e]/20 rounded-full hover:bg-[#655b5e]/30 transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
            
            {scrollToSection && (
              <>
                <button 
                  onClick={() => {
                    scrollToSection({ current: document.getElementById("about") });
                    setIsMenuOpen(false);
                  }} 
                  className="w-full max-w-xs text-center text-lg font-medium text-[#f1e8eb] hover:text-[#d89b1d] transition-colors"
                >
                  <span className="block px-5 py-4 bg-[#655b5e]/20 rounded-full hover:bg-[#655b5e]/30 transition-colors">
                    About
                  </span>
                </button>
                <button 
                  onClick={() => {
                    scrollToSection({ current: document.getElementById("highlights") });
                    setIsMenuOpen(false);
                  }} 
                  className="w-full max-w-xs text-center text-lg font-medium text-[#f1e8eb] hover:text-[#d89b1d] transition-colors"
                >
                  <span className="block px-5 py-4 bg-[#655b5e]/20 rounded-full hover:bg-[#655b5e]/30 transition-colors">
                    Highlights
                  </span>
                </button>
              </>
            )}
          </nav>
          
          {/* Mobile Menu Footer */}
          <div className="py-4 text-center text-[#f1e8eb]/60 text-sm border-t border-[#655b5e]/20">
            <p>Ecficio 7.0H © {new Date().getFullYear()}</p>
          </div>
        </div>
      )}
    </header>
  )
}