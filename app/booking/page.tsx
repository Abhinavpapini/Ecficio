import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronLeft } from "lucide-react";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-[#f1e8eb]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-[#655b5e]/20 bg-[#030303]/95 backdrop-blur supports-[backdrop-filter]:bg-[#030303]/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">
              Ecficio 7.0<sup className="text-[#d89b1d] text-xs">H</sup>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-[#f1e8eb] hover:text-[#d89b1d]"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium text-[#f1e8eb] hover:text-[#d89b1d]"
            >
              About
            </Link>
            <Link
              href="/#highlights"
              className="text-sm font-medium text-[#f1e8eb] hover:text-[#d89b1d]"
            >
              Highlights
            </Link>
            <Link
              href="/#sponsors"
              className="text-sm font-medium text-[#f1e8eb] hover:text-[#d89b1d]"
            >
              Sponsors
            </Link>
            <Link
              href="/#members"
              className="text-sm font-medium text-[#f1e8eb] hover:text-[#d89b1d]"
            >
              Members
            </Link>
            <Link
              href="/events"
              className="text-sm font-medium text-[#f1e8eb] hover:text-[#d89b1d]"
            >
              Events
            </Link>
          </nav>
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" className="text-[#f1e8eb]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            {/* Left Column - Booking Form */}
            <div className="flex-1">
              <div className="mb-8">
                <Link
                  href="/events"
                  className="flex items-center text-[#d89b1d] mb-4 hover:underline"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Back to Events
                </Link>
                <h1 className="text-3xl font-bold mb-2">Booking</h1>
                <p className="text-[#655b5e]">
                  Complete your registration for Ecficio 7.0<sup>H</sup> events
                </p>
              </div>

              <div className="space-y-8">
                {/* Personal Details */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Personal Details</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name" className="text-[#f1e8eb]">
                        First Name
                      </Label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                        className="bg-[#030303] border-[#655b5e] text-[#f1e8eb] focus:border-[#d89b1d] focus:ring-[#d89b1d]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name" className="text-[#f1e8eb]">
                        Last Name
                      </Label>
                      <Input
                        id="last-name"
                        placeholder="Enter your last name"
                        className="bg-[#030303] border-[#655b5e] text-[#f1e8eb] focus:border-[#d89b1d] focus:ring-[#d89b1d]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#f1e8eb]">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="bg-[#030303] border-[#655b5e] text-[#f1e8eb] focus:border-[#d89b1d] focus:ring-[#d89b1d]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#f1e8eb]">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="bg-[#030303] border-[#655b5e] text-[#f1e8eb] focus:border-[#d89b1d] focus:ring-[#d89b1d]"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Payment Method</h2>
                  <RadioGroup
                    defaultValue="upi"
                    className="grid gap-4 md:grid-cols-3"
                  >
                    <div>
                      <RadioGroupItem
                        value="upi"
                        id="upi"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="upi"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-[#655b5e] bg-[#030303] p-4 hover:bg-[#655b5e]/5 hover:border-[#d89b1d] peer-checked:border-[#d89b1d] peer-checked:bg-[#d89b1d]/5"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6 mb-3 text-[#d89b1d]"
                        >
                          <rect width="20" height="14" x="2" y="5" rx="2" />
                          <line x1="2" x2="22" y1="10" y2="10" />
                        </svg>
                        <div className="text-center">
                          <div className="text-sm font-semibold">UPI</div>
                          <div className="text-xs text-[#655b5e]">
                            Pay using UPI apps
                          </div>
                        </div>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="card"
                        id="card"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="card"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-[#655b5e] bg-[#030303] p-4 hover:bg-[#655b5e]/5 hover:border-[#d89b1d] peer-checked:border-[#d89b1d] peer-checked:bg-[#d89b1d]/5"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6 mb-3 text-[#d89b1d]"
                        >
                          <rect width="20" height="14" x="2" y="5" rx="2" />
                          <line x1="2" x2="22" y1="10" y2="10" />
                        </svg>
                        <div className="text-center">
                          <div className="text-sm font-semibold">
                            Credit/Debit Card
                          </div>
                          <div className="text-xs text-[#655b5e]">
                            Pay using card
                          </div>
                        </div>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="netbanking"
                        id="netbanking"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="netbanking"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-[#655b5e] bg-[#030303] p-4 hover:bg-[#655b5e]/5 hover:border-[#d89b1d] peer-checked:border-[#d89b1d] peer-checked:bg-[#d89b1d]/5"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6 mb-3 text-[#d89b1d]"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        <div className="text-center">
                          <div className="text-sm font-semibold">
                            Net Banking
                          </div>
                          <div className="text-xs text-[#655b5e]">
                            Pay using net banking
                          </div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="rounded border-[#655b5e] bg-[#030303] text-[#d89b1d] focus:ring-[#d89b1d] mt-1"
                    />
                    <Label htmlFor="terms" className="text-sm text-[#655b5e]">
                      I agree to the{" "}
                      <Link href="#" className="text-[#d89b1d] hover:underline">
                        Terms and Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-[#d89b1d] hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                </div>

                <Button className="w-full bg-[#d89b1d] hover:bg-[#d89b1d]/90 text-[#030303] mt-4">
                  Continue to Payment
                </Button>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="md:w-1/3 lg:w-1/4">
              <div className="sticky top-24 rounded-lg border border-[#655b5e]/20 bg-[#030303] p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Order Summary</h2>
                  <div className="relative h-8 w-8">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      alt="Ecficio Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-b border-[#655b5e]/20 pb-4">
                    <h3 className="font-medium mb-2">Selected Events</h3>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm font-medium">
                            48-Hour Hackathon
                          </p>
                          <p className="text-xs text-[#655b5e]">
                            April 10, 2025
                          </p>
                        </div>
                        <p className="text-sm">₹999</p>
                      </div>

                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm font-medium">AI Summit</p>
                          <p className="text-xs text-[#655b5e]">
                            April 11, 2025
                          </p>
                        </div>
                        <p className="text-sm">₹499</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-[#655b5e]/20 pb-4">
                    <div className="flex justify-between mb-2">
                      <p className="text-sm text-[#655b5e]">Subtotal</p>
                      <p className="text-sm">₹1,498</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <p className="text-sm text-[#655b5e]">GST (18%)</p>
                      <p className="text-sm">₹269.64</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm text-[#655b5e]">Processing Fee</p>
                      <p className="text-sm">₹30</p>
                    </div>
                  </div>

                  <div className="flex justify-between font-bold">
                    <p>Total</p>
                    <p>₹1,797.64</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[#655b5e]/20">
                  <div className="flex items-center space-x-2 text-sm text-[#655b5e]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-[#d89b1d]"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                    <span>Secure payment processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#030303] border-t border-[#655b5e]/20 py-10">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold text-[#f1e8eb]">
                  Ecficio 7.0<sup className="text-[#d89b1d] text-xs">H</sup>
                </span>
              </div>
              <p className="text-[#655b5e] mb-4 max-w-xs">
                The ultimate tech and cultural festival bringing innovation,
                creativity, and entertainment together.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-[#655b5e] hover:text-[#d89b1d]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-[#655b5e] hover:text-[#d89b1d]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-[#655b5e] hover:text-[#d89b1d]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-[#655b5e] hover:text-[#d89b1d]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#f1e8eb] mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-[#655b5e] hover:text-[#d89b1d]"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="text-[#655b5e] hover:text-[#d89b1d]"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-[#655b5e] hover:text-[#d89b1d]"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#sponsors"
                    className="text-[#655b5e] hover:text-[#d89b1d]"
                  >
                    Sponsors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/booking"
                    className="text-[#655b5e] hover:text-[#d89b1d]"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#f1e8eb] mb-4">
                Contact Us
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 text-[#d89b1d]"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-[#655b5e]">+91 9876543210</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 text-[#d89b1d]"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span className="text-[#655b5e]">contact@ecficio.org</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 text-[#d89b1d]"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-[#655b5e]">
                    University Convention Center, Tech Campus, Bangalore -
                    560001
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#655b5e]/20 text-center">
            <p className="text-[#655b5e]">
              © {new Date().getFullYear()} Ecficio 7.0<sup>H</sup>. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
