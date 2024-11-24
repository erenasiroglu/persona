import React, { createContext, useContext, useState } from "react";

type Step = "start" | "personal" | "experience" | "education" | "skills";

interface StepContextType {
  currentStep: Step;
  setCurrentStep: (step: Step) => void;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

const StepContext = createContext<StepContextType | undefined>(undefined);

export const StepProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentStep, setCurrentStep] = useState<Step>("start");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <StepContext.Provider
      value={{ currentStep, setCurrentStep, isModalOpen, setIsModalOpen }}
    >
      {children}
    </StepContext.Provider>
  );
};

export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) throw new Error("useStep must be used within StepProvider");
  return context;
};
