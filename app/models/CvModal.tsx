import React, { useState } from "react";
import {
  X,
  Upload,
  User,
  Linkedin,
  Mic,
  FileText,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useStep } from "@/app/context/StepContext";
import { motion, AnimatePresence } from "framer-motion";
import { PersonalInfoStep } from "@/app/components/cv-steps/PersonalInfoStep";
import { ExperienceStep } from "../components/cv-steps/ExperienceStep";
import EducationStep from "../components/cv-steps/EducationStep";
import { SkillsStep } from "../components/cv-steps/SkillsStep";
import { useRouter } from "next/navigation";

export type CVModalProps = {
  onClose: () => void;
};

// Import Option Component
const ImportOption: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  soon?: boolean;
}> = ({ icon, title, description, onClick, soon }) => (
  <motion.button
    whileHover={{ y: -2 }}
    className={`group relative w-full p-4 text-left rounded-xl border 
      ${
        soon
          ? "border-gray-200 bg-gray-50 cursor-not-allowed"
          : "border-gray-200 bg-white hover:border-indigo-500 hover:shadow-lg transition-all"
      }`}
    onClick={soon ? undefined : onClick}
    disabled={soon}
  >
    <div className="flex items-start gap-4">
      <div
        className={`p-3 rounded-lg ${soon ? "bg-gray-100" : "bg-indigo-50"}`}
      >
        {React.cloneElement(icon as React.ReactElement, {
          className: `w-6 h-6 ${soon ? "text-gray-400" : "text-indigo-600"}`,
        })}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h3
            className={`font-medium ${
              soon ? "text-gray-400" : "text-gray-900"
            }`}
          >
            {title}
          </h3>
          {soon && (
            <span className="px-2 py-0.5 text-xs font-medium text-gray-500 bg-gray-100 rounded-full">
              Coming Soon
            </span>
          )}
        </div>
        <p
          className={`mt-1 text-sm ${soon ? "text-gray-400" : "text-gray-500"}`}
        >
          {description}
        </p>
      </div>
    </div>
  </motion.button>
);

const CVModal: React.FC<CVModalProps> = ({ onClose }) => {
  const { setCurrentStep } = useStep();
  const [currentStep, setCurrentStepLocal] = useState(0);
  const [importMethod, setImportMethod] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const router = useRouter();

  const steps = [
    { id: "import", title: "Import Method" },
    { id: "personal", title: "Personal Information" },
    { id: "experience", title: "Work Experience" },
    { id: "education", title: "Education" },
    { id: "skills", title: "Skills & Expertise" },
  ];

  const handleClose = () => {
    setCurrentStep("start");
    onClose();
  };

  const handleNext = () =>
    setCurrentStepLocal((prev) => Math.min(prev + 1, steps.length - 1));
  const handleBack = () => setCurrentStepLocal((prev) => Math.max(prev - 1, 0));

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="min-h-screen px-4 text-center">
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm"
          onClick={handleClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="inline-block w-full max-w-3xl my-8 text-left align-middle transition-all transform"
        >
          <div className="relative bg-white rounded-2xl shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {steps[currentStep].title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Step {currentStep + 1} of {steps.length}
                </p>
              </div>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1 bg-gray-100">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${((currentStep + 1) / steps.length) * 100}%`,
                }}
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                {currentStep === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                  >
                    <p className="text-lg text-gray-700 mb-6">
                      Choose how you'd like to start creating your CV
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <ImportOption
                        icon={<User className="w-6 h-6" />}
                        title="Start Fresh"
                        description="Create your CV from scratch"
                        onClick={() => {
                          setImportMethod("fresh");
                          handleNext();
                        }}
                      />

                      <ImportOption
                        icon={<Linkedin className="w-6 h-6" />}
                        title="Import from LinkedIn"
                        description="Connect your LinkedIn profile"
                        onClick={() => setImportMethod("linkedin")}
                        soon
                      />

                      <ImportOption
                        icon={<Mic className="w-6 h-6" />}
                        title="Voice Assistant"
                        description="Create your CV by speaking"
                        onClick={() => setImportMethod("voice")}
                        soon
                      />

                      <ImportOption
                        icon={<FileText className="w-6 h-6" />}
                        title="Import PDF"
                        description="Import from existing CV"
                        onClick={() => setImportMethod("pdf")}
                        soon
                      />
                    </div>
                  </motion.div>
                )}

                {currentStep === 1 && <PersonalInfoStep />}
                {currentStep === 2 && <ExperienceStep />}
                {currentStep === 3 && <EducationStep />}
                {currentStep === 4 && <SkillsStep />}

                {/* Add other steps here */}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-gray-50 rounded-b-2xl border-t flex justify-between">
              <button
                onClick={handleBack}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg
                  ${
                    currentStep === 0
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                disabled={currentStep === 0}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back
              </button>

              {currentStep === steps.length - 1 ? (
                <button
                  onClick={() => router.push("/preview")}
                  className="flex items-center px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 
                    text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  Preview CV
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="flex items-center px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 
                    text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  Continue
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CVModal;
