import { motion } from "framer-motion";
import {
  sectionStyles,
  inputStyles,
  textareaStyles,
  aiButtonStyles,
} from "./common-styles";

export const PersonalInfoStep = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className={sectionStyles}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className={inputStyles}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Professional Title
              </label>
              <input
                type="text"
                placeholder="e.g. Senior Software Engineer"
                className={inputStyles}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className={inputStyles}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                placeholder="City, Country"
                className={inputStyles}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Portfolio/Website{" "}
                <span className="text-gray-400">(Optional)</span>
              </label>
              <input
                type="url"
                placeholder="https://yourwebsite.com"
                className={inputStyles}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                LinkedIn <span className="text-gray-400">(Optional)</span>
              </label>
              <input
                type="url"
                placeholder="https://linkedin.com/in/username"
                className={inputStyles}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Professional Summary
          </label>
          <div className="relative">
            <textarea
              placeholder="Brief overview of your professional background and key strengths..."
              rows={4}
              className={textareaStyles}
            />
            <button className={aiButtonStyles}>AI Assist ✨</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
