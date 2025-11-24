import { useState, useEffect } from 'react'

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold">Eyeline</span>
            <span className="text-xs text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full">In Development</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#vision" className="text-gray-400 hover:text-white transition-colors text-sm hidden md:inline">Vision</a>
            <a href="#roadmap" className="text-gray-400 hover:text-white transition-colors text-sm hidden md:inline">Roadmap</a>
            <a href="#updates" className="text-gray-400 hover:text-white transition-colors text-sm hidden md:inline">Get Updates</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Coming Soon Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
              <span className="text-amber-400 text-sm font-medium">Coming Q2 2025 • Join the journey from Day 1</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Building the Future of<br/>
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">
                Multi-Object Tracking
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6">
              After deploying 50+ tracking systems, we're done accepting "good enough." 
              We're building UMOT—production-ready detection + tracking + Re-ID in one unified API.
            </p>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              <strong className="text-gray-300">Current Status:</strong> Architecture design phase. First alpha release targeted for March 2025.
              Follow along as we build this in public.
            </p>
          </div>

          {/* The Gap We're Solving - Visual */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-6">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">The Problem We're Solving</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-4xl mb-2">🎯</div>
                <div className="text-sm font-semibold text-green-400">Detection</div>
                <div className="text-xs text-gray-500 mt-1">Solved (YOLO, DETR, etc.)</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🔄</div>
                <div className="text-sm font-semibold text-yellow-400">Tracking</div>
                <div className="text-xs text-gray-500 mt-1">"Good enough" (scattered repos)</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🆔</div>
                <div className="text-sm font-semibold text-red-400">Re-ID</div>
                <div className="text-xs text-gray-500 mt-1">Too hard (everyone skips it)</div>
              </div>
            </div>
            <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/30">
              <div className="text-center">
                <span className="text-sm font-semibold text-violet-400">Our Mission: Make all three work together seamlessly</span>
              </div>
            </div>
          </div>

          {/* Vision Code Example */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-4">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">The API We're Building</span>
            </div>
            <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden opacity-90">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-500 text-sm ml-2">vision_api.py</span>
                <span className="ml-auto text-xs text-amber-400 font-mono">⚠️ Planned API (not yet available)</span>
              </div>
              <pre className="p-6 text-sm overflow-x-auto text-gray-300">
{`from umot import Pipeline  # Coming soon

# The simplicity we're aiming for:
pipeline = Pipeline(
    detector='yolov8x',        # or any model you prefer
    tracker='bytetrack',       # optimized, production-ready
    reid='market1501',         # ← the magic everyone skips
)

# Test locally, deploy globally:
results = pipeline.track('your_video.mp4')
print(f"MOTA: {results.mota:.2f}")  # Target: 0.85+

# Future: One parameter to scale
pipeline = Pipeline(
    detector='yolov8x',
    tracker='bytetrack',
    reid='market1501',
    backend='eyeline'  # ← Cloud scaling (2025)
)`}
              </pre>
            </div>
            <div className="mt-4 text-center text-sm text-gray-500">
              This is our north star. We're building towards this simplicity.
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 px-6 bg-gradient-to-b from-transparent to-violet-500/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why We're Building This</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Every CV project we've built hit the same walls. It's time to fix this once and for all.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
              <div className="text-3xl mb-3">🧩</div>
              <h3 className="font-semibold mb-2">Fragmented Ecosystem</h3>
              <p className="text-sm text-gray-400">
                ByteTrack in one repo, BoT-SORT in another, Re-ID nowhere. We'll unify them all.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="font-semibold mb-2">License Freedom</h3>
              <p className="text-sm text-gray-400">
                AGPL blocks enterprise adoption. UMOT will be Apache 2.0 from day one.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
              <div className="text-3xl mb-3">🆔</div>
              <h3 className="font-semibold mb-2">Re-ID First-Class</h3>
              <p className="text-sm text-gray-400">
                No more ID switching. We're making Re-ID integration seamless and accessible.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-semibold mb-2">Built to Scale</h3>
              <p className="text-sm text-gray-400">
                Same API from laptop to cloud. No DevOps PhD required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">The Build Plan</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            We're building this in public. Here's what's coming and when.
          </p>

          <div className="max-w-3xl mx-auto">
            {/* Phase 1 */}
            <div className="relative pl-8 pb-8 border-l-2 border-violet-500/30">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-violet-500 rounded-full animate-pulse"></div>
              <div className="ml-6">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">Phase 1: Core UMOT</h3>
                  <span className="text-xs px-2 py-1 bg-amber-500/20 text-amber-400 rounded-full">Current Focus</span>
                </div>
                <p className="text-gray-400 text-sm mb-3">January - March 2025</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1">○</span>
                    <span>Implement ByteTrack, BoT-SORT, OC-SORT with optimizations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1">○</span>
                    <span>Integrate Market1501, MSMT17 Re-ID models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1">○</span>
                    <span>Unified Pipeline API design and implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1">○</span>
                    <span>First alpha release for early testers</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative pl-8 pb-8 border-l-2 border-gray-700">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-600 rounded-full"></div>
              <div className="ml-6">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">Phase 2: Production Ready</h3>
                  <span className="text-xs px-2 py-1 bg-gray-700 text-gray-400 rounded-full">Q2 2025</span>
                </div>
                <p className="text-gray-400 text-sm mb-3">April - June 2025</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">○</span>
                    <span>Public beta release</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">○</span>
                    <span>Comprehensive benchmarks and documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">○</span>
                    <span>DeepSORT and StrongSORT integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">○</span>
                    <span>Community feedback and iteration</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative pl-8 pb-8 border-l-2 border-gray-700">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-600 rounded-full"></div>
              <div className="ml-6">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">Phase 3: Cloud Scale</h3>
                  <span className="text-xs px-2 py-1 bg-gray-700 text-gray-400 rounded-full">Q3 2025</span>
                </div>
                <p className="text-gray-400 text-sm mb-3">July - September 2025</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">○</span>
                    <span>Eyeline Cloud beta launch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">○</span>
                    <span>Auto-scaling infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">○</span>
                    <span>Domain-specific models (retail, traffic, security)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-600 mt-1">○</span>
                    <span>Research lab: Latest papers within 30 days</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Commitment Box */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-violet-500/5 to-cyan-500/5 border border-gray-800">
            <div className="text-center mb-6">
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">OUR COMMITMENT</span>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">Building in Public</h3>
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
              Every line of code will be open source. Every decision documented. 
              Join our journey from day one and help shape what UMOT becomes.
            </p>
          </div>
        </div>
      </section>

      {/* Expected Metrics Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-violet-500/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What We're Aiming For</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Based on our research and prototypes, here's what we expect to deliver.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text mb-2">0.85+</div>
              <div className="text-gray-400 text-sm">Target MOTA Score</div>
              <div className="text-gray-500 text-xs mt-1">With Re-ID integration</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 text-transparent bg-clip-text mb-2">5 min</div>
              <div className="text-gray-400 text-sm">Setup Time</div>
              <div className="text-gray-500 text-xs mt-1">From install to tracking</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text mb-2">30 days</div>
              <div className="text-gray-400 text-sm">Paper to Production</div>
              <div className="text-gray-500 text-xs mt-1">New SOTA tracker implementation</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="updates" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Be Part of the Journey</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              We're building UMOT in public. Follow along, provide feedback, and get early access when we launch.
            </p>
            
            <div className="space-y-6">
              {/* Email Signup */}
              <div>
                <p className="text-sm text-gray-500 mb-4">Get notified when we release the first alpha:</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-violet-500 text-white placeholder-gray-500"
                    disabled
                  />
                  <button 
                    className="px-6 py-3 bg-gray-700 text-gray-400 rounded-lg cursor-not-allowed opacity-50"
                    disabled
                  >
                    Coming Soon
                  </button>
                </div>
                <p className="text-xs text-gray-600 mt-2">Email signup will be available February 2025</p>
              </div>

              {/* Alternative Actions */}
              <div className="pt-6 border-t border-gray-800">
                <p className="text-sm text-gray-400 mb-4">In the meantime:</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://github.com/eyeline-ai" 
                    className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    Watch on GitHub
                  </a>
                  <a 
                    href="mailto:hello@eyeline.dev?subject=Following UMOT Development" 
                    className="px-6 py-3 border border-gray-700 hover:bg-white/5 text-white rounded-lg font-medium transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Apache 2.0 (Always)
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Built in Public
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                By Practitioners
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-indigo-600 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <span className="font-bold">Eyeline</span>
            </div>
            <p className="text-sm text-gray-400 max-w-md mx-auto">
              Building the future of multi-object tracking. Coming Q2 2025.
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com/eyeline-ai" className="text-gray-500 hover:text-gray-300 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
            <a href="mailto:hello@eyeline.dev" className="text-gray-500 hover:text-gray-300 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>
          
          <div className="text-center text-sm text-gray-500">
            © 2025 Eyeline. A vision in progress. Built with frustration at bad tracking.
          </div>
        </div>
      </footer>
    </div>
  )
}