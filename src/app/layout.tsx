import { Metadata } from "next";
import "./globals.css"; // If you have global styles
import { Caveat, Nunito } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import BottomNavbar from "@/components/ui/BottomNavbar";
import Footer from "@/components/ui/Footer";
import Announcement from "@/components/ui/Announcement";
import TopArrow from "@/components/ui/TopArrow";
import OrderButton from "@/components/ui/OrderButton";

// Import Caveat and Nunito fonts
export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the font weights you need
  variable: "--font-caveat", // Custom CSS variable
});

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the font weights you need
  variable: "--font-nunito", // Custom CSS variable
});

export const metadata: Metadata = {
  title: "Oh Shakes ",
  description:
    "Savor our thick shakes, coffee, lassi, sandwiches, and more—made to delight!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${caveat.variable} ${nunito.variable}`}>
        <main className="pb-[78px] md:pb-0">
          <TopArrow />
          <OrderButton/>
          <Announcement />
          <Navbar />
          {children}
          <BottomNavbar />
          <Footer />
        </main>
      </body>
    </html>
  );
}
