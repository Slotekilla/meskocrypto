import React from 'react';
import { ExternalLink, Zap, Building2, Rocket, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-yellow-900/20 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-yellow-500/10 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-purple-500 bg-clip-text text-transparent animate-glow">
            The $MESKO Movement 🚀
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building the biggest empire on Zora. Join early, stay early.
          </p>
          <a 
            href="https://zora.co/@mesko" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold text-lg px-8 py-4 rounded-full hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25"
          >
            Buy on Zora
            <ExternalLink size={20} />
          </a>
        </div>
      </section>

      {/* About MESKO Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 to-yellow-900/5"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
                About $MESKO
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                $MESKO is more than a coin. It's culture, markets, and community. 
                Born on Zora, built by early believers, and designed to grow into 
                the biggest empire in Web3.
              </p>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-purple-500/20 rounded-full blur-xl"></div>
                <div className="absolute inset-8 bg-gradient-to-br from-yellow-500 to-purple-500 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-12 bg-black rounded-full flex items-center justify-center">
                  <span className="text-4xl font-black text-yellow-400">$M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Early Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">
            Why Join Early
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap size={32} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Early Access</h3>
              <p className="text-gray-300 text-lg">
                Be part of the foundation of $MESKO.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Building2 size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Empire Builders</h3>
              <p className="text-gray-300 text-lg">
                We don't build houses, we build empires.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Rocket size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">Growth Potential</h3>
              <p className="text-gray-300 text-lg">
                Timing is everything, and $MESKO moves fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-400">
            The MESKO Tribe
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Strong together, stronger early.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://x.com/RokMesko" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:from-purple-500 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
            >
              <Twitter size={20} />
              Follow on X
            </a>
            <a 
              href="https://farcaster.xyz/rokmesko" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold text-lg px-8 py-4 rounded-full hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/25"
            >
              Join Farcaster
            </a>
          </div>
        </div>
      </section>

      {/* Live Market Cap Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center text-yellow-400">Live Market Data</h3>
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-2xl p-4 backdrop-blur-sm">
            <div id="dexscreener-embed">
              <iframe 
                src="https://dexscreener.com/base/0x58c7122d3422e9682cfdbd13a5bf2ec3f5820f7e8b20eb8a4ca65593c7ab0219?embed=1&loadChartSettings=0&trades=0&tabs=0&chartLeftToolbar=0&chartTimeframesToolbar=0&loadChartSettings=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=1&chartType=marketCap&interval=1D"
                title="$MESKO Live Market Data"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 via-purple-900/20 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-yellow-400 via-yellow-500 to-purple-500 bg-clip-text text-transparent">
            Don't just watch. Join the empire.
          </h2>
          <a 
            href="https://zora.co/@mesko" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-purple-500 text-black font-bold text-xl px-10 py-5 rounded-full hover:from-yellow-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25"
          >
            Buy $MESKO on Zora
            <ExternalLink size={24} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;