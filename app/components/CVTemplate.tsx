import React from "react";
import { ModernTemplate } from "./cv-templates/ModernTemplate";
import { ProfessionalTemplate } from "./cv-templates/ProfessionalTemplate";
import { CreativeTemplate } from "./cv-templates/CreativeTemplate";
import { MinimalTemplate } from "./cv-templates/MinimalTemplate";
import { Education, Experience, PersonalInfo } from "../types/cv";

interface CVTemplateProps {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skills: string[];
  template: string;
}

export const CVTemplate: React.FC<CVTemplateProps> = ({
  personalInfo,
  experiences,
  education,
  skills,
  template,
}) => {
  // Add different template layouts here
  const templates = {
    modern: ModernTemplate,
    professional: ProfessionalTemplate,
    creative: CreativeTemplate,
    minimal: MinimalTemplate,
  };

  const SelectedTemplate =
    templates[template as keyof typeof templates] || ModernTemplate;

  return (
    <SelectedTemplate
      personalInfo={personalInfo}
      experiences={experiences}
      education={education}
      skills={skills}
    />
  );
};
