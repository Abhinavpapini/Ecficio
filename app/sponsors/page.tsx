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

        {/* Sponsorship Tiers Table */}
        <section className="py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex flex-col items-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#d89b1d] mb-4">
                  Sponsorship Tiers
                </h2>
                <div className="w-20 h-1 bg-[#d89b1d]"></div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-center border-b border-[#655b5e]/20">
                      <th className="p-4">Benefit</th>
                      <th className="p-4">
                        <div className="flex flex-col items-center">
                          <div className="bg-[#a36734] rounded-full p-2 mb-2">
                            <Image
                              src="/placeholder.svg?height=40&width=40&text=B"
                              alt="Bronze"
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                          </div>
                          <span className="font-bold">Bronze</span>
                          <span className="text-[#d89b1d] text-sm">₹40,000</span>
                        </div>
                      </th>
                      <th className="p-4">
                        <div className="flex flex-col items-center">
                          <div className="bg-[#7d8396] rounded-full p-2 mb-2">
                            <Image
                              src="/placeholder.svg?height=40&width=40&text=S"
                              alt="Silver"
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                          </div>
                          <span className="font-bold">Silver</span>
                          <span className="text-[#d89b1d] text-sm">₹75,000</span>
                        </div>
                      </th>
                      <th className="p-4">
                        <div className="flex flex-col items-center">
                          <div className="bg-[#d8b400] rounded-full p-2 mb-2">
                            <Image
                              src="/placeholder.svg?height=40&width=40&text=G"
                              alt="Gold"
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                          </div>
                          <span className="font-bold">Gold</span>
                          <span className="text-[#d89b1d] text-sm">₹1,50,000</span>
                        </div>
                      </th>
                      <th className="p-4">
                        <div className="flex flex-col items-center">
                          <div className="bg-[#8c8c8c] rounded-full p-2 mb-2">
                            <Image
                              src="/placeholder.svg?height=40&width=40&text=P"
                              alt="Platinum"
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                          </div>
                          <span className="font-bold">Platinum</span>
                          <span className="text-[#d89b1d] text-sm">₹3,00,000</span>
                        </div>
                      </th>
                      <th className="p-4">
                        <div className="flex flex-col items-center">
                          <div className="bg-[#b22222] rounded-full p-2 mb-2">
                            <Image
                              src="/placeholder.svg?height=40&width=40&text=T"
                              alt="Title"
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                          </div>
                          <span className="font-bold">Title</span>
                          <span className="text-[#d89b1d] text-sm">₹6,00,000</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#655b5e]/20">
                      <td className="p-4">Title Sponsor Rights<br />(Event presented as "Powered by [Your Brand]")</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">
                        <svg className="inline-block h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </td>
                    </tr>
                    <tr className="border-b border-[#655b5e]/20">
                      <td className="p-4">On-Stage Speaking Opportunity<br />during inauguration/closing ceremony</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">2 min</td>
                      <td className="p-4 text-center">5 min</td>
                      <td className="p-4 text-center">7 min</td>
                    </tr>
                    <tr className="border-b border-[#655b5e]/20">
                      <td className="p-4">Panelist Discussion Opportunity</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">
                        <svg className="inline-block h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg className="inline-block h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg className="inline-block h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </td>
                    </tr>
                    <tr className="border-b border-[#655b5e]/20">
                      <td className="p-4">Booth Space at the venue for brand promotions</td>
                      <td className="p-4 text-center">
                        <div className="text-xs text-center">
                          On-campus Data Collection<br />Not Permitted
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <svg className="inline-block h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg className="inline-block h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg className="inline-block h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <div className="text-xs text-center">
                          Prime<br />Placement
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-[#655b5e]/20">
                      <td className="p-4">Brand Banners/Standees at Venue</td>
                      <td className="p-4 text-center">1</td>
                      <td className="p-4 text-center">1</td>
                      <td className="p-4 text-center">2</td>
                      <td className="p-4 text-center">3</td>
                      <td className="p-4 text-center">4</td>
                    </tr>
                    <tr className="border-b border-[#655b5e]/20">
                      <td className="p-4">Logo Placement<br />
                        <span className="text-xs flex flex-col space-y-1 mt-1">
                          <span><span className="inline-block h-3 w-3 rounded-full bg-orange-500 mr-1"></span> Banners</span>
                          <span><span className="inline-block h-3 w-3 rounded-full bg-green-500 mr-1"></span> Certificates</span>
                          <span><span className="inline-block h-3 w-3 rounded-full bg-blue-500 mr-1"></span> Social Media</span>
                          <span><span className="inline-block h-3 w-3 rounded-full bg-red-500 mr-1"></span> T-shirts (optional)</span>
                          <span><span className="inline-block h-3 w-3 rounded-full bg-yellow-500 mr-1"></span> Event App</span>
                          <span><span className="inline-block h-3 w-3 rounded-full bg-purple-500 mr-1"></span> Website</span>
                          <span><span className="inline-block h-3 w-3 rounded-full bg-pink-500 mr-1"></span> Stage Backdrop</span>
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center space-x-1">
                          <div className="h-3 w-3 rounded-full bg-orange-500" title="Banners"></div>
                          <div className="h-3 w-3 rounded-full bg-blue-500" title="Social Media"></div>
                          <div className="h-3 w-3 rounded-full bg-purple-500" title="Website"></div>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center space-x-1">
                          <div className="h-3 w-3 rounded-full bg-orange-500" title="Banners"></div>
                          <div className="h-3 w-3 rounded-full bg-blue-500" title="Social Media"></div>
                          <div className="h-3 w-3 rounded-full bg-purple-500" title="Website"></div>
                          <div className="h-3 w-3 rounded-full bg-red-500" title="T-shirts"></div>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center space-x-1">
                          <div className="h-3 w-3 rounded-full bg-orange-500" title="Banners"></div>
                          <div className="h-3 w-3 rounded-full bg-green-500" title="Certificates"></div>
                          <div className="h-3 w-3 rounded-full bg-blue-500" title="Social Media"></div>
                          <div className="h-3 w-3 rounded-full bg-red-500" title="T-shirts"></div>
                          <div className="h-3 w-3 rounded-full bg-purple-500" title="Website"></div>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center space-x-1">
                          <div className="h-3 w-3 rounded-full bg-orange-500" title="Banners"></div>
                          <div className="h-3 w-3 rounded-full bg-green-500" title="Certificates"></div>
                          <div className="h-3 w-3 rounded-full bg-blue-500" title="Social Media"></div>
                          <div className="h-3 w-3 rounded-full bg-red-500" title="T-shirts"></div>
                          <div className="h-3 w-3 rounded-full bg-yellow-500" title="Event App"></div>
                          <div className="h-3 w-3 rounded-full bg-purple-500" title="Website"></div>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center space-x-1">
                          <div className="h-3 w-3 rounded-full bg-orange-500" title="Banners"></div>
                          <div className="h-3 w-3 rounded-full bg-green-500" title="Certificates"></div>
                          <div className="h-3 w-3 rounded-full bg-blue-500" title="Social Media"></div>
                          <div className="h-3 w-3 rounded-full bg-red-500" title="T-shirts"></div>
                          <div className="h-3 w-3 rounded-full bg-yellow-500" title="Event App"></div>
                          <div className="h-3 w-3 rounded-full bg-purple-500" title="Website"></div>
                          <div className="h-3 w-3 rounded-full bg-pink-500" title="Stage Backdrop"></div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-[#655b5e]/20">
                      <td className="p-4">Acknowledgement in Opening & Closing Speeches</td>
                      <td className="p-4 text-center">
                        <svg className="inline-block h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg className="inline-block h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg className="inline-block h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg className="inline-block h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg className="inline-block h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </td>
                    </tr>
                    <tr className="border-b border-[#655b5e]/20">
                      <td className="p-4">Digital Advertisement</td>
                      <td className="p-4 text-center">Poster</td>
                      <td className="p-4 text-center">30 sec</td>
                      <td className="p-4 text-center">1 min</td>
                      <td className="p-4 text-center">3 min</td>
                      <td className="p-4 text-center">∞</td>
                    </tr>
                    <tr className="border-b border-[#655b5e]/20">
                      <td className="p-4">Social Media Shout-Out & Thank-You Post</td>
                      <td className="p-4 text-center text-xs">Along with all<br />other sponsors</td>
                      <td className="p-4 text-center text-xs">Along with all<br />other sponsors</td>
                      <td className="p-4 text-center text-xs">Along with<br />other Gold<br />sponsors</td>
                      <td className="p-4 text-center text-xs">Exclusive<br />Post</td>
                      <td className="p-4 text-center text-xs">Exclusive<br />Post</td>
                    </tr>
                    <tr className="border-b border-[#655b5e]/20">
                      <td className="p-4">Pamphlet Distribution</td>
                      <td className="p-4 text-center">
                        <svg className="inline-block h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg className="inline-block h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg className="inline-block h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg className="inline-block h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </td>
                      <td className="p-4 text-center">
                        <svg className="inline-block h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

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
            </motion.div>
          </div>
        </section>

        {/* Become a Sponsor - Moved to the end */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
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
                <Link href="/sponsorship.pdf" target="_blank">
                  <Button className="bg-[#d89b1d] hover:bg-[#d89b1d]/90 text-[#030303]">
                    Contact for Sponsorship
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}