import { useState } from "react";
import { motion } from "framer-motion";
import { X, Plus } from "lucide-react";
import {
  inputStyles,
  dateInputStyles,
  textareaStyles,
  sectionStyles,
  aiButtonStyles,
  addButtonStyles,
} from "./common-styles";

export const ExperienceStep = () => {
  const [experiences, setExperiences] = useState<any[]>([{ id: 1 }]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={sectionStyles}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-gray-900">
              Experience {experiences.length > 1 ? index + 1 : ""}
            </h3>
            {experiences.length > 1 && (
              <button
                onClick={() =>
                  setExperiences((prev) => prev.filter((e) => e.id !== exp.id))
                }
                className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                placeholder="e.g. Google"
                className={inputStyles}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Position
              </label>
              <input
                type="text"
                placeholder="e.g. Senior Developer"
                className={inputStyles}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input type="month" className={dateInputStyles} />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                End Date
              </label>
              <input type="month" className={dateInputStyles} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Key Responsibilities & Achievements
            </label>
            <div className="relative">
              <textarea
                placeholder="Describe your role and achievements..."
                rows={3}
                className={textareaStyles}
              />
              <button className={aiButtonStyles}>AI Assist ✨</button>
            </div>
          </div>
        </motion.div>
      ))}

      <button
        onClick={() => setExperiences((prev) => [...prev, { id: Date.now() }])}
        className={addButtonStyles}
      >
        <span className="flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" />
          Add Another Experience
        </span>
      </button>
    </motion.div>
  );
};
