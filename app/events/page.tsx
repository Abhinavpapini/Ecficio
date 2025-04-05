"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { Calendar, Clock, MapPin, Share2, Users } from "lucide-react";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "Startup Expo",
    date: "April 10 & 11, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "VJIM Canteen",
    description:
      "An exhibition where student entrepreneurs showcase their startups, prototypes, and innovative business ideas. It offers a platform for visibility, feedback, and potential collaboration with investors and industry leaders.",
    badge: "Flagship Event",
    image: "/placeholder.svg?height=200&width=400&text=Hackathon",
  },
  {
    id: 2,
    title: "Internship Drive",
    date: "April 10 & 11, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "VJIM",
    description:
      "An exclusive recruitment drive where startups and companies offer internships to talented students. A golden opportunity to gain industry exposure, enhance your resume, and kickstart your professional journey.",
    badge: "Featured",
    image: "/placeholder.svg?height=200&width=400&text=AI+Summit",
  },
  {
    id: 3,
    title: "Investor Pitch",
    date: "April 10, 2025",
    time: "1:30 PM - 5:00 PM",
    location: "VJIM Seminar Hall",
    description:
      "A formal pitching event where selected teams present their startups to a panel of investors, incubators, and mentors. Participants compete for funding, incubation support, and expert guidance.",
    badge: "Flagship Event",
    image: "/placeholder.svg?height=200&width=400&text=Cultural+Night",
  },
  {
    id: 4,
    title: "Fun & Domain-Based Activities",
    date: "April 10 & 11, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "VNR VJIET",
    description:
      "Engaging, interactive events that mix fun with learning — perfect for those who love quick thinking and creative problem-solving.",
    badge: "Access to All",
    image: "/placeholder.svg?height=200&width=400&text=Robotics",
  },
  {
    id: 5,
    title: "Standup Comedy",
    date: "April 11, 2025",
    time: "5:00 PM - 6:30 PM",
    location: "KS Auditorium",
    description:
      "A laughter-packed event featuring hilarious stand-up performances by Vivek Muralidharan. A perfect chance to unwind and enjoy some light-hearted fun.",
    badge: "Exclusive Event",
    image: "/placeholder.svg?height=200&width=400&text=Design+Thinking",
  },
  {
    id: 6,
    title: "Networking Lunch",
    date: "April 11, 2025",
    time: "12:30 PM - 1:30 PM",
    location: "VJIM",
    description:
      "A relaxed networking session over lunch with investors, students, alumni, faculty, and industry professionals. New connections, and potential mentorships await.",
    badge: "Featured",
    image: "/placeholder.svg?height=200&width=400&text=Startup+Pitch",
  },
  {
    id: 7,
    title: "Consulting Firms Panel",
    date: "April 11, 2025",
    time: "12:30 PM - 1:30 PM",
    location: "VJIM",
    description:
      "Join a panel with experts from top consulting firms, including MBB and the Big 4, as they share insights on consulting careers, interview tips, and growth strategies.",
    badge: "Cash Prizes",
    image: "/placeholder.svg?height=200&width=400&text=Startup+Pitch",
  },
];

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  badge: string;
  image: string;
}

function EventCard({ event }: { event: Event }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg border border-[#655b5e]/20 bg-[#030303] hover:bg-[#655b5e]/5 transition-all duration-300 flex flex-col justify-between"
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
          src={event.image}
          alt={event.title}
          width={400}
          height={200}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-[#f1e8eb] group-hover:text-[#d89b1d] transition-colors">
            {event.title}
          </h3>
          <span className="text-xs font-medium bg-[#d89b1d]/10 text-[#d89b1d] px-2 py-1 rounded-full">
            {event.badge}
          </span>
        </div>

        <div className="flex items-center text-[#655b5e] mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{event.date}</span>
        </div>

        <div className="flex items-center text-[#655b5e] mb-2">
          <Clock className="h-4 w-4 mr-2" />
          <span className="text-sm">{event.time}</span>
        </div>

        <div className="flex items-center text-[#655b5e] mb-4">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{event.location}</span>
        </div>

        <p className="text-[#f1e8eb]/80 mb-6 flex-grow">{event.description}</p>

        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
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
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              className="border-[#655b5e] text-[#655b5e] hover:text-[#f1e8eb] hover:border-[#f1e8eb] bg-transparent hover:bg-[#655b5e]/10"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function EventsPage() {
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
                  1000+ Attendees
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Event Categories */}
        <section className="pb-8 border-b border-[#655b5e]/20">
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
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
