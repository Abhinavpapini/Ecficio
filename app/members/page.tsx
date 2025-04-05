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

const placeholderImage = "/images/placeholder.png";

const teamData: TeamData = {
  logistics: {
    title: "Logistics and Management",
    description:
      "Coordinating operations and ensuring smooth execution of events.",
    members: [
      {
        name: "Abhinav Papini",
        rollNumber: "23071A05B2",
        department: "CSE",
        image: "/members/AbhinavPapini.jpg",
      },
      {
        name: "Badduri Harsha",
        rollNumber: "23071A6676",
        department: "AIML",
        image: "/members/BadduriHarsha.jpeg",
      },
      {
        name: "Bala Rohith",
        rollNumber: "23071A66H8",
        department: "AIML",
        image: "/members/BalaRohith.jpg",
      },
      {
        name: "Hanvith Sai Alla",
        rollNumber: "23071A05G2",
        department: "CSE",
        image: "/members/HanvithSaiAlla.png",
      },
      {
        name: "Harini Kanukuntla",
        rollNumber: "23071A04N5",
        department: "ECE",
        image: "/members/KanukuntlaHarini.jpg",
      },
      {
        name: "Javangula Venkat Sai Karthikeya",
        rollNumber: "21071A04F5",
        department: "ECE",
        image: "/members/JavangulaVenkat.jpg",
      },
      {
        name: "Kruthika Reddy",
        rollNumber: "22071A0439",
        department: "ECE",
        image: "/members/KruthikaReddy.jpg",
      },
      {
        name: "Mahitha",
        rollNumber: "23071A6681",
        department: "AIML",
        image: "/members/Mahitha.jpg",
      },
      {
        name: "Nithya Pranavi",
        rollNumber: "23071A3261",
        department: "CSBS",
        image: "/members/NithyaPranavi.heic",
      },
      {
        name: "Pendela Manikanta",
        rollNumber: "23071A05B5",
        department: "CSE",
        image: "/members/PENDELAMANIKANTANAGESWARARAO.heif",
      },
      {
        name: "Revanth Patlolla",
        rollNumber: "24071A10A4",
        department: "EIE",
        image: "/members/RevanthPatlolla.jpg",
      },
      {
        name: "Shaik Siddique",
        rollNumber: "22071A02C3",
        department: "EEE",
        image: "/members/ShaikSiddique.jpg",
      },
      {
        name: "Shaik Mohammed Shaheer Rayhan",
        rollNumber: "23071a6957",
        department: "IOT",
        image: "/members/ShaikMohammedShaheerRayhan.jpeg",
      },
      {
        name: "Sri Harshini",
        rollNumber: "21071A0599",
        department: "CSE",
        image: "/members/SriHarshini.jpg",
      },
      {
        name: "Vinati Vege",
        rollNumber: "23071a05d4@vnrvjiet.in",
        department: "CSE",
        image: "/members/VinatiVege.jpeg",
      },
      {
        name: "Varshaa Balasubramanian",
        rollNumber: "23071A3260",
        department: "CSBS",
        image: "/members/VarshaaBalasubramanian.jpeg",
      },
      {
        name: "Yagati Vaishnavi",
        rollNumber: "22071A6264",
        department: "CYS",
        image: "/members/YagatiVaishnavi.jpg",
      },
      {
        name: "C S Supraja",
        rollNumber: "24071A0276",
        department: "EEE",
        image: "/members/CSSupraja.jpg",
      },
    ],
  },
  design: {
    title: "Editing and Design",
    description:
      "The creative minds behind the festival's visual and editorial content.",
    members: [
      {
        name: "Avaneesh Ketan Chitta",
        rollNumber: "21071A0279",
        department: "EEE",
        image: "/members/AvaneeshChitta.jpg",
      },
      {
        name: "C Sharath",
        rollNumber: "22071A1055",
        department: "EIE",
        image: "/members/CSharath.jpg",
      },
      {
        name: "CHELUMALA SRESHTA",
        rollNumber: "22071A6213",
        department: "CYS",
        image: "/members/SreshtaChelumala.jpg",
      },
      {
        name: "K Ritheesh Dath",
        rollNumber: "23071A1039",
        department: "EIE",
        image: "/members/KRitheeshDath.jpg",
      },
      {
        name: "Manoj Kumar Jampala",
        rollNumber: "22071A12E5",
        department: "IT",
        image: "/members/ManojKumarJampala.jpg",
      },
      {
        name: "Patnala Maheshwar",
        rollNumber: "23071A66B6",
        department: "AIML",
        image: "/members/PatnalaMaheshwar.jpg",
      },
    ],
  },
  outreach: {
    title: "Outreach and Marketing",
    description:
      "The team responsible for promoting the festival and engaging with the audience.",
    members: [
      {
        name: "Akanksha Godavarthi",
        rollNumber: "21071A7220",
        department: "AID",
        image: "/images/outreach/akanksha_godavarthi.jpg",
      },
      {
        name: "Chagarlamudi Rohitha",
        rollNumber: "23071A6779",
        department: "CSDS",
        image: "/images/outreach/chagarlamudi_rohitha.jpg",
      },
      {
        name: "Drishika Mekonda",
        rollNumber: "23075A1217",
        department: "IT",
        image: "/images/outreach/drishika_mekonda.jpg",
      },
      {
        name: "J. ADWAITHA",
        rollNumber: "23071A3224",
        department: "CSBS",
        image: "/images/outreach/j_adwaitha.jpg",
      },
      {
        name: "K Vamsi Karthikeya",
        rollNumber: "22071A0321",
        department: "ME",
        image: "/images/outreach/k_vamsi_karthikeya.jpg",
      },
      {
        name: "Nimishakavi A Hrushikesh Sarma",
        rollNumber: "21071A0245",
        department: "EEE",
        image: "/images/outreach/nimishakavi_hrushikesh.jpg",
      },
      {
        name: "PUVVALA BHANU SATISH",
        rollNumber: "22071A6749",
        department: "CSDS",
        image: "/images/outreach/puvvala_bhanu.jpg",
      },
      {
        name: "Sachin Tripathi",
        rollNumber: "24071A6249",
        department: "Cys",
        image: "/images/outreach/sachin_tripathi.jpg",
      },
      {
        name: "Sripoojitha Miryala",
        rollNumber: "22071A3235",
        department: "CSBS",
        image: "/images/outreach/sripoojitha_miryala.jpg",
      },
      {
        name: "Sudeepthi Maadireddy",
        rollNumber: "22071A3251",
        department: "CSBS",
        image: "/images/outreach/sudeepthi_maadireddy.jpg",
      },
      {
        name: "Veerabhadra Yerram",
        rollNumber: "24071A3262",
        department: "CSBS",
        image: "/images/outreach/veerabhadra_yerram.jpg",
      },
      {
        name: "Vishal Pasumarty",
        rollNumber: "24071A67D5",
        department: "CSDS",
        image: "/images/outreach/vishal_pasumarty.jpg",
      },
      {
        name: "Vishwanath Raja Chanda",
        rollNumber: "23071A0508",
        department: "CSE",
        image: "/images/outreach/vishwanath_raja.jpg",
      },
      {
        name: "Vyshnavi Gottupalli",
        rollNumber: "23071A1083",
        department: "EIE",
        image: "/images/outreach/vyshnavi_gottupalli.jpg",
      },
    ],
  },
  documentation: {
    title: "Documentation and Finance",
    description:
      "Ensuring accurate records and managing the festival's budget.",
    members: [
      {
        name: "Rayapureddy Omkar Veera Sudheer",
        rollNumber: "23075A0314",
        department: "ME",
        image: "/images/documentation/omkar_sudheer.jpg",
      },
      {
        name: "Syed Abdul Majed Ahmed",
        rollNumber: "22071A1056",
        department: "EIE",
        image: "/images/documentation/syed_abdul_majed.jpg",
      },
      {
        name: "Vinay Rathod",
        rollNumber: "22071A03A3",
        department: "ME",
        image: "/images/documentation/vinay_rathod.jpg",
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
                src={member.image || placeholderImage}
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
