import { useState, useEffect } from 'react'

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedTab, setSelectedTab] = useState('simple')
  
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
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold">Eyeline</span>
            <span className="text-xs text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full">Building UMOT</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#problem" className="text-gray-400 hover:text-white transition-colors text-sm hidden md:inline">Problem</a>
            <a href="#solution" className="text-gray-400 hover:text-white transition-colors text-sm hidden md:inline">Solution</a>
            <a href="#integrations" className="text-gray-400 hover:text-white transition-colors text-sm hidden md:inline">Integrations</a>
            <a href="#roadmap" className="text-gray-400 hover:text-white transition-colors text-sm hidden md:inline">Roadmap</a>
            <a href="#updates" className="px-4 py-2 bg-violet-600 hover:bg-violet-700 rounded-lg transition-colors text-sm font-medium">
              Get Updates
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Status Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
              <span className="text-amber-400 text-sm font-medium">Starting Development Q1 2026 • Building in Public</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Multi-Object Tracking<br/>
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">
                That Works With Everything
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Connect any model. Integrate any tool. Deploy anywhere. Finally, production tracking that actually works.
            </p>
          </div>

          {/* Three Ways to Use UMOT */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Three Ways to Track</span>
            </div>
            
            {/* Tab Navigation */}
            <div className="flex justify-center gap-2 mb-8">
              <button
                onClick={() => setSelectedTab('simple')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedTab === 'simple' 
                    ? 'bg-violet-600 text-white' 
                    : 'bg-gray-900 text-gray-400 hover:text-white'
                }`}
              >
                Dead Simple
              </button>
              <button
                onClick={() => setSelectedTab('flexible')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedTab === 'flexible' 
                    ? 'bg-violet-600 text-white' 
                    : 'bg-gray-900 text-gray-400 hover:text-white'
                }`}
              >
                Your Models
              </button>
              <button
                onClick={() => setSelectedTab('control')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedTab === 'control' 
                    ? 'bg-violet-600 text-white' 
                    : 'bg-gray-900 text-gray-400 hover:text-white'
                }`}
              >
                Full Control
              </button>
            </div>

            {/* Code Examples */}
            <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-500 text-sm ml-2">
                  {selectedTab === 'simple' && 'just_works.py'}
                  {selectedTab === 'flexible' && 'your_models.py'}
                  {selectedTab === 'control' && 'full_control.py'}
                </span>
                <span className="ml-auto text-xs text-amber-400 font-mono">Coming Q2 2026</span>
              </div>
              <pre className="p-6 text-sm overflow-x-auto text-gray-300">
{selectedTab === 'simple' && `# Zero configuration needed
from umot import track

# Just send an image or video - we handle everything
results = track('warehouse_video.mp4')

# That's it. Seriously.
# COCO detection + optimized tracking + SOTA Re-ID
# Returns: Stable IDs across frames, cameras, occlusions`}

{selectedTab === 'flexible' && `# Use your Roboflow models, we handle tracking
from umot import track

# Your custom model, our production tracking
results = track(
    'warehouse_video.mp4',
    detector='roboflow://workspace/forklift-detector/3'
)

# Or use the visual pipeline builder (coming soon)
results = track(
    'warehouse_video.mp4',
    pipeline='pipe_warehouse_v2'  # Configured in dashboard
)`}

