"use client";

import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-[#f1e8eb]">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold">Register for Ecficio 7.0</h1>
        <p className="text-[#655b5e] mt-2">
          Choose your pass and join the ultimate tech and cultural festival!
        </p>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-12">
        {/* Passes Section */}
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Elite",
              price: "₹999",
              benefits: [
                "Exclusive Industry Panel Discussion",
                "Networking Lunch",
                "Investor Pitching Access",
                "Standup Comedy",
                "Event T-Shirt",
                "All Events & Workshops",
              ],
            },
            {
              name: "Insider",
              price: "₹800",
              benefits: [
                "Networking Lunch",
                "Investor Pitching Access",
                "Standup Comedy",
                "Event T-Shirt",
                "All Events & Workshops",
              ],
            },
            {
              name: "Career",
              price: "₹600",
              benefits: [
                "Investor Pitching Access",
                "Standup Comedy",
                "Event T-Shirt",
                "All Events & Workshops",
              ],
            },
            {
              name: "Explorer",
              price: "₹400",
              benefits: ["All Events & Workshops"],
            },
          ].map((pass, index) => (
            <div
              key={index}
              className="border border-[#655b5e]/20 bg-[#030303] p-6 rounded-lg text-center"
            >
              <h2 className="text-2xl font-bold text-[#d89b1d]">{pass.name}</h2>
              <p className="text-xl font-semibold mt-2">{pass.price}</p>
              <ul className="mt-4 text-sm text-[#655b5e] space-y-2">
                {pass.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#d89b1d]">✔</span> {benefit}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-[#d89b1d] text-[#030303] px-4 py-2 rounded hover:bg-[#d89b1d]/90">
                Register Now
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
