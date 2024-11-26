import { ModernTemplate } from "./ModernTemplate";
import { ProfessionalTemplate } from "./ProfessionalTemplate";
import { MinimalTemplate } from "./MinimalTemplate";
import { TemplateProps } from "@/app/types/cv";

const templates = {
  modern: ModernTemplate,
  professional: ProfessionalTemplate,
  minimal: MinimalTemplate,
} as const;

interface CVTemplateProps extends TemplateProps {
  template: keyof typeof templates;
}

export const CVTemplate: React.FC<CVTemplateProps> = ({
  template,
  ...props
}) => {
  const Template = templates[template];
  return <Template {...props} />;
};
