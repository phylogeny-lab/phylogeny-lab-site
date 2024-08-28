import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Phylogeny Lab",
  description: "A phylogenetics web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark bg-[rgb(10,10,13)] text-gray-300 ${poppins.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
