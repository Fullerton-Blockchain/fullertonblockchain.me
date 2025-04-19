import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Fullerton Blockchain",
  description:
    "We are a student-led organization dedicated to educating students about blockchain and giving them the industry experience/network required to succeed post-grad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
