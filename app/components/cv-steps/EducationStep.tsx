import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

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
          className="p-6 bg-gray-50 rounded-xl space-y-4"
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
                className="text-gray-400 hover:text-red-500"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                School/University
              </label>
              <input
                type="text"
                placeholder="e.g. Harvard University"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Degree
              </label>
              <input
                type="text"
                placeholder="e.g. Bachelor of Science"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Field of Study
            </label>
            <input
              type="text"
              placeholder="e.g. Computer Science"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="month"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date (or Expected)
              </label>
              <input
                type="month"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Additional Information{" "}
              <span className="text-gray-400">(Optional)</span>
            </label>
            <div className="relative">
              <textarea
                placeholder="Notable achievements, activities, or relevant coursework..."
                rows={3}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors"
              />
              <button className="absolute bottom-2 right-2 px-3 py-1 text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                AI Assist ✨
              </button>
            </div>
          </div>
        </motion.div>
      ))}

      <button
        onClick={() => setEducations((prev) => [...prev, { id: Date.now() }])}
        className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-indigo-500 hover:text-indigo-600 transition-colors"
      >
        + Add Another Education
      </button>
    </motion.div>
  );
};

export default EducationStep;
