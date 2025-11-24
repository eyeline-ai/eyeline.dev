import { useState, useEffect } from 'react'

// Eyeline Logo Component - Abstract eye + pipeline
const EyelineLogo = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <defs>
      <linearGradient id="eyeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1"/>
        <stop offset="100%" stopColor="#8b5cf6"/>
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="8" fill="url(#eyeGrad)"/>
    <path d="M6 16 Q16 6 26 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
    <path d="M6 16 Q16 26 26 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
    <circle cx="6" cy="16" r="2" fill="white" opacity="0.7"/>
    <circle cx="26" cy="16" r="2" fill="white" opacity="0.7"/>
    <circle cx="16" cy="16" r="4" fill="white"/>
    <circle cx="16" cy="16" r="2" fill="#6366f1"/>
    <path d="M8 16 L12 16" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    <path d="M20 16 L24 16" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
  </svg>
)

// UMOT Logo Component - Tracking paths
const UmotLogo = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <defs>
      <linearGradient id="umotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6"/>
        <stop offset="100%" stopColor="#a855f7"/>
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="8" fill="url(#umotGrad)"/>
    <path d="M6 22 L10 14 L16 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
    <path d="M16 18 L22 12 L26 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
    <circle cx="6" cy="22" r="2" fill="white" opacity="0.5"/>
    <circle cx="10" cy="14" r="2.5" fill="white" opacity="0.7"/>
    <circle cx="16" cy="18" r="3.5" fill="white"/>
    <circle cx="22" cy="12" r="2.5" fill="white" opacity="0.7"/>
    <circle cx="26" cy="14" r="2" fill="white" opacity="0.5"/>
    <circle cx="16" cy="18" r="1.5" fill="#8b5cf6"/>
  </svg>
)

