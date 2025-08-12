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
    <div className="min-h-screen bg-[#0a0b0f] text-white selection:bg-white/20">
      {/* subtle background glow */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_60%)]" />
        <div className="absolute -bottom-40 right-1/3 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.16),transparent_60%)]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/30">
        <Section className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-white/10 grid place-items-center font-bold">L</div>
            <div className="font-semibold tracking-tight">LYDA Technology</div>
            <span className="ml-2 text-xs rounded-full px-2 py-0.5 border border-white/20 bg-white/10">AI GLASSES</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#technology" className="hover:text-white">Technology</a>
            <a href="#usecases" className="hover:text-white">Use Cases</a>
            <a href="#design" className="hover:text-white">Design</a>
          </nav>
          {/* removed right-side buttons per request */}
        </Section>
      </header>

      {/* Hero (right visual placeholder removed) */}
      <Section id="hero" className="py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs text-white/70 bg-white/5 rounded-full px-3 py-1 border border-white/10">
              Next-gen wearable · Vision meets Intelligence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              Invisible Tech,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#A78BFA]">
                Smarter Vision
              </span>
            </h1>
            <p className="text-white/80 leading-relaxed max-w-xl">
              LYDA AI Glasses blend <strong>computer vision</strong>, <strong>speech understanding</strong>, and{" "}
              <strong>AR overlays</strong>. No more pulling out your phone—relevant information appears where you look.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 text-sm">
              <div><div className="text-2xl font-semibold">&lt; 30 ms</div><div className="text-white/60">Latency</div></div>
              <div><div className="text-2xl font-semibold">All-day</div><div className="text-white/60">Battery</div></div>
              <div><div className="text-2xl font-semibold">&lt; 55 g</div><div className="text-white/60">Weight</div></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section id="features" className="py-10 md:py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">AI that puts information in your line of sight</h2>
            <p className="text-white/70 mt-3 max-w-2xl">Modular capabilities for commuting, travel, business, and frontline work.</p>
          </div>
          <div className="hidden md:block text-white/50 text-sm">Works with phone/cloud · Enterprise deployment ready</div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            ["AR Navigation & Spatial Guidance", "Overlaid routes and landmarks indoors and outdoors—glance to move, heads-up to arrive."],
            ["Real-time Translation", "Audio + visual translation: subtitle what you hear and see. Cross-language communication made effortless."],
            ["Object & Text Recognition", "Identify products, road signs, documents, and gauges. Crisp HUD reduces cognitive load."],
            ["AI Voice Assistant", "Natural conversation for reminders, Q&A, capture commands, and more—hands-free."],
            ["Privacy & Security", "On-device first with offline mode. End-to-end encryption, access control, audit logging."],
            ["Low-power, High-performance", "Edge acceleration and distilled models deliver all-day battery with millisecond response."]
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition-colors p-5">
              <h3 className="text-white font-medium text-lg">{title}</h3>
              <p className="text-white/75 mt-2 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Technology */}
      <Section id="technology" className="py-10 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">End-to-end AI from chip to cloud</h2>
            <p className="text-white/80 mt-4 max-w-xl">
              Light on-device models handle ultra-low-latency recognition; cloud LLMs provide context, retrieval, and long-form translation. An adaptive router chooses the best path per task.
            </p>
            <ul className="mt-6 space-y-3 text-white/75 text-sm">
              <li>• Edge AI: quantization / distillation / pruning for on-glasses recognition</li>
              <li>• Cloud AI: complex dialog, RAG, and long-context translation</li>
              <li>• Security: SSO, granular permissions, audit trails</li>
              <li>• Open APIs: SDKs (Android/iOS), Web APIs, private deployments</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              {["Low Latency", "All-day Battery", "Industry-ready", "Data Control"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full bg-white/10 border border-white/20">{t}</span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl p-1 bg-gradient-to-br from-[#22D3EE]/20 to-[#A78BFA]/20">
            <div className="rounded-[22px] bg-black/50 border border-white/10 p-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["Vision Models", "Detection / OCR / scene understanding with custom classes and continual learning."],
                  ["Speech & Translation", "ASR + TTS + NMT, robust in noisy environments."],
                  ["Multimodal I/O", "Voice, gaze, and gestures with crisp HUD output."],
                  ["Mgmt & Security", "Device mgmt, key rotation, data isolation for compliance."]
                ].map(([t, d]) => (
                  <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-white font-medium">{t}</div>
                    <div className="text-white/70 text-sm mt-1">{d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Use Cases */}
      <Section id="usecases" className="py-10 md:py-20">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Use cases</h2>
        <p className="text-white/70 mt-3 max-w-2xl">We co-create solutions with partners so teams get more done with minimal workflow change.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            ["Smart Mobility", "Heads-up navigation and alerts. Indoor positioning for transit hubs and malls."],
            ["Cross-border Business", "Live meeting captions, business card capture, instant summaries."],
            ["Field Ops & Maintenance", "Gauge/indicator recognition, remote expert collaboration, audit trail."]
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition-colors p-5">
              <div className="text-white font-medium">{title}</div>
              <div className="text-white/70 text-sm mt-2">{desc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Design (left visual placeholder removed) */}
      <Section id="design" className="py-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Industrial design meets comfort</h2>
            <p className="text-white/80 mt-4 max-w-xl">
              Aerospace-grade materials and ergonomic temples for all-day wear. Swap lenses and colors to fit professional and lifestyle settings.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-6 text-sm text-white/80">
              <div><div className="text-xl font-semibold">&lt; 55 g</div><div className="text-white/60">Ultra-light</div></div>
              <div><div className="text-xl font-semibold">IP54</div><div className="text-white/60">Dust & Water</div></div>
              <div><div className="text-xl font-semibold">All-day</div><div className="text-white/60">Battery</div></div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA / Contact section removed */}

      {/* Footer */}
<footer className="border-t border-white/10 mt-16">
  <Section className="py-10 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-white/10 grid place-items-center font-bold">L</div>
        <div className="font-semibold tracking-tight">LYDA Technology</div>
      </div>
      <p className="text-white/70 text-sm">
        Information, delivered naturally. AI glasses for consumers and enterprises—the next human-computer interface.
      </p>
    </div>

    {/* only show company email */}
    <div className="md:text-right">
      <div className="text-white/80 font-medium mb-1">Email</div>
      <a
        href="mailto:lydatechtx@gmail.com"
        className="text-white underline underline-offset-4 hover:no-underline"
      >
        lydatechtx@gmail.com
      </a>
    </div>
  </Section>

  <div className="text-center text-white/50 text-xs pb-8">
    © {new Date().getFullYear()} LYDA Technology. All rights reserved.
  </div>
</footer>

    </div>
  );
}
