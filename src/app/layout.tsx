import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";

const font = VT323({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Vladimir Vovk",
  description: "Hi! My name is Vladimir Vovk. I am passionate about web and mobile technologies, React Native, React, building beautiful user experiences, and making the world a better place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