// Founder Avatar Component
const FounderAvatar = ({ size = 64, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
    <defs>
      <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1"/>
        <stop offset="100%" stopColor="#8b5cf6"/>
      </linearGradient>
      <linearGradient id="avatarBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e1b4b"/>
        <stop offset="100%" stopColor="#312e81"/>
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="32" fill="url(#avatarBgGrad)"/>
    <circle cx="32" cy="24" r="10" fill="url(#avatarGrad)"/>
    <circle cx="32" cy="24" r="4" fill="white" opacity="0.9"/>
    <circle cx="32" cy="24" r="1.5" fill="#6366f1"/>
    <path d="M18 52 L24 40 L32 44 L40 40 L46 52" stroke="url(#avatarGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="24" cy="40" r="2.5" fill="url(#avatarGrad)"/>
    <circle cx="40" cy="40" r="2.5" fill="url(#avatarGrad)"/>
    <circle cx="32" cy="44" r="2.5" fill="white" opacity="0.8"/>
  </svg>
)

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedTracker, setSelectedTracker] = useState('bytetrack')
  const [dashboardTab, setDashboardTab] = useState('models')
  const [activeFaq, setActiveFaq] = useState(null)
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const trackers = [
    { id: 'bytetrack', name: 'ByteTrack', speed: 5, accuracy: 3, best: 'Real-time' },
    { id: 'botsort', name: 'BoT-SORT', speed: 3, accuracy: 4, best: 'Balanced' },
    { id: 'ocsort', name: 'OC-SORT', speed: 4, accuracy: 4, best: 'Occlusions' },
    { id: 'strongsort', name: 'StrongSORT', speed: 2, accuracy: 5, best: 'Accuracy' },
  ]

  const faqs = [
    { q: "What is Eyeline?", a: "Eyeline is a computer vision infrastructure company. We build tools that make CV pipelines work in production, starting with multi-object tracking." },
    { q: "What's the relationship between Eyeline and UMOT?", a: "UMOT is Eyeline's first product — an open-source tracking library. Eyeline is the company, UMOT is the product." },
    { q: "Is UMOT ready to use?", a: "Not yet. We're targeting Q2 2026 for the first release. Watch the GitHub repo to get notified." },
    { q: "What license is UMOT under?", a: "Apache 2.0 — permissive, enterprise-friendly, no copyleft concerns. Use it commercially without restrictions." },
    { q: "What's coming after tracking?", a: "Pipeline monitoring and observability. Our long-term vision is to be the infrastructure layer that helps teams run, understand, and monitor their CV pipelines." },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/50' : ''}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2.5">
            <EyelineLogo size={36} className="shadow-lg shadow-indigo-500/20" />
            <span className="font-semibold text-lg">Eyeline</span>
          </a>
          <div className="flex items-center gap-8 text-sm">
            <a href="#umot" className="text-zinc-400 hover:text-white transition hidden md:block">UMOT</a>
            <a href="#about" className="text-zinc-400 hover:text-white transition hidden md:block">About</a>
            <a href="#roadmap" className="text-zinc-400 hover:text-white transition hidden md:block">Roadmap</a>
            <a href="https://github.com/eyeline-ai/umot" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 transition border border-zinc-700/50">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <EyelineLogo size={56} className="shadow-xl shadow-indigo-500/25" />
              <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">Building in public</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              The eye on your
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">CV pipeline</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-4 leading-relaxed">
              We're building the infrastructure layer for computer vision pipelines.
            </p>
            <p className="text-lg text-zinc-500 mb-8">
              Starting with <strong className="text-zinc-300">multi-object tracking</strong> — the most fragmented 
              and critical part of every CV system. Meet UMOT, our open-source tracking library.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#umot" className="group px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2">
                See UMOT
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </a>
              <a href="#about" className="px-6 py-3.5 border border-zinc-700 hover:border-zinc-600 hover:bg-zinc-900/50 rounded-xl font-medium transition-all">
                Our Mission
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                Apache 2.0
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                Open Source
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                Built from 50+ deployments
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="relative py-20 px-6 z-10 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-indigo-400 font-medium mb-3">The Problem</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CV pipelines break after detection</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Detection is solved — dozens of great models exist. But connecting detection to tracking? 
              That's where every project hits a wall.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Pipeline Visualization */}
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <h3 className="text-sm text-zinc-500 mb-6 font-medium">THE CV PIPELINE</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-24 py-3 px-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                    <span className="text-emerald-400 text-sm font-medium">Detection</span>
                  </div>
                  <svg className="w-6 h-6 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  <div className="flex-1 py-3 px-4 rounded-xl bg-red-500/10 border border-red-500/20">
                    <span className="text-red-400 text-sm font-medium">Tracking</span>
                    <span className="text-red-400/60 text-xs ml-2">← breaks here</span>
                  </div>
                  <svg className="w-6 h-6 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  <div className="w-20 py-3 px-4 rounded-xl bg-zinc-800 border border-zinc-700 text-center">
                    <span className="text-zinc-500 text-sm font-medium">ReID</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-zinc-800 grid grid-cols-3 gap-4 text-center text-xs">
                <div>
                  <span className="text-emerald-400">✓ Solved</span>
                  <p className="text-zinc-600 mt-1">Many options</p>
                </div>
                <div>
                  <span className="text-red-400">✗ Fragmented</span>
                  <p className="text-zinc-600 mt-1">No good options</p>
                </div>
                <div>
                  <span className="text-zinc-500">⚠ Skipped</span>
                  <p className="text-zinc-600 mt-1">Too complex</p>
                </div>
              </div>
            </div>

            {/* The Reality Log */}
            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <span className="text-sm text-zinc-500 font-mono">reality.log</span>
              </div>
              <div className="space-y-3 font-mono text-sm">
                {[
                  { week: "Week 1", text: '"We\'ll add tracking to our YOLO model"', color: "text-zinc-400" },
                  { week: "Week 2", text: '"ByteTrack repo is broken..."', color: "text-zinc-400" },
                  { week: "Week 3", text: '"AGPL license blocked by legal"', color: "text-amber-400" },
                  { week: "Week 4", text: '"Building from scratch, skipping ReID"', color: "text-amber-400" },
                  { week: "Week 5", text: '"Why do IDs keep switching?"', color: "text-red-400" },
                  { week: "Week 6", text: '"Tracking won\'t be perfect..."', color: "text-red-400" },
                ].map((line, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-zinc-600 w-14 flex-shrink-0">{line.week}</span>
                    <span className={line.color}>{line.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800">
                <p className="text-xs text-zinc-500 italic">This cycle repeats at every company. This is why Eyeline exists.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is MOT */}
      <section className="relative py-20 px-6 z-10 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-indigo-400 font-medium mb-3">Understanding MOT</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What is Multi-Object Tracking?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              MOT is the challenge of detecting multiple objects and maintaining their identities 
              across video frames — even through occlusions and camera changes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { num: "1", title: "Detection", desc: "Find objects in each frame", status: "Many solutions", statusColor: "emerald", icon: "🎯" },
                { num: "2", title: "Tracking", desc: "Follow objects frame-to-frame", status: "Fragmented", statusColor: "amber", icon: "🔄" },
                { num: "3", title: "Re-ID", desc: "Maintain identity across gaps", status: "Usually skipped", statusColor: "red", icon: "🆔" },
              ].map((step, i) => (
                <div key={i} className="relative p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{step.icon}</span>
                    <span className={`text-xs px-2 py-1 rounded-full bg-${step.statusColor}-500/10 text-${step.statusColor}-400 border border-${step.statusColor}-500/20`}>
                      {step.status}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-zinc-500">{step.desc}</p>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <svg className="w-4 h-4 text-zinc-700" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/></svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-indigo-500/5 to-violet-500/5 border border-indigo-500/20 text-center">
            <p className="text-zinc-300">
              <strong className="text-white">UMOT handles steps 2 and 3.</strong> You bring the detections 
              from any model. We provide production-ready tracking and ReID integration.
            </p>
          </div>
        </div>
      </section>

      {/* UMOT Product Section */}
      <section id="umot" className="relative py-20 px-6 z-10 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          {/* UMOT Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <UmotLogo size={48} className="shadow-lg shadow-violet-500/25" />
              <div className="text-left">
                <h2 className="text-2xl font-bold">UMOT</h2>
                <p className="text-sm text-zinc-500">Unified Multi-Object Tracking</p>
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Swap trackers with <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">one line of code</span>
            </h3>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              An open-source tracking library with a data-first interface. Your detections from any model.
              Production-ready algorithms. No framework dependencies.
            </p>
          </div>

          {/* Data Flow */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
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
                  <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden mb-3 shadow-lg shadow-violet-500/25">
                    <UmotLogo size={80} />
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
              <div className="grid md:grid-cols-2 gap-4 mt-8 pt-8 border-t border-zinc-800">
                <div className="p-4 rounded-xl bg-zinc-800/50">
                  <p className="text-xs text-zinc-500 mb-2">INPUT</p>
                  <code className="text-sm text-violet-400">detections: [N, 6]</code>
                  <p className="text-xs text-zinc-600 mt-1">x, y, w, h, confidence, class</p>
                  <code className="text-sm text-indigo-400 block mt-2">embeddings: [N, D]</code>
                  <p className="text-xs text-zinc-600 mt-1">Optional ReID embeddings</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-800/50">
                  <p className="text-xs text-zinc-500 mb-2">OUTPUT</p>
                  <code className="text-sm text-emerald-400">tracks: List[Track]</code>
                  <p className="text-xs text-zinc-600 mt-1">track.id, track.bbox, track.score</p>
                  <p className="text-xs text-zinc-600">track.history, track.age, track.state</p>
                </div>
              </div>
            </div>
          </div>

          {/* Code Example with Tracker Selector */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex flex-wrap gap-2 mb-4">
              {trackers.map(t => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTracker(t.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                    selectedTracker === t.id 
                      ? 'bg-violet-500/20 text-violet-400 border border-violet-500/30' 
                      : 'text-zinc-500 hover:text-zinc-300 border border-transparent hover:border-zinc-800'
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
                <span className="text-xs text-violet-400">← Change tracker above</span>
              </div>
              <pre className="p-6 text-sm overflow-x-auto">
                <code className="text-zinc-300">{`from umot import Pipeline

# Initialize — swap trackers by changing this string
pipeline = Pipeline(tracker='${selectedTracker}')

for frame in video:
    # Your detections from ANY source
    detections = your_model(frame)      # [N, 6]
    embeddings = your_reid(crops)       # [N, D] optional
    
    # UMOT handles tracking
    tracks = pipeline.update(detections, embeddings)
    
    for track in tracks:
        print(f"ID {track.id}: {track.bbox}")`}</code>
              </pre>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-medium">{trackers.find(t => t.id === selectedTracker)?.name}</span>
                  <span className="text-zinc-500 text-sm">Best for: {trackers.find(t => t.id === selectedTracker)?.best}</span>
                </div>
                <div className="flex gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500 text-xs">Speed</span>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className={`w-1.5 h-1.5 rounded-full ${i <= (trackers.find(t => t.id === selectedTracker)?.speed || 0) ? 'bg-emerald-400' : 'bg-zinc-700'}`}></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500 text-xs">Accuracy</span>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className={`w-1.5 h-1.5 rounded-full ${i <= (trackers.find(t => t.id === selectedTracker)?.accuracy || 0) ? 'bg-violet-400' : 'bg-zinc-700'}`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: "⚡", title: "Zero dependencies", desc: "No PyTorch, TensorFlow, or ONNX. Works with any model from any era." },
              { icon: "🌐", title: "Universal compatibility", desc: "YOLO, Roboflow, DETR, TensorRT — if it outputs boxes, UMOT tracks it." },
              { icon: "🏭", title: "Production optimized", desc: "Research algorithms rewritten for real systems. Full docs, proper errors." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <span className="text-2xl mb-4 block">{item.icon}</span>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* OSS vs Cloud Comparison */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-center mb-8">Two ways to use UMOT</h3>
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-4 px-4 font-medium text-zinc-500">Feature</th>
                    <th className="text-center py-4 px-4">
                      <div className="flex flex-col items-center gap-1">
                        <span className="font-semibold text-violet-400">UMOT</span>
                        <span className="text-xs text-zinc-600">Open Source</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-4">
                      <div className="flex flex-col items-center gap-1">
                        <span className="font-semibold text-indigo-400">UMOT Cloud</span>
                        <span className="text-xs text-zinc-600">Managed Platform</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-zinc-300">
                  {[
                    ["Tracking algorithms", "All SOTA", "All + early access"],
                    ["ReID integration", "✓ Your embeddings", "✓ Hosted models"],
                    ["Model management", "You handle", "We handle"],
                    ["Infrastructure", "Your hardware", "Auto-scaling GPUs"],
                    ["Visual pipeline builder", "—", "✓ Dashboard"],
                    ["New trackers", "After 90 days", "Within 30 days"],
                    ["Support", "Community", "Priority + SLA"],
                    ["Price", "Free forever", "From $29/mo"],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-zinc-800/50">
                      <td className="py-3 px-4 text-zinc-400">{row[0]}</td>
                      <td className="py-3 px-4 text-center">{row[1]}</td>
                      <td className="py-3 px-4 text-center">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-center mb-2">UMOT Cloud Dashboard</h3>
            <p className="text-zinc-500 text-center text-sm mb-8">Visual pipeline configuration — Coming Q4 2026</p>
            
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800 bg-zinc-900/80">
                  <div className="flex items-center gap-3">
                    <UmotLogo size={24} />
                    <span className="font-medium text-sm">Pipeline Editor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Saved</span>
                    <button className="px-3 py-1.5 rounded-lg bg-indigo-500 text-white text-xs font-medium">Deploy</button>
                  </div>
                </div>
                <div className="flex border-b border-zinc-800">
                  {['models', 'tracker', 'output'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setDashboardTab(tab)}
                      className={`px-5 py-3 text-sm font-medium transition relative ${dashboardTab === tab ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      {dashboardTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500"></div>}
                    </button>
                  ))}
                </div>
                <div className="p-6 min-h-48">
                  {dashboardTab === 'models' && (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs text-zinc-500 mb-2">Detection Model</label>
                        <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center text-sm">🎯</div>
                              <div>
                                <p className="font-medium text-sm">yolov8n.pt</p>
                                <p className="text-xs text-zinc-500">PyTorch • 6.2 MB</p>
                              </div>
                            </div>
                            <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">Active</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs text-zinc-500 mb-2">ReID Model (Optional)</label>
                        <div className="p-4 rounded-xl bg-zinc-800/30 border border-zinc-700 border-dashed text-center">
                          <p className="text-sm text-zinc-500">Drop model here</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {dashboardTab === 'tracker' && (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        {trackers.slice(0, 3).map(t => (
                          <div key={t.id} className={`p-3 rounded-xl border cursor-pointer ${t.id === 'bytetrack' ? 'bg-indigo-500/10 border-indigo-500/30' : 'bg-zinc-800/30 border-zinc-800'}`}>
                            <span className="text-sm font-medium">{t.name}</span>
                          </div>
                        ))}
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-800/30 space-y-3">
                        <div>
                          <div className="flex justify-between text-xs mb-1"><span className="text-zinc-500">Threshold</span><span>0.5</span></div>
                          <div className="h-1.5 bg-zinc-700 rounded-full"><div className="h-full w-1/2 bg-indigo-500 rounded-full"></div></div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1"><span className="text-zinc-500">Buffer</span><span>30</span></div>
                          <div className="h-1.5 bg-zinc-700 rounded-full"><div className="h-full w-1/3 bg-indigo-500 rounded-full"></div></div>
                        </div>
                      </div>
                    </div>
                  )}
                  {dashboardTab === 'output' && (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        {['JSON', 'Protobuf'].map((f, i) => (
                          <div key={f} className={`p-3 rounded-xl border ${i === 0 ? 'bg-indigo-500/10 border-indigo-500/30' : 'bg-zinc-800/30 border-zinc-800'}`}>
                            <span className="text-sm">{f}</span>
                          </div>
                        ))}
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-800/30 space-y-2">
                        {['Track history', 'Confidence', 'Class labels'].map((opt, i) => (
                          <label key={opt} className="flex items-center gap-2 text-sm">
                            <div className={`w-4 h-4 rounded border ${i !== 1 ? 'bg-indigo-500 border-indigo-500' : 'border-zinc-600'}`}></div>
                            {opt}
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="px-5 py-3 border-t border-zinc-800 bg-zinc-900/50 flex justify-between items-center">
                  <code className="text-xs text-zinc-500">pipe_warehouse_v2</code>
                  <span className="text-xs text-amber-400">Preview — Coming Q4 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Integrations */}
          <div>
            <h3 className="text-xl font-bold text-center mb-2">Works with everything</h3>
            <p className="text-zinc-500 text-center text-sm mb-8">If it outputs bounding boxes, UMOT tracks it</p>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                { title: 'YOLO', code: `from ultralytics import YOLO
from umot import Pipeline

model = YOLO('yolov8n.pt')
pipeline = Pipeline('bytetrack')

dets = model(frame)[0].boxes.data.numpy()
tracks = pipeline.update(dets)` },
                { title: 'Roboflow', code: `from roboflow import Roboflow
from umot import Pipeline

model = rf.workspace().project().model
pipeline = Pipeline('botsort')

dets = model.predict(frame).to_numpy()
tracks = pipeline.update(dets)` },
                { title: 'Custom', code: `from umot import Pipeline

pipeline = Pipeline('ocsort')

dets = my_detector(frame)    # [N, 6]
embs = my_reid(crops)        # [N, D]

tracks = pipeline.update(dets, embs)` },
              ].map((ex, i) => (
                <div key={i} className="rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden">
                  <div className="px-4 py-2 border-b border-zinc-800 bg-zinc-900/50">
                    <span className="text-sm font-medium">{ex.title}</span>
                  </div>
                  <pre className="p-4 text-xs overflow-x-auto"><code className="text-zinc-400">{ex.code}</code></pre>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Eyeline */}
      <section id="about" className="relative py-20 px-6 z-10 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <FounderAvatar size={100} className="flex-shrink-0 mx-auto md:mx-0" />
              <div>
                <p className="text-indigo-400 font-medium mb-3">About Eyeline</p>
                <h2 className="text-2xl font-bold mb-4">Built from real-world pain</h2>
                <div className="space-y-4 text-zinc-400">
                  <p>
                    After deploying 50+ computer vision systems, the pattern was clear: detection works, 
                    but everything after it breaks. Tracking integrations fail. IDs switch randomly. 
                    Pipelines become unmaintainable.
                  </p>
                  <p>
                    Eyeline was founded to fix this — to build the infrastructure layer that makes 
                    CV pipelines actually work in production.
                  </p>
                  <p>
                    We're starting with multi-object tracking because it's the most fragmented and 
                    painful part of the pipeline. UMOT is our first step: an open-source tracking 
                    library that works with any detection model.
                  </p>
                  <p className="text-zinc-500 border-l-2 border-indigo-500/50 pl-4">
                    But tracking is just the beginning. Our vision is to become the observability 
                    layer for computer vision — helping teams not just run pipelines, but understand 
                    and monitor them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="relative py-20 px-6 z-10 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-indigo-400 font-medium mb-3">Roadmap</p>
            <h2 className="text-3xl font-bold mb-4">Where we're headed</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-violet-500 to-zinc-800"></div>
              {[
                { q: 'Q2 2026', title: 'UMOT v0.1', status: 'next', items: ['Core Pipeline interface', 'ByteTrack, BoT-SORT, OC-SORT', 'ReID integration', 'Documentation'] },
                { q: 'Q3 2026', title: 'UMOT v0.2', status: 'planned', items: ['DeepSORT, StrongSORT', 'Benchmarks', 'More integrations'] },
                { q: 'Q4 2026', title: 'UMOT Cloud Beta', status: 'planned', items: ['Model hosting', 'Visual pipeline builder', 'Usage dashboard'] },
                { q: '2027', title: 'Platform Growth', status: 'future', items: ['Teams & collaboration', 'Advanced analytics', 'Enterprise features'] },
                { q: 'Future', title: 'The Full Vision', status: 'vision', items: ['Pipeline monitoring', 'Drift detection', 'CV observability'] },
              ].map((phase, i) => (
                <div key={i} className="relative pl-16 pb-10 last:pb-0">
                  <div className={`absolute left-4 w-4 h-4 rounded-full border-2 ${
                    phase.status === 'next' ? 'bg-indigo-500 border-indigo-500 shadow-lg shadow-indigo-500/50' : 
                    phase.status === 'vision' ? 'bg-zinc-900 border-violet-500' : 'bg-zinc-900 border-zinc-700'
                  }`}></div>
                  <div className={`p-5 rounded-xl border ${
                    phase.status === 'next' ? 'bg-indigo-500/5 border-indigo-500/20' : 
                    phase.status === 'vision' ? 'bg-violet-500/5 border-violet-500/20' : 'bg-zinc-900/30 border-zinc-800'
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-sm font-medium ${phase.status === 'next' ? 'text-indigo-400' : phase.status === 'vision' ? 'text-violet-400' : 'text-zinc-500'}`}>{phase.q}</span>
                      {phase.status === 'next' && <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400">Up next</span>}
                      {phase.status === 'vision' && <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-400">Long-term</span>}
                    </div>
                    <h3 className="font-semibold mb-2">{phase.title}</h3>
                    <ul className="flex flex-wrap gap-2">
                      {phase.items.map((item, j) => (
                        <li key={j} className="text-xs px-2 py-1 rounded bg-zinc-800/50 text-zinc-400">{item}</li>
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
            <h2 className="text-3xl font-bold">Common questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-zinc-800 overflow-hidden">
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-900/50 transition">
                  <span className="font-medium">{faq.q}</span>
                  <svg className={`w-5 h-5 text-zinc-500 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                </button>
                {activeFaq === i && <div className="px-6 pb-4"><p className="text-sm text-zinc-400">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 z-10 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-purple-500/10 border border-indigo-500/20 text-center">
            <EyelineLogo size={48} className="mx-auto mb-6 shadow-xl shadow-indigo-500/25" />
            <h2 className="text-3xl font-bold mb-4">Follow our journey</h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              We're building the infrastructure layer for computer vision, starting with tracking. 
              Watch the repo, star it, or reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="https://github.com/eyeline-ai/umot" className="px-8 py-3.5 bg-white text-zinc-900 rounded-xl font-medium hover:bg-zinc-200 transition flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                Star UMOT on GitHub
              </a>
              <a href="mailto:hello@eyeline.dev" className="px-8 py-3.5 border border-zinc-600 hover:border-zinc-500 hover:bg-zinc-900/50 rounded-xl font-medium transition">
                Contact Eyeline
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500">
              <span>Apache 2.0</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
              <span>Open Source</span>
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
            <div className="flex items-center gap-3">
              <EyelineLogo size={32} />
              <div>
                <span className="font-semibold">Eyeline</span>
                <p className="text-xs text-zinc-500">The eye on your CV pipeline</p>
              </div>
            </div>
            <div className="flex gap-8 text-sm text-zinc-500">
              <a href="#umot" className="hover:text-white transition">UMOT</a>
              <a href="#about" className="hover:text-white transition">About</a>
              <a href="#roadmap" className="hover:text-white transition">Roadmap</a>
              <a href="https://github.com/eyeline-ai/umot" className="hover:text-white transition">GitHub</a>
              <a href="mailto:hello@eyeline.dev" className="hover:text-white transition">Contact</a>
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-800/50 text-center text-xs text-zinc-600">
            © 2025 Eyeline. Building the infrastructure layer for computer vision.
          </div>
        </div>
      </footer>
    </div>
  )
}