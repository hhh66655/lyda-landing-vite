import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <div className="inline-flex items-center justify-center rounded-full px-3 py-1 text-xs border border-white/20 bg-white/5 mb-4">
          Next‑gen wearable · Vision meets Intelligence
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Invisible Tech, <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-brand2">Smarter Vision</span>
        </h1>
        <p className="text-white/80 leading-relaxed mb-6">
          LYDA AI Glasses blend <strong>computer vision</strong>, <strong>speech understanding</strong>, and <strong>AR overlays</strong> into a seamless experience.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="mailto:lydatechtx@gmail.com?subject=Talk%20to%20Sales" className="rounded-2xl px-5 py-2.5 bg-white text-black hover:bg-white/90">Talk to Sales</a>
          <a href="mailto:lydatechtx@gmail.com?subject=Book%20a%20Demo" className="rounded-2xl px-5 py-2.5 bg-white/10 border border-white/20 hover:bg-white/20">Book a Demo</a>
        </div>
      </div>
    </div>
  )
}
