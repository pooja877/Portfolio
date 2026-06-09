import {
  FaBrain,
  FaCode,
  FaPython,
  FaGraduationCap,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-slate-950 px-6 py-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-14 text-center text-4xl font-bold text-white">
          About Me
        </h2>

        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left Side */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-cyan-400">
              Python Developer & AI Enthusiast
            </h3>

            <p className="mb-5 leading-8 text-slate-400">
              I am an M.Sc. Information Technology student with a strong
              interest in Python development, Artificial Intelligence,
              Machine Learning, and modern web technologies.
            </p>

            <p className="mb-5 leading-8 text-slate-400">
              I enjoy building real-world applications that solve practical
              problems and create meaningful user experiences through
              innovative technology.
            </p>

            <p className="leading-8 text-slate-400">
              My focus is on developing scalable applications, exploring
              AI-driven solutions, and continuously improving my technical
              skills through hands-on projects and learning.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid gap-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition duration-300 hover:border-cyan-400/40 hover:bg-white/10">
              <div className="mb-3 flex items-center gap-3">
                <FaBrain className="text-3xl text-cyan-400" />
                <h4 className="text-lg font-semibold text-white">
                  AI-Based Projects
                </h4>
              </div>

              <p className="text-slate-400">
                Built intelligent systems using Python, OpenCV, MediaPipe,
                and Machine Learning concepts.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition duration-300 hover:border-cyan-400/40 hover:bg-white/10">
              <div className="mb-3 flex items-center gap-3">
                <FaCode className="text-3xl text-cyan-400" />
                <h4 className="text-lg font-semibold text-white">
                  Web Development
                </h4>
              </div>

              <p className="text-slate-400">
                Experience building responsive applications using React.js,
                MERN Stack, and Tailwind CSS.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition duration-300 hover:border-cyan-400/40 hover:bg-white/10">
              <div className="mb-3 flex items-center gap-3">
                <FaPython className="text-3xl text-cyan-400" />
                <h4 className="text-lg font-semibold text-white">
                  Python Development
                </h4>
              </div>

              <p className="text-slate-400">
                Skilled in Python, Flask, data processing, automation, and
                backend development.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition duration-300 hover:border-cyan-400/40 hover:bg-white/10">
              <div className="mb-3 flex items-center gap-3">
                <FaGraduationCap className="text-3xl text-cyan-400" />
                <h4 className="text-lg font-semibold text-white">
                  Continuous Learning
                </h4>
              </div>

              <p className="text-slate-400">
                Pursuing M.Sc. IT while expanding knowledge in Artificial
                Intelligence and modern technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;