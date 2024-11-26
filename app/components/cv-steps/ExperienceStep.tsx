import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

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
          className="p-6 bg-gray-50 rounded-xl space-y-4"
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
                className="text-gray-400 hover:text-red-500"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                placeholder="e.g. Google"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Position
              </label>
              <input
                type="text"
                placeholder="e.g. Senior Developer"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors"
              />
            </div>
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
                End Date
              </label>
              <input
                type="month"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Key Responsibilities & Achievements
            </label>
            <div className="relative">
              <textarea
                placeholder="Describe your role and achievements..."
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
        onClick={() => setExperiences((prev) => [...prev, { id: Date.now() }])}
        className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-indigo-500 hover:text-indigo-600 transition-colors"
      >
        + Add Another Experience
      </button>
    </motion.div>
  );
};
