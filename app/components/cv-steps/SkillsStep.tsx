import { useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

export const SkillsStep = () => {
  const [skills, setSkills] = useState<string[]>([]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your Skills
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Type a skill and press Enter"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors"
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
          <button className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 text-sm text-indigo-600 hover:text-indigo-700 font-medium">
            AI Suggest ✨
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex items-center gap-1 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full"
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

      <div className="p-4 bg-gray-50 rounded-xl">
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
              className="px-3 py-1.5 border border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 text-gray-600 hover:text-indigo-600 rounded-full transition-colors"
            >
              + {skill}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
