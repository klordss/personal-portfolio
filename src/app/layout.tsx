import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Josue Salinas - Senior Full Stack Engineer",
  description: "Senior Software Engineer with 18+ years of expertise in .NET, C#, cloud technologies, and full-stack development. Specializing in enterprise solutions, microservices, and data analytics.",
  keywords: ["software engineer", ".NET developer", "C# developer", "full stack developer", "cloud engineer", "microservices", "data analytics", "machine learning"],
  authors: [{ name: "Josue Salinas" }],
  openGraph: {
    title: "Josue Salinas - Senior Full Stack Engineer",
    description: "Senior Software Engineer with 18+ years of expertise in .NET, C#, cloud technologies, and full-stack development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
