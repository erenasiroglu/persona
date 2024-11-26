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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-indigo-50">
      <main className="max-w-7xl mx-auto px-8">
        <div className="py-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Create Your Professional Profile
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Choose your tool and let AI help you craft the perfect document
            </p>
          </div>

          <div className="grid gap-6 max-w-3xl">
            <motion.div
              whileHover={{ y: -2 }}
              className="group cursor-pointer"
              onClick={handleCvCreate}
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-bl-[100px] rounded-tr-2xl" />

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        AI CV Builder
                      </h3>
                      <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium">
                        Recommended
                      </span>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Create a professional CV in minutes with our AI-powered
                      builder. Perfect for standing out in today's competitive
                      job market.
                    </p>

                    <div className="flex items-center text-indigo-600 font-medium group-hover:gap-2 transition-all">
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} className="group cursor-pointer">
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-500/10 to-gray-600/10 rounded-bl-[100px] rounded-tr-2xl" />

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-lg shadow-gray-500/20">
                      <PenLine className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Cover Letter Generator
                      </h3>
                      <span className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                        Coming Soon
                      </span>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Craft compelling cover letters that capture attention and
                      showcase your unique value proposition to potential
                      employers.
                    </p>

                    <div className="flex items-center text-gray-600 font-medium">
                      Available Soon
                      <ArrowRight className="w-5 h-5 ml-2 opacity-50" />
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
