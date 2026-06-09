function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950"></div>

      {/* Glow Effects */}
      <div className="absolute left-10 top-10 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl"></div>

      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[3px] text-cyan-400">
          Python Developer • AI Enthusiast
        </p>

        <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
    Pooja Prajapati
  </span>
</h1>

        <h2 className="mb-6 text-2xl font-semibold text-slate-200 md:text-3xl">
          M.Sc. IT Student Building Intelligent Solutions With Python & AI
        </h2>

        <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-400">
          Passionate about Python development, Artificial Intelligence,
          Machine Learning, and modern web technologies. I enjoy building
          real-world projects that solve practical problems and create
          meaningful user experiences.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
  <a
  href="/Prajapati_Pooja_resume.pdf"
  download
  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 px-8 py-3 font-semibold text-white shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50"
>
  <span className="relative z-10">Download Resume</span>
</a>

  <a
    href="#projects"
    className="rounded-xl border border-cyan-500 px-7 py-3 font-medium text-white transition-all duration-300 hover:bg-cyan-500/10 hover:border-cyan-400"
  >
    View Projects
  </a>
</div>
      </div>
    </section>
  );
}

export default Hero;