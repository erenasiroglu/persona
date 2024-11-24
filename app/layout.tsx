import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Persona - AI CV Builder",
  description: "Build your CV with AI",
};

import { StepProvider } from "./context/StepContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StepProvider>{children}</StepProvider>
      </body>
    </html>
  );
}
