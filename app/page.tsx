"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { ChevronRight, Calendar, Users, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null);
  const highlightsRef = useRef<HTMLElement>(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToSection = (section: string) => {
    const ref = section === "about" ? aboutRef : highlightsRef;
    if (ref.current) {
      window.scrollTo({ top: ref.current.offsetTop - 80, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    setShowScrollToTop(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-[#f1e8eb]">
      <main>
        {/* Video Section - Increased height */}
<section className="relative overflow-hidden">
  <div className="video-container w-full"> {/* Add w-full to ensure container takes full width */}
    <video
      className="w-full h-[50vh] md:h-[60vh] object-cover"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/LogoReveal.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
  </div>
</section>

        {/* Hero Section - Minimal padding and maximized logo size */}
        <section className="relative overflow-hidden py-2">
          <div className="container relative z-10 px-0 md:px-2">
            <div className="flex flex-col items-center text-center space-y-2">
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="flex flex-col items-center">
                  <motion.h1
                    className="text-4xl md:text-6xl font-bold tracking-tighter flex items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {/* Maximized logo size with minimal padding */}
                    {/* Responsive logo sizing */}
                    <div className="relative w-[300px] h-[120px] sm:w-[400px] sm:h-[150px] md:w-[600px] md:h-[200px] lg:w-[800px] lg:h-[250px] aspect-auto">
                      <Image
                        src="/images/ecficio-logo.png"
                        alt="Ecficio 7.0H Logo"
                        layout="fill"
                        className="object-contain"
                        priority
                      />
                    </div>
                  </motion.h1>
                  <motion.p
                    className="max-w-[800px] text-[#f1e8eb]/80"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    The ultimate tech and cultural festival that brings
                    innovation, creativity, and entrepreneurship together.
                  </motion.p>
                </div>

                {/* Calendar widget repositioned */}
                <div className="calendar-widget bg-[#030303] backdrop-blur-md border border-[#655b5e]/50 rounded-lg p-6 shadow-lg shadow-[#d89b1d]/20 max-w-md mx-auto mt-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[#d89b1d] font-bold text-xl tracking-wide">
                      APRIL 2025
                    </h3>
                    <div className="p-3 rounded-md bg-[#655b5e]/20">
                      <Calendar className="w-6 h-6 text-[#d89b1d]" />
                    </div>
                  </div>

                  <div className="flex justify-center space-x-12 mb-6">
                    <div className="text-center">
                      <div className="text-[#d89b1d] text-6xl font-bold mb-2">
                        10
                      </div>
                      <div className="text-[#f1e8eb]/80 text-base">THU</div>
                    </div>
                    <div className="text-[#655b5e] text-3xl font-bold self-center">
                      &
                    </div>
                    <div className="text-center">
                      <div className="text-[#d89b1d] text-6xl font-bold mb-2">
                        11
                      </div>
                      <div className="text-[#f1e8eb]/80 text-base">FRI</div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#655b5e]/30 flex justify-between items-center">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-[#d89b1d] mr-2" />
                      <span className="text-base text-[#f1e8eb]/80">
                        2 Days
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-[#d89b1d] mr-2" />
                      <span className="text-base text-[#f1e8eb]/80">
                        VNR VJIET
                      </span>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4"
                >
                  <Link href="/events">
                    <Button
                      variant="outline"
                      className="border-[#d89b1d] text-[#d89b1d] hover:bg-[#d89b1d] hover:text-[#030303] hover:shadow-lg hover:shadow-[#d89b1d]/50 transition-all duration-300 group"
                    >
                      Checkout Event Schedule
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={aboutRef} className="py-12 bg-[#030303]">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center space-y-4 text-center mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#f1e8eb]">
                About{" "}
                <span className="text-[#d89b1d]">
                  Ecficio 7.0<sup>H</sup>
                </span>
              </h2>
              <div className="w-20 h-1 bg-[#d89b1d]"></div>
            </motion.div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                className="flex flex-col items-center space-y-4 p-6 rounded-lg border border-[#655b5e]/20 bg-[#030303] hover:bg-[#655b5e]/5 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px -15px rgba(216, 155, 29, 0.2)",
                }}
              >
                <div className="p-3 rounded-full bg-[#d89b1d]/10">
                  <Calendar className="h-8 w-8 text-[#d89b1d]" />
                </div>
                <h3 className="text-xl font-bold text-[#f1e8eb]">
                  7th Edition
                </h3>
                <p className="text-center text-[#655b5e]">
                  Join us for the 7th edition of our flagship event, now bigger
                  and better than ever before.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center space-y-4 p-6 rounded-lg border border-[#655b5e]/20 bg-[#030303] hover:bg-[#655b5e]/5 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px -15px rgba(216, 155, 29, 0.2)",
                }}
              >
                <div className="p-3 rounded-full bg-[#d89b1d]/10">
                  <MapPin className="h-8 w-8 text-[#d89b1d]" />
                </div>
                <h3 className="text-xl font-bold text-[#f1e8eb]">
                  Venue
                </h3>
                <p className="text-center text-[#655b5e]">
                  Hosted at Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center space-y-4 p-6 rounded-lg border border-[#655b5e]/20 bg-[#030303] hover:bg-[#655b5e]/5 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.3 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px -15px rgba(216, 155, 29, 0.2)",
                }}
              >
                <div className="p-3 rounded-full bg-[#d89b1d]/10">
                  <Users className="h-8 w-8 text-[#d89b1d]" />
                </div>
                <h3 className="text-xl font-bold text-[#f1e8eb]">
                  1000+ Attendees
                </h3>
                <p className="text-center text-[#655b5e]">
                  Join over 1000 tech enthusiasts, industry professionals, and
                  creative minds.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p className="max-w-3xl mx-auto text-[#f1e8eb]/80">
                Ecficio 7.0<sup>H</sup> is the premier tech and cultural
                festival that brings together innovation, creativity, and
                entrepreneurship. With a rich history of six successful
                editions, we&apos;re back with our most ambitious event yet.
                Featuring workshops, competitions, talks by industry leaders,
                cultural performances, and much more, Ecficio 7.0<sup>H</sup>{" "}
                promises an unforgettable experience for all participants.
              </p>

              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-3xl font-bold text-[#d89b1d]">10+</span>
                  <span className="text-[#655b5e]">Events</span>
                </motion.div>
                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-3xl font-bold text-[#d89b1d]">30+</span>
                  <span className="text-[#655b5e]">Speakers</span>
                </motion.div>
                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-3xl font-bold text-[#d89b1d]">
                    ₹2L+
                  </span>
                  <span className="text-[#655b5e]">Prizes</span>
                </motion.div>
                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-3xl font-bold text-[#d89b1d]">5+</span>
                  <span className="text-[#655b5e]">Sponsors</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Section */}
        <section
          id="highlights"
          ref={highlightsRef}
          className="py-16 bg-[#030303]"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center space-y-4 text-center mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#f1e8eb]">
                Previous <span className="text-[#d89b1d]">Highlights</span>
              </h2>
              <div className="w-20 h-1 bg-[#d89b1d]"></div>
              <p className="text-[#655b5e] max-w-2xl">
                Relive the memories from our previous editions and get a glimpse
                of what to expect this year.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <motion.div
                  key={item}
                  className="group relative overflow-hidden rounded-lg aspect-square"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: item * 0.05 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                >
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Highlight+${item}`}
                    alt={`Previous Highlight ${item}`}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-[#f1e8eb] text-sm font-medium">
                      Ecficio 6.0 - 2024
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}