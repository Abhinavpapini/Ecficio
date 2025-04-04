"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { ChevronLeft, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function MembersPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("core");

  const tabs = [
    { id: "core", name: "Core Team" },
    { id: "technical", name: "Technical Team" },
    { id: "marketing", name: "Marketing Team" },
    { id: "events", name: "Events Team" },
    { id: "design", name: "Design Team" },
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-[#f1e8eb]">
      <main>
        {/* Members Header */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-[#541a09]/20 to-[#030303]">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Our <span className="text-[#d89b1d]">Team</span>
              </h1>
              <p className="max-w-[700px] text-[#655b5e] md:text-lg">
                Meet the dedicated individuals who have worked tirelessly to
                make Ecficio 7.0<sup>H</sup> a reality.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Tabs */}
        <section className="py-8 border-b border-[#655b5e]/20">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant="outline"
                  className={
                    activeTab === tab.id
                      ? "border-[#d89b1d] text-[#d89b1d] bg-[#d89b1d]/10 hover:bg-[#d89b1d]/30 hover:text-[#d89b1d] hover:border-[#d89b1d] font-medium"
                      : "border-[#655b5e] text-[#655b5e] bg-transparent hover:bg-[#655b5e]/10 hover:border-[#d89b1d] hover:text-[#d89b1d]"
                  }
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.name}
                </Button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            {/* Core Team */}
            {activeTab === "core" && (
              <div className="space-y-12">
                <motion.div
                  className="text-center mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-[#f1e8eb] mb-2">
                    Core Team
                  </h2>
                  <p className="text-[#655b5e] max-w-2xl mx-auto">
                    The leadership team responsible for the overall vision and
                    execution of Ecficio 7.0<sup>H</sup>.
                  </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {/* Festival Director */}
                  <motion.div
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-[#d89b1d] p-1">
                      <Image
                        src="/images/team/director.jpg"
                        alt="Festival Director"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#f1e8eb]">
                      Rahul Sharma
                    </h3>
                    <p className="text-[#d89b1d] font-medium mb-2">
                      Festival Director
                    </p>
                    <p className="text-[#655b5e] text-sm max-w-xs">
                      Overseeing all festival operations and strategic
                      direction.
                    </p>
                  </motion.div>

                  {/* Executive Producer */}
                  <motion.div
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-[#d89b1d] p-1">
                      <Image
                        src="/images/team/producer.jpg"
                        alt="Executive Producer"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#f1e8eb]">
                      Priya Patel
                    </h3>
                    <p className="text-[#d89b1d] font-medium mb-2">
                      Executive Producer
                    </p>
                    <p className="text-[#655b5e] text-sm max-w-xs">
                      Managing production aspects and coordination between
                      teams.
                    </p>
                  </motion.div>

                  {/* Creative Head */}
                  <motion.div
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-[#d89b1d] p-1">
                      <Image
                        src="/images/team/creative.jpg"
                        alt="Creative Head"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#f1e8eb]">
                      Arjun Kapoor
                    </h3>
                    <p className="text-[#d89b1d] font-medium mb-2">
                      Creative Head
                    </p>
                    <p className="text-[#655b5e] text-sm max-w-xs">
                      Leading the creative vision and artistic direction.
                    </p>
                  </motion.div>

                  {/* Logistics Head */}
                  <motion.div
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-[#d89b1d] p-1">
                      <Image
                        src="/images/team/logistics.jpg"
                        alt="Logistics Head"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#f1e8eb]">
                      Ananya Singh
                    </h3>
                    <p className="text-[#d89b1d] font-medium mb-2">
                      Logistics Head
                    </p>
                    <p className="text-[#655b5e] text-sm max-w-xs">
                      Managing operational details and venue coordination.
                    </p>
                  </motion.div>
                </div>
              </div>
            )}

            {/* Technical Team */}
            {activeTab === "technical" && (
              <div className="space-y-12">
                <motion.div
                  className="text-center mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-[#f1e8eb] mb-2">
                    Technical Team
                  </h2>
                  <p className="text-[#655b5e] max-w-2xl mx-auto">
                    The wizards behind our digital presence and technical
                    infrastructure.
                  </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {/* Technical Director */}
                  <motion.div
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-[#d89b1d] p-1">
                      <Image
                        src="/images/team/tech-director.jpg"
                        alt="Technical Director"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#f1e8eb]">
                      Aditya Kumar
                    </h3>
                    <p className="text-[#d89b1d] font-medium mb-2">
                      Technical Director
                    </p>
                    <p className="text-[#655b5e] text-sm max-w-xs">
                      Overseeing all technical systems and digital
                      infrastructure.
                    </p>
                  </motion.div>

                  {/* Web Developer */}
                  <motion.div
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-[#d89b1d] p-1">
                      <Image
                        src="/images/team/web-dev.jpg"
                        alt="Web Developer"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#f1e8eb]">
                      Nisha Mehta
                    </h3>
                    <p className="text-[#d89b1d] font-medium mb-2">
                      Lead Developer
                    </p>
                    <p className="text-[#655b5e] text-sm max-w-xs">
                      Building and maintaining the festival website and
                      applications.
                    </p>
                  </motion.div>

                  {/* Audio Engineer */}
                  <motion.div
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-[#d89b1d] p-1">
                      <Image
                        src="/images/team/audio.jpg"
                        alt="Audio Engineer"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#f1e8eb]">
                      Vikram Roy
                    </h3>
                    <p className="text-[#d89b1d] font-medium mb-2">
                      Audio Engineer
                    </p>
                    <p className="text-[#655b5e] text-sm max-w-xs">
                      Managing sound systems and audio production for all
                      events.
                    </p>
                  </motion.div>

                  {/* Lighting Specialist */}
                  <motion.div
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-[#d89b1d] p-1">
                      <Image
                        src="/images/team/lighting.jpg"
                        alt="Lighting Specialist"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#f1e8eb]">
                      Karan Malhotra
                    </h3>
                    <p className="text-[#d89b1d] font-medium mb-2">
                      Lighting Specialist
                    </p>
                    <p className="text-[#655b5e] text-sm max-w-xs">
                      Creating immersive lighting experiences for all festival
                      venues.
                    </p>
                  </motion.div>
                </div>
              </div>
            )}

            {/* Marketing Team */}
            {activeTab === "marketing" && (
              <div className="space-y-12">
                <motion.div
                  className="text-center mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-[#f1e8eb] mb-2">
                    Marketing Team
                  </h2>
                  <p className="text-[#655b5e] max-w-2xl mx-auto">
                    The creative minds behind our brand presence and promotional
                    activities.
                  </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {/* Marketing Head */}
                  <motion.div
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-[#d89b1d] p-1">
                      <Image
                        src="/images/team/marketing-head.jpg"
                        alt="Marketing Head"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#f1e8eb]">
                      Riya Desai
                    </h3>
                    <p className="text-[#d89b1d] font-medium mb-2">
                      Marketing Head
                    </p>
                    <p className="text-[#655b5e] text-sm max-w-xs">
                      Leading all marketing and promotional strategies.
                    </p>
                  </motion.div>

                  {/* Social Media Manager */}
                  <motion.div
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-[#d89b1d] p-1">
                      <Image
                        src="/images/team/social-media.jpg"
                        alt="Social Media Manager"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#f1e8eb]">
                      Tanvi Gupta
                    </h3>
                    <p className="text-[#d89b1d] font-medium mb-2">
                      Social Media Manager
                    </p>
                    <p className="text-[#655b5e] text-sm max-w-xs">
                      Managing our online presence across all social platforms.
                    </p>
                  </motion.div>

                  {/* Content Creator */}
                  <motion.div
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-[#d89b1d] p-1">
                      <Image
                        src="/images/team/content.jpg"
                        alt="Content Creator"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#f1e8eb]">
                      Dev Khanna
                    </h3>
                    <p className="text-[#d89b1d] font-medium mb-2">
                      Content Creator
                    </p>
                    <p className="text-[#655b5e] text-sm max-w-xs">
                      Developing engaging content for our digital platforms.
                    </p>
                  </motion.div>

                  {/* PR Specialist */}
                  <motion.div
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-[#d89b1d] p-1">
                      <Image
                        src="/images/team/pr.jpg"
                        alt="PR Specialist"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#f1e8eb]">
                      Maya Joshi
                    </h3>
                    <p className="text-[#d89b1d] font-medium mb-2">
                      PR Specialist
                    </p>
                    <p className="text-[#655b5e] text-sm max-w-xs">
                      Managing press relations and external communications.
                    </p>
                  </motion.div>
                </div>
              </div>
            )}

            {/* Events Team */}
            {activeTab === "events" && (
              <div className="space-y-12">
                <motion.div
                  className="text-center mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-[#f1e8eb] mb-2">
                    Events Team
                  </h2>
                  <p className="text-[#655b5e] max-w-2xl mx-auto">
                    The team responsible for planning and executing our diverse
                    range of events.
                  </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {/* Events Coordinator */}
                  <motion.div
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-[#d89b1d] p-1">
                      <Image
                        src="/images/team/events-coord.jpg"
                        alt="Events Coordinator"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#f1e8eb]">
                      Suresh Varma
                    </h3>
                    <p className="text-[#d89b1d] font-medium mb-2">
                      Events Coordinator
                    </p>
                    <p className="text-[#655b5e] text-sm max-w-xs">
                      Overseeing the planning and execution of all events.
                    </p>
                  </motion.div>

                  {/* Workshops Lead */}
                  <motion.div
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-[#d89b1d] p-1">
                      <Image
                        src="/images/team/workshops.jpg"
                        alt="Workshops Lead"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#f1e8eb]">
                      Anjali Reddy
                    </h3>
                    <p className="text-[#d89b1d] font-medium mb-2">
                      Workshops Lead
                    </p>
                    <p className="text-[#655b5e] text-sm max-w-xs">
                      Coordinating all interactive workshops and learning
                      sessions.
                    </p>
                  </motion.div>

                  {/* Competitions Head */}
                  <motion.div
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-[#d89b1d] p-1">
                      <Image
                        src="/images/team/competitions.jpg"
                        alt="Competitions Head"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#f1e8eb]">
                      Raj Iyer
                    </h3>
                    <p className="text-[#d89b1d] font-medium mb-2">
                      Competitions Head
                    </p>
                    <p className="text-[#655b5e] text-sm max-w-xs">
                      Managing all competitive events and judging criteria.
                    </p>
                  </motion.div>

                  {/* Guest Relations */}
                  <motion.div
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-[#d89b1d] p-1">
                      <Image
                        src="/images/team/guest.jpg"
                        alt="Guest Relations"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#f1e8eb]">
                      Meera Agarwal
                    </h3>
                    <p className="text-[#d89b1d] font-medium mb-2">
                      Guest Relations
                    </p>
                    <p className="text-[#655b5e] text-sm max-w-xs">
                      Coordinating with speakers, performers and special guests.
                    </p>
                  </motion.div>
                </div>
              </div>
            )}

            {/* Design Team */}
            {activeTab === "design" && (
              <div className="space-y-12">
                <motion.div
                  className="text-center mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-[#f1e8eb] mb-2">
                    Design Team
                  </h2>
                  <p className="text-[#655b5e] max-w-2xl mx-auto">
                    The artistic visionaries bringing our festival's visual
                    identity to life.
                  </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {/* Design Lead */}
                  <motion.div
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-[#d89b1d] p-1">
                      <Image
                        src="/images/team/design-lead.jpg"
                        alt="Design Lead"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#f1e8eb]">
                      Neha Reddy
                    </h3>
                    <p className="text-[#d89b1d] font-medium mb-2">
                      Design Lead
                    </p>
                    <p className="text-[#655b5e] text-sm max-w-xs">
                      Managing the overall visual identity and design strategy.
                    </p>
                  </motion.div>

                  {/* Graphic Designer */}
                  <motion.div
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-[#d89b1d] p-1">
                      <Image
                        src="/images/team/graphic-designer.jpg"
                        alt="Graphic Designer"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#f1e8eb]">
                      Rohan Mistry
                    </h3>
                    <p className="text-[#d89b1d] font-medium mb-2">
                      Graphic Designer
                    </p>
                    <p className="text-[#655b5e] text-sm max-w-xs">
                      Creating visual assets for digital and print media.
                    </p>
                  </motion.div>

                  {/* UI/UX Designer */}
                  <motion.div
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-[#d89b1d] p-1">
                      <Image
                        src="/images/team/ui-designer.jpg"
                        alt="UI/UX Designer"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#f1e8eb]">
                      Tara Singh
                    </h3>
                    <p className="text-[#d89b1d] font-medium mb-2">
                      UI/UX Designer
                    </p>
                    <p className="text-[#655b5e] text-sm max-w-xs">
                      Designing user interfaces for our digital platforms.
                    </p>
                  </motion.div>

                  {/* Motion Graphics Artist */}
                  <motion.div
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-[#d89b1d] p-1">
                      <Image
                        src="/images/team/motion-graphics.jpg"
                        alt="Motion Graphics Artist"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#f1e8eb]">
                      Varun Menon
                    </h3>
                    <p className="text-[#d89b1d] font-medium mb-2">
                      Motion Graphics Artist
                    </p>
                    <p className="text-[#655b5e] text-sm max-w-xs">
                      Creating animated content and visual effects for
                      promotions.
                    </p>
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
