// import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../Components/Header";
import Footer from "@/Components/Footer.components";
import Newsletter from "@/Components/Newsletter.components";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Diabatese | Free Website",
  description:
    "A free website dedicated to providing valuable information, resources, and products for managing diabetes. Stay informed, eat healthily, and live better with expert tips and organic product recommendations.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <SessionProvider> */}
        <Header />
        {children}
        <Newsletter />
        <Footer />
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
