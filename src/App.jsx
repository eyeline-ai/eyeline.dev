import { useState, useEffect } from 'react'

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedMode, setSelectedMode] = useState('oss')
  const [hoveredFeature, setHoveredFeature] = useState(null)
  const [selectedTracker, setSelectedTracker] = useState('bytetrack')
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black to-cyan-900/20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/25">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold">Eyeline</span>
              <span className="text-xs text-gray-400 block -mt-1">Building UMOT</span>
            </div>
            <span className="text-xs text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full ml-2">Q1 2026</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#what-is-mot" className="text-gray-400 hover:text-white transition-colors text-sm hidden md:inline">What is MOT?</a>
            <a href="#how" className="text-gray-400 hover:text-white transition-colors text-sm hidden md:inline">How It Works</a>
            <a href="#ecosystem" className="text-gray-400 hover:text-white transition-colors text-sm hidden md:inline">Ecosystem</a>
            <a href="#research-lab" className="text-gray-400 hover:text-white transition-colors text-sm hidden md:inline">Research Lab</a>
            <a href="#roadmap" className="text-gray-400 hover:text-white transition-colors text-sm hidden md:inline">Roadmap</a>
            <a href="#updates" className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 rounded-lg transition-all text-sm font-medium shadow-lg shadow-violet-500/25">
              Get Updates
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Authority Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-green-400 text-sm font-medium">Built by CV engineers who've deployed 50+ production tracking systems</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Universal Tracking
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 animate-gradient">
                for Computer Vision
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
              <strong className="text-white">Detections in, tracks out.</strong> Any model. Any framework. Production ready.
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              UMOT (Unified Multi-Object Tracking) is the missing integration layer that makes detection models work with state-of-the-art tracking.
            </p>
          </div>

          {/* Visual Demo */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500"></div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  {/* Input */}
                  <div className="text-center">
                    <div className="mb-4 relative">
                      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-violet-500/20 to-violet-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-violet-500/30">
                        <div className="space-y-2">
                          <div className="w-20 h-3 bg-violet-400/50 rounded animate-pulse"></div>
                          <div className="w-16 h-3 bg-violet-400/50 rounded animate-pulse" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-18 h-3 bg-violet-400/50 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">Your Detections</h3>
                    <p className="text-sm text-gray-400">YOLO, Roboflow, Custom</p>
                    <code className="text-xs text-violet-400 bg-violet-900/20 px-2 py-1 rounded mt-2 inline-block">
                      [N, 6] numpy array
                    </code>
                  </div>

                  {/* UMOT */}
                  <div className="text-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-full h-12 text-gray-700" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} strokeDasharray="5 5" d="M 0 24 L 300 24" className="hidden md:block"/>
                      </svg>
                    </div>
                    <div className="mb-4 relative z-10">
                      <div className="w-40 h-40 mx-auto bg-gradient-to-br from-violet-600 to-cyan-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-violet-500/25 transform hover:scale-105 transition-transform">
                        <div>
                          <div className="text-4xl font-bold text-white mb-1">UMOT</div>
                          <div className="text-xs text-white/80">Tracking Layer</div>
                        </div>
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">Universal Integration</h3>
                    <p className="text-sm text-gray-400">ByteTrack, BoT-SORT, OC-SORT</p>
                  </div>

                  {/* Output */}
                  <div className="text-center">
                    <div className="mb-4 relative">
                      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-green-500/30">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            <div className="text-xs text-green-400">ID: 1</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            <div className="text-xs text-green-400">ID: 2</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            <div className="text-xs text-green-400">ID: 3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">Stable Tracks</h3>
                    <p className="text-sm text-gray-400">Consistent IDs, Multi-camera</p>
                    <code className="text-xs text-green-400 bg-green-900/20 px-2 py-1 rounded mt-2 inline-block">
                      Track objects with IDs
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Examples with Toggle */}
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center gap-2 mb-8">
              <button
                onClick={() => setSelectedMode('oss')}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedMode === 'oss' 
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25' 
                    : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Open Source
                </div>
              </button>
              <button
                onClick={() => setSelectedMode('cloud')}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedMode === 'cloud' 
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/25' 
                    : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  Cloud Platform
                </div>
              </button>
            </div>

            <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-gray-900/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-500 text-sm ml-2 font-mono">
                  {selectedMode === 'oss' ? 'your_pipeline.py' : 'cloud_tracking.py'}
                </span>
                <span className={`ml-auto text-xs px-2 py-1 rounded ${selectedMode === 'oss' ? 'bg-violet-500/20 text-violet-400' : 'bg-cyan-500/20 text-cyan-400'}`}>
                  {selectedMode === 'oss' ? 'Local Execution' : 'Managed Infrastructure'}
                </span>
              </div>
              <pre className="p-6 text-sm overflow-x-auto">
                <code className="text-gray-300">
{selectedMode === 'oss' ? 
`# UMOT Open Source - Pure tracking layer, no model loading
from umot import Pipeline
import numpy as np

# Initialize tracker - no model dependencies!
pipeline = Pipeline(
    tracker='bytetrack',     # Or botsort, ocsort, deepsort
    # Full control over every parameter
    track_thresh=0.5,
    track_buffer=30,
    match_thresh=0.8,
    min_box_area=10,
    fps=30
)

# Your detection pipeline - you control this completely
image = load_image('frame.jpg')
detections = your_yolo_model(image)      # [N, 6]: x,y,w,h,conf,class
embeddings = your_reid_model(crops)      # [N, 128]: Optional ReID

# UMOT just tracks - universal compatibility
tracks = pipeline.update(detections, embeddings)

# Production-ready output
for track in tracks:
    print(f"Track {track.id}: bbox={track.bbox}, conf={track.score}")
    # Stable IDs across frames, cameras, occlusions` 
:
`# Eyeline Cloud - Complete platform with infrastructure
from eyeline import Client

# Initialize cloud client
client = Client(api_key='eye_xxx')  # Get your key at eyeline.dev

# Option 1: Zero configuration - best general models
results = client.track('warehouse_video.mp4')

# Option 2: Your models hosted on our infrastructure
# Step 1: Upload models via dashboard (PyTorch, ONNX, TF, etc.)
# Step 2: Configure pipeline visually
# Step 3: Get your pipeline ID
results = client.track(
    'warehouse_video.mp4',
    pipeline='pipe_warehouse_v2'  # Your configured pipeline
)

# Option 3: Custom model loader (Coming Q4 2026)
# Define custom loading logic in dashboard for ANY framework
# We handle sandboxed execution, dependencies, scaling
results = client.track(
    'video.mp4',
    pipeline='pipe_custom_framework'  # Even exotic formats!
)

# Same quality as OSS, infinite scale, zero DevOps`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* What is MOT Section */}
      <section id="what-is-mot" className="relative py-20 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What is Multi-Object Tracking?
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              MOT is the challenge of detecting multiple objects and maintaining their identities across video frames - 
              even through occlusions, camera changes, and complex interactions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual Explanation */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-xl font-semibold mb-6">The Three Pillars of MOT</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-400 mb-1">Detection</h4>
                      <p className="text-sm text-gray-400">Find objects in each frame - people, vehicles, products</p>
                      <div className="mt-2 text-xs text-green-400/60">Status: Many good solutions exist</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🔄</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-1">Tracking</h4>
                      <p className="text-sm text-gray-400">Follow objects frame-to-frame using motion and appearance</p>
                      <div className="mt-2 text-xs text-yellow-400/60">Status: Fragmented, hard to integrate</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🆔</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-400 mb-1">Re-Identification</h4>
                      <p className="text-sm text-gray-400">Maintain identity across occlusions and cameras</p>
                      <div className="mt-2 text-xs text-red-400/60">Status: Usually skipped, too complex</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why UMOT */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Why "UMOT"?</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-900 rounded-xl border border-gray-800">
                  <h4 className="font-semibold text-violet-400 mb-2">Unified</h4>
                  <p className="text-sm text-gray-400">
                    Brings together detection, tracking, and ReID into one cohesive pipeline
                  </p>
                </div>
                <div className="p-4 bg-gray-900 rounded-xl border border-gray-800">
                  <h4 className="font-semibold text-violet-400 mb-2">Multi-Object</h4>
                  <p className="text-sm text-gray-400">
                    Handles multiple objects simultaneously with unique, stable identities
                  </p>
                </div>
                <div className="p-4 bg-gray-900 rounded-xl border border-gray-800">
                  <h4 className="font-semibold text-violet-400 mb-2">Tracking</h4>
                  <p className="text-sm text-gray-400">
                    State-of-the-art tracking algorithms optimized for production use
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 rounded-xl border border-violet-500/30">
                <p className="text-sm">
                  <strong className="text-white">The Problem:</strong> Every CV engineer rebuilds this integration from scratch.
                  <br/>
                  <strong className="text-white">Our Solution:</strong> UMOT provides the integration layer once, properly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Detailed */}
      <section id="how" className="relative py-20 px-6 z-10 bg-gradient-to-b from-transparent to-violet-500/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            How UMOT Works
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 text-lg">
            Simple data interface, powerful tracking. No model loading complexity.
          </p>

          {/* Architecture Diagram */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-violet-500/20 to-violet-600/20 rounded-2xl mx-auto flex items-center justify-center">
                      <span className="text-3xl font-bold text-violet-400">1</span>
                    </div>
                    <div className="absolute -top-2 -right-2 px-2 py-1 bg-violet-600 text-xs rounded-full">Input</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Generate Detections</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Use any detector: YOLO, Roboflow, DETR, custom models
                  </p>
                  <div className="p-3 bg-black/50 rounded-lg border border-gray-800">
                    <code className="text-xs text-violet-400">
                      detections = model(image)<br/>
                      # Shape: [N, 6]<br/>
                      # [x, y, w, h, conf, class]
                    </code>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-2xl mx-auto flex items-center justify-center">
                      <span className="text-3xl font-bold text-cyan-400">2</span>
                    </div>
                    <div className="absolute -top-2 -right-2 px-2 py-1 bg-cyan-600 text-xs rounded-full">Optional</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Add Embeddings</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Optional ReID for better tracking across occlusions
                  </p>
                  <div className="p-3 bg-black/50 rounded-lg border border-gray-800">
                    <code className="text-xs text-cyan-400">
                      embeddings = reid(crops)<br/>
                      # Shape: [N, D]<br/>
                      # Any dimension D
                    </code>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl mx-auto flex items-center justify-center">
                      <span className="text-3xl font-bold text-green-400">3</span>
                    </div>
                    <div className="absolute -top-2 -right-2 px-2 py-1 bg-green-600 text-xs rounded-full">Output</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Get Stable Tracks</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    UMOT returns tracked objects with consistent IDs
                  </p>
                  <div className="p-3 bg-black/50 rounded-lg border border-gray-800">
                    <code className="text-xs text-green-400">
                      tracks = pipeline.update()<br/>
                      # Returns: Track objects<br/>
                      # Stable IDs maintained
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tracker Comparison */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Choose Your Tracker</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { name: 'ByteTrack', speed: 'Fast', accuracy: 'Good', desc: 'Best for real-time' },
                { name: 'BoT-SORT', speed: 'Medium', accuracy: 'Excellent', desc: 'Balanced performance' },
                { name: 'OC-SORT', speed: 'Fast', accuracy: 'Good', desc: 'Handles occlusions' },
                { name: 'DeepSORT', speed: 'Slow', accuracy: 'Good', desc: 'Classic, reliable' },
                { name: 'StrongSORT', speed: 'Slow', accuracy: 'Best', desc: 'Maximum accuracy' }
              ].map((tracker) => (
                <button
                  key={tracker.name}
                  onClick={() => setSelectedTracker(tracker.name.toLowerCase().replace('-', ''))}
                  className={`p-4 rounded-xl border transition-all ${
                    selectedTracker === tracker.name.toLowerCase().replace('-', '')
                      ? 'bg-violet-500/20 border-violet-500'
                      : 'bg-gray-900 border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <div className="font-semibold mb-1">{tracker.name}</div>
                  <div className="text-xs text-gray-400 mb-2">{tracker.desc}</div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Speed:</span>
                    <span className={`${
                      tracker.speed === 'Fast' ? 'text-green-400' :
                      tracker.speed === 'Medium' ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>{tracker.speed}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Accuracy:</span>
                    <span className={`${
                      tracker.accuracy === 'Best' || tracker.accuracy === 'Excellent' ? 'text-green-400' :
                      'text-yellow-400'
                    }`}>{tracker.accuracy}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section id="ecosystem" className="relative py-20 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            The Integration Ecosystem
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12 text-lg">
            UMOT is the universal adapter for computer vision. Connect any detection source, 
            integrate with any tool, deploy anywhere.
          </p>

          {/* Ecosystem Visualization */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="relative">
              {/* Center - UMOT */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-48 h-48 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-violet-500/50">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-white mb-2">UMOT</div>
                    <div className="text-sm text-white/80">Universal Adapter</div>
                  </div>
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="h-96 relative">
                {/* Detection Sources */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Detection Sources</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-violet-500/20 rounded flex items-center justify-center">
                          <span className="text-xs">🤖</span>
                        </div>
                        <span className="text-xs">Roboflow</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-violet-500/20 rounded flex items-center justify-center">
                          <span className="text-xs">🚀</span>
                        </div>
                        <span className="text-xs">Ultralytics</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-violet-500/20 rounded flex items-center justify-center">
                          <span className="text-xs">🤗</span>
                        </div>
                        <span className="text-xs">HuggingFace</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deployment Targets */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Deploy Anywhere</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-green-500/20 rounded flex items-center justify-center">
                          <span className="text-xs">💻</span>
                        </div>
                        <span className="text-xs">Local Device</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-green-500/20 rounded flex items-center justify-center">
                          <span className="text-xs">☁️</span>
                        </div>
                        <span className="text-xs">Eyeline Cloud</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-green-500/20 rounded flex items-center justify-center">
                          <span className="text-xs">🏭</span>
                        </div>
                        <span className="text-xs">Edge/On-Prem</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Annotation Tools */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                  <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Annotation</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-cyan-500/20 rounded flex items-center justify-center">
                          <span className="text-xs">🏷️</span>
                        </div>
                        <span className="text-xs">CVAT</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-cyan-500/20 rounded flex items-center justify-center">
                          <span className="text-xs">📝</span>
                        </div>
                        <span className="text-xs">Label Studio</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Monitoring */}
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                  <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Monitoring</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-yellow-500/20 rounded flex items-center justify-center">
                          <span className="text-xs">📊</span>
                        </div>
                        <span className="text-xs">Analytics</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-yellow-500/20 rounded flex items-center justify-center">
                          <span className="text-xs">🔄</span>
                        </div>
                        <span className="text-xs">Drift Detection</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership Strategy */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-violet-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <h3 className="text-lg font-semibold">Roboflow Integration</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Train in Roboflow, track with UMOT. Seamless integration using their API.
              </p>
              <code className="text-xs text-violet-400 bg-black/50 px-3 py-2 rounded block">
                detector='roboflow://workspace/model'
              </code>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🏷️</span>
                </div>
                <h3 className="text-lg font-semibold">CVAT Export</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Export tracking failures for re-annotation and model improvement.
              </p>
              <code className="text-xs text-cyan-400 bg-black/50 px-3 py-2 rounded block">
                pipeline.export_to_cvat(project_id)
              </code>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🤗</span>
                </div>
                <h3 className="text-lg font-semibold">HuggingFace Models</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Use any HuggingFace model for detection, UMOT handles tracking.
              </p>
              <code className="text-xs text-green-400 bg-black/50 px-3 py-2 rounded block">
                model.from_pretrained('facebook/detr')
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Research Lab Section */}
      <section id="research-lab" className="relative py-20 px-6 z-10 bg-gradient-to-b from-transparent to-violet-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-4">
              <span className="text-yellow-400 text-sm font-semibold">🔬 The UMOT Research Lab</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Every Paper, Production Ready
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              New SOTA tracker published? We implement, optimize, and release within 30 days. 
              Cloud users get early access, then it's open sourced.
            </p>
          </div>

          {/* Research Pipeline */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-yellow-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">📄</span>
                  </div>
                  <h4 className="font-semibold mb-2">Paper Published</h4>
                  <p className="text-xs text-gray-400">CVPR, ICCV, ECCV, NeurIPS</p>
                  <div className="text-xs text-yellow-400 mt-2">Day 1-5</div>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-violet-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">⚙️</span>
                  </div>
                  <h4 className="font-semibold mb-2">Implementation</h4>
                  <p className="text-xs text-gray-400">Optimize for production</p>
                  <div className="text-xs text-violet-400 mt-2">Day 6-20</div>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-cyan-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">☁️</span>
                  </div>
                  <h4 className="font-semibold mb-2">Cloud Release</h4>
                  <p className="text-xs text-gray-400">Early access for paid users</p>
                  <div className="text-xs text-cyan-400 mt-2">Day 21-30</div>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">🔓</span>
                  </div>
                  <h4 className="font-semibold mb-2">Open Source</h4>
                  <p className="text-xs text-gray-400">Released to community</p>
                  <div className="text-xs text-green-400 mt-2">Day 90</div>
                </div>
              </div>
            </div>
          </div>

          {/* Domain-Specific Models */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500/20 to-violet-600/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🛍️</span>
                </div>
                <div>
                  <h3 className="font-semibold">Retail Tracker</h3>
                  <p className="text-xs text-gray-400">Cloud Exclusive</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Optimized for stores: customer journey, queue detection, conversion tracking
              </p>
            </div>

            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🚗</span>
                </div>
                <div>
                  <h3 className="font-semibold">Traffic Tracker</h3>
                  <p className="text-xs text-gray-400">Cloud Exclusive</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Vehicle-specific: speed estimation, violation detection, flow optimization
              </p>
            </div>

            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🔒</span>
                </div>
                <div>
                  <h3 className="font-semibold">Security Tracker</h3>
                  <p className="text-xs text-gray-400">Cloud Exclusive</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Multi-camera handoff, threat detection, optimized for surveillance systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OSS vs Cloud Detailed Comparison */}
      <section className="relative py-20 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Open Source vs Cloud Platform
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 px-6 font-semibold">Feature</th>
                  <th className="text-center py-4 px-6">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-violet-400 font-semibold">UMOT OSS</span>
                      <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">Free Forever</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-6">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-cyan-400 font-semibold">Eyeline Cloud</span>
                      <span className="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">From $99/mo</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-900 hover:bg-gray-900/50">
                  <td className="py-4 px-6">Tracking Algorithms</td>
                  <td className="text-center">
                    <span className="text-green-400">✓</span> All SOTA trackers
                  </td>
                  <td className="text-center">
                    <span className="text-green-400">✓</span> Same + early access to new
                  </td>
                </tr>
                <tr className="border-b border-gray-900 hover:bg-gray-900/50">
                  <td className="py-4 px-6">ReID Support</td>
                  <td className="text-center">
                    <span className="text-green-400">✓</span> Bring your embeddings
                  </td>
                  <td className="text-center">
                    <span className="text-green-400">✓</span> + Hosted models
                  </td>
                </tr>
                <tr className="border-b border-gray-900 hover:bg-gray-900/50">
                  <td className="py-4 px-6">Model Management</td>
                  <td className="text-center">
                    <span className="text-yellow-400">⚠️</span> You handle
                  </td>
                  <td className="text-center">
                    <span className="text-green-400">✓</span> We handle
                  </td>
                </tr>
                <tr className="border-b border-gray-900 hover:bg-gray-900/50">
                  <td className="py-4 px-6">Infrastructure</td>
                  <td className="text-center">Your hardware</td>
                  <td className="text-center">Auto-scaling GPUs</td>
                </tr>
                <tr className="border-b border-gray-900 hover:bg-gray-900/50">
                  <td className="py-4 px-6">Visual Pipeline Builder</td>
                  <td className="text-center">
                    <span className="text-red-400">✗</span>
                  </td>
                  <td className="text-center">
                    <span className="text-green-400">✓</span> Dashboard UI
                  </td>
                </tr>
                <tr className="border-b border-gray-900 hover:bg-gray-900/50">
                  <td className="py-4 px-6">Custom Model Loaders</td>
                  <td className="text-center">
                    <span className="text-red-400">✗</span>
                  </td>
                  <td className="text-center">
                    <span className="text-green-400">✓</span> Any framework (Q4 2026)
                  </td>
                </tr>
                <tr className="border-b border-gray-900 hover:bg-gray-900/50">
                  <td className="py-4 px-6">Latest Papers</td>
                  <td className="text-center">After 90 days</td>
                  <td className="text-center">Within 30 days</td>
                </tr>
                <tr className="border-b border-gray-900 hover:bg-gray-900/50">
                  <td className="py-4 px-6">Domain-Specific Models</td>
                  <td className="text-center">
                    <span className="text-red-400">✗</span>
                  </td>
                  <td className="text-center">
                    <span className="text-green-400">✓</span> Retail, Traffic, Security
                  </td>
                </tr>
                <tr className="border-b border-gray-900 hover:bg-gray-900/50">
                  <td className="py-4 px-6">Support</td>
                  <td className="text-center">Community</td>
                  <td className="text-center">Priority + SLA</td>
                </tr>
                <tr className="border-b border-gray-900 hover:bg-gray-900/50">
                  <td className="py-4 px-6">License</td>
                  <td className="text-center">
                    <span className="text-green-400">Apache 2.0</span>
                  </td>
                  <td className="text-center">Commercial</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 rounded-xl border border-violet-500/30">
            <p className="text-center">
              <strong className="text-white text-lg">Key Insight:</strong> The tracking algorithms are identical. 
              Cloud adds convenience, scale, and early access - not tracking quality.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Roadmap */}
      <section id="roadmap" className="relative py-20 px-6 z-10 bg-gradient-to-b from-transparent to-cyan-500/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            2026 Roadmap
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-violet-500 to-cyan-500"></div>

              {/* Q1 2026 */}
              <div className="relative mb-16">
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="inline-block p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 text-left">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-violet-500 rounded-xl flex items-center justify-center">
                          <span className="font-bold text-lg">Q1</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Foundation</h3>
                          <p className="text-xs text-gray-400">Jan - Mar 2026</p>
                        </div>
                      </div>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Data-first architecture</li>
                        <li>• ByteTrack, BoT-SORT, OC-SORT</li>
                        <li>• Basic ReID integration</li>
                        <li>• Alpha testing</li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-violet-500 rounded-full border-4 border-black absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="flex-1"></div>
                </div>
              </div>

              {/* Q2 2026 */}
              <div className="relative mb-16">
                <div className="flex items-center">
                  <div className="flex-1"></div>
                  <div className="w-8 h-8 bg-indigo-500 rounded-full border-4 border-black absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="flex-1 pl-8">
                    <div className="inline-block p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center">
                          <span className="font-bold text-lg">Q2</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Public Launch</h3>
                          <p className="text-xs text-gray-400">Apr - Jun 2026</p>
                        </div>
                      </div>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• UMOT OSS release</li>
                        <li>• Cloud API beta</li>
                        <li>• Roboflow integration</li>
                        <li>• Documentation site</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Q3 2026 */}
              <div className="relative mb-16">
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="inline-block p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 text-left">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                          <span className="font-bold text-lg">Q3</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Cloud Platform</h3>
                          <p className="text-xs text-gray-400">Jul - Sep 2026</p>
                        </div>
                      </div>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Visual pipeline builder</li>
                        <li>• Model upload & hosting</li>
                        <li>• Auto-scaling</li>
                        <li>• Team features</li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-black absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="flex-1"></div>
                </div>
              </div>

              {/* Q4 2026 */}
              <div className="relative">
                <div className="flex items-center">
                  <div className="flex-1"></div>
                  <div className="w-8 h-8 bg-cyan-500 rounded-full border-4 border-black absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="flex-1 pl-8">
                    <div className="inline-block p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center">
                          <span className="font-bold text-lg">Q4</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Universal Platform</h3>
                          <p className="text-xs text-gray-400">Oct - Dec 2026</p>
                        </div>
                      </div>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Custom model loaders</li>
                        <li>• Enterprise features</li>
                        <li>• Partner integrations</li>
                        <li>• Research lab program</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="relative py-20 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Building Towards Success
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 text-transparent bg-clip-text mb-2">
                100
              </div>
              <p className="text-sm text-gray-400">Production Deployments</p>
              <p className="text-xs text-gray-500 mt-2">Year 1 Target</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text mb-2">
                10k
              </div>
              <p className="text-sm text-gray-400">Active Developers</p>
              <p className="text-xs text-gray-500 mt-2">Year 2 Target</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text mb-2">
                $2.4M
              </div>
              <p className="text-sm text-gray-400">ARR</p>
              <p className="text-xs text-gray-500 mt-2">Year 3 Target</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text mb-2">
                30
              </div>
              <p className="text-sm text-gray-400">Days to Production</p>
              <p className="text-xs text-gray-500 mt-2">For New Papers</p>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="p-8 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 rounded-2xl border border-violet-500/30 text-center">
            <h3 className="text-2xl font-bold mb-4">The 10-Year Vision</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              UMOT becomes the <strong className="text-white">NumPy of computer vision tracking</strong> - 
              the foundational layer that everyone builds on. Every CV course teaches it. 
              Every CV project uses it. "Tracking" becomes synonymous with UMOT.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="updates" className="relative py-20 px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/30 backdrop-blur-sm text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Join the Journey
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8 text-lg">
              We're building the universal tracking layer for computer vision. 
              Watch it happen, shape the direction, be among the first.
            </p>
            
            {/* Email Signup (Coming Soon) */}
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-4">Mailing list opens February 2026:</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 cursor-not-allowed opacity-50"
                  disabled
                />
                <button 
                  className="px-6 py-3 bg-gray-700 text-gray-400 rounded-lg cursor-not-allowed opacity-50"
                  disabled
                >
                  Coming Soon
                </button>
              </div>
            </div>

            {/* Current Actions */}
            <div className="pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-400 mb-4">Connect with us now:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://github.com/eyeline-ai" 
                  className="px-8 py-3 bg-white text-black hover:bg-gray-200 rounded-xl font-bold transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-white/25"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  Watch on GitHub
                </a>
                <a 
                  href="mailto:hello@eyeline.dev?subject=UMOT Development" 
                  className="px-8 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-violet-500/25"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Apache 2.0 Forever
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                No Model Lock-in
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
      <footer className="relative border-t border-gray-800 py-12 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <span className="font-bold text-lg">Eyeline</span>
              </div>
              <p className="text-sm text-gray-400">
                Building UMOT - the universal tracking layer for computer vision. 
                Detections in, tracks out.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">UMOT</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://github.com/eyeline-ai/umot" className="hover:text-white transition-colors">GitHub Repository</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Benchmarks</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Cloud Platform</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="mailto:hello@eyeline.dev" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© 2025 Eyeline. Starting Q1 2026.</p>
            <p className="mt-2">Built by CV engineers who are tired of accepting "good enough" tracking.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}