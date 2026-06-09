import {
  FaPython,
  FaReact,
  FaGithub,
  FaBrain,
  FaUsers,
} from "react-icons/fa";
import {
  SiFlask,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiOpencv,
  SiOpenai 
} from "react-icons/si";

function Skills() {
  const mainSkills = [
    { icon: <FaPython />, name: "Python" },
    { icon: <FaBrain />, name: "Machine Learning" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <FaPython />, name: "Django (Basic)" },
    { icon: <SiOpencv />, name: "OpenCV" },
    { icon: <FaBrain />, name: "MediaPipe" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiOpenai />, name: "ChatGPT" }
  ];

  const additionalSkills = [
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "Express.js",
  "Angular.js",
  "Java",
  "C",
  "C++",
  "C#",
  "Data Analysis",
  "Data Preprocessing",
  "Git",
  "VS Code",
  "Cloudinary",
  "Gemini",
  "Perplexity AI",
];

  const softSkills = [
    "Problem Solving",
    "Teamwork",
    "Time Management",
    "Fast Learner",
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-slate-950 px-6 py-10"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="mb-4 text-center text-4xl font-bold text-white">
          Technical Skills
        </h2>

        <p className="mx-auto mb-14 max-w-3xl text-center text-slate-400">
          Technologies, frameworks, databases, AI tools, and development
          skills that I use to build modern applications and intelligent
          solutions.
        </p>

        {/* Main Skills */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mainSkills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="mb-4 text-4xl text-cyan-400">
                {skill.icon}
              </div>

              <h3 className="text-lg font-semibold text-white">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-semibold text-cyan-400">
            Additional Skills
          </h3>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
            <div className="flex flex-wrap justify-center gap-4">
              {additionalSkills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-xl border border-cyan-500/20 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-white hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
            <div className="mb-6 flex items-center justify-center gap-3">
              <FaUsers className="text-3xl text-cyan-400" />

              <h3 className="text-2xl font-semibold text-white">
                Soft Skills
              </h3>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-xl border border-cyan-500/20 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-white hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;