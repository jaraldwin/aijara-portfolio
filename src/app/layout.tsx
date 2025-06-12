import type { Metadata } from "next";
// --- BEFORE ---
// import { Geist, Geist_Mono } from "next/font/google";

// --- AFTER: Example with Inter and Fira Code ---
import { Inter, Fira_Code } from "next/font/google"; // Import your new fonts
import "./globals.css";

// --- BEFORE ---
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// --- AFTER: Example with Inter and Fira Code ---
const inter = Inter({
  variable: "--font-inter", // Choose a new variable name
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code", // Choose a new variable name
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aldwin Dev",
  description: "Aldwin Jara Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // --- BEFORE ---
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}

        // --- AFTER: Example with Inter and Fira Code ---
        className={`${inter.variable} ${firaCode.variable} antialiased`} // Use your new font variables
      >
        {children}
      </body>
    </html>
  );
}
