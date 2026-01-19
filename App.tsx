
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InfinityNetwork from './components/InfinityNetwork';

const App: React.FC = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const totalScenes = 6;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % totalScenes);
    }, 9000); 
    return () => clearInterval(timer);
  }, []);

  const labels = [
    "Intake",
    "Orchestration",
    "Embroidery",
    "Routing",
    "Confirmation",
    "Delivery"
  ];

  return (
    <div className="h-screen w-screen bg-[#020617] text-white flex flex-col overflow-hidden selection:bg-blue-500/30">
      {/* Premium Dark Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-8 bg-slate-950/40 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-6">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              EpicStitch <span className="font-light text-slate-500">×</span> DZYNIT <span className="font-light text-slate-500">×</span> World Emblem
            </h1>
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-400 mt-1">
              Infinity Decoration Network
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="text-right hidden md:block">
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-0.5">PGA SHOW 2026</p>
            <p className="text-sm font-medium text-slate-300 tracking-wide">Stand: 5590</p>
          </div>
          <div className="h-10 w-[1px] bg-slate-800" />
          <div className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase">
            Platform Demo
          </div>
        </div>
      </header>

      {/* Main Stage */}
      <main className="flex-grow flex items-center justify-center pt-24 px-12 relative">
        <InfinityNetwork scene={currentScene} />
      </main>

      {/* Controls & Progress */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 px-12 py-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex justify-between w-full mb-8">
            {labels.map((label, i) => (
              <button
                key={label}
                onClick={() => setCurrentScene(i)}
                className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-700 ${
                  currentScene === i ? 'text-blue-400 scale-110' : 'text-slate-600 hover:text-slate-400'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="w-full h-[1px] bg-slate-800 rounded-full relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentScene + 1) / totalScenes) * 100}%` }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      </footer>
      
      {/* Immersive Background Decor */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-900/10 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(15,23,42,0)_0%,rgba(2,6,23,1)_80%)]" />
      </div>
    </div>
  );
};

export default App;
