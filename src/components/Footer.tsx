export default function Footer() {
  return (
    <footer className="bg-[#07122e] px-8 md:px-16 py-6 border-t border-gold/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/40 text-sm">
          © 2024 <span className="text-gold">Nixon Sekoh</span>. All rights
          reserved. · Nairobi, Kenya
        </p>
        <div className="flex gap-3">
          {["in", "tw", "fb"].map((s) => (
            <a
              key={s}
              href="#"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 text-xs hover:border-gold hover:text-gold transition-all duration-200 no-underline"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
