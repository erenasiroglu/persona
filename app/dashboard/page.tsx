"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import CVModal from "../models/CvModal";
import { useStep } from "../context/StepContext";
import { FileText, PenLine, ArrowRight } from "lucide-react";

export default function Home() {
  const [showCVModal, setShowCVModal] = useState(false);
  const { setCurrentStep } = useStep();

  const handleCvCreate = () => {
    setCurrentStep("personal");
    setShowCVModal(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white  overflow-hidden">
      {/* Reduced blur in Background Aura Effect */}

      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(90deg, #FF0D6A 33%, #0500FF 33% 66%, #00FFE0 66%)",
          filter: "blur(150px)",
          opacity: 0.08,
          width: "200%",
          height: "200%",
          transform: "translate(-25%, -25%)",
        }}
      ></div>

      <main className="relative max-w-6xl mx-auto px-6">
        <div className="py-12">
          {/* More minimal header section */}
          <div className="max-w-xl mb-12">
            <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium mb-3">
              Build Your Future
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Craft Your Professional Story
            </h2>
            <p className="text-base text-gray-600">
              Transform your career journey with AI-powered tools designed for
              success
            </p>
          </div>

          <div className="grid gap-6 max-w-2xl">
            <motion.div
              whileHover={{ y: -2, scale: 1.005 }}
              transition={{ duration: 0.2 }}
              className="group cursor-pointer"
              onClick={handleCvCreate}
            >
              <div className="relative bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100/50">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-bl-[80px] rounded-tr-xl" />

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-500/20">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">
                        AI CV Builder
                      </h3>
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium">
                        Recommended
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      Create a professional CV in minutes with our AI-powered
                      builder.
                    </p>

                    <div className="flex items-center text-indigo-600 text-sm font-medium group-hover:gap-1.5 transition-all">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -2, scale: 1.005 }}
              transition={{ duration: 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100/50">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-500/10 to-gray-600/10 rounded-bl-[80px] rounded-tr-xl" />

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-md shadow-gray-500/20">
                      <PenLine className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Cover Letter Generator
                      </h3>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        Coming Soon
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      Craft compelling cover letters that capture attention and
                      showcase your unique value proposition.
                    </p>

                    <div className="flex items-center text-gray-600 text-sm font-medium">
                      Available Soon
                      <ArrowRight className="w-4 h-4 ml-1.5 opacity-50" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {showCVModal && <CVModal onClose={() => setShowCVModal(false)} />}
    </div>
  );
}
