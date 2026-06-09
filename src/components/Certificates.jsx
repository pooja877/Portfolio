import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

function Certificates() {
  const certificates = [
    {
      title: "Machine Learning Training",
      issuer: "Internshala Courses",
      file: "/internshala.png",
    },
    {
      title: "Project Completion Certificate",
      issuer: "AashrayRealty",
      file: "/AashrayRealty.png",
    },
  ];

  return (
    <section
      id="certificates"
      className="scroll-mt-24 bg-slate-950 px-6 py-10"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="mb-4 text-center text-4xl font-bold text-white">
          Certifications
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-center text-slate-400">
          Certifications and achievements that reflect my continuous
          learning and practical experience in technology.
        </p>

        {/* Certificates Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-colors duration-300 hover:border-cyan-400"
            >
              <div className="mb-4 flex items-center gap-3">
                <FaCertificate
                  className="text-cyan-400"
                  size={24}
                />

                <h3 className="text-xl font-semibold text-white">
                  {certificate.title}
                </h3>
              </div>

              <p className="mb-6 text-slate-300">
                {certificate.issuer}
              </p>

              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-cyan-500 px-4 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-500/10"
              >
                <FaExternalLinkAlt size={12} />
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;