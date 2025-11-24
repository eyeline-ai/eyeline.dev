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
            <span className="text-xs text-violet-400 border border-violet-500/30 px-2 py-0.5 rounded-full">UMOT Inside</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#problem" className="text-gray-400 hover:text-white transition-colors text-sm hidden md:inline">The Problem</a>
            <a href="#solution" className="text-gray-400 hover:text-white transition-colors text-sm hidden md:inline">Solution</a>
            <a href="#benchmarks" className="text-gray-400 hover:text-white transition-colors text-sm hidden md:inline">Benchmarks</a>
            <a href="https://github.com/eyeline-ai/umot" className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 rounded-lg transition-colors text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              Star on GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Authority Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-400 text-sm">Built by CV engineers who've deployed 50+ production tracking systems</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Multi-Object Tracking<br/>
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">
                That Actually Works
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              <strong className="text-white">Finally.</strong> Production-ready detection + tracking + Re-ID in one unified API. 
              Stop accepting "good enough" tracking. Ship CV products that work.
            </p>
          </div>

          {/* The Gap Visual */}
          <div className="max-w-4xl mx-auto mb-16">
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
                <span className="text-sm font-semibold text-violet-400">With UMOT: All three work together seamlessly</span>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-500 text-sm ml-2">your_production_pipeline.py</span>
                <span className="ml-auto text-xs text-green-400 font-mono">✓ Actually works in production</span>
              </div>
              <pre className="p-6 text-sm overflow-x-auto text-gray-300">
{`from umot import Pipeline

# Local development - test with your models, your data
pipeline = Pipeline(
    detector='yolov8x',        # or RT-DETR, DINO, your custom model
    tracker='bytetrack',      # optimized, not research code
    reid='market1501',        # ← this is the magic others skip
)

# Test on your actual use case
results = pipeline.track('warehouse_cam_3.mp4')
print(f"MOTA: {results.mota:.2f}")  # 0.89 vs 0.67 without Re-ID

# Ready for production? One parameter change:
pipeline = Pipeline(
    detector='yolov8x',
    tracker='bytetrack',
    reid='market1501',
    backend='eyeline'  # ← scales to 1000 cameras instantly
)`}
              </pre>
            </div>
            <div className="mt-4 flex justify-center gap-4">
              <a href="https://github.com/eyeline-ai/umot" className="px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-lg font-medium transition-colors">
                Get UMOT (Open Source)
              </a>
              <a href="https://colab.research.google.com/github/eyeline-ai/umot/blob/main/examples/quickstart.ipynb" className="px-6 py-3 border border-gray-700 hover:bg-white/5 rounded-lg font-medium transition-colors">
                Try in Colab →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-6 bg-gradient-to-b from-transparent to-red-500/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why 80% of CV PoCs Fail at Tracking</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            We've built tracking for dozens of clients. The same problems kill every project:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
              <div className="text-3xl mb-3">🧩</div>
              <h3 className="font-semibold mb-2 text-red-300">Fragmented Tools</h3>
              <p className="text-sm text-gray-400">
                ByteTrack here, BoT-SORT there, Re-ID nowhere. Each in unmaintained research repos. Integration takes weeks.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="font-semibold mb-2 text-red-300">License Hell</h3>
              <p className="text-sm text-gray-400">
                AGPL = lawyers say no. Your only option: rebuild from scratch or pay $$$$ for closed-source alternatives.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
              <div className="text-3xl mb-3">🆔</div>
              <h3 className="font-semibold mb-2 text-red-300">No Re-ID = No Production</h3>
              <p className="text-sm text-gray-400">
                Without Re-ID, IDs switch constantly. Multi-camera? Forget it. Occlusions? Game over. Not production-ready.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-semibold mb-2 text-red-300">Can't Scale</h3>
              <p className="text-sm text-gray-400">
                Works on laptop, dies in production. GPU provisioning, load balancing, state management - months of DevOps work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">UMOT: The Complete Solution</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            We took every SOTA tracker, optimized the hell out of them, and unified them with Re-ID. 
            One API. Apache 2.0. Production-ready.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-violet-500/10 to-transparent border border-violet-500/30">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-violet-400">📦</span> What You Get Today
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-300"><strong>5 SOTA Trackers:</strong> ByteTrack, BoT-SORT, OC-SORT, DeepSORT, StrongSORT - optimized and production-ready</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-300"><strong>10+ Re-ID Models:</strong> Market1501, MSMT17, VeRi, custom embeddings - finally accessible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-300"><strong>Any Detector:</strong> YOLO, RT-DETR, DINO, Roboflow models - bring your own</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-gray-300"><strong>Apache 2.0:</strong> Use anywhere, modify anything, ship to customers</span>
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-b from-cyan-500/10 to-transparent border border-cyan-500/30">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-cyan-400">🚀</span> Cloud-Exclusive (Coming Soon)
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-gray-300"><strong>Latest Papers:</strong> New SOTA trackers within 30 days of publication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-gray-300"><strong>Domain-Specific Models:</strong> Vehicle-optimized, retail-optimized, security-optimized</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-gray-300"><strong>Auto-scaling:</strong> 1 to 1000 cameras without DevOps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span className="text-gray-300"><strong>50-80% Cheaper:</strong> Than AWS Rekognition (with better accuracy)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The Research Lab */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-violet-500/5 to-cyan-500/5 border border-gray-800">
            <div className="text-center mb-6">
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-semibold rounded-full">OUR COMMITMENT</span>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">The UMOT Research Lab</h3>
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
              Every new SOTA tracker gets optimized and integrated within 30 days of publication. 
              Stop reimplementing papers. We do it once, everyone benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Benchmarks Section */}
      <section id="benchmarks" className="py-20 px-6 bg-gradient-to-b from-transparent to-violet-500/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Real Benchmarks, Real Improvements</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text mb-2">0.89</div>
              <div className="text-gray-400 text-sm">MOTA Score</div>
              <div className="text-gray-500 text-xs mt-1">vs 0.67 without Re-ID</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 text-transparent bg-clip-text mb-2">3.2x</div>
              <div className="text-gray-400 text-sm">Faster Integration</div>
              <div className="text-gray-500 text-xs mt-1">Days not weeks</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text mb-2">72%</div>
              <div className="text-gray-400 text-sm">Cost Reduction</div>
              <div className="text-gray-500 text-xs mt-1">vs AWS Rekognition</div>
            </div>
          </div>

          {/* Use Case Examples */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
              <h3 className="font-semibold mb-2 text-green-400">Retail Analytics</h3>
              <p className="text-sm text-gray-400 mb-3">Track customers across entire store, understand journey, measure conversion.</p>
              <div className="text-xs text-gray-500">Before: 67% accuracy | After: 91% accuracy</div>
            </div>
            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
              <h3 className="font-semibold mb-2 text-blue-400">Traffic Monitoring</h3>
              <p className="text-sm text-gray-400 mb-3">Track vehicles across intersections, detect violations, optimize flow.</p>
              <div className="text-xs text-gray-500">Before: Loses 30% of vehicles | After: 98% retained</div>
            </div>
            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800">
              <h3 className="font-semibold mb-2 text-purple-400">Security Systems</h3>
              <p className="text-sm text-gray-400 mb-3">Track persons across cameras, detect tailgating, identify threats.</p>
              <div className="text-xs text-gray-500">Before: New ID each camera | After: Consistent across building</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Building Better Tracking Today</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Join 100+ CV engineers who've stopped accepting "good enough" tracking.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="https://github.com/eyeline-ai/umot" className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
                Get UMOT Free →
              </a>
              <a href="mailto:hello@eyeline.dev?subject=Cloud Access Request" className="px-8 py-4 bg-violet-600 text-white font-bold rounded-lg hover:bg-violet-700 transition-colors">
                Request Cloud Access
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Apache 2.0
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Production Ready
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Re-ID Included
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-indigo-600 rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <span className="font-bold">Eyeline</span>
              </div>
              <p className="text-sm text-gray-400">MOT as a Service. Built by CV engineers, for CV engineers.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">UMOT</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://github.com/eyeline-ai/umot" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="https://docs.umot.dev" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="https://github.com/eyeline-ai/umot/examples" className="hover:text-white transition-colors">Examples</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Cloud</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="mailto:hello@eyeline.dev" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            © 2025 Eyeline. Apache 2.0 Licensed. Made with frustration at bad tracking.
          </div>
        </div>
      </footer>
    </div>
  )
}