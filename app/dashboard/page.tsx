"use client";
import React from "react";
import StartModal from "../models/StartModal";
import { motion } from "framer-motion";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-4xl relative flex flex-col items-center justify-center px-4">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #FF0D6A 33%, #0500FF 33% 66%, #00FFE0 66%)",
            filter: "blur(150px)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-6xl font-bold text-[#1E0E62] font-semibold">
            Persona
          </h1>
          <p className="text-center text-lg max-w-2xl text-[#1E0E62] opacity-40 mt-4 font-medium">
            Unlock the power of your career with a personalized, AI-driven CV
            experience.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="mt-8 bg-[#E1E1F0] text-[#1E0E62] hover:bg-[#D1D1E0] transition-all duration-200 px-4 py-2 rounded-[28px] font-medium shadow-sm"
          >
            Get Started
          </motion.button>
          {isModalOpen && <StartModal onClose={() => setIsModalOpen(false)} />}
        </div>
      </div>
    </div>
  );
}
