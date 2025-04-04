"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import {
  Calendar,
  ChevronLeft,
  Clock,
  MapPin,
  Menu,
  Share2,
  Users,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

export default function EventsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Events" },
    { id: "technical", name: "Technical" },
    { id: "cultural", name: "Cultural" },
    { id: "workshops", name: "Workshops" },
    { id: "competitions", name: "Competitions" },
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-[#f1e8eb]">
      <main>
        {/* Events Header */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-[#541a09]/20 to-[#030303]">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Our <span className="text-[#d89b1d]">Events</span>
              </h1>
              <p className="max-w-[700px] text-[#655b5e] md:text-lg">
                Explore our exciting lineup of events and register to secure
                your spot.
              </p>
              <div className="flex items-center justify-center space-x-4 mt-4">
                <motion.div
                  className="flex items-center bg-[#d89b1d]/10 text-[#d89b1d] px-3 py-1 rounded-full text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  April 10-11, 2025
                </motion.div>
                <motion.div
                  className="flex items-center bg-[#d89b1d]/10 text-[#d89b1d] px-3 py-1 rounded-full text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <Users className="h-4 w-4 mr-2" />
                  5000+ Attendees
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Event Categories */}
        <section className="py-8 border-b border-[#655b5e]/20">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant="outline"
                  className={
                    activeCategory === category.id
                      ? "border-[#d89b1d] text-[#d89b1d] bg-[#d89b1d]/10 hover:bg-[#d89b1d]/30 hover:text-[#d89b1d] hover:border-[#d89b1d] font-medium"
                      : "border-[#655b5e] text-[#655b5e] bg-transparent hover:bg-[#655b5e]/10 hover:border-[#d89b1d] hover:text-[#d89b1d]"
                  }
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Event 1 */}
              <motion.div
                className="group relative overflow-hidden rounded-lg border border-[#655b5e]/20 bg-[#030303] hover:bg-[#655b5e]/5 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px -15px rgba(216, 155, 29, 0.2)",
                }}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Hackathon"
                    alt="48-Hour Hackathon"
                    width={400}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#f1e8eb] group-hover:text-[#d89b1d] transition-colors">
                      48-Hour Hackathon
                    </h3>
                    <span className="text-xs font-medium bg-[#d89b1d]/10 text-[#d89b1d] px-2 py-1 rounded-full">
                      Limited Seats
                    </span>
                  </div>

                  <div className="flex items-center text-[#655b5e] mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">April 10, 2025</span>
                  </div>

                  <div className="flex items-center text-[#655b5e] mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">
                      9:00 AM - 9:00 AM (Next Day)
                    </span>
                  </div>

                  <div className="flex items-center text-[#655b5e] mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">Main Convention Hall</span>
                  </div>

                  <p className="text-[#f1e8eb]/80 mb-6">
                    Put your coding skills to the test in this intense 48-hour
                    hackathon. Build innovative solutions to real-world problems
                    and compete for exciting prizes.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1 bg-[#d89b1d] hover:bg-[#d89b1d]/90 text-[#030303] group">
                      Register Now
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.span>
                    </Button>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-[#655b5e] text-[#655b5e] hover:text-[#f1e8eb] hover:border-[#f1e8eb]"
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Event 2 */}
              <motion.div
                className="group relative overflow-hidden rounded-lg border border-[#655b5e]/20 bg-[#030303] hover:bg-[#655b5e]/5 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px -15px rgba(216, 155, 29, 0.2)",
                }}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=AI+Summit"
                    alt="AI Summit"
                    width={400}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#f1e8eb] group-hover:text-[#d89b1d] transition-colors">
                      AI Summit
                    </h3>
                    <span className="text-xs font-medium bg-[#d89b1d]/10 text-[#d89b1d] px-2 py-1 rounded-full">
                      Featured
                    </span>
                  </div>

                  <div className="flex items-center text-[#655b5e] mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">April 11, 2025</span>
                  </div>

                  <div className="flex items-center text-[#655b5e] mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">10:00 AM - 4:00 PM</span>
                  </div>

                  <div className="flex items-center text-[#655b5e] mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">Auditorium B</span>
                  </div>

                  <p className="text-[#f1e8eb]/80 mb-6">
                    Join industry leaders for a day of talks and panels on the
                    latest advancements in artificial intelligence and machine
                    learning.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1 bg-[#d89b1d] hover:bg-[#d89b1d]/90 text-[#030303] group">
                      Register Now
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.span>
                    </Button>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-[#655b5e] text-[#655b5e] hover:text-[#f1e8eb] hover:border-[#f1e8eb]"
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Event 3 */}
              <motion.div
                className="group relative overflow-hidden rounded-lg border border-[#655b5e]/20 bg-[#030303] hover:bg-[#655b5e]/5 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px -15px rgba(216, 155, 29, 0.2)",
                }}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Cultural+Night"
                    alt="Cultural Night"
                    width={400}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#f1e8eb] group-hover:text-[#d89b1d] transition-colors">
                      Cultural Night
                    </h3>
                    <span className="text-xs font-medium bg-[#d89b1d]/10 text-[#d89b1d] px-2 py-1 rounded-full">
                      Open to All
                    </span>
                  </div>

                  <div className="flex items-center text-[#655b5e] mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">April 11, 2025</span>
                  </div>

                  <div className="flex items-center text-[#655b5e] mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">6:00 PM - 10:00 PM</span>
                  </div>

                  <div className="flex items-center text-[#655b5e] mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">Open Air Amphitheater</span>
                  </div>

                  <p className="text-[#f1e8eb]/80 mb-6">
                    End the festival with a bang! Enjoy performances by top
                    artists, dance groups, and musical ensembles.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1 bg-[#d89b1d] hover:bg-[#d89b1d]/90 text-[#030303] group">
                      Register Now
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.span>
                    </Button>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-[#655b5e] text-[#655b5e] hover:text-[#f1e8eb] hover:border-[#f1e8eb]"
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Event 4 */}
              <motion.div
                className="group relative overflow-hidden rounded-lg border border-[#655b5e]/20 bg-[#030303] hover:bg-[#655b5e]/5 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px -15px rgba(216, 155, 29, 0.2)",
                }}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Robotics"
                    alt="Robotics Workshop"
                    width={400}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#f1e8eb] group-hover:text-[#d89b1d] transition-colors">
                      Robotics Workshop
                    </h3>
                    <span className="text-xs font-medium bg-[#d89b1d]/10 text-[#d89b1d] px-2 py-1 rounded-full">
                      Beginner Friendly
                    </span>
                  </div>

                  <div className="flex items-center text-[#655b5e] mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">April 10, 2025</span>
                  </div>

                  <div className="flex items-center text-[#655b5e] mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">2:00 PM - 5:00 PM</span>
                  </div>

                  <div className="flex items-center text-[#655b5e] mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">Tech Lab 3</span>
                  </div>

                  <p className="text-[#f1e8eb]/80 mb-6">
                    Learn the basics of robotics and build your own simple robot
                    in this hands-on workshop. All materials provided.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1 bg-[#d89b1d] hover:bg-[#d89b1d]/90 text-[#030303] group">
                      Register Now
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.span>
                    </Button>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-[#655b5e] text-[#655b5e] hover:text-[#f1e8eb] hover:border-[#f1e8eb]"
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Event 5 */}
              <motion.div
                className="group relative overflow-hidden rounded-lg border border-[#655b5e]/20 bg-[#030303] hover:bg-[#655b5e]/5 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px -15px rgba(216, 155, 29, 0.2)",
                }}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Design+Thinking"
                    alt="Design Thinking Workshop"
                    width={400}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#f1e8eb] group-hover:text-[#d89b1d] transition-colors">
                      Design Thinking Workshop
                    </h3>
                    <span className="text-xs font-medium bg-[#d89b1d]/10 text-[#d89b1d] px-2 py-1 rounded-full">
                      Interactive
                    </span>
                  </div>

                  <div className="flex items-center text-[#655b5e] mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">April 10, 2025</span>
                  </div>

                  <div className="flex items-center text-[#655b5e] mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">11:00 AM - 1:00 PM</span>
                  </div>

                  <div className="flex items-center text-[#655b5e] mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">Design Studio</span>
                  </div>

                  <p className="text-[#f1e8eb]/80 mb-6">
                    Learn the principles of design thinking and how to apply
                    them to solve complex problems in this interactive workshop.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1 bg-[#d89b1d] hover:bg-[#d89b1d]/90 text-[#030303] group">
                      Register Now
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.span>
                    </Button>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-[#655b5e] text-[#655b5e] hover:text-[#f1e8eb] hover:border-[#f1e8eb]"
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Event 6 */}
              <motion.div
                className="group relative overflow-hidden rounded-lg border border-[#655b5e]/20 bg-[#030303] hover:bg-[#655b5e]/5 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px -15px rgba(216, 155, 29, 0.2)",
                }}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Startup+Pitch"
                    alt="Startup Pitch Competition"
                    width={400}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#f1e8eb] group-hover:text-[#d89b1d] transition-colors">
                      Startup Pitch Competition
                    </h3>
                    <span className="text-xs font-medium bg-[#d89b1d]/10 text-[#d89b1d] px-2 py-1 rounded-full">
                      Cash Prizes
                    </span>
                  </div>

                  <div className="flex items-center text-[#655b5e] mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">April 11, 2025</span>
                  </div>

                  <div className="flex items-center text-[#655b5e] mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">1:00 PM - 5:00 PM</span>
                  </div>

                  <div className="flex items-center text-[#655b5e] mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">Conference Hall A</span>
                  </div>

                  <p className="text-[#f1e8eb]/80 mb-6">
                    Pitch your startup idea to a panel of investors and industry
                    experts. Win funding and mentorship opportunities.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1 bg-[#d89b1d] hover:bg-[#d89b1d]/90 text-[#030303] group">
                      Register Now
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.span>
                    </Button>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-[#655b5e] text-[#655b5e] hover:text-[#f1e8eb] hover:border-[#f1e8eb]"
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>      
          </div>
        </section>
      </main>
    </div>
  );
}
