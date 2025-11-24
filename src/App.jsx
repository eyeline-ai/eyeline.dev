import { useState, useEffect } from 'react'

// UMOT Logo Component
const UmotLogo = ({ size = 32, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1"/>
        <stop offset="100%" stopColor="#8b5cf6"/>
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="8" fill="url(#logoGrad)"/>
    <path d="M8 20 L12 12 L20 16 L24 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
    <circle cx="12" cy="12" r="3" fill="white"/>
    <circle cx="20" cy="16" r="3" fill="white"/>
    <circle cx="24" cy="10" r="2.5" fill="white" opacity="0.7"/>
    <circle cx="8" cy="20" r="2" fill="white" opacity="0.5"/>
  </svg>
)

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('local')
  const [selectedTracker, setSelectedTracker] = useState('bytetrack')
  const [dashboardTab, setDashboardTab] = useState('models')
  const [activeFaq, setActiveFaq] = useState(null)
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const trackers = [
    { id: 'bytetrack', name: 'ByteTrack', speed: 5, accuracy: 3, best: 'Real-time applications' },
    { id: 'botsort', name: 'BoT-SORT', speed: 3, accuracy: 4, best: 'Balanced performance' },
    { id: 'ocsort', name: 'OC-SORT', speed: 4, accuracy: 4, best: 'Heavy occlusions' },
    { id: 'strongsort', name: 'StrongSORT', speed: 2, accuracy: 5, best: 'Maximum accuracy' },
  ]

  const faqs = [
    { q: "Is UMOT ready to use?", a: "Not yet. We're targeting Q2 2026 for the first release. Watch the GitHub repo to get notified." },
    { q: "What license is UMOT under?", a: "Apache 2.0 — permissive, enterprise-friendly, no copyleft concerns. Use it commercially without restrictions." },
    { q: "Will the core library always be open source?", a: "Yes. The UMOT library will always be Apache 2.0. Cloud is a separate paid product built on top." },
    { q: "What's the difference between UMOT and UMOT Cloud?", a: "UMOT is the tracking library you run locally. UMOT Cloud hosts your models and runs the full pipeline on our GPUs." },
    { q: "What detection models work with UMOT?", a: "Any model that outputs bounding boxes. YOLO, DETR, Roboflow, TensorRT, custom models — if it detects, UMOT tracks." },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Subtle background gradient */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Nav */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/50' : ''}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <UmotLogo size={36} className="shadow-lg shadow-indigo-500/20" />
            <span className="font-semibold text-lg">UMOT</span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">Q2 2026</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#problem" className="text-zinc-400 hover:text-white transition hidden md:block">Problem</a>
            <a href="#solution" className="text-zinc-400 hover:text-white transition hidden md:block">Solution</a>
            <a href="#products" className="text-zinc-400 hover:text-white transition hidden md:block">Products</a>
            <a href="#roadmap" className="text-zinc-400 hover:text-white transition hidden md:block">Roadmap</a>
            <a href="https://github.com/eyeline-ai/umot" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 transition border border-zinc-700/50">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              <span className="hidden sm:inline">Watch</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
              Unified Multi-Object Tracking
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Swap trackers with
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">one line of code</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed max-w-2xl">
              UMOT is an open-source tracking library with a data-first interface. 
              Your detections from any model. Production-ready algorithms. 
              No framework dependencies.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="https://github.com/eyeline-ai/umot" className="group px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                Watch on GitHub
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </a>
              <a href="#mot" className="px-6 py-3.5 border border-zinc-700 hover:border-zinc-600 hover:bg-zinc-900/50 rounded-xl font-medium transition-all">
                Learn about MOT
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                Apache 2.0
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                Zero framework deps
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                Built from 50+ deployments
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is MOT */}
      <section id="mot" className="relative py-20 px-6 z-10 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-indigo-400 font-medium mb-3">Understanding the Basics</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What is Multi-Object Tracking?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              MOT is the challenge of detecting multiple objects and maintaining their identities 
              across video frames—even through occlusions, camera changes, and complex interactions.
            </p>
          </div>

          {/* Pipeline Visualization */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative group">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 h-full">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-emerald-400 mb-2">1. Detection</h3>
                  <p className="text-sm text-zinc-400 mb-3">Find objects in each frame</p>
                  <div className="text-xs text-emerald-400/70 bg-emerald-500/10 px-2 py-1 rounded inline-block">
                    ✓ Many solutions exist
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <svg className="w-4 h-4 text-zinc-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/></svg>
                </div>
              </div>

              <div className="relative group">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 h-full">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-amber-400 mb-2">2. Tracking</h3>
                  <p className="text-sm text-zinc-400 mb-3">Follow objects frame-to-frame</p>
                  <div className="text-xs text-amber-400/70 bg-amber-500/10 px-2 py-1 rounded inline-block">
                    ⚠ Fragmented, hard to integrate
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <svg className="w-4 h-4 text-zinc-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/></svg>
                </div>
              </div>

              <div className="relative group">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 h-full">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-red-400 mb-2">3. Re-Identification</h3>
                  <p className="text-sm text-zinc-400 mb-3">Maintain identity across gaps</p>
                  <div className="text-xs text-red-400/70 bg-red-500/10 px-2 py-1 rounded inline-block">
                    ✗ Usually skipped
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-indigo-500/5 to-violet-500/5 border border-indigo-500/20">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">UMOT solves steps 2 and 3</h4>
                <p className="text-sm text-zinc-400">
                  You handle detection with your preferred model. UMOT provides production-ready tracking 
                  and ReID integration through a unified interface. One library, all major algorithms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="relative py-20 px-6 z-10 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-indigo-400 font-medium mb-3">The Problem</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Tracking integration is broken</h2>
              <p className="text-zinc-400 mb-8">
                Detection is solved. Dozens of great models exist. But connecting them to tracking? 
                That's where every project hits a wall.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: "⚡", title: "Framework coupling", desc: "Existing trackers are tied to specific detection libraries" },
                  { icon: "🔄", title: "Different interfaces", desc: "Swapping trackers means rewriting integration code" },
                  { icon: "📚", title: "Research-grade code", desc: "Written for papers, not production systems" },
                  { icon: "🔗", title: "No ReID integration", desc: "IDs switch across occlusions and cameras" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <h4 className="font-medium text-zinc-200">{item.title}</h4>
                      <p className="text-sm text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <span className="text-sm text-zinc-500 font-mono">the_reality.log</span>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  {[
                    { week: "Week 1", text: '"We\'ll use YOLO and add tracking"', color: "text-zinc-400" },
                    { week: "Week 2", text: '"ByteTrack repo is broken, trying BoT-SORT"', color: "text-zinc-400" },
                    { week: "Week 3", text: '"AGPL license blocked by legal"', color: "text-amber-400" },
                    { week: "Week 4", text: '"Building from scratch, skipping ReID"', color: "text-amber-400" },
                    { week: "Week 5", text: '"Client asks why IDs keep switching"', color: "text-red-400" },
                    { week: "Week 6", text: '"Let\'s accept tracking won\'t be perfect"', color: "text-red-400" },
                  ].map((line, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-zinc-600 w-16 flex-shrink-0">{line.week}</span>
                      <span className={line.color}>{line.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-zinc-800">
                  <p className="text-xs text-zinc-500 italic">This cycle repeats at every company, for every project.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="relative py-20 px-6 z-10 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-indigo-400 font-medium mb-3">The Solution</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Data in, tracks out</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              UMOT doesn't load models. It accepts numpy arrays and returns tracked objects. 
              This architectural decision unlocks universal compatibility.
            </p>
          </div>

          {/* Data Flow Diagram */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <div className="grid md:grid-cols-5 gap-4 items-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-violet-500/20 to-violet-600/10 border border-violet-500/30 flex items-center justify-center mb-3">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <p className="text-sm font-medium">Your Model</p>
                  <p className="text-xs text-zinc-500">Any detector</p>
                </div>
                
                <div className="hidden md:flex justify-center">
                  <svg className="w-8 h-8 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mb-3 shadow-lg shadow-indigo-500/25 overflow-hidden">
                    <UmotLogo size={80} className="scale-100" />
                  </div>
                  <p className="text-sm font-medium">UMOT</p>
                  <p className="text-xs text-zinc-500">Tracking layer</p>
                </div>

                <div className="hidden md:flex justify-center">
                  <svg className="w-8 h-8 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 flex items-center justify-center mb-3">
                    <span className="text-2xl">✨</span>
                  </div>
                  <p className="text-sm font-medium">Stable Tracks</p>
                  <p className="text-xs text-zinc-500">Consistent IDs</p>
                </div>
              </div>

              {/* Input/Output specs */}
              <div className="grid md:grid-cols-2 gap-4 mt-8 pt-8 border-t border-zinc-800">
                <div className="p-4 rounded-xl bg-zinc-800/50">
                  <p className="text-xs text-zinc-500 mb-2">INPUT</p>
                  <code className="text-sm text-violet-400">detections: [N, 6]</code>
                  <p className="text-xs text-zinc-500 mt-1">x, y, w, h, confidence, class</p>
                  <code className="text-sm text-indigo-400 block mt-2">embeddings: [N, D]</code>
                  <p className="text-xs text-zinc-500 mt-1">Optional, any dimension</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-800/50">
                  <p className="text-xs text-zinc-500 mb-2">OUTPUT</p>
                  <code className="text-sm text-emerald-400">tracks: List[Track]</code>
                  <p className="text-xs text-zinc-500 mt-1">track.id, track.bbox, track.score</p>
                  <p className="text-xs text-zinc-500">track.history, track.age, track.state</p>
                </div>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex gap-2 mb-4">
              {trackers.map(t => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTracker(t.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                    selectedTracker === t.id 
                      ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' 
                      : 'text-zinc-500 hover:text-zinc-300 border border-transparent'
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>

            <div className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                  </div>
                  <span className="text-zinc-500 text-xs ml-2 font-mono">tracking.py</span>
                </div>
                <span className="text-xs text-indigo-400">Change tracker with one line ↑</span>
              </div>
              <pre className="p-6 text-sm overflow-x-auto">
                <code className="text-zinc-300">{`from umot import Pipeline

# Initialize — change this string to swap algorithms
pipeline = Pipeline(tracker='${selectedTracker}')

for frame in video:
    # Your detections from ANY source
    detections = your_model(frame)      # [N, 6]: x,y,w,h,conf,class
    embeddings = your_reid(crops)       # [N, D]: optional ReID
    
    # UMOT handles tracking
    tracks = pipeline.update(detections, embeddings)
    
    for track in tracks:
        print(f"ID {track.id}: {track.bbox}, conf={track.score:.2f}")`}</code>
              </pre>
            </div>

            {/* Tracker info */}
            <div className="mt-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium">{trackers.find(t => t.id === selectedTracker)?.name}</span>
                  <span className="text-zinc-500 text-sm ml-2">— Best for: {trackers.find(t => t.id === selectedTracker)?.best}</span>
                </div>
                <div className="flex gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500">Speed</span>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className={`w-2 h-2 rounded-full ${i <= (trackers.find(t => t.id === selectedTracker)?.speed || 0) ? 'bg-emerald-400' : 'bg-zinc-700'}`}></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500">Accuracy</span>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className={`w-2 h-2 rounded-full ${i <= (trackers.find(t => t.id === selectedTracker)?.accuracy || 0) ? 'bg-indigo-400' : 'bg-zinc-700'}`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🔌", title: "Zero framework deps", desc: "No PyTorch, TensorFlow, or ONNX required. Works with models from 2015 or 2030." },
              { icon: "🌐", title: "Universal compatibility", desc: "YOLO, Roboflow, DETR, TensorRT, custom—if it outputs boxes, UMOT tracks it." },
              { icon: "🏭", title: "Production optimized", desc: "Research algorithms rewritten for production. Proper error handling, full docs." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition">
                <span className="text-2xl mb-4 block">{item.icon}</span>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Comparison */}
      <section id="products" className="relative py-20 px-6 z-10 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-indigo-400 font-medium mb-3">Two Products</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open source + managed cloud</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Same tracking algorithms, different deployment models. Choose what fits your needs.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="max-w-4xl mx-auto mb-16 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left py-4 px-4 font-medium text-zinc-400">Feature</th>
                  <th className="text-center py-4 px-4">
                    <div className="inline-flex flex-col items-center">
                      <span className="font-semibold text-violet-400">UMOT</span>
                      <span className="text-xs text-zinc-500">Open Source</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="inline-flex flex-col items-center">
                      <span className="font-semibold text-indigo-400">UMOT Cloud</span>
                      <span className="text-xs text-zinc-500">Managed Platform</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-zinc-300">
                {[
                  { feature: "Tracking algorithms", oss: "All SOTA", cloud: "All SOTA + early access" },
                  { feature: "ReID integration", oss: "✓ Your embeddings", cloud: "✓ Hosted models available" },
                  { feature: "Model management", oss: "You handle", cloud: "We handle" },
                  { feature: "Infrastructure", oss: "Your hardware", cloud: "Auto-scaling GPUs" },
                  { feature: "Visual pipeline builder", oss: "—", cloud: "✓ Dashboard UI" },
                  { feature: "New trackers", oss: "After 90 days", cloud: "Within 30 days" },
                  { feature: "Video storage", oss: "Your choice", cloud: "None (privacy-first)" },
                  { feature: "Support", oss: "Community", cloud: "Priority + SLA" },
                  { feature: "License", oss: "Apache 2.0", cloud: "Commercial" },
                  { feature: "Price", oss: "Free forever", cloud: "From $29/mo" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-zinc-800/50 hover:bg-zinc-900/30">
                    <td className="py-3 px-4 text-zinc-400">{row.feature}</td>
                    <td className="py-3 px-4 text-center">{row.oss}</td>
                    <td className="py-3 px-4 text-center">{row.cloud}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Which to use */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/5 to-violet-600/5 border border-violet-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Use UMOT (OSS) if you...</h3>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-center gap-2"><span className="text-violet-400">→</span> Have GPU infrastructure already</li>
                <li className="flex items-center gap-2"><span className="text-violet-400">→</span> Want full control over the stack</li>
                <li className="flex items-center gap-2"><span className="text-violet-400">→</span> Need offline/air-gapped operation</li>
                <li className="flex items-center gap-2"><span className="text-violet-400">→</span> Prefer to manage your own models</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-violet-500/20">
                <code className="text-xs text-violet-400">from umot import Pipeline</code>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-indigo-600/5 border border-indigo-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Use UMOT Cloud if you...</h3>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-center gap-2"><span className="text-indigo-400">→</span> Don't want to manage GPU infrastructure</li>
                <li className="flex items-center gap-2"><span className="text-indigo-400">→</span> Need to scale up/down dynamically</li>
                <li className="flex items-center gap-2"><span className="text-indigo-400">→</span> Want visual pipeline configuration</li>
                <li className="flex items-center gap-2"><span className="text-indigo-400">→</span> Need early access to new trackers</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-indigo-500/20">
                <code className="text-xs text-indigo-400">from umot.cloud import Client</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Dashboard Preview */}
      <section className="relative py-20 px-6 z-10 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-indigo-400 font-medium mb-3">UMOT Cloud Preview</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visual pipeline configuration</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Upload models, configure trackers, deploy pipelines—all from a dashboard. Coming Q4 2026.
            </p>
          </div>

          {/* Dashboard Mockup */}
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/80">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <UmotLogo size={28} />
                    <span className="font-medium text-sm">UMOT Cloud</span>
                  </div>
                  <div className="h-4 w-px bg-zinc-800"></div>
                  <span className="text-sm text-zinc-500">Pipeline Editor</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Saved</span>
                  <button className="px-3 py-1.5 rounded-lg bg-indigo-500 text-white text-sm font-medium">Deploy</button>
                </div>
              </div>

              {/* Dashboard Tabs */}
              <div className="flex border-b border-zinc-800">
                {['models', 'tracker', 'output'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setDashboardTab(tab)}
                    className={`px-6 py-3 text-sm font-medium transition relative ${
                      dashboardTab === tab ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    {tab === 'models' && '1. Models'}
                    {tab === 'tracker' && '2. Tracker'}
                    {tab === 'output' && '3. Output'}
                    {dashboardTab === tab && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Dashboard Content */}
              <div className="p-6 min-h-64">
                {dashboardTab === 'models' && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">Detection Model</label>
                      <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                              <span className="text-sm">🎯</span>
                            </div>
                            <div>
                              <p className="font-medium text-sm">yolov8n-warehouse.pt</p>
                              <p className="text-xs text-zinc-500">PyTorch • 6.2 MB</p>
                            </div>
                          </div>
                          <span className="text-xs px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">Active</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-xs px-2 py-0.5 rounded bg-zinc-700 text-zinc-400">person</span>
                          <span className="text-xs px-2 py-0.5 rounded bg-zinc-700 text-zinc-400">forklift</span>
                          <span className="text-xs px-2 py-0.5 rounded bg-zinc-700 text-zinc-400">pallet</span>
                        </div>
                      </div>
                      <button className="mt-3 text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
                        Upload new model
                      </button>
                    </div>
                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">ReID Model (Optional)</label>
                      <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700 border-dashed">
                        <div className="text-center py-4">
                          <div className="w-12 h-12 rounded-xl bg-zinc-700/50 flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4"/></svg>
                          </div>
                          <p className="text-sm text-zinc-500">Drop ReID model here</p>
                          <p className="text-xs text-zinc-600 mt-1">Improves tracking across occlusions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {dashboardTab === 'tracker' && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">Algorithm</label>
                      <div className="space-y-2">
                        {trackers.map(t => (
                          <div
                            key={t.id}
                            className={`p-3 rounded-xl border cursor-pointer transition ${
                              selectedTracker === t.id 
                                ? 'bg-indigo-500/10 border-indigo-500/30' 
                                : 'bg-zinc-800/30 border-zinc-800 hover:border-zinc-700'
                            }`}
                            onClick={() => setSelectedTracker(t.id)}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-sm">{t.name}</span>
                              <span className="text-xs text-zinc-500">{t.best}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">Parameters</label>
                      <div className="space-y-4 p-4 rounded-xl bg-zinc-800/30">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-zinc-500">Track threshold</span>
                            <span className="text-zinc-300">0.5</span>
                          </div>
                          <div className="h-1.5 bg-zinc-700 rounded-full">
                            <div className="h-full w-1/2 bg-indigo-500 rounded-full"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-zinc-500">Track buffer</span>
                            <span className="text-zinc-300">30 frames</span>
                          </div>
                          <div className="h-1.5 bg-zinc-700 rounded-full">
                            <div className="h-full w-1/3 bg-indigo-500 rounded-full"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-zinc-500">Match threshold</span>
                            <span className="text-zinc-300">0.8</span>
                          </div>
                          <div className="h-1.5 bg-zinc-700 rounded-full">
                            <div className="h-full w-4/5 bg-indigo-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {dashboardTab === 'output' && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">Response Format</label>
                      <div className="space-y-2">
                        {['JSON (default)', 'Protocol Buffers', 'MessagePack'].map((fmt, i) => (
                          <div
                            key={i}
                            className={`p-3 rounded-xl border cursor-pointer transition ${
                              i === 0 
                                ? 'bg-indigo-500/10 border-indigo-500/30' 
                                : 'bg-zinc-800/30 border-zinc-800 hover:border-zinc-700'
                            }`}
                          >
                            <span className="text-sm">{fmt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">Include in Response</label>
                      <div className="space-y-3 p-4 rounded-xl bg-zinc-800/30">
                        {[
                          { label: 'Track history', checked: true },
                          { label: 'Embeddings', checked: false },
                          { label: 'Confidence scores', checked: true },
                          { label: 'Class labels', checked: true },
                        ].map((opt, i) => (
                          <label key={i} className="flex items-center gap-3 cursor-pointer">
                            <div className={`w-4 h-4 rounded border ${opt.checked ? 'bg-indigo-500 border-indigo-500' : 'border-zinc-600'} flex items-center justify-center`}>
                              {opt.checked && <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>}
                            </div>
                            <span className="text-sm text-zinc-300">{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Dashboard Footer */}
              <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span>Pipeline ID:</span>
                    <code className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">pipe_warehouse_v2</code>
                  </div>
                  <span className="text-xs text-amber-400 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                    Preview — Coming Q4 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="relative py-20 px-6 z-10 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-indigo-400 font-medium mb-3">Universal Compatibility</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Works with everything</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              If your model outputs bounding boxes, UMOT tracks them. No framework lock-in.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'YOLO + UMOT', code: `from ultralytics import YOLO
from umot import Pipeline

model = YOLO('yolov8n.pt')
pipeline = Pipeline(tracker='bytetrack')

results = model(frame)
detections = results[0].boxes.data.numpy()
tracks = pipeline.update(detections)` },
              { name: 'Roboflow + UMOT', code: `from roboflow import Roboflow
from umot import Pipeline

model = rf.workspace().project().version().model
pipeline = Pipeline(tracker='botsort')

result = model.predict(frame)
detections = result.to_numpy()
tracks = pipeline.update(detections)` },
              { name: 'Custom + UMOT', code: `import numpy as np
from umot import Pipeline

pipeline = Pipeline(tracker='ocsort')

# Your custom detection
boxes = my_detector(frame)
detections = np.array(boxes)  # [N, 6]

# Your custom ReID (optional)
embeddings = my_reid(crops)   # [N, D]

tracks = pipeline.update(detections, embeddings)` },
            ].map((ex, i) => (
              <div key={i} className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden">
                <div className="px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                  <span className="text-sm font-medium">{ex.name}</span>
                </div>
                <pre className="p-4 text-xs overflow-x-auto">
                  <code className="text-zinc-400">{ex.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="relative py-20 px-6 z-10 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-indigo-400 font-medium mb-3">Roadmap</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Building in public</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              UMOT is in active development. Here's where we're headed.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-violet-500 to-zinc-800"></div>

              {[
                { q: 'Q2 2026', title: 'UMOT v0.1', status: 'next', items: ['Core Pipeline interface', 'ByteTrack, BoT-SORT, OC-SORT', 'Basic ReID integration', 'Documentation & examples'] },
                { q: 'Q3 2026', title: 'UMOT v0.2', status: 'planned', items: ['DeepSORT, StrongSORT', 'Performance benchmarks', 'Visualization utilities', 'More integration examples'] },
                { q: 'Q4 2026', title: 'UMOT Cloud Beta', status: 'planned', items: ['Model upload & hosting', 'Tracking API', 'Visual pipeline builder', 'Usage dashboard'] },
                { q: '2027', title: 'Platform Growth', status: 'future', items: ['Team workspaces', 'A/B testing', 'Additional trackers', 'Enterprise features'] },
              ].map((phase, i) => (
                <div key={i} className="relative pl-16 pb-12 last:pb-0">
                  <div className={`absolute left-4 w-4 h-4 rounded-full border-2 ${
                    phase.status === 'next' 
                      ? 'bg-indigo-500 border-indigo-500 shadow-lg shadow-indigo-500/50' 
                      : 'bg-zinc-900 border-zinc-700'
                  }`}></div>
                  <div className={`p-6 rounded-2xl border ${
                    phase.status === 'next' 
                      ? 'bg-indigo-500/5 border-indigo-500/20' 
                      : 'bg-zinc-900/30 border-zinc-800'
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-sm font-medium ${phase.status === 'next' ? 'text-indigo-400' : 'text-zinc-500'}`}>{phase.q}</span>
                      {phase.status === 'next' && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400">Up next</span>
                      )}
                    </div>
                    <h3 className="font-semibold mb-3">{phase.title}</h3>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-zinc-400">
                          <div className="w-1 h-1 rounded-full bg-zinc-600"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 px-6 z-10 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-indigo-400 font-medium mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-zinc-800 overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-900/50 transition"
                >
                  <span className="font-medium">{faq.q}</span>
                  <svg className={`w-5 h-5 text-zinc-500 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-sm text-zinc-400">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 z-10 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-purple-500/10 border border-indigo-500/20 text-center">
            <h2 className="text-3xl font-bold mb-4">Follow the development</h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              UMOT is being built in public. Watch the repo to get notified when we release, 
              or reach out if you want to be an early tester.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="https://github.com/eyeline-ai/umot" className="px-8 py-3.5 bg-white text-zinc-900 rounded-xl font-medium hover:bg-zinc-200 transition flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                Star on GitHub
              </a>
              <a href="mailto:hello@eyeline.dev" className="px-8 py-3.5 border border-zinc-600 hover:border-zinc-500 hover:bg-zinc-900/50 rounded-xl font-medium transition">
                Get in touch
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
              <span>Apache 2.0</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
              <span>No lock-in</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
              <span>First release Q2 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-zinc-800/50 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <UmotLogo size={28} />
                <span className="font-semibold">UMOT</span>
              </div>
              <p className="text-sm text-zinc-500">
                Unified Multi-Object Tracking. Built by <a href="https://eyeline.dev" className="text-zinc-400 hover:text-white transition">Eyeline</a>.
              </p>
            </div>
            <div className="flex gap-8 text-sm text-zinc-500">
              <a href="https://github.com/eyeline-ai/umot" className="hover:text-white transition">GitHub</a>
              <a href="mailto:hello@eyeline.dev" className="hover:text-white transition">Contact</a>
              <a href="#roadmap" className="hover:text-white transition">Roadmap</a>
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-800/50 text-center text-xs text-zinc-600">
            © 2025 Eyeline. UMOT first release Q2 2026.
          </div>
        </div>
      </footer>
    </div>
  )
}