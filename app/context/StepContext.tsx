"use client";
import React, { createContext, useContext, useState } from "react";

type Step = "start" | "personal" | "education" | "experience" | "skills";

type StepContextType = {
  currentStep: Step;
  setCurrentStep: (step: Step) => void;
};

const StepContext = createContext<StepContextType | undefined>(undefined);

export function StepProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState<Step>("start");

  return (
    <StepContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </StepContext.Provider>
  );
}

export function useStep() {
  const context = useContext(StepContext);
  if (context === undefined) {
    throw new Error("useStep must be used within a StepProvider");
  }
  return context;
}
