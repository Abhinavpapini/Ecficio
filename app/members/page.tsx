"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function MembersPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("core")
  
  const tabs = [
    { id: "core", name: "Core Team" },
    { id: "technical", name: "Technical Team" },
    { id: "marketing", name: "Marketing Team" },
    { id: "events", name: "Events Team" },
    { id: "design", name: "Design Team" }
  ]
  
  return (
    <div className="min-h-screen bg-[#030303] text-[#f1e8eb]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-[#655b5e]/20 bg-[#030303]/95 backdrop-blur supports-[backdrop-filter]:bg-[#030303]/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-32 md:w-40">
              <Image 
                src="/images/ecficio-logo.png" 
                alt="Ecficio 7.0H Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/" 
              className="text-sm font-medium text-[#f1e8eb] hover:text-[#d89b1d] transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/#about" 
              className="text-sm font-medium text-[#f1e8eb] hover:text-[#d89b1d] transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/#highlights" 
              className="text-sm font-medium text-[#f1e8eb] hover:text-[#d89b1d] transition-colors duration-200"
            >
              Highlights
            </Link>
            <Link 
              href="/sponsors" 
              className="text-sm font-medium text-[#f1e8eb] hover:text-[#d89b1d] transition-colors duration-200"
            >
              Sponsors
            </Link>
            <Link 
              href="/members" 
              className="text-sm font-medium text-[#d89b1d] transition-colors duration-200"
            >
              Members
            </Link>
            <Link 
              href="/events" 
              className="text-sm font-medium text-[#f1e8eb] hover:text-[#d89b1d] transition-colors duration-200"
            >
              Events
            </Link>
          </nav>
          <div className="flex md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-[#f1e8eb]"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

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
              className="text-xl font-medium text-[#f1e8eb] hover:text-[#d89b1d]"
              onClick={() => setIsMenuOpen(false)}
            >
              Sponsors
            </Link>
            <Link 
              href="/members" 
              className="text-xl font-medium text-[#d89b1d]"
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
        {/* Members Header */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-[#541a09]/20 to-[#030303]">
          <div className="container px-4 md:px-6">
            <motion.div 
              className="flex flex-col items-center text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Link href="/" className="flex items-center text-[#d89b1d] mb-4 hover:underline">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Home
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Our <span className="text-[#d89b1d]">Team</span>
              </h1>
              <p className="max-w-[700px] text-[#655b5e] md:text-lg">
                Meet the dedicated individuals who have worked tirelessly to make Ecficio 7.0<sup>H</sup> a reality.
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
                      ? "border-[#d89b1d] text-[#d89b1d] bg-[#d89b1d]/10 hover:bg-[#d89b1d]/20"
                      : "border-[#655b5e] text-[#f1e8eb] hover:bg-[#655b5e]/10 hover:border-[#d89b1d] hover:text-[#d89b1d]"
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
                  <h2 className="text-2xl md:text-3xl font-bold text-[#f1e8eb] mb-2">Core Team</h2>
                  <p className="text-[#655b5e] max-w-2xl mx-auto">
                    The leadership team responsible for the overall vision and execution of Ecficio 7.0<sup>H</sup>.
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
                    <h3 className="text-xl font-bold text-[#f1e8eb]">Rahul Sharma</h3>
                    <p className="text-[#d89b1d] font-medium mb-2">Festival Director</p>
                    <p className="text-[#655b5e] text-sm max-w-xs">Overseeing all festival operations and strategic direction.</p>
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
                    <h3 className="text-xl font-bold text-[#f1e8eb]">Priya Patel</h3>
                    <p className="text-[#d89b1d] font-medium mb-2">Executive Producer</p>
                    <p className="text-[#655b5e] text-sm max-w-xs">Managing production aspects and coordination between teams.</p>
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
                    <h3 className="text-xl font-bold text-[#f1e8eb]">Arjun Kapoor</h3>
                    <p className="text-[#d89b1d] font-medium mb-2">Creative Head</p>
                    <p className="text-[#655b5e] text-sm max-w-xs">Leading the creative vision and artistic direction.</p>
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
                    <h3 className="text-xl font-bold text-[#f1e8eb]">Ananya Singh</h3>
                    <p className="text-[#d89b1d] font-medium mb-2">Logistics Head</p>
                    <p className="text-[#655b5e] text-sm max-w-xs">Managing operational details and venue coordination.</p>
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
                  <h2 className="text-2xl md:text-3xl font-bold text-[#f1e8eb] mb-2">Technical Team</h2>
                  <p className="text-[#655b5e] max-w-2xl mx-auto">
                    The wizards behind our digital presence and technical infrastructure.
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
                    <h3 className="text-xl font-bold text-[#f1e8eb]">Aditya Kumar</h3>
                    <p className="text-[#d89b1d] font-medium mb-2">Technical Director</p>
                    <p className="text-[#655b5e] text-sm max-w-xs">Overseeing all technical systems and digital infrastructure.</p>
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
                    <h3 className="text-xl font-bold text-[#f1e8eb]">Nisha Mehta</h3>
                    <p className="text-[#d89b1d] font-medium mb-2">Lead Developer</p>
                    <p className="text-[#655b5e] text-sm max-w-xs">Building and maintaining the festival website and applications.</p>
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
                    <h3 className="text-xl font-bold text-[#f1e8eb]">Vikram Roy</h3>
                    <p className="text-[#d89b1d] font-medium mb-2">Audio Engineer</p>
                    <p className="text-[#655b5e] text-sm max-w-xs">Managing sound systems and audio production for all events.</p>
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
                    <h3 className="text-xl font-bold text-[#f1e8eb]">Karan Malhotra</h3>
                    <p className="text-[#d89b1d] font-medium mb-2">Lighting Specialist</p>
                    <p className="text-[#655b5e] text-sm max-w-xs">Creating immersive lighting experiences for all festival venues.</p>
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
                  <h2 className="text-2xl md:text-3xl font-bold text-[#f1e8eb] mb-2">Marketing Team</h2>
                  <p className="text-[#655b5e] max-w-2xl mx-auto">
                    The creative minds behind our brand presence and promotional activities.
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
                    <h3 className="text-xl font-bold text-[#f1e8eb]">Riya Desai</h3>
                    <p className="text-[#d89b1d] font-medium mb-2">Marketing Head</p>
                    <p className="text-[#655b5e] text-sm max-w-xs">Leading all marketing and promotional strategies.</p>
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
                    <h3 className="text-xl font-bold text-[#f1e8eb]">Tanvi Gupta</h3>
                    <p className="text-[#d89b1d] font-medium mb-2">Social Media Manager</p>
                    <p className="text-[#655b5e] text-sm max-w-xs">Managing our online presence across all social platforms.</p>
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
                    <h3 className="text-xl font-bold text-[#f1e8eb]">Dev Khanna</h3>
                    <p className="text-[#d89b1d] font-medium mb-2">Content Creator</p>
                    <p className="text-[#655b5e] text-sm max-w-xs">Developing engaging content for our digital platforms.</p>
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
                    <h3 className="text-xl font-bold text-[#f1e8eb]">Maya Joshi</h3>
                    <p className="text-[#d89b1d] font-medium mb-2">PR Specialist</p>
                    <p className="text-[#655b5e] text-sm max-w-xs">Managing press relations and external communications.</p>
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
                  <h2 className="text-2xl md:text-3xl font-bold text-[#f1e8eb] mb-2">Events Team</h2>
                  <p className="text-[#655b5e] max-w-2xl mx-auto">
                    The team responsible for planning and executing our diverse range of events.
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
                    <h3 className="text-xl font-bold text-[#f1e8eb]">Suresh Varma</h3>
                    <p className="text-[#d89b1d] font-medium mb-2">Events Coordinator</p>
                    <p className="text-[#655b5e] text-sm max-w-xs">Overseeing the planning and execution of all events.</p>
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
                    <h3 className="text-xl font-bold text-[#f1e8eb]">Anjali Reddy</h3>
                    <p className="text-[#d89b1d] font-medium mb-2">Workshops Lead</p>
                    <p className="text-[#655b5e] text-sm max-w-xs">Coordinating all interactive workshops and learning sessions.</p>
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
                    <h3 className="text-xl font-bold text-[#f1e8eb]">Raj Iyer</h3>
                    <p className="text-[#d89b1d] font-medium mb-2">Competitions Head</p>
                    <p className="text-[#655b5e] text-sm max-w-xs">Managing all competitive events and judging criteria.</p>
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
                    </div><h3 className="text-xl font-bold text-[#f1e8eb]">Meera Agarwal</h3>
                    <p className="text-[#d89b1d] font-medium mb-2">Guest Relations</p>
                    <p className="text-[#655b5e] text-sm max-w-xs">Coordinating with speakers, performers and special guests.</p>
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
                  <h2 className="text-2xl md:text-3xl font-bold text-[#f1e8eb] mb-2">Design Team</h2>
                  <p className="text-[#655b5e] max-w-2xl mx-auto">
                    The artistic visionaries bringing our festival's visual identity to life.
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
                    <h3 className="text-xl font-bold text-[#f1e8eb]">Neha Reddy</h3>
                    <p className="text-[#d89b1d] font-medium mb-2">Design Lead</p>
                    <p className="text-[#655b5e] text-sm max-w-xs">Managing the overall visual identity and design strategy.</p>
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
                    <h3 className="text-xl font-bold text-[#f1e8eb]">Rohan Mistry</h3>
                    <p className="text-[#d89b1d] font-medium mb-2">Graphic Designer</p>
                    <p className="text-[#655b5e] text-sm max-w-xs">Creating visual assets for digital and print media.</p>
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
                    <h3 className="text-xl font-bold text-[#f1e8eb]">Tara Singh</h3>
                    <p className="text-[#d89b1d] font-medium mb-2">UI/UX Designer</p>
                    <p className="text-[#655b5e] text-sm max-w-xs">Designing user interfaces for our digital platforms.</p>
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
                    <h3 className="text-xl font-bold text-[#f1e8eb]">Varun Menon</h3>
                    <p className="text-[#d89b1d] font-medium mb-2">Motion Graphics Artist</p>
                    <p className="text-[#655b5e] text-sm max-w-xs">Creating animated content and visual effects for promotions.</p>
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-t from-[#541a09]/20 to-[#030303]">
          <div className="container px-4 md:px-6">
            <motion.div 
              className="flex flex-col items-center text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl md:text-4xl font-bold text-[#f1e8eb]">
                Want to <span className="text-[#d89b1d]">Join Our Team?</span>
              </h2>
              <p className="max-w-[700px] text-[#655b5e] md:text-lg">
                We're always looking for passionate volunteers to help make Ecficio even better next year.
              </p>
              <Button 
                className="bg-[#d89b1d] text-[#030303] hover:bg-[#d89b1d]/80"
              >
                Apply to Volunteer
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#655b5e]/20 bg-[#030303]">
        <div className="container px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="relative h-10 w-40">
                <Image 
                  src="/images/ecficio-logo.png" 
                  alt="Ecficio 7.0H Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-sm text-[#655b5e]">
                Ecficio 7.0<sup>ᴴ</sup> - India's premier cultural and technical festival.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#f1e8eb] mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-[#655b5e] hover:text-[#d89b1d]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-sm text-[#655b5e] hover:text-[#d89b1d]">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/sponsors" className="text-sm text-[#655b5e] hover:text-[#d89b1d]">
                    Sponsors
                  </Link>
                </li>
                <li>
                  <Link href="/members" className="text-sm text-[#655b5e] hover:text-[#d89b1d]">
                    Team
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#f1e8eb] mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-[#655b5e] hover:text-[#d89b1d]">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-[#655b5e] hover:text-[#d89b1d]">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-[#655b5e] hover:text-[#d89b1d]">
                  <span className="sr-only">YouTube</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <p className="mt-4 text-sm text-[#655b5e]">
                Contact us: info@ecficio.org
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-[#655b5e]/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-[#655b5e]">
              © 2025 Ecficio 7.0<sup>H</sup>. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-xs text-[#655b5e] hover:text-[#d89b1d]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-[#655b5e] hover:text-[#d89b1d]">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}