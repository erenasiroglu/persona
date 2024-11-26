export const MinimalTemplate: React.FC<TemplateProps> = ({
  personalInfo,
  experiences,
  education,
  skills,
}) => {
  return (
    <div className="w-full h-full bg-white p-8 font-sans">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-light text-gray-900 mb-1">
          {personalInfo.fullName}
        </h1>
        <h2 className="text-lg text-gray-600 mb-3">{personalInfo.title}</h2>
        <div className="flex gap-4 text-sm text-gray-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Summary */}
        {personalInfo.summary && (
          <div>
            <p className="text-gray-700 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>
        )}

        {/* Experience */}
        {experiences.length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="border-l-2 border-gray-200 pl-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-medium text-gray-900">
                      {exp.position}
                    </h4>
                    <span className="text-sm text-gray-500">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <div className="text-gray-600 mb-2">{exp.company}</div>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="border-l-2 border-gray-200 pl-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {edu.school}
                      </h4>
                      <div className="text-gray-600">
                        {edu.degree} in {edu.field}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">Skills</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {skills.map((skill) => (
                <span key={skill} className="text-gray-600">
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
