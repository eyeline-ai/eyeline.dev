import { useState, useEffect, useRef } from 'react'

// Eyeline Logo Component
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

// UMOT Logo Component
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

// Animated Section Component
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  )
}

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
    { id: 'bytetrack', name: 'ByteTrack', speed: 5, accuracy: 3, best: 'Real-time applications', desc: 'Fastest option. Great for live video streams where speed matters more than handling complex occlusions.' },
    { id: 'botsort', name: 'BoT-SORT', speed: 3, accuracy: 4, best: 'Balanced performance', desc: 'Best all-around choice. Combines motion and appearance cues for reliable tracking in most scenarios.' },
    { id: 'ocsort', name: 'OC-SORT', speed: 4, accuracy: 4, best: 'Heavy occlusions', desc: 'Excels when objects frequently overlap or disappear. Uses observation-centric recovery.' },
    { id: 'strongsort', name: 'StrongSORT', speed: 2, accuracy: 5, best: 'Maximum accuracy', desc: 'Highest accuracy when you can afford the compute. Best for offline processing or critical applications.' },
  ]

  const faqs = [
    { q: "What is Eyeline?", a: "Eyeline is a computer vision infrastructure company. We build tools that make CV pipelines work in production. Our focus is on everything after detection: tracking, re-identification, pipeline execution, and eventually monitoring and observability." },
    { q: "What's the relationship between Eyeline and UMOT?", a: "Eyeline is the company, UMOT is our first product. Think of it like Ultralytics (company) and YOLO (product). UMOT is an open-source tracking library, and we're building UMOT Cloud as a managed platform on top of it." },
    { q: "Is UMOT ready to use?", a: "Not yet. We're targeting Q2 2026 for the first release (v0.1) with ByteTrack, BoT-SORT, and OC-SORT implementations. Watch the GitHub repo to get notified when we launch." },
    { q: "What license is UMOT under?", a: "Apache 2.0. It's permissive, enterprise-friendly, and has no copyleft concerns. You can use it commercially, modify it, and include it in proprietary software without restrictions." },
    { q: "Why build another tracking library?", a: "Existing options are either tied to specific frameworks (like Ultralytics), use restrictive licenses (AGPL), or are unmaintained research code. UMOT is framework-agnostic, Apache 2.0 licensed, and built for production use." },
    { q: "What detection models work with UMOT?", a: "Any model that outputs bounding boxes. YOLO variants, DETR, Roboflow models, TensorRT engines, custom models. UMOT takes numpy arrays as input, so it doesn't care where your detections come from." },
    { q: "What's the difference between UMOT and UMOT Cloud?", a: "UMOT is the open-source library you run locally. You provide detections, it returns tracks. UMOT Cloud is a managed platform where you upload your models, and we handle the infrastructure, scaling, and pipeline execution." },
    { q: "What's coming after tracking?", a: "Pipeline monitoring and observability. Once we're running pipelines via UMOT Cloud, we can help teams understand what's happening: drift detection, performance analytics, alerting. That's the long-term vision." },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/50' : ''}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2.5 group">
            <EyelineLogo size={36} className="shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/30 transition-shadow" />
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
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-8">
                <EyelineLogo size={64} className="shadow-xl shadow-indigo-500/25" />
                <div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">Building in public</span>
                  <p className="text-sm text-zinc-500 mt-1">First release: Q2 2026</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                The eye on your
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">CV pipeline</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <p className="text-xl text-zinc-400 mb-3 leading-relaxed">
                We're building the infrastructure layer for computer vision pipelines.
              </p>
              <p className="text-lg text-zinc-500 mb-8">
                Starting with <strong className="text-zinc-300">multi-object tracking</strong>, the most fragmented 
                and critical part of every CV system. Meet UMOT, our open-source tracking library.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="#umot" className="group px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 flex items-center gap-2">
                  Explore UMOT
                  <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                </a>
                <a href="#about" className="px-6 py-3.5 border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900/50 rounded-xl font-medium transition-all">
                  Our Mission
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                <div className="flex items-center gap-2 text-zinc-400">
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Apache 2.0 Licensed
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Zero Framework Dependencies
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Built from 50+ Production Deployments
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="relative py-24 px-6 z-10 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-indigo-400 font-medium mb-3">The Problem</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">CV pipelines break after detection</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Detection is solved. Dozens of great models and platforms exist. But connecting detection to tracking? 
                That's where every project hits a wall.
              </p>
            </div>
          </AnimatedSection>

          {/* Pipeline Visualization */}
          <AnimatedSection delay={100}>
            <div className="max-w-4xl mx-auto mb-16">
              <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <h3 className="text-sm text-zinc-500 mb-6 font-medium text-center">THE COMPUTER VISION PIPELINE</h3>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex-1 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                    <div className="text-2xl mb-2">🎯</div>
                    <span className="text-emerald-400 font-medium">Detection</span>
                    <p className="text-xs text-emerald-400/60 mt-1">Many solutions exist</p>
                  </div>
                  
                  <svg className="w-8 h-8 text-zinc-700 rotate-90 md:rotate-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                  
                  <div className="flex-1 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-center relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-2 py-0.5 bg-red-500/20 rounded text-xs text-red-400 border border-red-500/30">Breaks here</div>
                    <div className="text-2xl mb-2">🔄</div>
                    <span className="text-red-400 font-medium">Tracking</span>
                    <p className="text-xs text-red-400/60 mt-1">Fragmented, broken</p>
                  </div>
                  
                  <svg className="w-8 h-8 text-zinc-700 rotate-90 md:rotate-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                  
                  <div className="flex-1 p-4 rounded-xl bg-zinc-800 border border-zinc-700 text-center">
                    <div className="text-2xl mb-2">🆔</div>
                    <span className="text-zinc-400 font-medium">Re-ID</span>
                    <p className="text-xs text-zinc-500 mt-1">Usually skipped</p>
                  </div>
                  
                  <svg className="w-8 h-8 text-zinc-700 rotate-90 md:rotate-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                  
                  <div className="flex-1 p-4 rounded-xl bg-zinc-800/50 border border-zinc-800 text-center">
                    <div className="text-2xl mb-2">📊</div>
                    <span className="text-zinc-500 font-medium">Application</span>
                    <p className="text-xs text-zinc-600 mt-1">Fragile pipelines</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* The Reality + Why It Happens */}
          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatedSection delay={200}>
              <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 h-full">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-sm text-zinc-500 font-mono ml-2">reality.log</span>
                </div>
                <div className="space-y-4 font-mono text-sm">
                  {[
                    { week: "Week 1", text: '"We\'ll add tracking to our YOLO model"', color: "text-zinc-300" },
                    { week: "Week 2", text: '"ByteTrack repo has broken dependencies"', color: "text-zinc-400" },
                    { week: "Week 3", text: '"BoT-SORT uses AGPL, legal blocked it"', color: "text-amber-400" },
                    { week: "Week 4", text: '"Building tracking from scratch now"', color: "text-amber-400" },
                    { week: "Week 5", text: '"Skipping ReID, too complex to integrate"', color: "text-orange-400" },
                    { week: "Week 6", text: '"Client: why do the IDs keep switching?"', color: "text-red-400" },
                    { week: "Week 7", text: '"Let\'s just accept tracking won\'t be perfect"', color: "text-red-400" },
                  ].map((line, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="text-zinc-600 w-16 flex-shrink-0">{line.week}</span>
                      <span className={line.color}>{line.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-800">
                  <p className="text-sm text-zinc-500 italic">This cycle repeats at every company, for every project.</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 h-full">
                <h3 className="font-semibold mb-6 flex items-center gap-2">
                  <span className="text-lg">🔍</span>
                  Why tracking integration fails
                </h3>
                <div className="space-y-5">
                  {[
                    { title: "Framework coupling", desc: "Existing trackers are tied to specific detection libraries. Using Roboflow? Good luck with ByteTrack.", icon: "⚡" },
                    { title: "Incompatible interfaces", desc: "Every tracker expects different input formats. Swapping algorithms means rewriting integration code.", icon: "🔌" },
                    { title: "Research-grade code", desc: "Most implementations are written for papers, not production. No error handling, no documentation, no tests.", icon: "📚" },
                    { title: "Licensing nightmares", desc: "Popular trackers use AGPL, which legal teams reject. You either violate the license or build from scratch.", icon: "⚖️" },
                    { title: "ReID is an afterthought", desc: "Adding re-identification means integrating yet another incompatible library. Most teams just skip it.", icon: "🔗" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-lg flex-shrink-0">{item.icon}</span>
                      <div>
                        <h4 className="font-medium text-zinc-200">{item.title}</h4>
                        <p className="text-sm text-zinc-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={400}>
            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 text-center">
              <p className="text-lg">
                <strong className="text-white">This is why Eyeline exists.</strong>
                <span className="text-zinc-400"> We're building the infrastructure that makes CV pipelines actually work.</span>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What is MOT - Educational */}
      <section className="relative py-24 px-6 z-10 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-indigo-400 font-medium mb-3">Understanding the Basics</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What is Multi-Object Tracking?</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                MOT is the challenge of detecting multiple objects and maintaining their unique identities 
                across video frames, even through occlusions, camera changes, and complex interactions.
              </p>
            </div>
          </AnimatedSection>

          {/* Three Pillars of MOT */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { 
                num: "1", 
                title: "Detection", 
                desc: "Find all objects of interest in each frame. Output: bounding boxes with class labels and confidence scores.",
                status: "Solved",
                statusColor: "emerald",
                details: "YOLO, DETR, Faster R-CNN, and dozens of other models handle this well. Training platforms like Roboflow and Ultralytics make it accessible.",
                icon: "🎯"
              },
              { 
                num: "2", 
                title: "Tracking", 
                desc: "Associate detections across frames. Same person in frame 1 should have the same ID in frame 100.",
                status: "Fragmented", 
                statusColor: "amber",
                details: "This is where pipelines break. Existing solutions are framework-coupled, poorly documented, or use restrictive licenses.",
                icon: "🔄"
              },
              { 
                num: "3", 
                title: "Re-Identification", 
                desc: "Recover identity after occlusions or camera switches. If someone walks behind a pillar, maintain their ID.",
                status: "Usually Skipped",
                statusColor: "red",
                details: "Too complex to integrate, so most teams skip it entirely. Result: IDs switch constantly, breaking downstream analytics.",
                icon: "🆔"
              },
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{step.icon}</span>
                    <span className={`text-xs px-2.5 py-1 rounded-full ${
                      step.statusColor === 'emerald' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                      step.statusColor === 'amber' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                      'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {step.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-zinc-400 mb-4">{step.desc}</p>
                  <p className="text-sm text-zinc-500 border-t border-zinc-800 pt-4">{step.details}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20">
              <div className="flex items-start gap-4">
                <UmotLogo size={48} className="flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">UMOT handles steps 2 and 3</h4>
                  <p className="text-zinc-400">
                    You bring the detections from any model you want. UMOT provides production-ready tracking algorithms 
                    and seamless ReID integration through a unified interface. One library, all major algorithms, 
                    one consistent API.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* UMOT Product Section */}
      <section id="umot" className="relative py-24 px-6 z-10 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          {/* UMOT Header */}
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-6 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <UmotLogo size={56} className="shadow-lg shadow-violet-500/25" />
                <div className="text-left">
                  <h2 className="text-2xl font-bold">UMOT</h2>
                  <p className="text-sm text-zinc-500">Unified Multi-Object Tracking</p>
                </div>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold mb-4">
                Swap trackers with <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">one line of code</span>
              </h3>
              <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                An open-source tracking library with a data-first interface. Your detections from any model.
                Production-ready algorithms. No framework dependencies.
              </p>
            </div>
          </AnimatedSection>

          {/* Why UMOT */}
          <AnimatedSection delay={100}>
            <div className="grid md:grid-cols-4 gap-4 mb-20">
              {[
                { icon: "🔌", title: "Data-first", desc: "Takes numpy arrays, not model objects. Works with any detection source." },
                { icon: "🔄", title: "Unified API", desc: "Same interface for all trackers. Swap algorithms without changing code." },
                { icon: "⚡", title: "Production-ready", desc: "Research algorithms rewritten for real systems. Tested, documented, maintained." },
                { icon: "📜", title: "Apache 2.0", desc: "No AGPL concerns. Use commercially, modify freely, no copyleft." },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 text-center">
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Data Flow Diagram */}
          <AnimatedSection delay={200}>
            <div className="mb-20">
              <h4 className="text-center text-zinc-500 text-sm font-medium mb-8">HOW UMOT WORKS</h4>
              <div className="max-w-5xl mx-auto p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <div className="grid md:grid-cols-7 gap-4 items-center mb-8">
                  <div className="text-center md:col-span-2">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-violet-500/20 to-violet-600/10 border border-violet-500/30 flex items-center justify-center mb-3">
                      <span className="text-3xl">🎯</span>
                    </div>
                    <p className="font-medium">Your Detection Model</p>
                    <p className="text-xs text-zinc-500 mt-1">YOLO, DETR, Roboflow, custom</p>
                  </div>
                  
                  <div className="hidden md:flex justify-center">
                    <svg className="w-12 h-12 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>

                  <div className="text-center md:col-span-2">
                    <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden mb-3 shadow-xl shadow-violet-500/30 border-2 border-violet-500/30">
                      <UmotLogo size={96} />
                    </div>
                    <p className="font-medium">UMOT</p>
                    <p className="text-xs text-zinc-500 mt-1">Tracking + ReID integration</p>
                  </div>

                  <div className="hidden md:flex justify-center">
                    <svg className="w-12 h-12 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>

                  <div className="text-center md:col-span-1">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 flex items-center justify-center mb-3">
                      <span className="text-3xl">✨</span>
                    </div>
                    <p className="font-medium">Stable Tracks</p>
                    <p className="text-xs text-zinc-500 mt-1">Consistent IDs</p>
                  </div>
                </div>

                {/* Input/Output Specs */}
                <div className="grid md:grid-cols-2 gap-6 pt-8 border-t border-zinc-800">
                  <div className="p-5 rounded-xl bg-zinc-800/50">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                      <p className="text-xs text-zinc-400 font-medium">INPUT</p>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <code className="text-sm text-violet-400 font-mono">detections: np.ndarray</code>
                        <p className="text-xs text-zinc-500 mt-1">Shape [N, 6]: x, y, width, height, confidence, class_id</p>
                      </div>
                      <div>
                        <code className="text-sm text-indigo-400 font-mono">embeddings: np.ndarray <span className="text-zinc-600"># optional</span></code>
                        <p className="text-xs text-zinc-500 mt-1">Shape [N, D]: ReID features, any dimensionality</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 rounded-xl bg-zinc-800/50">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      <p className="text-xs text-zinc-400 font-medium">OUTPUT</p>
                    </div>
                    <div>
                      <code className="text-sm text-emerald-400 font-mono">tracks: List[Track]</code>
                      <div className="mt-2 text-xs text-zinc-500 space-y-1">
                        <p><code className="text-zinc-400">track.id</code> Stable integer identifier</p>
                        <p><code className="text-zinc-400">track.bbox</code> Current bounding box [x, y, w, h]</p>
                        <p><code className="text-zinc-400">track.score</code> Confidence score</p>
                        <p><code className="text-zinc-400">track.history</code> Past positions</p>
                        <p><code className="text-zinc-400">track.state</code> tentative | confirmed | deleted</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Code Example with Tracker Selector */}
          <AnimatedSection delay={300}>
            <div className="mb-20">
              <h4 className="text-center text-zinc-500 text-sm font-medium mb-8">TRY DIFFERENT TRACKERS</h4>
              
              {/* Tracker Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {trackers.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTracker(t.id)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedTracker === t.id 
                        ? 'bg-violet-500/10 border-violet-500/50 shadow-lg shadow-violet-500/10' 
                        : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{t.name}</span>
                      {selectedTracker === t.id && (
                        <svg className="w-4 h-4 text-violet-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      )}
                    </div>
                    <p className="text-xs text-zinc-500 mb-3">{t.best}</p>
                    <div className="flex gap-4 text-xs">
                      <div>
                        <span className="text-zinc-600">Speed </span>
                        <span className="text-emerald-400">{'●'.repeat(t.speed)}</span>
                        <span className="text-zinc-800">{'●'.repeat(5-t.speed)}</span>
                      </div>
                      <div>
                        <span className="text-zinc-600">Acc </span>
                        <span className="text-violet-400">{'●'.repeat(t.accuracy)}</span>
                        <span className="text-zinc-800">{'●'.repeat(5-t.accuracy)}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Selected Tracker Details */}
              <div className="mb-6 p-4 rounded-xl bg-zinc-900/30 border border-zinc-800">
                <p className="text-sm text-zinc-400">
                  <strong className="text-white">{trackers.find(t => t.id === selectedTracker)?.name}:</strong>{' '}
                  {trackers.find(t => t.id === selectedTracker)?.desc}
                </p>
              </div>

              {/* Code Block */}
              <div className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800 bg-zinc-900/50">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                      <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                      <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                    </div>
                    <span className="text-zinc-500 text-xs font-mono">tracking.py</span>
                  </div>
                  <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-1 rounded">Change tracker above ↑</span>
                </div>
                <pre className="p-6 text-sm overflow-x-auto">
                  <code className="text-zinc-300">{`from umot import Pipeline

# Initialize with your chosen tracker
pipeline = Pipeline(tracker='${selectedTracker}')

# Process video frames
for frame in video_stream:
    # Get detections from ANY model (YOLO, DETR, Roboflow, custom...)
    detections = your_detector(frame)      # Shape: [N, 6]
    
    # Optional: add ReID embeddings for better tracking
    embeddings = your_reid_model(crops)    # Shape: [N, D]
    
    # UMOT handles the tracking
    tracks = pipeline.update(detections, embeddings)
    
    # Use the tracks
    for track in tracks:
        print(f"Track {track.id}: bbox={track.bbox}, conf={track.score:.2f}")`}</code>
                </pre>
              </div>
            </div>
          </AnimatedSection>

          {/* Ecosystem Diagram */}
          <AnimatedSection delay={400}>
            <div className="mb-20">
              <h4 className="text-center text-zinc-500 text-sm font-medium mb-8">UNIVERSAL COMPATIBILITY</h4>
              <div className="max-w-5xl mx-auto p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Detection Sources */}
                  <div className="space-y-3">
                    <p className="text-xs text-zinc-500 font-medium text-center mb-4">DETECTION SOURCES</p>
                    {['Ultralytics YOLO', 'Roboflow Models', 'HuggingFace DETR', 'TensorRT Engines', 'Custom Models'].map((source, i) => (
                      <div key={i} className="p-3 rounded-lg bg-zinc-800/50 border border-zinc-700 text-center text-sm">
                        {source}
                      </div>
                    ))}
                  </div>

                  {/* UMOT Center */}
                  <div className="flex flex-col items-center">
                    <div className="hidden md:flex flex-col items-center mb-4">
                      {[0,1,2,3,4].map(i => (
                        <svg key={i} className="w-6 h-6 text-zinc-700 -my-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                      ))}
                    </div>
                    <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-2xl shadow-violet-500/30 border-2 border-violet-500/30">
                      <UmotLogo size={128} />
                    </div>
                    <p className="font-bold mt-4 text-lg">UMOT</p>
                    <p className="text-xs text-zinc-500">Universal Adapter</p>
                    <div className="hidden md:flex flex-col items-center mt-4">
                      {[0,1,2].map(i => (
                        <svg key={i} className="w-6 h-6 text-zinc-700 -my-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Deployment Targets */}
                  <div className="space-y-3">
                    <p className="text-xs text-zinc-500 font-medium text-center mb-4">DEPLOYMENT OPTIONS</p>
                    {['Local Development', 'Edge Devices', 'UMOT Cloud', 'Your Infrastructure', 'Hybrid Setup'].map((target, i) => (
                      <div key={i} className={`p-3 rounded-lg border text-center text-sm ${
                        target === 'UMOT Cloud' 
                          ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300' 
                          : 'bg-zinc-800/50 border-zinc-700'
                      }`}>
                        {target}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-center text-sm text-zinc-500 mt-8 pt-6 border-t border-zinc-800">
                  UMOT doesn't care where your detections come from or where you deploy. It just tracks.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Integration Examples */}
          <AnimatedSection delay={500}>
            <div className="mb-20">
              <h4 className="text-center text-zinc-500 text-sm font-medium mb-8">INTEGRATION EXAMPLES</h4>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { 
                    title: 'YOLO + UMOT', 
                    desc: 'Use Ultralytics YOLO for detection, UMOT for tracking',
                    code: `from ultralytics import YOLO
from umot import Pipeline

# Your YOLO model
model = YOLO('yolov8n.pt')
pipeline = Pipeline(tracker='bytetrack')

for frame in video:
    # YOLO detection
    results = model(frame)
    detections = results[0].boxes.data.cpu().numpy()
    
    # UMOT tracking
    tracks = pipeline.update(detections)
    
    for track in tracks:
        draw_box(frame, track.bbox, f"ID: {track.id}")` 
                  },
                  { 
                    title: 'Roboflow + UMOT', 
                    desc: 'Train on Roboflow, track with UMOT',
                    code: `from roboflow import Roboflow
from umot import Pipeline

# Your Roboflow model
rf = Roboflow(api_key="xxx")
model = rf.workspace().project("xxx").version(1).model
pipeline = Pipeline(tracker='botsort')

for frame in video:
    # Roboflow detection
    result = model.predict(frame, confidence=40)
    detections = result.to_numpy()  # [N, 6]
    
    # UMOT tracking
    tracks = pipeline.update(detections)
    
    for track in tracks:
        draw_box(frame, track.bbox, f"ID: {track.id}")` 
                  },
                  { 
                    title: 'Custom + ReID', 
                    desc: 'Your models, with ReID for better tracking',
                    code: `from umot import Pipeline
import numpy as np

# Your custom models
detector = load_your_detector()
reid_model = load_your_reid()
pipeline = Pipeline(tracker='strongsort')

for frame in video:
    # Your detection
    detections = detector(frame)  # [N, 6]
    
    # Your ReID embeddings
    crops = extract_crops(frame, detections)
    embeddings = reid_model(crops)  # [N, 512]
    
    # UMOT tracking with ReID
    tracks = pipeline.update(detections, embeddings)` 
                  },
                ].map((ex, i) => (
                  <div key={i} className="rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden">
                    <div className="px-5 py-4 border-b border-zinc-800">
                      <h5 className="font-semibold">{ex.title}</h5>
                      <p className="text-xs text-zinc-500 mt-1">{ex.desc}</p>
                    </div>
                    <pre className="p-4 text-xs overflow-x-auto max-h-64">
                      <code className="text-zinc-400">{ex.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* OSS vs Cloud */}
          <AnimatedSection delay={600}>
            <div className="mb-20">
              <h4 className="text-center text-zinc-500 text-sm font-medium mb-2">TWO WAYS TO USE UMOT</h4>
              <p className="text-center text-zinc-400 mb-8">Same tracking algorithms, different deployment models</p>
              
              {/* Comparison Table */}
              <div className="max-w-4xl mx-auto mb-8 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left py-4 px-4 font-medium text-zinc-500">Feature</th>
                      <th className="text-center py-4 px-6">
                        <div className="flex flex-col items-center gap-1">
                          <span className="font-semibold text-violet-400">UMOT</span>
                          <span className="text-xs text-zinc-600">Open Source</span>
                        </div>
                      </th>
                      <th className="text-center py-4 px-6">
                        <div className="flex flex-col items-center gap-1">
                          <span className="font-semibold text-indigo-400">UMOT Cloud</span>
                          <span className="text-xs text-zinc-600">Managed Platform</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-300">
                    {[
                      ["Tracking algorithms", "All SOTA trackers", "All SOTA + early access to new"],
                      ["ReID integration", "✓ Bring your embeddings", "✓ Hosted ReID models available"],
                      ["Detection models", "You run inference", "We run inference for you"],
                      ["Infrastructure", "Your hardware", "Auto-scaling GPUs"],
                      ["Visual pipeline builder", "—", "✓ Dashboard UI"],
                      ["New tracker releases", "After 90 days", "Within 30 days of paper"],
                      ["Video storage", "Your choice", "None (privacy-first)"],
                      ["Support", "Community (GitHub)", "Priority support + SLA"],
                      ["License", "Apache 2.0", "Commercial"],
                      ["Price", "Free forever", "From $29/month"],
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-zinc-800/50 hover:bg-zinc-900/30">
                        <td className="py-3 px-4 text-zinc-400">{row[0]}</td>
                        <td className="py-3 px-6 text-center">{row[1]}</td>
                        <td className="py-3 px-6 text-center">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Which Should You Use */}
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/5 to-violet-600/5 border border-violet-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                      </svg>
                    </div>
                    <h5 className="font-semibold">Use UMOT (Open Source) if you...</h5>
                  </div>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-violet-400 mt-0.5">→</span>
                      <span>Already have GPU infrastructure or run on edge devices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-400 mt-0.5">→</span>
                      <span>Want full control over your pipeline and data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-400 mt-0.5">→</span>
                      <span>Need offline or air-gapped operation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-400 mt-0.5">→</span>
                      <span>Prefer to manage your own models and infrastructure</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-violet-500/20">
                    <code className="text-xs text-violet-400 bg-violet-500/10 px-3 py-1.5 rounded-lg">from umot import Pipeline</code>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-indigo-600/5 border border-indigo-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                      </svg>
                    </div>
                    <h5 className="font-semibold">Use UMOT Cloud if you...</h5>
                  </div>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5">→</span>
                      <span>Don't want to manage GPU infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5">→</span>
                      <span>Need to scale up or down dynamically</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5">→</span>
                      <span>Want visual pipeline configuration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5">→</span>
                      <span>Need early access to the latest trackers</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-indigo-500/20">
                    <code className="text-xs text-indigo-400 bg-indigo-500/10 px-3 py-1.5 rounded-lg">from umot.cloud import Client</code>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Cloud Dashboard Preview */}
          <AnimatedSection delay={700}>
            <div>
              <h4 className="text-center text-zinc-500 text-sm font-medium mb-2">UMOT CLOUD PREVIEW</h4>
              <p className="text-center text-zinc-400 mb-8">Visual pipeline configuration. Coming Q4 2026.</p>
              
              <div className="max-w-5xl mx-auto">
                <div className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/80">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <UmotLogo size={28} />
                        <span className="font-medium">UMOT Cloud</span>
                      </div>
                      <div className="h-5 w-px bg-zinc-800"></div>
                      <span className="text-sm text-zinc-500">Pipeline Editor</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">All changes saved</span>
                      <button className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition">Deploy Pipeline</button>
                    </div>
                  </div>

                  {/* Dashboard Tabs */}
                  <div className="flex border-b border-zinc-800 bg-zinc-900/50">
                    {[
                      { id: 'models', label: '1. Models', icon: '🎯' },
                      { id: 'tracker', label: '2. Tracker', icon: '🔄' },
                      { id: 'output', label: '3. Output', icon: '📤' },
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setDashboardTab(tab.id)}
                        className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition relative ${
                          dashboardTab === tab.id ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                        }`}
                      >
                        <span>{tab.icon}</span>
                        {tab.label}
                        {dashboardTab === tab.id && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500"></div>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-8 min-h-72">
                    {dashboardTab === 'models' && (
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-sm text-zinc-400 mb-3">Detection Model</label>
                          <div className="p-5 rounded-xl bg-zinc-800/50 border border-zinc-700">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center text-xl">🎯</div>
                                <div>
                                  <p className="font-medium">yolov8n-warehouse.pt</p>
                                  <p className="text-xs text-zinc-500">PyTorch • 6.2 MB • Uploaded 2 days ago</p>
                                </div>
                              </div>
                              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Active</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <span className="text-xs px-2 py-1 rounded bg-zinc-700 text-zinc-300">person</span>
                              <span className="text-xs px-2 py-1 rounded bg-zinc-700 text-zinc-300">forklift</span>
                              <span className="text-xs px-2 py-1 rounded bg-zinc-700 text-zinc-300">pallet</span>
                              <span className="text-xs px-2 py-1 rounded bg-zinc-700 text-zinc-300">vehicle</span>
                            </div>
                          </div>
                          <button className="mt-4 text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-2 transition">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
                            Upload new model
                          </button>
                        </div>
                        <div>
                          <label className="block text-sm text-zinc-400 mb-3">ReID Model (Optional)</label>
                          <div className="p-5 rounded-xl bg-zinc-800/30 border border-zinc-700 border-dashed h-36 flex flex-col items-center justify-center">
                            <div className="w-12 h-12 rounded-xl bg-zinc-700/50 flex items-center justify-center mb-3">
                              <svg className="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4"/></svg>
                            </div>
                            <p className="text-sm text-zinc-500">Drop ReID model here</p>
                            <p className="text-xs text-zinc-600 mt-1">Improves tracking across occlusions</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {dashboardTab === 'tracker' && (
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-sm text-zinc-400 mb-3">Tracking Algorithm</label>
                          <div className="space-y-2">
                            {trackers.map(t => (
                              <div
                                key={t.id}
                                className={`p-4 rounded-xl border cursor-pointer transition ${
                                  selectedTracker === t.id 
                                    ? 'bg-indigo-500/10 border-indigo-500/40' 
                                    : 'bg-zinc-800/30 border-zinc-800 hover:border-zinc-700'
                                }`}
                                onClick={() => setSelectedTracker(t.id)}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-medium">{t.name}</span>
                                  <span className="text-xs text-zinc-500">{t.best}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm text-zinc-400 mb-3">Parameters</label>
                          <div className="space-y-5 p-5 rounded-xl bg-zinc-800/30">
                            {[
                              { label: 'Track threshold', value: 0.5, display: '0.5' },
                              { label: 'Track buffer', value: 0.3, display: '30 frames' },
                              { label: 'Match threshold', value: 0.8, display: '0.8' },
                              { label: 'Min box area', value: 0.1, display: '100 px²' },
                            ].map((param, i) => (
                              <div key={i}>
                                <div className="flex justify-between text-sm mb-2">
                                  <span className="text-zinc-500">{param.label}</span>
                                  <span className="text-zinc-300">{param.display}</span>
                                </div>
                                <div className="h-2 bg-zinc-700 rounded-full">
                                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${param.value * 100}%` }}></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {dashboardTab === 'output' && (
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-sm text-zinc-400 mb-3">Response Format</label>
                          <div className="space-y-2">
                            {['JSON (default)', 'Protocol Buffers', 'MessagePack'].map((fmt, i) => (
                              <div
                                key={fmt}
                                className={`p-4 rounded-xl border cursor-pointer transition ${
                                  i === 0 
                                    ? 'bg-indigo-500/10 border-indigo-500/40' 
                                    : 'bg-zinc-800/30 border-zinc-800 hover:border-zinc-700'
                                }`}
                              >
                                <span className="text-sm">{fmt}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm text-zinc-400 mb-3">Include in Response</label>
                          <div className="space-y-3 p-5 rounded-xl bg-zinc-800/30">
                            {[
                              { label: 'Track history', checked: true },
                              { label: 'Bounding boxes', checked: true },
                              { label: 'Confidence scores', checked: true },
                              { label: 'Class labels', checked: true },
                              { label: 'Embeddings', checked: false },
                              { label: 'Velocity estimates', checked: false },
                            ].map((opt, i) => (
                              <label key={i} className="flex items-center gap-3 cursor-pointer">
                                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition ${
                                  opt.checked ? 'bg-indigo-500 border-indigo-500' : 'border-zinc-600'
                                }`}>
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
                  <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/50 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-zinc-500">
                      <span>Pipeline ID:</span>
                      <code className="px-2 py-1 rounded bg-zinc-800 text-zinc-400 font-mono">pipe_warehouse_v2</code>
                      <span className="text-zinc-700">•</span>
                      <span>Last deployed: Never</span>
                    </div>
                    <span className="text-xs text-amber-400 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                      Preview Only. Coming Q4 2026.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Eyeline */}
      <section id="about" className="relative py-24 px-6 z-10 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="flex-shrink-0">
                  <FounderAvatar size={120} className="shadow-xl shadow-indigo-500/20" />
                </div>
                <div>
                  <p className="text-indigo-400 font-medium mb-3">About Eyeline</p>
                  <h2 className="text-3xl font-bold mb-6">Built from real-world pain</h2>
                  <div className="space-y-4 text-zinc-400 leading-relaxed">
                    <p>
                      After deploying 50+ computer vision systems across retail, security, traffic, and industrial 
                      applications, the pattern became impossible to ignore: detection works beautifully, but 
                      everything after it falls apart.
                    </p>
                    <p>
                      Tracking integrations fail because of framework coupling. IDs switch randomly because ReID is 
                      too complex to integrate. Pipelines become unmaintainable because every project reinvents 
                      the same broken wheel.
                    </p>
                    <p>
                      Eyeline was founded to fix this. We're building the infrastructure layer that makes CV 
                      pipelines actually work in production.
                    </p>
                    <p>
                      We're starting with multi-object tracking because it's the most fragmented and painful part 
                      of the pipeline. UMOT is our first step: an open-source tracking library that works with 
                      any detection model.
                    </p>
                  </div>
                  
                  <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-violet-500/5 to-indigo-500/5 border border-violet-500/20">
                    <h4 className="font-medium mb-2 text-zinc-200">The Long-Term Vision</h4>
                    <p className="text-sm text-zinc-500">
                      Tracking is just the beginning. Our vision is to become the observability layer for 
                      computer vision. Once we're running pipelines, we can help teams understand what's 
                      happening: drift detection, performance analytics, alerting. Not just running CV 
                      pipelines, but understanding them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="relative py-24 px-6 z-10 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-indigo-400 font-medium mb-3">Roadmap</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Where we're headed</h2>
              <p className="text-zinc-400">Building in public. Here's the plan.</p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line with gradient */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-violet-500 via-purple-500 to-zinc-800"></div>

              {[
                { 
                  q: 'Q2 2026', 
                  title: 'UMOT v0.1', 
                  status: 'next', 
                  items: ['Core Pipeline interface', 'ByteTrack, BoT-SORT, OC-SORT implementations', 'Basic ReID integration', 'Documentation and examples', '10+ integration guides'] 
                },
                { 
                  q: 'Q3 2026', 
                  title: 'UMOT v0.2', 
                  status: 'planned', 
                  items: ['DeepSORT, StrongSORT implementations', 'Performance benchmarks vs reference', 'Visualization utilities', 'Video file processing helpers'] 
                },
                { 
                  q: 'Q4 2026', 
                  title: 'UMOT Cloud Beta', 
                  status: 'planned', 
                  items: ['Model upload and hosting', 'Visual pipeline builder', 'Tracking API', 'Usage dashboard and billing'] 
                },
                { 
                  q: '2027', 
                  title: 'Platform Growth', 
                  status: 'future', 
                  items: ['Team workspaces and collaboration', 'A/B testing for pipelines', 'Advanced analytics', 'Additional tracker implementations'] 
                },
                { 
                  q: 'Future', 
                  title: 'The Full Vision', 
                  status: 'vision', 
                  items: ['Pipeline monitoring', 'Drift detection', 'Performance alerting', 'CV observability suite'] 
                },
              ].map((phase, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className="relative pl-20 pb-12 last:pb-0">
                    {/* Timeline node */}
                    <div className={`absolute left-6 w-5 h-5 rounded-full border-2 transform -translate-x-1/2 ${
                      phase.status === 'next' 
                        ? 'bg-indigo-500 border-indigo-400 shadow-lg shadow-indigo-500/50' 
                        : phase.status === 'vision'
                        ? 'bg-violet-500/20 border-violet-500'
                        : 'bg-zinc-900 border-zinc-700'
                    }`}>
                      {phase.status === 'next' && (
                        <div className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-50"></div>
                      )}
                    </div>
                    
                    {/* Content card */}
                    <div className={`p-6 rounded-2xl border ${
                      phase.status === 'next' 
                        ? 'bg-indigo-500/5 border-indigo-500/30' 
                        : phase.status === 'vision'
                        ? 'bg-violet-500/5 border-violet-500/20'
                        : 'bg-zinc-900/30 border-zinc-800'
                    }`}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-sm font-semibold ${
                          phase.status === 'next' ? 'text-indigo-400' : 
                          phase.status === 'vision' ? 'text-violet-400' : 
                          'text-zinc-500'
                        }`}>{phase.q}</span>
                        {phase.status === 'next' && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">Up next</span>
                        )}
                        {phase.status === 'vision' && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/30">Long-term</span>
                        )}
                      </div>
                      <h3 className="font-semibold text-lg mb-4">{phase.title}</h3>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {phase.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-zinc-400">
                            <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                              phase.status === 'next' ? 'text-indigo-400' :
                              phase.status === 'vision' ? 'text-violet-400' :
                              'text-zinc-600'
                            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 px-6 z-10 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-indigo-400 font-medium mb-3">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Common questions</h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border border-zinc-800 overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-zinc-900/50 transition"
                  >
                    <span className="font-medium pr-4">{faq.q}</span>
                    <svg 
                      className={`w-5 h-5 text-zinc-500 flex-shrink-0 transition-transform duration-200 ${activeFaq === i ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${activeFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="px-6 pb-5">
                      <p className="text-zinc-400 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 z-10 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="p-12 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-purple-500/10 border border-indigo-500/20 text-center relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <EyelineLogo size={56} className="mx-auto mb-6 shadow-xl shadow-indigo-500/30" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Follow our journey</h2>
                <p className="text-zinc-400 mb-8 max-w-xl mx-auto text-lg">
                  We're building the infrastructure layer for computer vision, starting with tracking. 
                  Watch the repo to get notified when we ship.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <a 
                    href="https://github.com/eyeline-ai/umot" 
                    className="group px-8 py-4 bg-white text-zinc-900 rounded-xl font-semibold hover:bg-zinc-100 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    Star UMOT on GitHub
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                  </a>
                  <a 
                    href="mailto:hello@eyeline.dev" 
                    className="px-8 py-4 border border-zinc-600 hover:border-zinc-500 hover:bg-zinc-900/50 rounded-xl font-semibold transition-all"
                  >
                    Contact Eyeline
                  </a>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-500">
                  <span>Apache 2.0 Licensed</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                  <span>Open Source Forever</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                  <span>First Release Q2 2026</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-zinc-800/50 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <EyelineLogo size={40} />
                <div>
                  <span className="font-semibold text-lg">Eyeline</span>
                  <p className="text-xs text-zinc-500">The eye on your CV pipeline</p>
                </div>
              </div>
              <p className="text-sm text-zinc-500 max-w-sm">
                Building the infrastructure layer for computer vision pipelines. 
                Starting with multi-object tracking.
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li><a href="#umot" className="hover:text-white transition">UMOT (Open Source)</a></li>
                <li><a href="#umot" className="hover:text-white transition">UMOT Cloud</a></li>
                <li><a href="#roadmap" className="hover:text-white transition">Roadmap</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="https://github.com/eyeline-ai/umot" className="hover:text-white transition">GitHub</a></li>
                <li><a href="mailto:hello@eyeline.dev" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-zinc-600">
              © 2025 Eyeline. Building the infrastructure layer for computer vision.
            </p>
            <p className="text-xs text-zinc-600">
              Made with focus in Mexico 🇲🇽
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}