{selectedTab === 'control' && `# Complete control for advanced users (open source)
from umot import Pipeline

# Mix and match everything
pipeline = Pipeline(
    detector='yolov8x',           # or any model
    tracker='botsort',            # or bytetrack, ocsort...
    reid='market1501',            # or your embeddings
    config={
        'max_age': 30,
        'min_hits': 3,
        'iou_threshold': 0.3
    }
)

# Deploy anywhere - laptop, edge, cloud, your infrastructure
results = pipeline.track('warehouse_video.mp4')`}
              </pre>
            </div>

            {/* Feature Badges */}
            <div className="flex justify-center gap-4 mt-6">
              {selectedTab === 'simple' && (
                <>
                  <span className="text-xs px-3 py-1 bg-green-500/20 text-green-400 rounded-full">One Function</span>
                  <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">Cloud API</span>
                  <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">No Config</span>
                </>
              )}
              {selectedTab === 'flexible' && (
                <>
                  <span className="text-xs px-3 py-1 bg-green-500/20 text-green-400 rounded-full">Any Model</span>
                  <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">Visual Builder</span>
                  <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">Cloud + OSS</span>
                </>
              )}
              {selectedTab === 'control' && (
                <>
                  <span className="text-xs px-3 py-1 bg-green-500/20 text-green-400 rounded-full">Open Source</span>
                  <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">Apache 2.0</span>
                  <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">Deploy Anywhere</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-6 bg-gradient-to-b from-transparent to-red-500/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            The Tracking Layer is Broken
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            After 50+ production deployments, we see the same problems kill every CV project:
          </p>
          
          {/* The Gap Visual */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-green-500/5 border border-green-500/20">
                <div className="text-4xl mb-3">✓</div>
                <h3 className="font-semibold text-green-400 mb-2">Detection</h3>
                <p className="text-sm text-gray-400">
                  Solved by YOLO, Roboflow, DETR. Many good options.
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
                <div className="text-4xl mb-3">~</div>
                <h3 className="font-semibold text-yellow-400 mb-2">Tracking</h3>
                <p className="text-sm text-gray-400">
                  Scattered across research repos. Broken dependencies. AGPL licensing.
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                <div className="text-4xl mb-3">✗</div>
                <h3 className="font-semibold text-red-400 mb-2">Re-ID</h3>
                <p className="text-sm text-gray-400">
                  Too hard to integrate. Everyone skips it. Production fails.
                </p>
              </div>
            </div>
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/30">
              <p className="text-center text-violet-300">
                <strong>Without all three:</strong> IDs switch constantly, multi-camera fails, occlusions break everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            UMOT: The Universal Adapter for CV
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            We're building the connective tissue that makes all CV tools work together in production.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Open Source Box */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-violet-500/10 to-transparent border border-violet-500/30">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl">🔓</span>
                <h3 className="text-xl font-bold">UMOT Open Source</h3>
                <span className="ml-auto text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">Apache 2.0</span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-violet-300 mb-2">Optimized Trackers</h4>
                  <p className="text-sm text-gray-400">ByteTrack, BoT-SORT, OC-SORT, DeepSORT - production-ready, not research code</p>
                </div>
                <div>
                  <h4 className="font-semibold text-violet-300 mb-2">Universal Integration</h4>
                  <p className="text-sm text-gray-400">Works with Roboflow, Ultralytics, HuggingFace, custom models</p>
                </div>
                <div>
                  <h4 className="font-semibold text-violet-300 mb-2">Re-ID Included</h4>
                  <p className="text-sm text-gray-400">Market1501, MSMT17, VeRi, or bring your own embeddings</p>
                </div>
                <div>
                  <h4 className="font-semibold text-violet-300 mb-2">Deploy Anywhere</h4>
                  <p className="text-sm text-gray-400">Your laptop, edge device, cloud, or on-premise</p>
                </div>
              </div>
            </div>

            {/* Cloud Box */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-cyan-500/10 to-transparent border border-cyan-500/30">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl">☁️</span>
                <h3 className="text-xl font-bold">Eyeline Cloud</h3>
                <span className="ml-auto text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">Coming Q3 2026</span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cyan-300 mb-2">Visual Pipeline Builder</h4>
                  <p className="text-sm text-gray-400">Configure in dashboard, deploy with pipeline ID</p>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-300 mb-2">Instant Scaling</h4>
                  <p className="text-sm text-gray-400">1 to 1000 cameras without DevOps</p>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-300 mb-2">Latest Papers</h4>
                  <p className="text-sm text-gray-400">New SOTA trackers within 30 days of publication</p>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-300 mb-2">70% Cheaper</h4>
                  <p className="text-sm text-gray-400">Than AWS Rekognition, with better accuracy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Research Lab Commitment */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-violet-500/5 to-cyan-500/5 border border-gray-800">
            <div className="text-center mb-6">
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-semibold rounded-full uppercase">Our Commitment</span>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">The UMOT Research Lab</h3>
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
              Every new SOTA tracker implemented and optimized within 30 days of publication. 
              We read the papers so you don't have to.
            </p>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-20 px-6 bg-gradient-to-b from-transparent to-violet-500/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Works With Everything You Already Use
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            UMOT is the universal adapter for computer vision. Connect any tool, model, or platform.
          </p>

          {/* Integration Flow Diagram */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="grid grid-cols-3 gap-8">
              {/* Inputs */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Model Sources</h3>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-gray-900 border border-gray-800 flex items-center gap-3">
                    <span className="text-2xl">🤖</span>
                    <span className="text-sm">Roboflow Models</span>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-900 border border-gray-800 flex items-center gap-3">
                    <span className="text-2xl">🚀</span>
                    <span className="text-sm">Ultralytics YOLO</span>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-900 border border-gray-800 flex items-center gap-3">
                    <span className="text-2xl">🤗</span>
                    <span className="text-sm">HuggingFace</span>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-900 border border-gray-800 flex items-center gap-3">
                    <span className="text-2xl">🔧</span>
                    <span className="text-sm">Custom Models</span>
                  </div>
                </div>
              </div>

              {/* UMOT in the middle */}
              <div className="flex items-center justify-center">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-600 text-center">
                  <div className="text-4xl font-bold mb-2">UMOT</div>
                  <p className="text-sm">Unified Pipeline</p>
                  <p className="text-xs mt-2 opacity-80">+ Tracking + Re-ID</p>
                </div>
              </div>

              {/* Outputs */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Deploy Anywhere</h3>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-gray-900 border border-gray-800 flex items-center gap-3">
                    <span className="text-2xl">💻</span>
                    <span className="text-sm">Local Device</span>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-900 border border-gray-800 flex items-center gap-3">
                    <span className="text-2xl">☁️</span>
                    <span className="text-sm">Eyeline Cloud</span>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-900 border border-gray-800 flex items-center gap-3">
                    <span className="text-2xl">🏭</span>
                    <span className="text-sm">Edge Hardware</span>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-900 border border-gray-800 flex items-center gap-3">
                    <span className="text-2xl">🏢</span>
                    <span className="text-sm">Your Infrastructure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Integration Example</h3>
              <pre className="text-sm text-gray-300">
{`# Train in Roboflow, track with UMOT, export to CVAT
pipeline = Pipeline(
    detector='roboflow://workspace/security-cameras/3',
    tracker='bytetrack',
    reid='person_reid_v2'
)

# Process and track
results = pipeline.track('store_footage.mp4')

# Export failures for re-annotation
if results.mota < 0.8:
    pipeline.export_to_cvat(project_id='store_v2')`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Pipeline Builder Preview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Configure Visually, Deploy Instantly
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Coming in Eyeline Cloud: Build pipelines in the dashboard, deploy with a pipeline ID.
          </p>

          {/* Dashboard Mockup */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
              <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-3 text-sm text-gray-400">dashboard.eyeline.dev</span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6">Pipeline Configuration: retail-analytics</h3>
                
                <div className="grid gap-6">
                  {/* Detection */}
                  <div className="p-4 rounded-lg bg-gray-800/50">
                    <label className="text-sm font-semibold text-gray-400 mb-2 block">Detection Model</label>
                    <div className="flex items-center gap-3">
                      <select className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white flex-1">
                        <option>roboflow://retail/person-detector/4</option>
                        <option>yolov8x</option>
                        <option>detr-resnet50</option>
                      </select>
                      <button className="px-4 py-2 bg-violet-600 hover:bg-violet-700 rounded-lg text-sm font-medium">
                        Upload Model
                      </button>
                    </div>
                  </div>

                  {/* Tracking */}
                  <div className="p-4 rounded-lg bg-gray-800/50">
                    <label className="text-sm font-semibold text-gray-400 mb-2 block">Tracking Algorithm</label>
                    <div className="grid grid-cols-4 gap-3">
                      <button className="px-4 py-2 bg-violet-600 rounded-lg text-sm">ByteTrack</button>
                      <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm">BoT-SORT</button>
                      <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm">OC-SORT</button>
                      <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm">DeepSORT</button>
                    </div>
                  </div>

                  {/* Re-ID */}
                  <div className="p-4 rounded-lg bg-gray-800/50">
                    <label className="text-sm font-semibold text-gray-400 mb-2 block">Re-ID Model</label>
                    <select className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white w-full">
                      <option>market1501 (General Purpose)</option>
                      <option>retail_customers_v2 (Domain Specific)</option>
                      <option>custom_embeddings.pkl</option>
                    </select>
                  </div>

                  {/* Test & Deploy */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div>
                      <p className="text-sm text-gray-400">Pipeline ID:</p>
                      <code className="text-violet-400 font-mono">pipe_retail_analytics_v2</code>
                    </div>
                    <div className="flex gap-3">
                      <button className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium">
                        Test Pipeline
                      </button>
                      <button className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-medium">
                        Save & Deploy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 mb-3">Then in your code:</p>
              <code className="text-violet-400 font-mono bg-gray-900 px-4 py-2 rounded-lg">
                results = umot.track(image, pipeline='pipe_retail_analytics_v2')
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-6 bg-gradient-to-b from-transparent to-violet-500/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Building in Public</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Follow along as we build the future of multi-object tracking. Every line open source.
          </p>

          <div className="max-w-4xl mx-auto">
            {/* Q1 2026 */}
            <div className="relative pl-8 pb-8 border-l-2 border-violet-500/30">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-violet-500 rounded-full"></div>
              <div className="ml-6">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">Q1 2026: Foundation</h3>
                  <span className="text-xs px-2 py-1 bg-violet-500/20 text-violet-400 rounded-full">Starting Soon</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Core architecture design</li>
                  <li>• ByteTrack, BoT-SORT, OC-SORT implementations</li>
                  <li>• Roboflow integration (using their API)</li>
                  <li>• Basic Re-ID models (Market1501, MSMT17)</li>
                  <li>• Alpha release for testing</li>
                </ul>
              </div>
            </div>

            {/* Q2 2026 */}
            <div className="relative pl-8 pb-8 border-l-2 border-gray-700">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-600 rounded-full"></div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-2">Q2 2026: Public Beta</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• UMOT open source release</li>
                  <li>• Dead simple cloud API</li>
                  <li>• Documentation and tutorials</li>
                  <li>• Community feedback integration</li>
                </ul>
              </div>
            </div>

            {/* Q3 2026 */}
            <div className="relative pl-8 pb-8 border-l-2 border-gray-700">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-600 rounded-full"></div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-2">Q3 2026: Cloud Platform</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Visual pipeline builder</li>
                  <li>• Auto-scaling infrastructure</li>
                  <li>• Monitoring dashboard</li>
                  <li>• Domain-specific models</li>
                </ul>
              </div>
            </div>

            {/* Q4 2026 */}
            <div className="relative pl-8 border-l-2 border-gray-700">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-600 rounded-full"></div>
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-2">Q4 2026: Ecosystem</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• CVAT, Label Studio integrations</li>
                  <li>• Enterprise features</li>
                  <li>• Partner announcements</li>
                  <li>• "Latest papers in 30 days" program</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why UMOT Will Become the Standard
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-400">Feature</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-400">AWS Rekognition</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-400">Ultralytics</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-gray-400">Roboflow</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-violet-400">UMOT Cloud</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-cyan-400">UMOT OSS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-900">
                  <td className="py-4 px-4 text-sm text-gray-300">Simple API</td>
                  <td className="text-center">✓</td>
                  <td className="text-center text-gray-600">✗</td>
                  <td className="text-center text-gray-600">✗</td>
                  <td className="text-center text-green-400">✓</td>
                  <td className="text-center text-gray-600">✗</td>
                </tr>
                <tr className="border-b border-gray-900">
                  <td className="py-4 px-4 text-sm text-gray-300">Custom Models</td>
                  <td className="text-center text-gray-600">✗</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                  <td className="text-center text-green-400">✓</td>
                  <td className="text-center text-green-400">✓</td>
                </tr>
                <tr className="border-b border-gray-900">
                  <td className="py-4 px-4 text-sm text-gray-300">Quality Tracking</td>
                  <td className="text-center text-gray-600">✗</td>
                  <td className="text-center text-yellow-400">~</td>
                  <td className="text-center text-gray-600">✗</td>
                  <td className="text-center text-green-400">✓</td>
                  <td className="text-center text-green-400">✓</td>
                </tr>
                <tr className="border-b border-gray-900">
                  <td className="py-4 px-4 text-sm text-gray-300">Re-ID Support</td>
                  <td className="text-center text-gray-600">✗</td>
                  <td className="text-center text-gray-600">✗</td>
                  <td className="text-center text-gray-600">✗</td>
                  <td className="text-center text-green-400">✓</td>
                  <td className="text-center text-green-400">✓</td>
                </tr>
                <tr className="border-b border-gray-900">
                  <td className="py-4 px-4 text-sm text-gray-300">Tool Integration</td>
                  <td className="text-center text-gray-600">✗</td>
                  <td className="text-center text-gray-600">✗</td>
                  <td className="text-center text-yellow-400">~</td>
                  <td className="text-center text-green-400">✓</td>
                  <td className="text-center text-green-400">✓</td>
                </tr>
                <tr className="border-b border-gray-900">
                  <td className="py-4 px-4 text-sm text-gray-300">Open Source</td>
                  <td className="text-center text-gray-600">✗</td>
                  <td className="text-center text-yellow-400">AGPL</td>
                  <td className="text-center text-gray-600">✗</td>
                  <td className="text-center text-gray-600">✗</td>
                  <td className="text-center text-green-400">Apache 2.0</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-sm text-gray-300">Price</td>
                  <td className="text-center text-red-400">$$$</td>
                  <td className="text-center text-green-400">Free</td>
                  <td className="text-center text-yellow-400">$$</td>
                  <td className="text-center text-green-400">$</td>
                  <td className="text-center text-green-400">Free</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            UMOT: The only solution offering simplicity, flexibility, quality, and freedom.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="updates" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Us From Day One
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              We're building UMOT in public. Follow the journey, influence the direction, get early access.
            </p>
            
            {/* Coming Soon Email */}
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-4">Get notified when we start building:</p>
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
                  Coming Feb 2026
                </button>
              </div>
            </div>

            {/* Current Actions */}
            <div className="pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-400 mb-4">While we prepare:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://github.com/eyeline-ai" 
                  className="px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-lg font-bold transition-colors inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  Follow on GitHub
                </a>
                <a 
                  href="mailto:hello@eyeline.dev?subject=Interested in UMOT" 
                  className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-bold transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Apache 2.0
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
                No Lock-in
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
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
              Building UMOT - the universal adapter for computer vision. 
              Making tracking work with everything, deploy anywhere, scale instantly.
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com/eyeline-ai" className="text-gray-500 hover:text-gray-300 transition-colors">
              GitHub
            </a>
            <a href="mailto:hello@eyeline.dev" className="text-gray-500 hover:text-gray-300 transition-colors">
              Contact
            </a>
            <a href="#roadmap" className="text-gray-500 hover:text-gray-300 transition-colors">
              Roadmap
            </a>
          </div>
          
          <div className="text-center text-sm text-gray-500">
            © 2025 Eyeline. Building the future of multi-object tracking.
          </div>
        </div>
      </footer>
    </div>
  )
}