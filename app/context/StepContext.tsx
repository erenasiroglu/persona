"use client";
import React, { createContext, useContext, useState } from "react";

export type Step =
  | "start"
  | "personal"
  | "education"
  | "experience"
  | "skills"
  | "preview";

interface StepContextType {
  currentStep: Step;
  setCurrentStep: (step: Step) => void;
  nextStep: () => void;
  previousStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  steps: {
    id: Step;
    title: string;
    description?: string;
  }[];
}

const steps: {
  id: Step;
  title: string;
  description?: string;
}[] = [
  {
    id: "start",
    title: "Get Started",
    description: "Choose how to begin creating your CV",
  },
  {
    id: "personal",
    title: "Personal Information",
    description: "Add your personal details",
  },
  {
    id: "education",
    title: "Education",
    description: "Add your educational background",
  },
  {
    id: "experience",
    title: "Experience",
    description: "Add your work experience",
  },
  {
    id: "skills",
    title: "Skills",
    description: "Add your skills and expertise",
  },
  {
    id: "preview",
    title: "Preview & Download",
    description: "Review and download your CV",
  },
];

const StepContext = createContext<StepContextType | undefined>(undefined);

export function StepProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState<Step>("start");

  const currentIndex = steps.findIndex((step) => step.id === currentStep);
  const isFirstStep = currentIndex === 0;
  const isLastStep = currentIndex === steps.length - 1;

  const nextStep = () => {
    if (!isLastStep) {
      setCurrentStep(steps[currentIndex + 1].id);
    }
  };

  const previousStep = () => {
    if (!isFirstStep) {
      setCurrentStep(steps[currentIndex - 1].id);
    }
  };

  return (
    <StepContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        nextStep,
        previousStep,
        isFirstStep,
        isLastStep,
        steps,
      }}
    >
      {children}
    </StepContext.Provider>
  );
}

export function useStepContext() {
  const context = useContext(StepContext);
  if (context === undefined) {
    throw new Error("useStepContext must be used within a StepProvider");
  }
  return context;
}

export function useStep() {
  const context = useContext(StepContext);
  if (context === undefined) {
    throw new Error("useStep must be used within a StepProvider");
  }
  return context;
}
