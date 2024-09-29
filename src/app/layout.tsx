// app/layout.tsx

"use client";

import React, { useEffect, useState } from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import TawkTo from "@/components/Common/TawkTo";
import { Providers } from "./providers";
import LoadingScreen from "@/components/Common/LoadingScreen";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for demo purposes
    const timer = setTimeout(() => setLoading(false), 1500); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          {/* {loading ? (
            <LoadingScreen />
          ) : ( */}
            <>
              <Header />
              {children}
              <Footer />
              <ScrollToTop />
              <TawkTo />
              {/* Integrate MouseFollower */}
            </>
          {/* )} */}
        </Providers>
      </body>
    </html>
  );
}
