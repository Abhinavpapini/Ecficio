"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-[#655b5e]/20 py-10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-8 w-32">
                <Image
                  src="/images/ecficio-logo.png"
                  alt="Ecficio 7.0H Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-[#655b5e] mb-4 max-w-xs">
              The ultimate tech and cultural festival bringing innovation,
              creativity, and entrepreneurship together.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#655b5e] hover:text-[#d89b1d] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#655b5e] hover:text-[#d89b1d] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#f1e8eb] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#655b5e] hover:text-[#d89b1d]">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-[#655b5e] hover:text-[#d89b1d]"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsors"
                  className="text-[#655b5e] hover:text-[#d89b1d]"
                >
                  Sponsors
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="text-[#655b5e] hover:text-[#d89b1d]"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#f1e8eb] mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="text-[#655b5e]">+91 9030751024</li>
              <li className="text-[#655b5e]">kiran_c@vnrvjiet.in</li>
              <li className="text-[#655b5e]">Hyderabad, India</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#655b5e]/20 text-center">
          <p className="text-[#655b5e]">
            © {new Date().getFullYear()} Ecficio 7.0 ᴴ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
