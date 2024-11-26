import { PersonalInfo, Experience, Education } from "@/app/types/cv";

interface TemplateProps {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skills: string[];
}

export const ModernTemplate: React.FC<TemplateProps> = ({
  personalInfo,
  experiences,
  education,
  skills,
}) => {
  return (
    <div className="w-full h-full bg-white font-sans">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">{personalInfo.fullName}</h1>
        <h2 className="text-xl mb-4">{personalInfo.title}</h2>
        <div className="flex flex-wrap gap-4 text-sm">
          {personalInfo.email && (
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {personalInfo.email}
            </span>
          )}
          {personalInfo.location && (
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {personalInfo.location}
            </span>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 py-8">
        {/* Summary */}
        {personalInfo.summary && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Professional Summary
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>
        )}

        {/* Experience */}
        {experiences.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {exp.position}
                      </h4>
                      <div className="text-gray-600">{exp.company}</div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {exp.startDate} - {exp.endDate}
                    </div>
                  </div>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {edu.degree} in {edu.field}
                      </h4>
                      <div className="text-gray-600">{edu.school}</div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {edu.startDate} - {edu.endDate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
