"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { ChevronLeft, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function SponsorsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030303] text-[#f1e8eb]">
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#030303] md:hidden">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-32">
                <Image
                  src="/images/ecficio-logo.png"
                  alt="Ecficio 7.0H Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#f1e8eb]"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="container flex flex-col items-center gap-8 py-12">
            <Link
              href="/"
              className="text-xl font-medium text-[#f1e8eb] hover:text-[#d89b1d]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-xl font-medium text-[#f1e8eb] hover:text-[#d89b1d]"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#highlights"
              className="text-xl font-medium text-[#f1e8eb] hover:text-[#d89b1d]"
              onClick={() => setIsMenuOpen(false)}
            >
              Highlights
            </Link>
            <Link
              href="/sponsors"
              className="text-xl font-medium text-[#d89b1d]"
              onClick={() => setIsMenuOpen(false)}
            >
              Sponsors
            </Link>
            <Link
              href="/members"
              className="text-xl font-medium text-[#f1e8eb] hover:text-[#d89b1d]"
              onClick={() => setIsMenuOpen(false)}
            >
              Members
            </Link>
            <Link
              href="/events"
              className="text-xl font-medium text-[#f1e8eb] hover:text-[#d89b1d]"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
          </nav>
        </div>
      )}

      <main>
        {/* Sponsors Header */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-[#541a09]/20 to-[#030303]">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Link
                href="/"
                className="flex items-center text-[#d89b1d] mb-4 hover:underline"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Home
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Our <span className="text-[#d89b1d]">Sponsors</span>
              </h1>
              <p className="max-w-[700px] text-[#655b5e] md:text-lg">
                We&apos;re proud to partner with these amazing organizations to
                bring you Ecficio 7.0<sup>H</sup>.
              </p>
            </motion.div>
          </div>
        </section>
        {/* Become a Sponsor */}
        <motion.div
          className="bg-gradient-to-r from-[#030303] via-[#541a09]/20 to-[#030303] rounded-lg p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#f1e8eb] mb-4">
            Become a Sponsor
          </h2>
          <p className="text-[#655b5e] max-w-2xl mx-auto mb-6">
            Interested in sponsoring Ecficio 7.0<sup>H</sup>? Join our growing
            list of partners and gain exposure to thousands of tech enthusiasts,
            industry professionals, and creative minds.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-[#d89b1d] hover:bg-[#d89b1d]/90 text-[#030303]">
              Contact for Sponsorship
            </Button>
          </motion.div>
        </motion.div>
        {/* Sponsors Tiers */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            {/* Gold Sponsors */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex flex-col items-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#d89b1d] mb-4">
                  Gold Sponsors
                </h2>
                <div className="w-20 h-1 bg-[#d89b1d]"></div>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <motion.div
                    key={`gold-${item}`}
                    className="bg-[#030303] border border-[#655b5e]/20 rounded-lg p-8 flex flex-col items-center hover:border-[#d89b1d]/50 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: item * 0.1 }}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 10px 30px -15px rgba(216, 155, 29, 0.3)",
                    }}
                  >
                    <div className="h-24 flex items-center justify-center mb-6">
                      <Image
                        src={`/placeholder.svg?height=80&width=200&text=Gold+Sponsor+${item}`}
                        alt={`Gold Sponsor ${item}`}
                        width={200}
                        height={80}
                        className="max-h-24 w-auto"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#f1e8eb] mb-2 text-center">
                      Company Name {item}
                    </h3>
                    <p className="text-[#655b5e] text-center mb-4">
                      Leading provider of innovative solutions in technology and
                      business.
                    </p>
                    <Link
                      href="#"
                      className="text-[#d89b1d] hover:underline text-sm"
                    >
                      Visit Website →
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 bg-[#030303] border border-[#655b5e]/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#d89b1d] mb-4">
                  Gold Sponsor Benefits
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-2 text-[#d89b1d] mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-[#f1e8eb]">
                      Premium logo placement on all event materials and website
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-2 text-[#d89b1d] mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-[#f1e8eb]">
                      Dedicated booth space at the event venue
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-2 text-[#d89b1d] mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-[#f1e8eb]">
                      Speaking opportunity during the opening ceremony
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-2 text-[#d89b1d] mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-[#f1e8eb]">
                      Access to exclusive networking events with industry
                      leaders
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-2 text-[#d89b1d] mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-[#f1e8eb]">
                      10 complimentary VIP passes to all events
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Silver Sponsors */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex flex-col items-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#f1e8eb] mb-4">
                  Silver Sponsors
                </h2>
                <div className="w-20 h-1 bg-[#655b5e]"></div>
              </div>

              <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <motion.div
                    key={`silver-${item}`}
                    className="bg-[#030303] border border-[#655b5e]/20 rounded-lg p-6 flex flex-col items-center hover:border-[#d89b1d]/50 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: item * 0.05 }}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 10px 30px -15px rgba(216, 155, 29, 0.2)",
                    }}
                  >
                    <div className="h-16 flex items-center justify-center mb-4">
                      <Image
                        src={`/placeholder.svg?height=60&width=150&text=Silver+${item}`}
                        alt={`Silver Sponsor ${item}`}
                        width={150}
                        height={60}
                        className="max-h-16 w-auto"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-[#f1e8eb] mb-1 text-center">
                      Partner {item}
                    </h3>
                    <Link
                      href="#"
                      className="text-[#d89b1d] hover:underline text-sm"
                    >
                      Visit →
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 bg-[#030303] border border-[#655b5e]/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#f1e8eb] mb-4">
                  Silver Sponsor Benefits
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-2 text-[#d89b1d] mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-[#f1e8eb]">
                      Prominent logo placement on event materials and website
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-2 text-[#d89b1d] mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-[#f1e8eb]">
                      Booth space at the event venue
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-2 text-[#d89b1d] mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-[#f1e8eb]">
                      5 complimentary passes to all events
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Bronze Sponsors */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex flex-col items-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#f1e8eb] mb-4">
                  Bronze Sponsors
                </h2>
                <div className="w-20 h-1 bg-[#655b5e]"></div>
              </div>

              <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                  <motion.div
                    key={`bronze-${item}`}
                    className="bg-[#030303] border border-[#655b5e]/20 rounded-lg p-4 flex flex-col items-center hover:border-[#d89b1d]/50 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: item * 0.03 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="h-12 flex items-center justify-center mb-2">
                      <Image
                        src={`/placeholder.svg?height=50&width=100&text=Bronze+${item}`}
                        alt={`Bronze Sponsor ${item}`}
                        width={100}
                        height={50}
                        className="max-h-12 w-auto"
                      />
                    </div>
                    <h3 className="text-sm font-bold text-[#f1e8eb] text-center">
                      Supporter {item}
                    </h3>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 bg-[#030303] border border-[#655b5e]/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#f1e8eb] mb-4">
                  Bronze Sponsor Benefits
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-2 text-[#d89b1d] mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-[#f1e8eb]">
                      Logo placement on event website and select materials
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-2 text-[#d89b1d] mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-[#f1e8eb]">
                      2 complimentary passes to all events
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
