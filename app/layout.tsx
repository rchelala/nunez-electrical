import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nunez Electrical | Your Neighborhood Sparky",
  description:
    "Licensed electrician serving your community. Residential, commercial, and emergency electrical services. Call Nunez Electrical today.",
  keywords: "electrician, electrical contractor, residential electrical, commercial electrical, emergency electrician",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
