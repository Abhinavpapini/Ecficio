"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  rollNumber: string;
  department: string;
  image: string;
}

interface TeamSection {
  title: string;
  description: string;
  members: TeamMember[];
}

interface TeamData {
  [key: string]: TeamSection;
}

const teamData: TeamData = {
  logistics: {
    title: "Logistics and Management",
    description:
      "Coordinating operations and ensuring smooth execution of events.",
    members: [
      {
        name: "Neha Kapoor",
        rollNumber: "12345",
        department: "Management",
        image:
          "https://drive.google.com/open?id=1Vvu64hpq7tL3oxCxoWse6063XKvPx62N",
      },
      {
        name: "Siddharth Jain",
        rollNumber: "67890",
        department: "Event Planning",
        image: "/images/team/event-coordinator.jpg",
      },
    ],
  },
  design: {
    title: "Editing and Design",
    description:
      "The creative minds behind the festival's visual and editorial content.",
    members: [
      {
        name: "Meera Nair",
        rollNumber: "11223",
        department: "Design",
        image: "/images/team/design.jpg",
      },
      {
        name: "Amit Verma",
        rollNumber: "44556",
        department: "Editorial",
        image: "/images/team/editor.jpg",
      },
    ],
  },
  outreach: {
    title: "Outreach and Marketing",
    description:
      "The team responsible for promoting the festival and engaging with the audience.",
    members: [
      {
        name: "Sanya Gupta",
        rollNumber: "77889",
        department: "Marketing",
        image: "/images/team/marketing.jpg",
      },
      {
        name: "Rohan Das",
        rollNumber: "99001",
        department: "Social Media",
        image: "/images/team/social-media.jpg",
      },
    ],
  },
  documentation: {
    title: "Documentation and Finance",
    description:
      "Ensuring accurate records and managing the festival's budget.",
    members: [
      {
        name: "Kavita Joshi",
        rollNumber: "22334",
        department: "Finance",
        image: "/images/team/finance.jpg",
      },
      {
        name: "Rajesh Iyer",
        rollNumber: "55667",
        department: "Documentation",
        image: "/images/team/documentation.jpg",
      },
    ],
  },
};

export default function MembersPage() {
  const [activeTab, setActiveTab] = useState<string>("logistics");

  const tabs = Object.keys(teamData).map((key) => ({
    id: key,
    name: teamData[key].title,
  }));

  const renderTeamMembers = (team: TeamSection) => (
    <div className="space-y-12">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#f1e8eb] mb-2">
          {team.title}
        </h2>
        <p
          className="text-[#655b5e] max-w-2xl mx-auto"
          dangerouslySetInnerHTML={{ __html: team.description }}
        />
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {team.members.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ y: -10 }}
          >
            <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-[#d89b1d] p-1">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 160px) 100vw, 160px"
                priority={index < 2}
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold text-[#f1e8eb]">{member.name}</h3>
            <p className="text-[#d89b1d] font-medium mb-2">
              {member.rollNumber}, {member.department}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );

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
        <section className="pb-8 border-b border-[#655b5e]/20">
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
            {renderTeamMembers(teamData[activeTab])}
          </div>
        </section>
      </main>
    </div>
  );
}
