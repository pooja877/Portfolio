import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const educationData = [
    {
      degree: "Master of Science in Information Technology (M.Sc. IT)",
      institute: "KS School of Business Management, Gujarat University",
      year: "2025 - Present",
      score: "Currently Pursuing",
    },
    {
      degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
      institute: "KS School of Business Management, Gujarat University",
      year: "2022 - 2025",
      score: "CGPA: 4.12 / 5.00",
    },
    {
      degree: "Higher Secondary Education (HSC)",
      institute:
        "Shri Jivkor Vanita Vishram School • Gujarat Board",
      year: "2022",
      score: "Percentage: 89.60%",
    },
    {
      degree: "Secondary Education (SSC)",
      institute:
        "Shri Jivkor Vanita Vishram School • Gujarat Board",
      year: "2020",
      score: "Percentage: 79.17%",
    },
  ];

  return (
    <section
      id="education"
      className="scroll-mt-24 bg-slate-950 px-6 py-10"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="mb-4 text-center text-4xl font-bold text-white">
          Education
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
          My academic journey in Information Technology and
          continuous learning in modern technologies.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 h-full w-1 rounded-full bg-cyan-500/30"></div>

          <div className="space-y-8">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="relative ml-12 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all duration-300 hover:border-cyan-400"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[46px] top-8 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-white">
                  <FaGraduationCap size={14} />
                </div>

                {/* Degree + Year */}
                <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    {item.degree}
                  </h3>

                  <span className="w-fit rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                    {item.year}
                  </span>
                </div>

                {/* Institute */}
                <p className="mb-3 text-slate-300">
                  {item.institute}
                </p>

                {/* Score */}
                <p className="font-medium text-cyan-400">
                  {item.score}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;