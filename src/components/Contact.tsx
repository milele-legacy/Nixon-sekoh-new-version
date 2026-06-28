"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    data.append("access_key", "50912fc3-1a81-497d-9631-f96e34f25ada");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });

    if (response.ok) {
      setSubmitted(true);
      setLoading(false);
      form.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 px-8 md:px-16 bg-navy">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        {/* Left */}
        <div className="reveal">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-gold text-xs font-bold uppercase tracking-widest">
              Reach Out
            </span>
            <span className="h-0.5 w-10 bg-gold inline-block" />
          </div>

          <h2
            className="font-black text-white leading-tight mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
            }}
          >
            Book Nixon{" "}
            <span className="text-gold">For Your Event</span>
          </h2>

          <p className="text-white/65 text-base leading-relaxed mb-10">
            Looking for a speaker to captivate your audience and inspire action?
            Book Nixon Sekoh and watch your event transform into a springboard
            for social impact.
          </p>

          <div className="flex flex-col gap-5">
            {[
              { icon: "📞", label: "Phone", value: "+254 721 380 125" },
              { icon: "✉️", label: "Email", value: "info@nixonsekoh.co.ke" },
              { icon: "📍", label: "Location", value: "Nairobi, Kenya" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-lg flex-shrink-0">
                  {c.icon}
                </div>
                <div>
                  <div className="text-gold text-xs font-bold uppercase tracking-wider">
                    {c.label}
                  </div>
                  <div className="text-white text-sm mt-0.5">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp Button */}
          
            href="https://wa.me/254721380125"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-10 bg-green-500 hover:bg-green-400 text-white font-bold text-base px-8 py-3.5 rounded-sm transition-all duration-200 hover:-translate-y-0.5 no-underline"
          >
            <span className="text-xl">💬</span>
            Chat on WhatsApp
          </a>
        </div>

        {/* Form */}
        <div className="bg-white/5 border border-white/10 rounded-md p-8 reveal reveal-delay-1">
          <h3
            className="text-white font-bold text-xl mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Send a Message
          </h3>

          {submitted ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">✅</div>
              <p className="text-gold font-bold text-lg">Message Sent!</p>
              <p className="text-white/60 text-sm mt-2">
                Thank you! Nixon will get back to you at{" "}
                <span className="text-gold">info@nixonsekoh.co.ke</span>{" "}
                shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Hidden field to set recipient email */}
              <input type="hidden" name="to" value="info@nixonsekoh.co.ke" />
              <input type="hidden" name="subject" value="New Booking Request — Nixon Sekoh Website" />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    First Name
                  </label>
                  <input
                    name="first_name"
                    type="text"
                    placeholder="John"
                    required
                    className="w-full border border-white/15 rounded-sm px-4 py-3 text-white text-sm outline-none focus:border-gold transition-colors placeholder:text-white/30"
                    style={{ background: "rgba(255,255,255,0.07)" }}
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Last Name
                  </label>
                  <input
                    name="last_name"
                    type="text"
                    placeholder="Doe"
                    required
                    className="w-full border border-white/15 rounded-sm px-4 py-3 text-white text-sm outline-none focus:border-gold transition-colors placeholder:text-white/30"
                    style={{ background: "rgba(255,255,255,0.07)" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="john@organization.com"
                  required
                  className="w-full border border-white/15 rounded-sm px-4 py-3 text-white text-sm outline-none focus:border-gold transition-colors placeholder:text-white/30"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                />
              </div>

              <div>
                <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+254 7XX XXX XXX"
                  className="w-full border border-white/15 rounded-sm px-4 py-3 text-white text-sm outline-none focus:border-gold transition-colors placeholder:text-white/30"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                />
              </div>

              <div>
                <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5">
                  Event / Organization
                </label>
                <input
                  name="organization"
                  type="text"
                  placeholder="Your event or organization"
                  className="w-full border border-white/15 rounded-sm px-4 py-3 text-white text-sm outline-none focus:border-gold transition-colors placeholder:text-white/30"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                />
              </div>

              <div>
                <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell Nixon about your event, date, and what you need..."
                  required
                  className="w-full border border-white/15 rounded-sm px-4 py-3 text-white text-sm outline-none focus:border-gold transition-colors placeholder:text-white/30 resize-y"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gold text-navy font-bold text-base py-3.5 rounded-sm hover:bg-gold-light transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Booking Request →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}