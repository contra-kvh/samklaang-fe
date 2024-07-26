import type { Metadata } from "next";
import {GeistSans} from "geist/font/sans"
import "./globals.css";

const geist = GeistSans;

export const metadata: Metadata = {
  title: "Samklaang",
  description: "a collaborative meeting platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-black-d text-white-l`}>{children}</body>
    </html>
  );
}
