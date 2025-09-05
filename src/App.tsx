import React from 'react';
import { useEffect, useState } from 'react';
import { ExternalLink, Zap, Building2, Rocket, Twitter, Instagram } from 'lucide-react';

function App() {
  const [marketCap, setMarketCap] = useState<string>('Loading...');
  const [isLoading, setIsLoading] = useState(true);

  // Live market cap fetching
  useEffect(() => {
    const CHAIN = "base";
    const TOKEN = "0x5c04d21ea647d34da076d477b5f8095cee571789";
    const TOKEN_PAIRS_URL = `https://api.dexscreener.com/token-pairs/v1/${CHAIN}/${TOKEN}`;
    const REFRESH_MS = 5000; // 5 second refresh

    // Format number to compact form (1.23M, 4.5K, etc.)
    function formatCompact(n: number): string {
      if (n == null || isNaN(n)) return "N/A";
      const a = Math.abs(n);
      if (a >= 1e12) return (n/1e12).toFixed(2).replace(/\.00$/,"")+"T";
      if (a >= 1e9 ) return (n/1e9 ).toFixed(2).replace(/\.00$/,"")+"B";
      if (a >= 1e6 ) return (n/1e6 ).toFixed(2).replace(/\.00$/,"")+"M";
      if (a >= 1e3 ) return (n/1e3 ).toFixed(1).replace(/\.0$/,"")+"K";
      return Math.round(n).toLocaleString();
    }

    async function fetchMarketCap() {
      setIsLoading(true);
      try {
        // 1) Get all pairs for the token
        const res = await fetch(TOKEN_PAIRS_URL, { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const pairs = await res.json(); // array

        if (!Array.isArray(pairs) || pairs.length === 0) {
          setMarketCap("N/A");
          return;
        }

        // 2) Select the MOST LIQUID pair (most stable price/MC)
        pairs.sort((a: any, b: any) => (b?.liquidity?.usd || 0) - (a?.liquidity?.usd || 0));
        const best = pairs[0];

        // 3) marketCap or fallback to fdv
        const mc = best?.marketCap ?? best?.mcap ?? best?.fdv ?? null;
        setMarketCap(mc !== null ? "$" + formatCompact(Number(mc)) : "N/A");
      } catch (err) {
        console.error("Fetch MC error:", err);
        setMarketCap("Error");
      } finally {
        setIsLoading(false);
      }
    }

    // Initial fetch
    fetchMarketCap();
    
    // Set up interval for live updates
    const interval = setInterval(fetchMarketCap, REFRESH_MS);
    
    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-12 sm:py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-yellow-900/20 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-radial from-yellow-500/10 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-purple-500 bg-clip-text text-transparent animate-glow leading-tight">
            The $MESKO Movement 🚀
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
            $MESKO isn't just a coin. It's a movement. Join early, stay early.
          </p>
          <a 
            href="https://zora.co/@mesko" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25 active:scale-95"
          >
            Buy on Zora
            <ExternalLink size={18} className="sm:w-5 sm:h-5" />
          </a>
        </div>
      </section>

      {/* About MESKO Section */}
      <section className="py-12 sm:py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 to-yellow-900/5"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-yellow-400">
                About $MESKO
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
                $MESKO isn't just a coin. It's a movement.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
                Born on Zora, powered by culture, and built by early believers.
                We don't follow trends – we create them. $MESKO is the empire where crypto, art, and ambition collide.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-semibold">
                This is the start of something too big to ignore.
              </p>
            </div>
            <div className="relative">
              <div className="w-60 h-60 sm:w-80 sm:h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-purple-500/20 rounded-full blur-xl"></div>
                <div className="absolute inset-6 sm:inset-8 bg-gradient-to-br from-yellow-500 to-purple-500 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-8 sm:inset-12 bg-black rounded-full flex items-center justify-center">
                  <div className="text-center px-2">
                    <div className="text-sm sm:text-base font-bold text-yellow-400 mb-1 uppercase tracking-wider opacity-70">
                      Market Cap
                    </div>
                    <div className={`text-lg sm:text-xl font-black text-yellow-400 ${isLoading ? 'animate-pulse' : ''}`}>
                      {marketCap}
                    </div>
                    <div className="text-xs text-gray-400 mt-1 opacity-60">
                      Live • Base
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Early Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">
            Why Join Now
          </h2>
          <div className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed px-4">
              Timing is everything. Every empire has its early builders – and every bull run has its legends. 
              $MESKO is still early, but the window won't stay open for long. The choice is simple: join now, or look back later wishing you did.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Rocket size={28} className="text-black sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-yellow-400">Growth</h3>
              <p className="text-gray-300 text-base sm:text-lg">
                $MESKO isn't a short play. It's built for exponential expansion.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Building2 size={28} className="text-white sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-purple-400">Community</h3>
              <p className="text-gray-300 text-base sm:text-lg">
                A tribe of early believers building culture together.
              </p>
            </div>
            <div className="text-center group sm:col-span-2 md:col-span-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-yellow-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap size={28} className="text-white sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">Legacy</h3>
              <p className="text-gray-300 text-base sm:text-lg">
                Not just another coin. A brand, an empire, a movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-12 sm:py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-purple-400">
            The MESKO Tribe
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 px-2">
            $MESKO is more than an investment. It's your ticket to being part of the biggest story on Zora. Early adopters don't just watch history – they write it.
          </p>
          <div className="flex flex-col gap-4 sm:gap-6 justify-center max-w-sm sm:max-w-none mx-auto">
            <a 
              href="https://x.com/RokMesko" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-purple-500 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 active:scale-95"
            >
              <Twitter size={18} className="sm:w-5 sm:h-5" />
              Follow on X
            </a>
            <a 
              href="https://www.instagram.com/rok.mesko" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-pink-600 to-pink-500 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-pink-500 hover:to-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25 active:scale-95"
            >
              <Instagram size={18} className="sm:w-5 sm:h-5" />
              Follow on Instagram
            </a>
            <a 
              href="https://farcaster.xyz/rokmesko" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/25 active:scale-95"
            >
              Join Farcaster
            </a>
          </div>
        </div>
      </section>

      {/* Live Market Cap Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-yellow-400">Live Market Data</h3>
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-xl sm:rounded-2xl p-2 sm:p-4 backdrop-blur-sm">
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
      <section className="py-12 sm:py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 via-purple-900/20 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-yellow-400 via-yellow-500 to-purple-500 bg-clip-text text-transparent leading-tight px-2">
            Don't just watch. Join the empire.
          </h2>
          <a 
            href="https://zora.co/@mesko" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-yellow-500 to-purple-500 text-black font-bold text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 rounded-full hover:from-yellow-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25 active:scale-95"
          >
            Buy $MESKO on Zora
            <ExternalLink size={20} className="sm:w-6 sm:h-6" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;