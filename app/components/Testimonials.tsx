const reviews = [
  {
    name: "Maria S.",
    location: "Homeowner",
    stars: 5,
    text: "Carlos replaced our whole electrical panel and was incredibly professional. Showed up on time, explained everything, and the price was exactly what he quoted. Highly recommend!",
  },
  {
    name: "Tom R.",
    location: "Small Business Owner",
    stars: 5,
    text: "Had an emergency at my shop — power went out on a Friday night. Carlos was there within the hour and had us back up and running. Real lifesaver. Will never call anyone else.",
  },
  {
    name: "Jessica L.",
    location: "Homeowner",
    stars: 5,
    text: "Got EV charger installed in my garage. Fast, clean work and he walked me through everything. Very fair price compared to other quotes I got.",
  },
  {
    name: "David M.",
    location: "Property Manager",
    stars: 5,
    text: "I manage several rental properties and Nunez Electrical is my go-to for all electrical work. Reliable, honest, and the tenants always say great things.",
  },
  {
    name: "Sarah K.",
    location: "Homeowner",
    stars: 5,
    text: "Needed recessed lighting installed in three rooms. Carlos did a beautiful job and left the place spotless. The lighting completely transformed our home.",
  },
  {
    name: "Mike T.",
    location: "Restaurant Owner",
    stars: 5,
    text: "Upgraded our commercial kitchen wiring. Zero downtime, passed inspection first try. Carlos knows his stuff and the crew was great.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-yellow-500 font-semibold uppercase tracking-widest text-sm mb-2">Reviews</p>
          <h2 className="text-4xl font-extrabold text-gray-900">What Neighbors Are Saying</h2>
          <div className="flex items-center justify-center gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
            <span className="text-gray-500 text-sm ml-2">5.0 average across 100+ reviews</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-0.5 mb-3">
                {[...Array(r.stars)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">"{r.text}"</p>
              <div>
                <div className="font-bold text-gray-900 text-sm">{r.name}</div>
                <div className="text-gray-400 text-xs">{r.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
