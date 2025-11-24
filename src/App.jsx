export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <span className="text-xl font-semibold">Eyeline</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#roadmap" className="text-gray-400 hover:text-white transition-colors text-sm">Roadmap</a>
          <a href="https://github.com/eyeline-ai" className="text-gray-400 hover:text-white transition-colors text-sm">GitHub</a>
          <a href="mailto:hello@eyeline.dev" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-8 pt-20 pb-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8">
            <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></span>
            <span className="text-violet-400 text-sm font-medium">Coming Soon</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The Eye for Your
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 text-transparent bg-clip-text">
              CV Pipeline
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Production computer vision tools, built by CV engineers for CV engineers. 
            Process, scale, and monitor your pipelines—from prototype to production.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://github.com/eyeline-ai"
              className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              View on GitHub
            </a>
            <a 
              href="mailto:hello@eyeline.dev"
              className="px-8 py-4 bg-transparent border border-gray-700 text-white font-semibold rounded-lg hover:border-gray-500 hover:bg-white/5 transition-all"
            >
              Get Early Access
            </a>
          </div>
        </div>

        {/* Problem Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">MOT Pipelines Are Broken</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              True multi-object tracking means one ID per object, across every frame, every camera, every occlusion. 
              That requires detection + tracking + ReID working together. But today's tools are fragmented.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
              <div className="text-red-400 text-sm font-medium mb-2">The Problem</div>
              <h3 className="text-lg font-semibold mb-2">Scattered Implementations</h3>
              <p className="text-gray-400 text-sm">
                ByteTrack, BoT-SORT, DeepSORT—each lives in unmaintained research repos with broken dependencies. 
                Comparing them requires rebuilding each from scratch.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
              <div className="text-red-400 text-sm font-medium mb-2">The Problem</div>
              <h3 className="text-lg font-semibold mb-2">Licensing Nightmares</h3>
              <p className="text-gray-400 text-sm">
                AGPL-licensed tools block enterprise adoption. Legal teams reject them, 
                forcing engineers to build from scratch or pay for expensive alternatives.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
              <div className="text-red-400 text-sm font-medium mb-2">The Problem</div>
              <h3 className="text-lg font-semibold mb-2">No Unified Pipeline</h3>
              <p className="text-gray-400 text-sm">
                Detection, tracking, and ReID are separate libraries with incompatible interfaces. 
                Integration takes weeks, not hours.
              </p>
            </div>
          </div>
        </div>

        {/* Solution: UMOT */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
              <span className="text-violet-400 text-xs font-medium">Open Source • Apache 2.0</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Introducing UMOT</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Unified Multi-Object Tracking. The canonical, optimized implementation of SOTA trackers—detection, 
              tracking, and ReID in a single, elegant API.
            </p>
          </div>

          {/* Code Example */}
          <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden max-w-3xl mx-auto">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-500 text-sm ml-2">pipeline.py</span>
            </div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code>
                <span className="text-violet-400">from</span> <span className="text-cyan-400">umot</span> <span className="text-violet-400">import</span> Pipeline{'\n\n'}
                <span className="text-gray-500"># Local development - bring your own models</span>{'\n'}
                pipeline = Pipeline({'\n'}
                {'    '}detector=<span className="text-green-400">'rf-detr-l'</span>,{'         '}<span className="text-gray-500"># or your custom model</span>{'\n'}
                {'    '}tracker=<span className="text-green-400">'botsort'</span>,{'          '}<span className="text-gray-500"># optimized implementation</span>{'\n'}
                {'    '}reid=<span className="text-green-400">'dinov2'</span>,{'             '}<span className="text-gray-500"># or your embeddings</span>{'\n'}
                ){'\n\n'}
                <span className="text-gray-500"># Production - same API, one parameter</span>{'\n'}
                pipeline = Pipeline({'\n'}
                {'    '}detector=<span className="text-green-400">'rf-detr-l'</span>,{'\n'}
                {'    '}tracker=<span className="text-green-400">'botsort'</span>,{'\n'}
                {'    '}reid=<span className="text-green-400">'dinov2'</span>,{'\n'}
                {'    '}backend=<span className="text-green-400">'eyeline'</span>,{'         '}<span className="text-gray-500"># ← scales instantly</span>{'\n'}
                )
              </code>
            </pre>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-1">Optimized Trackers</h4>
              <p className="text-gray-400 text-sm">Canonical implementations of ByteTrack, BoT-SORT, OC-SORT, and more</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-1">Bring Your Models</h4>
              <p className="text-gray-400 text-sm">Custom detectors, embeddings, or integrate with Roboflow</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h4 className="font-semibold mb-1">Apache 2.0</h4>
              <p className="text-gray-400 text-sm">Enterprise-friendly. No AGPL. Use it anywhere.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h4 className="font-semibold mb-1">Local to Cloud</h4>
              <p className="text-gray-400 text-sm">Same API everywhere. Scale with one parameter.</p>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="mt-32" id="roadmap">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Roadmap</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              UMOT is just the foundation. We're building the complete toolkit for production CV pipelines.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative p-6 rounded-2xl bg-gradient-to-b from-violet-500/10 to-transparent border border-violet-500/30">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-violet-500 rounded-full text-xs font-semibold">Now</div>
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-2">UMOT</h3>
                <p className="text-violet-300 text-sm mb-4">Open Source Library</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Unified detection + tracking + ReID pipeline. Canonical tracker implementations. 
                  Bring your own models or use SOTA defaults. Apache 2.0 licensed.
                </p>
              </div>
            </div>

            <div className="relative p-6 rounded-2xl bg-gradient-to-b from-indigo-500/10 to-transparent border border-indigo-500/30">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-indigo-500 rounded-full text-xs font-semibold">Next</div>
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-2">Eyeline Cloud</h3>
                <p className="text-indigo-300 text-sm mb-4">Scale Instantly</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Deploy UMOT pipelines with one parameter. Auto-scaling GPU infrastructure. 
                  50-80% cheaper than AWS Rekognition. Pay per frame.
                </p>
              </div>
            </div>

            <div className="relative p-6 rounded-2xl bg-gradient-to-b from-cyan-500/10 to-transparent border border-cyan-500/30">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-cyan-500 rounded-full text-xs font-semibold">Future</div>
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-2">Eyeline Monitor</h3>
                <p className="text-cyan-300 text-sm mb-4">Catch Drift Before It's a Problem</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  SOTA drift detection for your pipelines. Catch errors before they cause problems. 
                  Export to CVAT, Roboflow for retraining.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Built For Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built For</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Whether you're a solo consultant or an enterprise team, Eyeline grows with you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800">
              <div className="text-2xl mb-4">🛠️</div>
              <h3 className="text-lg font-semibold mb-2">CV Consultants</h3>
              <p className="text-gray-400 text-sm mb-4">
                Save 3-4 days per project. Stop rebuilding tracking pipelines from scratch. 
                Deliver faster, charge more.
              </p>
              <div className="text-violet-400 text-sm font-medium">~$5k saved per client project</div>
            </div>

            <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800">
              <div className="text-2xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold mb-2">Startups</h3>
              <p className="text-gray-400 text-sm mb-4">
                Go from prototype to production with one line change. 
                No $50k infrastructure investment. No CV PhD required.
              </p>
              <div className="text-violet-400 text-sm font-medium">Weeks to market, not months</div>
            </div>

            <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800">
              <div className="text-2xl mb-4">🏢</div>
              <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
              <p className="text-gray-400 text-sm mb-4">
                Apache 2.0 passes legal review. 50-80% cheaper than AWS Rekognition. 
                SLAs available. On-premise deployment.
              </p>
              <div className="text-violet-400 text-sm font-medium">$150k+ annual savings at scale</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-b from-violet-500/10 to-indigo-500/10 border border-violet-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Waitlist</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Be the first to know when UMOT launches. Early adopters get priority access to Eyeline Cloud.
            </p>
            <a 
              href="mailto:hello@eyeline.dev?subject=Early Access Request"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              Request Early Access
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-indigo-600 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-gray-500 text-sm">© 2025 Eyeline</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@eyeline.dev" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">hello@eyeline.dev</a>
            <a href="https://github.com/eyeline-ai" className="text-gray-500 hover:text-gray-300 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}