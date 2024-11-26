export const ProfessionalTemplate: React.FC<TemplateProps> = ({
  personalInfo,
  experiences,
  education,
  skills,
}) => {
  return (
    <div className="w-full h-full bg-white font-serif p-8">
      {/* Header */}
      <div className="text-center border-b-2 border-gray-200 pb-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {personalInfo.fullName}
        </h1>
        <h2 className="text-xl text-gray-600 mb-4">{personalInfo.title}</h2>
        <div className="flex justify-center gap-4 text-sm text-gray-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.website && (
            <a
              href={personalInfo.website}
              className="text-blue-600 hover:underline"
            >
              Portfolio
            </a>
          )}
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-2">
          {/* Experience */}
          {experiences.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-bold text-gray-900">
                        {exp.position}
                      </h4>
                      <span className="text-sm text-gray-600">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <div className="text-gray-700 font-semibold mb-2">
                      {exp.company}
                    </div>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-gray-900">{edu.school}</h4>
                      <span className="text-sm text-gray-600">
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                    <div className="text-gray-700">
                      {edu.degree} in {edu.field}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div>
          {/* Summary */}
          {personalInfo.summary && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">
                Profile
              </h3>
              <p className="text-gray-600">{personalInfo.summary}</p>
            </div>
          )}

          {/* Skills */}
          {skills.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">
                Skills
              </h3>
              <div className="space-y-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="text-gray-600 py-1 border-b border-gray-100 last:border-0"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
