import React from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import CVModal from "./CvModal";

export type StartModalProps = {
  onClose: () => void;
};

const StartModal: React.FC<StartModalProps> = ({ onClose }) => {
  const [isCvModalOpen, setIsCvModalOpen] = React.useState(false);

  const handleCvModalOpen = () => {
    setIsCvModalOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
        <div className="bg-white rounded-xl shadow-xl p-6 m-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#1E0E62]">
              Choose an Option
            </h2>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-4 w-4 text-gray-500" />
            </button>
          </div>

          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCvModalOpen}
              className="w-full px-4 py-3 bg-[#E1E1F0] text-[#1E0E62] hover:bg-[#D1D1E0] transition-all duration-200 rounded-lg font-medium shadow-sm"
            >
              Create CV with AI
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-3 bg-[#E1E1F0] text-[#1E0E62] hover:bg-[#D1D1E0] transition-all duration-200 rounded-lg font-medium shadow-sm"
            >
              Create Motivation Letter with AI
            </motion.button>
            {isCvModalOpen && (
              <CVModal onClose={() => setIsCvModalOpen(false)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartModal;
