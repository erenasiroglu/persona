"use client";
import React from "react";
import { Settings, User, Bell, LogOut, Home, FileText } from "lucide-react";
import { motion } from "framer-motion";

const VerticalHeader = () => {
  return (
    <div className="fixed right-0 top-0 h-screen w-16 bg-white shadow-lg flex flex-col items-center py-6">
      <div className="flex flex-col items-center space-y-8 h-full">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-10 h-10 rounded-full bg-[#1E0E62] flex items-center justify-center text-white font-bold text-xl"
        >
          E
        </motion.div>

        <div className="flex-1 flex flex-col items-center space-y-6 mt-8"></div>

        <div className="flex flex-col items-center space-y-6 mb-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-[#1E0E62] hover:bg-[#E1E1F0] transition-colors"
          >
            <Settings size={20} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-[#1E0E62] hover:bg-[#E1E1F0] transition-colors"
          >
            <LogOut size={20} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default VerticalHeader;
