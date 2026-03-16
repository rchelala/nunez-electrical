export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: visual */}
        <div className="relative">
          <div className="bg-yellow-400 rounded-2xl w-full aspect-square max-w-sm mx-auto flex items-center justify-center">
            <span className="text-9xl">⚡</span>
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 md:right-8 bg-gray-800 border border-yellow-400/30 rounded-xl px-5 py-3 shadow-xl">
            <div className="text-yellow-400 font-extrabold text-2xl">10+</div>
            <div className="text-gray-400 text-xs">Years in the trade</div>
          </div>
        </div>

        {/* Right: text */}
        <div>
          <p className="text-yellow-400 font-semibold uppercase tracking-widest text-sm mb-2">About Us</p>
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Locally Owned &amp; Operated
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Hi, I'm Luis Nunez — a licensed master electrician who's been
            keeping the lights on in this community for over a decade. I started
            Nunez Electrical because I believe every homeowner and business
            owner deserves an electrician they can trust: someone who shows up
            on time, explains the work clearly, and charges a fair price.
          </p>
          <p className="text-gray-300 leading-relaxed mb-8">
            Whether you've got a flickering light or need a full panel upgrade,
            I treat every job like it's in my own home. No upselling, no
            surprises — just honest, quality electrical work.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              "Master Electrician License",
              "Fully Insured",
              "Free Estimates",
              "Flat-Rate Pricing",
              "Background Checked",
              "Satisfaction Guaranteed",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="text-yellow-400 font-bold">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
