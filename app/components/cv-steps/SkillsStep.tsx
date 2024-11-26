import { useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { sectionStyles, inputStyles, aiButtonStyles } from "./common-styles";

export const SkillsStep = () => {
  const [skills, setSkills] = useState<string[]>([]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className={sectionStyles}>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Your Skills
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Type a skill and press Enter"
              className={inputStyles}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const input = e.target as HTMLInputElement;
                  if (input.value.trim()) {
                    setSkills((prev) => [...prev, input.value.trim()]);
                    input.value = "";
                  }
                }
              }}
            />
            <button className={aiButtonStyles}>AI Suggest ✨</button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
            >
              {skill}
              <button
                onClick={() =>
                  setSkills((prev) => prev.filter((_, i) => i !== index))
                }
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className={`${sectionStyles} !p-5`}>
        <h4 className="font-medium text-gray-900 mb-3">
          Popular Skills in Your Field
        </h4>
        <div className="flex flex-wrap gap-2">
          {["React", "TypeScript", "Node.js", "AWS"].map((skill) => (
            <button
              key={skill}
              onClick={() =>
                setSkills((prev) => [...new Set([...prev, skill])])
              }
              className="px-3 py-1.5 border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-gray-700 rounded-lg transition-colors"
            >
              + {skill}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
