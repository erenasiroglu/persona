import React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useStep } from "../components/StepProvider";

export type StartModalProps = {
  onClose: () => void;
};

const StartModal: React.FC<StartModalProps> = ({ onClose }) => {
  const { setCurrentStep } = useStep();

  const handleClose = () => {
    setCurrentStep("start");
    onClose();
  };

  const handleCvCreate = () => {
    setCurrentStep("personal");
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50"
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={handleClose}
        />

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 m-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-[#1E0E62]">
                Start Your Journey
              </h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </motion.button>
            </div>

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCvCreate}
                className="w-full px-6 py-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90 transition-all duration-200 rounded-xl font-medium shadow-lg shadow-indigo-500/20 flex items-center justify-between group"
              >
                <div className="text-left">
                  <div className="text-lg font-semibold">Create CV with AI</div>
                  <div className="text-sm opacity-80">
                    Build your professional CV in minutes
                  </div>
                </div>
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: 5 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1,
                  }}
                >
                  →
                </motion.div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-[#E1E1F0] text-[#1E0E62] hover:bg-[#D1D1E0] transition-all duration-200 rounded-xl font-medium shadow-lg shadow-blue-500/10 flex items-center justify-between group"
              >
                <div className="text-left">
                  <div className="text-lg font-semibold">
                    Create Motivation Letter
                  </div>
                  <div className="text-sm opacity-60">
                    Craft compelling cover letters
                  </div>
                </div>
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: 5 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1,
                  }}
                >
                  →
                </motion.div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StartModal;
