
import {
  FaGithub,
  FaFileAlt,
  FaVideo,
} from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "AI-Based Interview Analysis System",
      description:
        "Developed an AI-powered interview assessment platform that analyzes candidate responses, facial expressions, eye contact, and voice confidence. Implemented audio, video, and answer evaluation modules to generate automated performance scores and detailed feedback reports.",
      technologies: [
        "Python",
        "React.js",
        "Firebase",
        "OpenCV",
        "MediaPipe",
        "Librosa",
      ],
      github: "https://github.com/pooja877/Interviewer-.git",
      report: "/InterViewAI.pdf",
    },

    {
      title: "AashrayRealty – Real Estate Property Booking System",
      description:
        "Built a full-stack real estate platform for property listing, booking, and management. Integrated Razorpay payment gateway, booking workflows, conditional refund policies, rent tracking, and admin management features.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Razorpay",
      ],
      github: "https://github.com/pooja877/AashrayRealty.com.git",
      report: "/AashrayRealty.pdf",
      video: "/AashrayRealty.mp4",
    },

    {
      title: "MindSpark – AI-Based Mind Guessing System",
      description:
        "Designed an intelligent question-answer based system capable of predicting user-selected objects through dynamic decision-making logic. Developed an interactive Flask application focused on accuracy and user engagement.",
      technologies: [
        "Python",
        "Flask",
        "HTML",
        "CSS",
      ],
      github: "https://github.com/pooja877/Mind-Guessing-System.git",
      report: "/MindSpark.pdf",
      video: "/MindSpark.mp4",
    },

    {
      title: "Telegram & WhatsApp Product Finder Bot",
      description:
        "Developed automated chatbots for Telegram and WhatsApp integrated with Google Sheets. Implemented state-based conversation flow, product search functionality, and dynamic response generation for seamless user interaction.",
      technologies: [
        "Google Apps Script",
        "Telegram Bot API",
        "Twilio WhatsApp",
        "Google Sheets",
      ],
      video: "/Telegram_chatbot.mp4",
    },

    {
      title: "AI Voice Character Converter",
      description:
        "Currently developing an AI-powered voice conversion platform that transforms user speech into selected character voices. Exploring deep learning and speech processing techniques for realistic voice synthesis and conversion.",
      technologies: [
        "Python",
        "Django",
        "PyTorch",
        "Librosa",
        "Speech Processing",
      ],
      status: "Ongoing",
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-slate-950 px-6 py-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="mb-4 text-center text-4xl font-bold text-white">
          Projects
        </h2>

        <p className="mx-auto mb-14 max-w-3xl text-center text-slate-400">
          A collection of academic and personal projects showcasing my
          skills in Python Development, Artificial Intelligence,
          Machine Learning, Full Stack Development, and Automation.
        </p>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-colors duration-300 hover:border-cyan-400"
            >
              {/* Title */}
              <div className="mb-4 flex items-center gap-3">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                {project.status === "Ongoing" && (
                  <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-medium text-yellow-400">
                    Ongoing
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mb-5 leading-7 text-slate-300">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-cyan-500 px-4 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-500/10"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}

                {project.report && (
                  <a
                    href={project.report}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-purple-500 px-4 py-2 text-sm font-medium text-purple-400 transition hover:bg-purple-500/10"
                  >
                    <FaFileAlt />
                    Report
                  </a>
                )}

                {project.video && (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-pink-500 px-4 py-2 text-sm font-medium text-pink-400 transition hover:bg-pink-500/10"
                  >
                    <FaVideo />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;