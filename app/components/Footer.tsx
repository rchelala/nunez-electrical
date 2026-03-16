export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-yellow-400 text-xl">⚡</span>
          <div>
            <div className="text-white font-bold">Nunez Electrical</div>
            <div className="text-yellow-400 text-xs tracking-widest uppercase">Your Neighborhood Sparky</div>
          </div>
        </div>

        <div className="flex gap-6 text-sm">
          {["Services", "About", "Testimonials", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-gray-400 hover:text-yellow-400 transition-colors">
              {l}
            </a>
          ))}
        </div>

        <div className="text-gray-500 text-xs text-center">
          © {new Date().getFullYear()} Nunez Electrical. All rights reserved.<br />
          Licensed &amp; Insured · Lic. #XXXXXXX
        </div>
      </div>
    </footer>
  );
}
