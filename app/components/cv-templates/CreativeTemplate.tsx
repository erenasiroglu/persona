import { PersonalInfo, Experience, Education } from "@/app/types/cv";

interface TemplateProps {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skills: string[];
}

export const CreativeTemplate: React.FC<TemplateProps> = ({
  personalInfo,
  experiences,
  education,
  skills,
}) => {
  return (
    <div className="w-full h-full bg-white font-sans">
      {/* Decorative Header */}
      <div className="relative bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(30deg,#ffffff12_12%,transparent_12.5%,transparent_87%,#ffffff12_87.5%,#ffffff12_100%)] bg-[length:20px_20px]"></div>
        </div>

        <div className="relative px-8 py-12">
          {/* Name and Title */}
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-3 tracking-tight">
              {personalInfo.fullName}
            </h1>
            <h2 className="text-2xl font-light mb-6 text-white/90">
              {personalInfo.title}
            </h2>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm text-white/80">
              {personalInfo.email && (
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center hover:text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {personalInfo.email}
                </a>
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
              {personalInfo.website && (
                <a
                  href={personalInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  Portfolio
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 py-10">
        {/* Summary with Creative Border */}
        {personalInfo.summary && (
          <div className="mb-12 relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500"></div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              About Me
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>
        )}

        {/* Experience Timeline */}
        {experiences.length > 0 && (
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative pl-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
                  {/* Timeline Line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-[7px] top-4 bottom-0 w-[2px] bg-gray-200"></div>
                  )}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {exp.position}
                    </h4>
                    <div className="text-purple-600 font-medium mb-2">
                      {exp.company}
                    </div>
                    <div className="text-sm text-gray-500 mb-3">
                      {exp.startDate} - {exp.endDate}
                    </div>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education with Cards */}
        {education.length > 0 && (
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Education
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="p-5 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <div className="text-purple-600 font-medium mb-1">
                    {edu.school}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {edu.degree} in {edu.field}
                  </h4>
                  <div className="text-sm text-gray-500">
                    {edu.startDate} - {edu.endDate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills with Creative Design */}
        {skills.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Skills & Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 
                           text-purple-700 font-medium text-sm border border-purple-100"
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
