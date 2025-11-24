import { useState, useEffect } from 'react'

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedMode, setSelectedMode] = useState('oss')
  
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
            <span className="text-xs text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full">Q1 2026</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#how" className="text-gray-400 hover:text-white transition-colors text-sm hidden md:inline">How It Works</a>
            <a href="#compare" className="text-gray-400 hover:text-white transition-colors text-sm hidden md:inline">OSS vs Cloud</a>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-400 text-sm font-medium">Built by CV engineers who've deployed 50+ production tracking systems</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The Universal<br/>
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">
                Tracking Layer for CV
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
              Detections in, tracks out. Any model. Any framework.
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Stop rebuilding tracking integration. UMOT takes your detections and returns stable tracks with SOTA algorithms.
            </p>
          </div>

          {/* Clear Architecture Diagram */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8">
              <div className="grid grid-cols-3 gap-4 items-center">
                {/* Inputs */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Your Models</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">→</span>
                      <span>YOLO Detections</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">→</span>
                      <span>Roboflow Models</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">→</span>
                      <span>Custom Detectors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">→</span>
                      <span>Any Embeddings</span>
                    </div>
                  </div>
                </div>

                {/* UMOT */}
                <div className="text-center">
                  <div className="inline-block p-6 rounded-xl bg-gradient-to-br from-violet-600/20 to-cyan-600/20 border border-violet-500/30">
                    <div className="text-3xl font-bold mb-2">UMOT</div>
                    <div className="text-sm text-gray-400">Tracking Layer</div>
                  </div>
                </div>

                {/* Outputs */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Stable Tracks</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span>Consistent IDs</span>
                      <span className="text-green-400">→</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Multi-camera</span>
                      <span className="text-green-400">→</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Occlusion handling</span>
                      <span className="text-green-400">→</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>ReID integrated</span>
                      <span className="text-green-400">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              UMOT doesn't load models - it tracks detections. Universal compatibility.
            </p>
          </div>

          {/* OSS vs Cloud Toggle */}
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center gap-2 mb-8">
              <button
                onClick={() => setSelectedMode('oss')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedMode === 'oss' 
                    ? 'bg-violet-600 text-white' 
                    : 'bg-gray-900 text-gray-400 hover:text-white'
                }`}
              >
                Open Source (Local)
              </button>
              <button
                onClick={() => setSelectedMode('cloud')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedMode === 'cloud' 
                    ? 'bg-cyan-600 text-white' 
                    : 'bg-gray-900 text-gray-400 hover:text-white'
                }`}
              >
                Cloud (Managed)
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
                  {selectedMode === 'oss' ? 'your_pipeline.py' : 'cloud_tracking.py'}
                </span>
              </div>
              <pre className="p-6 text-sm overflow-x-auto text-gray-300">
{selectedMode === 'oss' ? 
`# UMOT Open Source - You handle models, we handle tracking
from umot import Pipeline
import numpy as np

# Initialize pure tracker (no model loading!)
pipeline = Pipeline(
    tracker='bytetrack',     # Or botsort, ocsort, deepsort
    max_age=30,             # Full control over parameters
    min_hits=3,
    iou_threshold=0.3
)

# Your detection pipeline (you control this completely)
image = cv2.imread('frame.jpg')
detections = your_yolo_model(image)      # [N, 6]: x,y,w,h,conf,class
embeddings = your_reid_model(crops)      # [N, 128]: Optional ReID

# UMOT just tracks - no model dependencies
tracks = pipeline.update(detections, embeddings)

# Output: Stable IDs across frames
for track in tracks:
    print(f"Track {track.id}: {track.bbox}, conf: {track.score}")` 
:
`# Eyeline Cloud - We handle everything
from eyeline import Client

# Explicit cloud client with API key
client = Client(api_key='eye_xxx')  # Sign up at eyeline.dev

# Option 1: Zero config (best general models)
results = client.track('warehouse_video.mp4')

# Option 2: Your uploaded models (configured in dashboard)
# 1. Upload your models to dashboard
# 2. Configure pipeline visually
# 3. Get pipeline ID
results = client.track('warehouse_video.mp4', 
                      pipeline='pipe_warehouse_v2')

# Option 3: Custom model loader (coming Q4 2026)
# Define how to load your exotic model format in dashboard
# We'll run it in sandboxed environment
results = client.track('video.mp4', 
                      pipeline='pipe_custom_loader')`}
              </pre>
            </div>

            {/* Feature Comparison Below Code */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className={`p-4 rounded-lg ${selectedMode === 'oss' ? 'bg-violet-500/10 border border-violet-500/30' : 'bg-gray-900/50 border border-gray-800'}`}>
                <h3 className="font-semibold mb-2 text-violet-300">Open Source Features</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>✓ All SOTA trackers (ByteTrack, BoT-SORT, etc)</li>
                  <li>✓ ReID integration support</li>
                  <li>✓ Full parameter control</li>
                  <li>✓ Apache 2.0 license</li>
                  <li>✗ You manage models & infrastructure</li>
                </ul>
              </div>
              <div className={`p-4 rounded-lg ${selectedMode === 'cloud' ? 'bg-cyan-500/10 border border-cyan-500/30' : 'bg-gray-900/50 border border-gray-800'}`}>
                <h3 className="font-semibold mb-2 text-cyan-300">Cloud Features</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>✓ Everything from OSS</li>
                  <li>✓ Model hosting & versioning</li>
                  <li>✓ Visual pipeline builder</li>
                  <li>✓ Auto-scaling (1-1000 cameras)</li>
                  <li>✓ Custom model loaders</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-20 px-6 bg-gradient-to-b from-transparent to-violet-500/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How UMOT Works
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Simple interface, powerful tracking. No model loading complexity.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-violet-400">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Generate Detections</h3>
              <p className="text-sm text-gray-400">
                Use any detector: YOLO, Roboflow, custom models. Output numpy arrays with bounding boxes.
              </p>
              <div className="mt-4 p-3 bg-gray-900 rounded-lg">
                <code className="text-xs text-gray-300">
                  detections: [N, 6] # x,y,w,h,conf,class
                </code>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Optional Embeddings</h3>
              <p className="text-sm text-gray-400">
                Add ReID embeddings for better tracking. Any dimensionality, any model.
              </p>
              <div className="mt-4 p-3 bg-gray-900 rounded-lg">
                <code className="text-xs text-gray-300">
                  embeddings: [N, D] # Any dimension
                </code>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Get Stable Tracks</h3>
              <p className="text-sm text-gray-400">
                UMOT returns tracked objects with stable IDs across frames and cameras.
              </p>
              <div className="mt-4 p-3 bg-gray-900 rounded-lg">
                <code className="text-xs text-gray-300">
                  tracks: [{'{'}id, bbox, score{'}'}]
                </code>
              </div>
            </div>
          </div>

          {/* Why This Matters */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-violet-500/5 to-cyan-500/5 border border-gray-800">
            <h3 className="text-xl font-bold text-center mb-4">Why Data-First Architecture?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">🔓</div>
                <h4 className="font-semibold text-sm mb-1">No Lock-in</h4>
                <p className="text-xs text-gray-400">Works with any detection framework</p>
              </div>
              <div>
                <div className="text-2xl mb-2">🚀</div>
                <h4 className="font-semibold text-sm mb-1">No Dependencies</h4>
                <p className="text-xs text-gray-400">No PyTorch/TF version conflicts</p>
              </div>
              <div>
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-semibold text-sm mb-1">Clear Interface</h4>
                <p className="text-xs text-gray-400">You detect, we track. Simple.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OSS vs Cloud Detailed Comparison */}
      <section id="compare" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Open Source vs Cloud
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Same tracking quality, different convenience levels.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-violet-400">UMOT OSS</span>
                      <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">Free</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-cyan-400">Eyeline Cloud</span>
                      <span className="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">Paid</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-900">
                  <td className="py-3 px-4">Tracking Algorithms</td>
                  <td className="text-center">All SOTA trackers</td>
                  <td className="text-center">Same trackers (runs OSS)</td>
                </tr>
                <tr className="border-b border-gray-900">
                  <td className="py-3 px-4">ReID Support</td>
                  <td className="text-center">✓ Bring embeddings</td>
                  <td className="text-center">✓ + Hosted models</td>
                </tr>
                <tr className="border-b border-gray-900">
                  <td className="py-3 px-4">Model Management</td>
                  <td className="text-center">You handle</td>
                  <td className="text-center">We handle</td>
                </tr>
                <tr className="border-b border-gray-900">
                  <td className="py-3 px-4">Infrastructure</td>
                  <td className="text-center">Your hardware</td>
                  <td className="text-center">Auto-scaling GPUs</td>
                </tr>
                <tr className="border-b border-gray-900">
                  <td className="py-3 px-4">Configuration</td>
                  <td className="text-center">Code-based</td>
                  <td className="text-center">Visual dashboard</td>
                </tr>
                <tr className="border-b border-gray-900">
                  <td className="py-3 px-4">Custom Model Loaders</td>
                  <td className="text-center text-gray-500">N/A</td>
                  <td className="text-center">✓ (Q4 2026)</td>
                </tr>
                <tr className="border-b border-gray-900">
                  <td className="py-3 px-4">Team Collaboration</td>
                  <td className="text-center">Via git</td>
                  <td className="text-center">Pipeline sharing</td>
                </tr>
                <tr className="border-b border-gray-900">
                  <td className="py-3 px-4">Monitoring</td>
                  <td className="text-center">DIY</td>
                  <td className="text-center">Built-in analytics</td>
                </tr>
                <tr className="border-b border-gray-900">
                  <td className="py-3 px-4">License</td>
                  <td className="text-center">Apache 2.0</td>
                  <td className="text-center">Commercial</td>
                </tr>
                <tr className="border-b border-gray-900">
                  <td className="py-3 px-4">Best For</td>
                  <td className="text-center">Full control needed</td>
                  <td className="text-center">Speed to production</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-gray-900 rounded-xl border border-gray-800">
            <p className="text-sm text-gray-400 text-center">
              <strong className="text-white">Key Insight:</strong> The tracking algorithms are identical. 
              Cloud adds convenience, not quality. Start with OSS, upgrade to Cloud when you need scale.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Pipeline Builder Preview */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-cyan-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Coming Q3 2026</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Visual Pipeline Builder
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Configure pipelines in the dashboard. Upload your models once, use everywhere.
            </p>
          </div>

          {/* Dashboard Mockup */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
              <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-3 text-sm text-gray-400">dashboard.eyeline.dev/pipelines</span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid gap-6">
                  {/* Model Upload Section */}
                  <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
                    <h3 className="text-lg font-semibold mb-4">Model Registry</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 rounded-lg bg-gray-900 border border-gray-700">
                        <div className="text-xs text-gray-500 mb-1">Detection Model</div>
                        <div className="text-sm font-medium">yolov8-warehouse.pt</div>
                        <div className="text-xs text-green-400 mt-1">✓ Validated</div>
                      </div>
                      <div className="p-4 rounded-lg bg-gray-900 border border-gray-700">
                        <div className="text-xs text-gray-500 mb-1">ReID Model</div>
                        <div className="text-sm font-medium">person-reid-v2.onnx</div>
                        <div className="text-xs text-green-400 mt-1">✓ Validated</div>
                      </div>
                      <div className="p-4 rounded-lg bg-gray-900 border border-gray-700">
                        <div className="text-xs text-gray-500 mb-1">Roboflow Link</div>
                        <div className="text-sm font-medium">workspace/forklift/3</div>
                        <div className="text-xs text-green-400 mt-1">✓ Connected</div>
                      </div>
                    </div>
                  </div>

                  {/* Pipeline Configuration */}
                  <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
                    <h3 className="text-lg font-semibold mb-4">Pipeline: warehouse-tracking</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="text-xs text-gray-400 block mb-2">Detection</label>
                        <select className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm">
                          <option>yolov8-warehouse.pt</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs text-gray-400 block mb-2">Tracker</label>
                        <select className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm">
                          <option>ByteTrack</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs text-gray-400 block mb-2">ReID</label>
                        <select className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm">
                          <option>person-reid-v2.onnx</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Custom Loader Preview */}
                  <div className="p-6 rounded-xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/30">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Custom Model Loader</h3>
                      <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">Beta Q4 2026</span>
                    </div>
                    <pre className="text-xs text-gray-300 bg-black/50 p-4 rounded-lg overflow-x-auto">
{`# Define how to load your exotic model format
def load_model(model_path):
    import my_custom_framework as mcf
    model = mcf.load(model_path)
    return lambda img: model.detect(img)

# Requirements: my-custom-framework==1.0
# Python: 3.11`}
                    </pre>
                  </div>

                  {/* Generated Pipeline ID */}
                  <div className="flex items-center justify-between p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <div>
                      <div className="text-sm text-green-400">Pipeline Ready</div>
                      <code className="text-lg font-mono">pipe_warehouse_tracking_v2</code>
                    </div>
                    <button className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-medium">
                      Copy ID
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 mb-3">Use in your code:</p>
              <code className="text-violet-400 font-mono bg-gray-900 px-4 py-2 rounded-lg inline-block">
                client.track('video.mp4', pipeline='pipe_warehouse_tracking_v2')
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Building in Public - 2026 Roadmap
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Q1 2026 */}
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-violet-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold">Q1</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold">Core Development</h3>
                      <span className="text-xs px-2 py-1 bg-violet-500/20 text-violet-400 rounded-full">Starting Soon</span>
                    </div>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Data-first interface design</li>
                      <li>• ByteTrack, BoT-SORT, OC-SORT implementations</li>
                      <li>• Basic ReID integration</li>
                      <li>• Documentation and examples</li>
                      <li>• Alpha release for testing</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Q2 2026 */}
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold">Q2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Public Launch</h3>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• UMOT OSS public release</li>
                      <li>• Basic cloud API (track endpoint)</li>
                      <li>• Roboflow integration</li>
                      <li>• Community feedback integration</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Q3 2026 */}
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold">Q3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Visual pipeline builder</li>
                      <li>• Model upload & validation</li>
                      <li>• Native loaders (PyTorch, ONNX, TF)</li>
                      <li>• Team collaboration features</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Q4 2026 */}
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold">Q4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Universal Platform</h3>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Custom model loaders (user-defined)</li>
                      <li>• CVAT, Label Studio integrations</li>
                      <li>• Enterprise features</li>
                      <li>• "Latest papers in 30 days" program</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Commitment Box */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-violet-500/5 to-cyan-500/5 border border-gray-800">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
              <p className="text-gray-400 max-w-2xl mx-auto mb-6">
                Every line of UMOT will be open source. Every tracker implementation optimized for production.
                Every new paper integrated within 30 days.
              </p>
              <div className="flex justify-center gap-8 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet-400">Apache 2.0</div>
                  <div className="text-gray-500">Forever</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">30 Days</div>
                  <div className="text-gray-500">Paper to Production</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">100%</div>
                  <div className="text-gray-500">Open Development</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="updates" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Follow the Journey
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              We're building the universal tracking layer for computer vision. 
              Watch it happen, influence the direction, be first to use it.
            </p>
            
            {/* Email Signup (Coming Soon) */}
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-4">Mailing list opening February 2026:</p>
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
              <p className="text-sm text-gray-400 mb-4">Connect now:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://github.com/eyeline-ai" 
                  className="px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-lg font-bold transition-colors inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  Watch on GitHub
                </a>
                <a 
                  href="mailto:hello@eyeline.dev?subject=UMOT Development" 
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
                No Model Lock-in
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Built in Public
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
              Building UMOT - the universal tracking layer for computer vision. 
              Detections in, tracks out. Any model, any framework.
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
            © 2025 Eyeline. Starting Q1 2026. Built by CV engineers, for CV engineers.
          </div>
        </div>
      </footer>
    </div>
  )
}