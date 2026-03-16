const services = [
  {
    icon: "🏠",
    title: "Residential Wiring",
    description:
      "New construction wiring, rewiring older homes, panel upgrades, and outlet/switch installation done right the first time.",
  },
  {
    icon: "🏢",
    title: "Commercial Electrical",
    description:
      "Offices, retail spaces, warehouses — we handle commercial jobs of all sizes with minimal disruption to your business.",
  },
  {
    icon: "🚨",
    title: "Emergency Repairs",
    description:
      "Electrical emergency? We're available 24/7. Tripped breakers, power outages, sparking outlets — call us anytime.",
  },
  {
    icon: "⚡",
    title: "Panel Upgrades",
    description:
      "Upgrade from an outdated fuse box or undersized panel to a modern breaker panel that meets today's power demands.",
  },
  {
    icon: "💡",
    title: "Lighting Installation",
    description:
      "Recessed lighting, ceiling fans, outdoor fixtures, under-cabinet lighting — we transform spaces with great lighting.",
  },
  {
    icon: "🔌",
    title: "EV Charger Installation",
    description:
      "Level 2 EV charger installation for home and business. Fast, safe, and code-compliant charging setup.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-yellow-500 font-semibold uppercase tracking-widest text-sm mb-2">What We Do</p>
          <h2 className="text-4xl font-extrabold text-gray-900">Electrical Services</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            From a single outlet to a full rewire — no job is too big or too small for Nunez Electrical.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/10 transition-all"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-700 transition-colors"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
