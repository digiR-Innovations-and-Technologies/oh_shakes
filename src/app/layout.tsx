// app/layout.tsx or pages/_app.tsx
import { Metadata } from "next";
import "./globals.css"; // If you have global styles
import { Caveat, Nunito } from "next/font/google";

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
  title: "My Cafe Website",
  description: "Best coffee in town",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${caveat.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}
