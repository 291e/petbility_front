import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SessionProvider from "@/lib/zustand/SessionProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <SessionProvider>
          <Header />
          <div className="pt-[68px] bg-violet-100">{children}</div>
          <Footer />
          <ToastContainer />
        </SessionProvider>
      </body>
    </html>
  );
}
