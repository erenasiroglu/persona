import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authConfig } from "../app/lib/auth.config";
import { cn } from "@/lib/utils";
import ClientProvider from "../components/ClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CV Builder",
  description: "Build your professional CV",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authConfig);

  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-gray-50")}>
        <ClientProvider session={session}>{children}</ClientProvider>
      </body>
    </html>
  );
}
