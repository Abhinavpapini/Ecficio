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

const placeholderImage = "/members/placeholder.webp";

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
        image: "/members/Abhinav.webp",
      },
      {
        name: "Akshaya Penumathsa",
        rollNumber: "23071A6645",
        department: "AIML",
        image: "/members/Akshaya.webp",
      },
      {
        name: "Badduri Harsha",
        rollNumber: "23071A6676",
        department: "AIML",
        image: "/members/BadduriHarsha.webp",
      },
      {
        name: "Bala Rohith",
        rollNumber: "23071A66H8",
        department: "AIML",
        image: "/members/BalaRohith.webp",
      },
      {
        name: "C S Supraja",
        rollNumber: "24071A0276",
        department: "EEE",
        image: "/members/CSSupraja.webp",
      },
      {
        name: "G.Pujith Gupta",
        rollNumber: "22071A0338",
        department: "ME",
        image: "/members/Pujith.webp",
      },
      {
        name: "Hanvith Sai Alla",
        rollNumber: "23071A05G2",
        department: "CSE",
        image: "/members/HanvithSaiAlla.webp",
      },
      {
        name: "Harini Kanukuntla",
        rollNumber: "23071A04N5",
        department: "ECE",
        image: "/members/KanukuntlaHarini.webp",
      },
      {
        name: "Kapish Barik",
        rollNumber: "22071A0373",
        department: "ME",
        image: "/members/Kapish.webp",
      },
      {
        name: "Kruthika Reddy",
        rollNumber: "22071A0439",
        department: "ECE",
        image: "/members/Kruthika.webp",
      },
      {
        name: "M.Padma Tejaswi",
        rollNumber: "23071A12A4",
        department: "IT",
        image: "/members/Padma.webp",
      },
      {
        name: "Mahitha",
        rollNumber: "23071A6681",
        department: "AIML",
        image: "/members/Mahitha.webp",
      },
      {
        name: "Manasa Garimella",
        rollNumber: "24071A04G3",
        department: "ECE",
        image: "/members/ManasaGarimella.webp",
      },
      {
        name: "Manikanta Pendela",
        rollNumber: "23071A05B5",
        department: "CSE",
        image: "/members/Manikanta.webp",
      },
      {
        name: "Nikhil Chanda",
        rollNumber: "23071A12H5",
        department: "IT",
        image: "/members/NikhilChanda.webp",
      },
      {
        name: "Nithya Pranavi",
        rollNumber: "23071A3261",
        department: "CSBS",
        image: "/members/Pranavi.webp",
      },
      {
        name: "Praneeth Dutt",
        rollNumber: "23071A66B0",
        department: "AIML",
        image: "/members/Praneeth.webp",
      },
      {
        name: "Renith Raj",
        rollNumber: "22071A0393",
        department: "ME",
        image: "/members/RenithRaj.webp",
      },
      {
        name: "Revanth Patlolla",
        rollNumber: "24071A10A4",
        department: "EIE",
        image: "/members/Revanth.webp",
      },
      {
        name: "Sai Prabhath",
        rollNumber: "23071A04Q8",
        department: "ECE",
        image: "/members/SaiPrabhath.webp",
      },
      {
        name: "Sansitha",
        rollNumber: "22071A0408",
        department: "ECE",
        image: "/members/Sansitha.webp",
      },
      {
        name: "Shaheer Rayhan",
        rollNumber: "23071A6957",
        department: "IOT",
        image: "/members/ShaikMohammedShaheerRayhan.webp",
      },
      {
        name: "Shaik Siddique",
        rollNumber: "22071A02C3",
        department: "EEE",
        image: "/members/ShaikSiddique.webp",
      },
      {
        name: "Sri Harshini",
        rollNumber: "21071A0599",
        department: "CSE",
        image: "/members/Harshini.webp",
      },
      {
        name: "S.Lalithaditya",
        rollNumber: "23071A12B9",
        department: "IT",
        image: "/members/Lalithaditya.webp",
      },
      {
        name: "Varshaa Balasubramanian",
        rollNumber: "23071A3260",
        department: "CSBS",
        image: "/members/Varshaa.webp",
      },
      {
        name: "Venkat Sai Karthikeya",
        rollNumber: "21071A04F5",
        department: "ECE",
        image: "/members/JavangulaVenkat.webp",
      },
      {
        name: "Vinati Vege",
        rollNumber: "23071A05D4",
        department: "CSE",
        image: "/members/Vinati.webp",
      },
      {
        name: "Vishesh",
        rollNumber: "22071A0309",
        department: "ME",
        image: "/members/Vishesh.webp",
      },
      {
        name: "Vishnu Jakkula",
        rollNumber: "22071A12E4",
        department: "IT",
        image: "/members/VishnuJakkula.webp",
      },
      {
        name: "Yagati Vaishnavi",
        rollNumber: "22071A6264",
        department: "CYS",
        image: "/members/YagatiVaishnavi.webp",
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
        image: "/members/AvaneeshChitta.webp",
      },
      {
        name: "Bodanapati Pavani",
        rollNumber: "22071A6675",
        department: "AIML",
        image: "/members/BodanapatiPavani.webp",
      },
      {
        name: "C Sharath",
        rollNumber: "22071A1055",
        department: "EIE",
        image: "/members/CSharath.webp",
      },
      {
        name: "Chelumala Sreshta",
        rollNumber: "22071A6213",
        department: "CYS",
        image: "/members/SreshtaChelumala.webp",
      },
      {
        name: "K Ritheesh Dath",
        rollNumber: "23071A1039",
        department: "EIE",
        image: "/members/Ritheesh.webp",
      },
      {
        name: "K. Roshan Kumar",
        rollNumber: "23071A1034",
        department: "EIE",
        image: "/members/KRoshanKumar.webp",
      },
      {
        name: "Manoj Kumar Jampala",
        rollNumber: "22071A12E5",
        department: "IT",
        image: "/members/ManojKumarJampala.webp",
      },
      {
        name: "Meenakshi Vannala",
        rollNumber: "21071A0262",
        department: "EEE",
        image: "/members/MeenakshiVannala.webp",
      },
      {
        name: "Neha Yamuna",
        rollNumber: "23071A1044",
        department: "EIE",
        image: "/members/Neha.webp",
      },
      {
        name: "Patnala Maheshwar",
        rollNumber: "23071A66B6",
        department: "AIML",
        image: "/members/PatnalaMaheshwar.webp",
      },
      {
        name: "R. Dhawan Kumar",
        rollNumber: "21071A0252",
        department: "EEE",
        image: "/members/Dhawan.webp",
      },
      {
        name: "Saaketh Pallikonda",
        rollNumber: "22071A12H3",
        department: "IT",
        image: "/members/SaakethPallikonda.webp",
      },
      {
        name: "Sampreeth",
        rollNumber: "23075A0320",
        department: "ME",
        image: "/members/CD.webp",
      },
      {
        name: "Srija Reddy",
        rollNumber: "22071A3250",
        department: "CSBS",
        image: "/members/SrijaReddy.webp",
      },
      {
        name: "Srivalli Ramini",
        rollNumber: "23071A6650",
        department: "AIML",
        image: "/members/Srivalli.webp",
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
        image: "/members/AkankshaGodavarthi.webp",
      },
      {
        name: "Amogh",
        rollNumber: "23071A3208",
        department: "CSBS",
        image: "/members/Amogh.webp",
      },
      {
        name: "Bhanu Satish",
        rollNumber: "22071A6749",
        department: "CSDS",
        image: "/members/PuvvalaBhanuSatish.webp",
      },
      {
        name: "Chagarlamudi Rohitha",
        rollNumber: "23071A6779",
        department: "CSDS",
        image: "/members/ChagarlamudiRohitha.webp",
      },
      {
        name: "Drishika Mekonda",
        rollNumber: "23075A1217",
        department: "IT",
        image: "/members/MDrishika.webp",
      },
      {
        name: "Hrushikesh Sarma",
        rollNumber: "21071A0245",
        department: "EEE",
        image: "/members/HrushikeshSarma.webp",
      },
      {
        name: "J. Adwaitha",
        rollNumber: "23071A3224",
        department: "CSBS",
        image: "/members/JampellyAdwaitha.webp",
      },
      {
        name: "K Vamsi Karthikeya",
        rollNumber: "22071A0321",
        department: "ME",
        image: "/members/VamsiKarthikeya.webp",
      },
      {
        name: "Karthikeya Busupalli",
        rollNumber: "22071A1008",
        department: "EIE",
        image: "/members/BKarthikeya.webp",
      },
      {
        name: "Kush Modi",
        rollNumber: "23071A6229",
        department: "CSE - CYS",
        image: "/members/Kush.webp",
      },
      {
        name: "Manas Venkatsai",
        rollNumber: "22071A1032",
        department: "EIE",
        image: "/members/Manas.webp",
      },
      {
        name: "M Haarika",
        rollNumber: "22071A6233",
        department: "CSE-CYS",
        image: "/members/MHaarika.webp",
      },
      {
        name: "Pranav Ankam",
        rollNumber: "23071A04B9",
        department: "ECE",
        image: "/members/PranavAnkam.webp",
      },
      {
        name: "Pothireddy Nishma Reddy",
        rollNumber: "22071A1049",
        department: "EIE",
        image: "/members/NishmaReddy.webp",
      },
      {
        name: "Sachin Tripathi",
        rollNumber: "24071A6249",
        department: "CSE-CYS",
        image: "/members/SachinTripathi.webp",
      },
      {
        name: "Srikar Burugula",
        rollNumber: "23071A70253",
        department: "EEE",
        image: "/members/Srikar.webp",
      },
      {
        name: "Sripoojitha Miryala",
        rollNumber: "22071A3235",
        department: "CSBS",
        image: "/members/MiryalaSriPoojitha.webp",
      },
      {
        name: "Sudeepthi Maadireddy",
        rollNumber: "22071A3251",
        department: "CSBS",
        image: "/members/SudeepthiMaadireddy.webp",
      },
      {
        name: "Veerabhadra Yerram",
        rollNumber: "24071A3262",
        department: "CSBS",
        image: "/members/VeerabhadraYerram.webp",
      },
      {
        name: "Vishal Pasumarty",
        rollNumber: "24071A67D5",
        department: "CSDS",
        image: "/members/VishalPasumarty.webp",
      },
      {
        name: "Vishwanath Raja Chanda",
        rollNumber: "23071A0508",
        department: "CSE",
        image: "/members/Vishwanath.webp",
      },
      {
        name: "Vyshnavi Gottupalli",
        rollNumber: "23071A1083",
        department: "EIE",
        image: "/members/GottupalliVyshnavi.webp",
      },
    ],
  },
  documentation: {
    title: "Documentation and Finance",
    description:
      "Ensuring accurate records and managing the festival's budget.",
    members: [
      {
        name: "Abdul Majed",
        rollNumber: "22071A1056",
        department: "EIE",
        image: "/members/Abdul.webp",
      },
      {
        name: "Pratheeka Dahagam",
        rollNumber: "22071A0391",
        department: "ME",
        image: "/members/PratheekaDahagam.webp",
      },
      {
        name: "Rayapureddy Omkar",
        rollNumber: "23075A0314",
        department: "ME",
        image: "/members/RayapureddyOmkarVeera.webp",
      },
      {
        name: "Shishir Kasturi",
        rollNumber: "22071A0397",
        department: "ME",
        image: "/members/Shishir.webp",
      },
      {
        name: "Vinay Rathod",
        rollNumber: "22071A03A3",
        department: "ME",
        image: "/members/Vinay.webp",
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

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
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
