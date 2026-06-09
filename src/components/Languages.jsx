function Languages() {
  const languages = [
    {
      name: "Gujarati",
      stars: 5,
      level: "Native",
    },
    {
      name: "Hindi",
      stars: 5,
      level: "Native",
    },
    {
      name: "English",
      stars: 4,
      level: "Professional Working",
    },
  ];

  return (
    <section
      id="languages"
      className="scroll-mt-24 bg-slate-950 px-6 py-10"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="mb-4 text-center text-4xl font-bold text-white">
          Languages
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-center text-slate-400">
          Languages I use for communication and professional interaction.
        </p>

        {/* Languages Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {languages.map((language, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-lg transition-colors duration-300 hover:border-cyan-400"
            >
              {/* Language Name */}
              <h3 className="mb-2 text-xl font-semibold text-white">
                {language.name}
              </h3>

              {/* Level */}
              <p className="mb-4 text-sm text-slate-400">
                {language.level}
              </p>

              {/* Stars */}
              <div className="text-2xl">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={
                      star <= language.stars
                        ? "text-cyan-400"
                        : "text-slate-700"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Rating */}
              <p className="mt-3 text-sm text-slate-400">
                {language.stars}/5
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Languages;