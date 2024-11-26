import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Plus } from "lucide-react";
import {
  sectionStyles,
  inputStyles,
  dateInputStyles,
  textareaStyles,
  aiButtonStyles,
  addButtonStyles,
} from "./common-styles";

export const EducationStep = () => {
  const [educations, setEducations] = useState<any[]>([{ id: 1 }]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      {educations.map((edu, index) => (
        <motion.div
          key={edu.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={sectionStyles}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-gray-900">
              Education {educations.length > 1 ? index + 1 : ""}
            </h3>
            {educations.length > 1 && (
              <button
                onClick={() =>
                  setEducations((prev) => prev.filter((e) => e.id !== edu.id))
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
                School/University
              </label>
              <input
                type="text"
                placeholder="e.g. Harvard University"
                className={inputStyles}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Degree
              </label>
              <input
                type="text"
                placeholder="e.g. Bachelor of Science"
                className={inputStyles}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Field of Study
            </label>
            <input
              type="text"
              placeholder="e.g. Computer Science"
              className={inputStyles}
            />
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
                End Date (or Expected)
              </label>
              <input type="month" className={dateInputStyles} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Additional Information{" "}
              <span className="text-gray-400">(Optional)</span>
            </label>
            <div className="relative">
              <textarea
                placeholder="Notable achievements, activities, or relevant coursework..."
                rows={3}
                className={textareaStyles}
              />
              <button className={aiButtonStyles}>AI Assist ✨</button>
            </div>
          </div>
        </motion.div>
      ))}

      <button
        onClick={() => setEducations((prev) => [...prev, { id: Date.now() }])}
        className={addButtonStyles}
      >
        <span className="flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" />
          Add Another Education
        </span>
      </button>
    </motion.div>
  );
};

export default EducationStep;
