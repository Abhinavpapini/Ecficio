"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

const events = [
  // Flagship Events
  {
    id: 1,
    title: "Start Up Expo",
    date: "10th & 11th April",
    time: "",
    location: "VJIM Canteen",
    category: "Flagship Event",
    description: "An exhibition where student entrepreneurs showcase their startups, prototypes, and innovative business ideas. It offers a platform for visibility, feedback, and potential collaboration with investors and industry leaders.",
    badge: "Flagship Event",
    image: "/events/7.webp"
  },
  {
    id: 2,
    title: "Internship Drive",
    date: "10th & 11th April",
    time: "",
    location: "VJIM Canteen",
    category: "Flagship Event",
    description: "An exclusive recruitment drive where startups and companies offer internships to talented students. A golden opportunity to gain industry exposure, enhance your resume, and kickstart your professional journey.",
    badge: "Flagship Event",
    image: "/events/12.webp"
  },
  {
    id: 3,
    title: "Investors Pitch",
    date: "10th April",
    time: "1:00 PM – 5:00 PM",
    location: "VJIM Lecture Hall",
    category: "Flagship Event",
    description: "A formal pitching event where selected teams present their startups to a panel of investors, incubators, and mentors. Participants compete for funding, incubation support, and expert guidance.",
    badge: "Flagship Event",
    image: "/events/8.webp"
  },
  {
    id: 4,
    title: "Stand Up Comedy",
    date: "10th April",
    time: "5:00 PM",
    location: "KS Audi",
    category: "Flagship Event",
    description: "A laughter-packed event featuring hilarious stand-up performances by Vivek Muralidharan. A perfect chance to unwind and enjoy some light-hearted fun.",
    badge: "Flagship Event",
    image: "/events/14.webp"
  },
  {
    id: 5,
    title: "Networking Lunch",
    date: "11th April",
    time: "11:30 AM – 1:00 PM",
    location: "VJIM Stone Steps (Udaya Vatika)",
    category: "Flagship Event",
    description: "A relaxed networking session over lunch with investors, fellow students, alumni, faculty, and industry professionals. Great conversations, new connections, and potential mentorships await.",
    badge: "Flagship Event",
    image: "/events/13.webp"
  },
  {
    id: 6,
    title: "MBB Panel",
    date: "11th April",
    time: "2:00 PM – 3:00 PM",
    location: "VJIM Audi",
    category: "Flagship Event",
    description: "A panel discussion featuring experts from leading consulting firms, including MBB (McKinsey, BCG, Bain) and the Big 4 (Deloitte, EY, KPMG, PwC). Gain insights into the consulting world, interview tips, and career growth strategies.",
    badge: "Flagship Event",
    image: "/events/1.webp"
  },

  // Fun Events
  {
    id: 7,
    title: "SharkUp",
    date: "10th April",
    time: "1:00 PM – 4:00 PM",
    location: "B-block Seminar Hall",
    category: "Fun Event",
    description: "A thrilling mock investment game where creativity meets strategy. Part of our engaging, interactive events that blend fun with learning — perfect for those who enjoy fast-paced, creative challenges.",
    badge: "Fun Event",
    image: "/events/9.webp"
  },
  {
    id: 8,
    title: "Reboot & Rebrand",
    date: "10th April",
    time: "1:00 PM – 4:00 PM",
    location: "E-033",
    category: "Fun Event",
    description: "Reimagine and revamp well-known brands with a twist. Part of our engaging domain-based activities that blend fun with learning — perfect for those who enjoy creative business challenges.",
    badge: "Fun Event",
    image: "/events/10.webp"
  },
  {
    id: 9,
    title: "The Wolf of Wall Street",
    date: "10th April",
    time: "1:00 PM – 4:00 PM",
    location: "A-013",
    category: "Fun Event",
    description: "Test your marketing instincts and quirky branding skills. An interactive event that blends fun with learning — perfect for those who enjoy fast-paced, creative marketing challenges.",
    badge: "Fun Event",
    image: "/events/4.webp"
  },
  {
    id: 10,
    title: "Pitch Sprint",
    date: "11th April",
    time: "10:00 AM – 1:00 PM",
    location: "E-012",
    category: "Fun Event",
    description: "Quickfire pitches and rapid innovation — can you keep up? Part of our fun & domain-based activities designed to sharpen your business skills while keeping you energized.",
    badge: "Fun Event",
    image: "/events/5.webp"
  },
  {
    id: 11,
    title: "Ad Jam",
    date: "11th April",
    time: "10:00 AM – 1:00 PM",
    location: "E-032",
    category: "Fun Event",
    description: "Design a killer ad campaign with your team under pressure! An engaging, interactive event that blends creativity with strategic thinking — perfect for marketing enthusiasts.",
    badge: "Fun Event",
    image: "/events/11.webp"
  },
  {
    id: 12,
    title: "Conan Detective",
    date: "11th April",
    time: "10:00 AM – 1:00 PM",
    location: "Between PG and A Block",
    category: "Fun Event",
    description: "Put on your detective hat and solve the mysterious business case. A fun & domain-based activity that tests your analytical thinking and problem-solving skills.",
    badge: "Fun Event",
    image: "/events/6.webp"
  },

  // Panel Discussions
  {
    id: 13,
    title: "Panel Discussion/Fireside Chat",
    date: "10th April",
    time: "11:45 AM – 12:45 PM",
    location: "B-block Seminar Hall",
    category: "Panel Discussion",
    description: "A structured conversation where a group of experts shares insights on a specific topic. Each panelist offers unique perspectives based on their expertise and experiences, encouraging interactive dialogue, often followed by a Q&A session with the audience.",
    badge: "Panel",
    image: "/events/1.webp"
  },

  // Workshops
  {
    id: 14,
    title: "Workshop",
    date: "11th April",
    time: "11:00 AM – 12:00 PM",
    location: "B-block Seminar Hall",
    category: "Workshop",
    description: "An interactive session focused on learning a specific skill or topic. Participants engage in hands-on activities that encourage practical understanding and collaboration.",
    badge: "Workshop",
    image: "/events/1.webp"
  }
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
  category: string;
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
      <div className="relative pb-[125%] w-full overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="absolute inset-0 object-cover transition-transform duration-300 group-hover:scale-105"
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
          <Button
            className="flex-1 bg-[#d89b1d] hover:bg-[#d89b1d]/90 text-[#030303] group"
            asChild
          >
            <a
              href="https://forms.gle/Wy5FnNAepxj8nYWR7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </a>
          </Button>
          {/* Share button removed as requested */}
        </div>
      </div>
    </motion.div>
  );
}

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Updated categories based on the actual event data
  const categories = [
    { id: "all", name: "All Events" },
    { id: "Flagship Event", name: "Flagship Event" },
    { id: "Fun Event", name: "Fun Event" },
    { id: "Panel Discussion", name: "Panel Discussion" },
    { id: "Workshop", name: "Workshop" },
  ];

  // Filter events based on active category and sort alphabetically by title
  const filteredEvents = activeCategory === "all" 
    ? [...events].sort((a, b) => a.title.localeCompare(b.title))
    : [...events]
        .filter(event => event.category === activeCategory)
        .sort((a, b) => a.title.localeCompare(b.title));

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
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}