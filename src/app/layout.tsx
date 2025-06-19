import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/redux/store/StoreProvider";

import { Suspense } from "react";
import Loading from "@/components/loading/Loading";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zeap Blog",
  description: "Zeap Blog - We discuss fashion, lifestyle, entertainment, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={` ${geistSans.variable} ${geistMono.variable} antialiased `}
        >
          <Suspense fallback={<Loading />}>
            <div className="">
              {/* <Header /> */}
              <div className="flex flex-col min-h-screen">
                <Header />

                <div className="flex-grow">{children}</div>
                <Footer />
              </div>
            </div>
          </Suspense>
        </body>
      </html>
    </StoreProvider>
  );
}
