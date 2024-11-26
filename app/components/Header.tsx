"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo ve Marka */}
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-md">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Persona
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-1">
            {pathname === "/preview" ? (
              <button
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-violet-500 to-indigo-600 rounded-lg hover:opacity-90 transition-opacity shadow-sm"
                onClick={() => window.print()}
              >
                <FileText className="w-4 h-4 mr-2" />
                Export PDF
              </button>
            ) : (
              <div className="px-3 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full">
                Dashboard
              </div>
            )}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
