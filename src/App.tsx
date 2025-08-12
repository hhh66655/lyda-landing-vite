import React from "react";

function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`relative w-full max-w-7xl mx-auto px-6 md:px-10 ${className}`}>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-appleBg text-appleText">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-appleBg/80 backdrop-blur border-b border-appleBorder">
        <Section className="py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-lyda-glasses.svg" alt="LYDA" className="h-8 w-auto" />
            <span className="font-semibold tracking-tight">LYDA Technology</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-appleText/80">
            <a href="#features" className="hover:text-appleText">Features</a>
            <a href="#technology" className="hover:text-appleText">Technology</a>
            <a href="#usecases" className="hover:text-appleText">Use Cases</a>
            <a href="#design" className="hover:text-appleText">Design</a>
          </nav>
        </Section>
      </header>

      {/* Hero */}
      <Section className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs text-appleText/70 bg-white rounded-full px-3 py-1 border border-appleBorder">
              Next-gen wearable • Vision meets Intelligence
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              AI Glasses that feel <span className="whitespace-nowrap">effortless.</span>
            </h1>
            <p className="text-appleText/80 leading-relaxed max-w-xl">
              Minimal design. Powerful on-device AI. See context where it matters—right in your line of sight.
            </p>

            {/* metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 text-sm">
              <div>
                <div className="text-2xl font-semibold">&lt; 30 ms</div>
                <div className="text-appleMuted">Latency</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">6h</div>
                <div className="text-appleMuted">Battery</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">&lt; 55 g</div>
                <div className="text-appleMuted">Weight</div>
              </div>
            </div>
          </div>

          {/* hero image + overlay */}
          <div className="relative rounded-[32px] border border-appleBorder bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] w-full overflow-hidden">
            <img
              src="/hero-glasses.jpg"
              alt="LYDA AR HUD view"
              className="w-full h-full object-cover aspect-[16/10]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
              <div className="rounded-full px-3 py-1 text-xs bg-white/80 backdrop-blur border border-appleBorder text-appleText shadow-sm">
                AR HUD preview
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section id="features" className="py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Designed to be simple. Built to be powerful.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            ["AR Navigation", "Routes and landmarks overlaid in the real world—heads-up guidance indoors and out."],
            ["Real-time Translation", "Subtitle what you hear and see with speech + visual translation."],
            ["Object & Text Recognition", "Identify products, signs, and documents with on-device vision."],
            ["Natural Voice", "Hands-free assistant for notes, reminders, capture, and Q&A."],
            ["Privacy First", "On-device by default with secure cloud for heavy workloads."],
            ["All-day Comfort", "Featherweight frame, balanced fit, and swap-in lenses."]
          ].map(([t, d]) => (
            <div key={t} className="rounded-3xl border border-appleBorder bg-white p-6 hover:shadow-sm transition-shadow">
              <div className="font-medium">{t}</div>
              <div className="text-appleMuted mt-2 text-sm leading-relaxed">{d}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Technology */}
      <Section id="technology" className="py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Chip-to-cloud intelligence</h2>
            <p className="text-appleText/80 mt-4 max-w-xl">
              Edge models power instant recognition; the cloud handles complex dialog and long-context tasks. An adaptive router chooses the best path for every request.
            </p>
            <ul className="mt-6 space-y-3 text-appleText/80 text-sm">
              <li>• Edge AI: quantized/distilled models for sub-30ms response</li>
              <li>• Cloud AI: LLM + retrieval for deep reasoning and translation</li>
              <li>• Security: SSO, access control, and audit trails</li>
              <li>• SDKs & APIs: iOS/Android and Web integrations</li>
            </ul>
          </div>

          {/* design image stays in technology column as visual card */}
          <div className="relative rounded-[28px] border border-appleBorder bg-white w-full overflow-hidden shadow-[0_16px_32px_rgba(0,0,0,0.06)]">
            <img
              src="/design-transparent.jpg"
              alt="Transparent AI glasses hardware view"
              className="w-full h-full object-cover aspect-[16/10]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
              <div className="rounded-full px-3 py-1 text-xs bg-white/80 backdrop-blur border border-appleBorder text-appleText shadow-sm">
                Hardware detail
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Design */}
      <Section id="design" className="py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Comfort that disappears</h2>
            <p className="text-appleText/80 mt-4 max-w-xl">
              Aerospace-grade materials and ergonomic temples for long wear. Swap lenses and finishes to fit your day.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-6 text-sm">
              <div><div className="text-xl font-semibold">&lt; 55 g</div><div className="text-appleMuted">Ultra-light</div></div>
              <div><div className="text-xl font-semibold">IP54</div><div className="text-appleMuted">Dust & Water</div></div>
              <div><div className="text-xl font-semibold">6h</div><div className="text-appleMuted">Battery</div></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-appleBorder mt-16">
        <Section className="py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo-lyda-glasses.svg" alt="LYDA" className="h-7 w-auto" />
            <span className="font-semibold tracking-tight">LYDA Technology</span>
          </div>
          <div className="md:text-right">
            <div className="text-appleText/70 text-sm mb-1">Email</div>
            <a href="mailto:lydatechtx@gmail.com" className="underline underline-offset-4">lydatechtx@gmail.com</a>
          </div>
        </Section>
        <div className="text-center text-appleText/60 text-xs pb-8">
          © {new Date().getFullYear()} LYDA Technology. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
