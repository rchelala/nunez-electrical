export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #facc15,
              #facc15 1px,
              transparent 1px,
              transparent 40px
            )`,
          }}
        />
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            Your Neighborhood{" "}
            <span className="text-yellow-400">Sparky</span>
          </h1>

          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Licensed & insured electrician serving the community with honest
            pricing, quality workmanship, and same-day service. Big jobs, small
            jobs — Nunez Electrical does it all.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-400/20"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+15551234567"
              className="border border-yellow-400/50 text-yellow-400 px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400/10 transition-colors"
            >
              ⚡ (555) 123-4567
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mt-10">
            {[
              { icon: "🛡️", label: "Licensed & Insured" },
              { icon: "⭐", label: "5-Star Rated" },
              { icon: "💰", label: "Free Estimates" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-base">{b.icon}</span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats card */}
        <div className="hidden md:grid grid-cols-2 gap-4">
          {[
            { number: "500+", label: "Jobs Completed" },
            { number: "10+", label: "Years Experience" },
            { number: "100%", label: "Licensed & Insured" },
            { number: "5★", label: "Rated Service" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-gray-800/80 border border-gray-700 rounded-2xl p-6 text-center hover:border-yellow-400/40 transition-colors"
            >
              <div className="text-4xl font-extrabold text-yellow-400 mb-1">{s.number}</div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
