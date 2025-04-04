// layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Ecficio 7.0 ᴴ",
  description: "Entrepreneurship Event",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div style={{ marginTop: "30px" }}>{children}</div>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
