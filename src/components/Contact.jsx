import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaPhoneAlt,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    emailjs
      .sendForm(
        "service_gqhyn1s",
        "template_6bxef9m",
        form.current,
        "tWcjZ_8dklwdJ4Dqv"
      )
      .then(
        () => {
          setSuccess("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setSuccess("Failed to send message.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-slate-950 px-6 py-10"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="mb-4 text-center text-4xl font-bold text-white">
          Contact Me
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
          Interested in working together, discussing opportunities, or
          collaborating on innovative projects? Feel free to reach out.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Side */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="mb-8 text-2xl font-semibold text-white">
                Get In Touch
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                    <FaEnvelope size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Email</p>

                    <a
                      href="mailto:prajapatipoja83253@gmail.com"
                      className="text-white transition hover:text-cyan-400"
                    >
                      prajapatipoja83253@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                    <FaPhoneAlt size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Phone</p>

                    <a
                      href="tel:+919054450605"
                      className="text-white transition hover:text-cyan-400"
                    >
                      +91 90544 50605
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                    <FaMapMarkerAlt size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Location</p>

                    <p className="text-white">
                      Ahmedabad, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h4 className="mb-4 text-lg font-semibold text-white">
                  Connect With Me
                </h4>

                <div className="flex gap-4">
                  {/* GitHub */}
                  <a
                    href="https://github.com/pooja877"
                    target="_blank"
                    rel="noreferrer"
                    className="group relative rounded-xl border border-white/10 bg-white/5 p-4 text-cyan-400 transition-all duration-300 hover:border-cyan-400 hover:bg-white/10"
                  >
                    <FaGithub size={22} />

                    <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                      GitHub
                    </span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/pooja-prajapati-313a8b30b"
                    target="_blank"
                    rel="noreferrer"
                    className="group relative rounded-xl border border-white/10 bg-white/5 p-4 text-cyan-400 transition-all duration-300 hover:border-cyan-400 hover:bg-white/10"
                  >
                    <FaLinkedin size={22} />

                    <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                      LinkedIn
                    </span>
                  </a>

                  {/* Resume */}
                  <a
                    href="/Prajapati_Pooja_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative rounded-xl border border-white/10 bg-white/5 p-4 text-cyan-400 transition-all duration-300 hover:border-cyan-400 hover:bg-white/10"
                  >
                    <FaFileAlt size={22} />

                    <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Resume
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="mb-8 text-2xl font-semibold text-white">
                Send Message
              </h3>

              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-5"
              >
                <div>
                  <label className="mb-2 block text-slate-300">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="user_name"
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-slate-300">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="user_email"
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-slate-300">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    name="message"
                    placeholder="Write your message..."
                    required
                    className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 px-8 py-3 font-semibold text-white shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-purple-500/50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {success && (
                  <p className="text-center text-cyan-400">
                    {success}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;