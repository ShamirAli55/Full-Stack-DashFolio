import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer";
import ThemeProvider from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shamir Dev",
  description: "It is a blog website for web development and programming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider>
          <AuthProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
