/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl rounded-full bg-transparent text-primary backdrop-blur-[50px] border border-white/10 flex justify-between items-center px-8 py-3 z-50 transition-transform scale-95 active:scale-90 shadow-sm shadow-black/50">
        <div className="font-display-sm text-[28px] tracking-tight text-primary">AETHER</div>
        <ul className="hidden md:flex gap-8 items-center">
          <li><a className="font-body-md text-on-surface-variant/80 hover:bg-white/5 hover:text-primary transition-all duration-500 rounded-full px-4 py-2" href="#">Mission</a></li>
          <li><a className="font-body-md text-on-surface-variant/80 hover:bg-white/5 hover:text-primary transition-all duration-500 rounded-full px-4 py-2" href="#">Fleet</a></li>
          <li><a className="font-body-md text-primary border-b border-primary/50 pb-1 hover:bg-white/5 transition-all duration-500 rounded-full px-4 py-2" href="#">Capabilities</a></li>
          <li><a className="font-body-md text-on-surface-variant/80 hover:bg-white/5 hover:text-primary transition-all duration-500 rounded-full px-4 py-2" href="#">Partners</a></li>
        </ul>
        <button className="liquid-glass-strong px-6 py-2 rounded-full font-label-caps text-label-caps text-primary hover:bg-white/5 transition-colors duration-300">Launch App</button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center px-margin-mobile md:px-margin-desktop pt-32 pb-24 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video autoPlay className="w-full h-full object-cover scale-120 object-top opacity-60" loop muted playsInline>
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/30 via-transparent to-surface-container-lowest z-10"></div>
        </div>

        <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto mt-20">
          {/* Badge */}
          <div className="liquid-glass-strong rounded-full px-4 py-1.5 mb-8 inline-flex items-center gap-2 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary">New Maiden Crewed Voyage Now Boarding</span>
          </div>

          {/* Headline */}
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg italic leading-none mb-8 text-primary drop-shadow-2xl">
            Venture Past Our Sky Across the Universe
          </h1>

          {/* Subheading */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">
            Pioneering sustainable deep space infrastructure. We build the ships, stations, and networks that will make humanity an interstellar species.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-24 w-full sm:w-auto">
            <button className="liquid-glass-strong px-8 py-4 rounded-full font-label-caps text-label-caps uppercase tracking-widest text-primary hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto text-center border border-white/30">
              Join the Fleet
            </button>
            <button className="liquid-glass px-8 py-4 rounded-full font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-primary hover:bg-white/5 transition-colors duration-300 w-full sm:w-auto text-center">
              Explore Tech
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
            <div className="liquid-glass rounded-2xl p-8 flex flex-col items-center justify-center text-center">
              <div className="font-display-sm text-[48px] text-primary mb-2">34.5 Min</div>
              <div className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Earth to Lunar Orbit</div>
            </div>
            <div className="liquid-glass rounded-2xl p-8 flex flex-col items-center justify-center text-center">
              <div className="font-display-sm text-[48px] text-primary mb-2">2.8B+</div>
              <div className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Nautical Miles Logged</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 border-y border-outline-variant/10 bg-surface-container-lowest/50 backdrop-blur-md relative z-10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="font-display-sm text-[32px] md:text-[48px] italic tracking-tight text-on-surface hover:text-primary transition-colors">Aeon</span>
            <span className="font-display-sm text-[32px] md:text-[48px] italic tracking-tight text-on-surface hover:text-primary transition-colors">Vela</span>
            <span className="font-display-sm text-[32px] md:text-[48px] italic tracking-tight text-on-surface hover:text-primary transition-colors">Apex</span>
            <span className="font-display-sm text-[32px] md:text-[48px] italic tracking-tight text-on-surface hover:text-primary transition-colors">Orbit</span>
            <span className="font-display-sm text-[32px] md:text-[48px] italic tracking-tight text-on-surface hover:text-primary transition-colors">Zeno</span>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="relative min-h-screen py-32 bg-surface-container-lowest overflow-hidden z-10">
        <div className="absolute inset-0 z-0 opacity-40">
          <video autoPlay className="w-full h-full object-cover" loop muted playsInline>
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-surface-container-lowest/80 backdrop-blur-sm z-10"></div>
        </div>

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-20">
          <div className="mb-20 text-center md:text-left">
            <h2 className="font-display-sm text-[56px] md:text-[72px] italic text-primary mb-6">Production evolved</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto md:mx-0">
              Our orbital manufacturing facilities leverage microgravity environments to produce materials impossible to create on Earth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="liquid-glass rounded-lg p-10 hover:bg-white/5 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full liquid-glass-strong flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" aria-hidden="true">auto_awesome</span>
              </div>
              <div className="flex gap-2 mb-6 flex-wrap">
                <span className="px-3 py-1 rounded-full border border-white/20 font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant">Generative</span>
                <span className="px-3 py-1 rounded-full border border-white/20 font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant">Real-time</span>
              </div>
              <h3 className="font-display-sm text-[32px] text-primary mb-4">AI Scenery</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Procedurally generated orbital landscapes adjust to crew circadian rhythms, reducing psychological stress during extended missions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="liquid-glass rounded-lg p-10 hover:bg-white/5 transition-all duration-500 group md:-translate-y-8">
              <div className="w-16 h-16 rounded-full liquid-glass-strong flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" aria-hidden="true">factory</span>
              </div>
              <div className="flex gap-2 mb-6 flex-wrap">
                <span className="px-3 py-1 rounded-full border border-white/20 font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant">Microgravity</span>
                <span className="px-3 py-1 rounded-full border border-white/20 font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant">Automated</span>
              </div>
              <h3 className="font-display-sm text-[32px] text-primary mb-4">Batch Production</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Flawless fiber optics and ultra-pure pharmaceuticals synthesized at scale in our autonomous orbital foundry platforms.
              </p>
            </div>

            {/* Card 3 */}
            <div className="liquid-glass rounded-lg p-10 hover:bg-white/5 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full liquid-glass-strong flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" aria-hidden="true">lightbulb</span>
              </div>
              <div className="flex gap-2 mb-6 flex-wrap">
                <span className="px-3 py-1 rounded-full border border-white/20 font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant">Adaptive</span>
                <span className="px-3 py-1 rounded-full border border-white/20 font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant">Solar</span>
              </div>
              <h3 className="font-display-sm text-[32px] text-primary mb-4">Smart Lighting</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Dynamic spectrum refraction systems that capture and diffuse raw stellar light throughout station interiors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bottom-0 bg-surface-container-lowest text-on-surface border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center px-margin-desktop py-12 gap-gutter opacity-80 hover:opacity-100 transition-opacity z-20 relative">
        <div className="font-display-sm text-headline-lg text-primary">AETHER</div>
        <p className="font-label-caps text-label-caps text-on-surface-variant tracking-widest text-center md:text-left">© 2024 AETHER AEROSPACE. BEYOND THE VOID.</p>
        <ul className="flex flex-wrap justify-center gap-8 mt-6 md:mt-0">
          <li><a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300 uppercase tracking-widest" href="#">Privacy</a></li>
          <li><a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300 uppercase tracking-widest" href="#">Terms</a></li>
          <li><a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300 uppercase tracking-widest" href="#">Protocol</a></li>
        </ul>
      </footer>
    </>
  );
}
