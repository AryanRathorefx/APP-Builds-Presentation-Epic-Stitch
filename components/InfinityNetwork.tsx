
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, 
  Layers, 
  Cpu, 
  Settings, 
  Zap, 
  Shirt, 
  CheckCircle, 
  Factory, 
  Truck,
  Palette,
  Check
} from 'lucide-react';

interface Props {
  scene: number;
}

const InfinityNetwork: React.FC<Props> = ({ scene }) => {
  const [threadColor, setThreadColor] = useState('#3B82F6');
  
  useEffect(() => {
    if (scene === 2) {
      const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];
      let i = 0;
      const interval = setInterval(() => {
        setThreadColor(colors[i % colors.length]);
        i++;
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [scene]);

  const intakeSystems = [
    { name: 'NetSuite', icon: <Database className="w-4 h-4" /> },
    { name: 'ApparelMagic', icon: <Layers className="w-4 h-4" /> },
    { name: 'Business Central', icon: <Cpu className="w-4 h-4" /> },
    { name: 'BlueCherry', icon: <Settings className="w-4 h-4" /> }
  ];

  const facilities = [
    { name: 'DZYNIT CA', location: 'California' },
    { name: 'DZYNIT TX', location: 'Texas' },
    { name: 'World Emblem', location: 'Georgia' }
  ];

  return (
    <div className="relative w-full max-w-7xl h-[640px] flex items-center justify-between">
      {/* Glowing Path Connections */}
      <svg className="absolute inset-0 w-full h-full -z-10 overflow-visible" preserveAspectRatio="none">
        <defs>
          <linearGradient id="glowLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E293B" stopOpacity="0" />
            <stop offset="30%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#06B6D4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1E293B" stopOpacity="0" />
          </linearGradient>
          <filter id="glowBlur">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Left Paths */}
        <motion.path d="M 120 160 C 250 160, 250 320, 480 320" fill="none" stroke="url(#glowLine)" strokeWidth="1.5" className="flow-path opacity-40" filter="url(#glowBlur)" />
        <motion.path d="M 120 480 C 250 480, 250 320, 480 320" fill="none" stroke="url(#glowLine)" strokeWidth="1.5" className="flow-path opacity-40" filter="url(#glowBlur)" />

        {/* Right Paths */}
        <motion.path d="M 720 320 C 850 320, 850 160, 1080 160" fill="none" stroke="url(#glowLine)" strokeWidth="1.5" className="flow-path opacity-40" filter="url(#glowBlur)" />
        <motion.path d="M 720 320 C 850 320, 850 480, 1080 480" fill="none" stroke="url(#glowLine)" strokeWidth="1.5" className="flow-path opacity-40" filter="url(#glowBlur)" />
      </svg>

      {/* Intake Section */}
      <div className="flex flex-col gap-6 w-64 z-10">
        {intakeSystems.map((sys, i) => (
          <motion.div
            key={sys.name}
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: scene === 0 ? 1 : 0.4 }}
            transition={{ delay: i * 0.1 }}
            className={`glass-card p-5 rounded-2xl flex items-center gap-4 border border-white/5 shadow-2xl transition-all duration-700 ${
              scene === 0 ? 'ring-1 ring-blue-500/30 bg-slate-900/80' : ''
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
              {sys.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-tight text-white">{sys.name}</span>
              <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Input Source</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Central Hub: EpicStitch */}
      <div className="relative flex flex-col items-center">
        <motion.div
          animate={{ 
            scale: scene >= 1 && scene <= 2 ? 1.08 : 1,
            boxShadow: scene === 2 ? `0 0 100px ${threadColor}33` : '0 0 60px rgba(56,189,248,0.1)'
          }}
          className={`w-72 h-72 rounded-full glass-card epic-glow flex flex-col items-center justify-center relative z-20 border border-white/10 transition-colors duration-1000 ${
            scene >= 1 && scene <= 2 ? 'bg-slate-900/90' : 'bg-slate-900/40'
          }`}
        >
          <div className="absolute inset-0 rounded-full border border-blue-400/10 animate-pulse" />
          
          <AnimatePresence mode="wait">
            {scene === 2 ? (
              <motion.div
                key="embroidery"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex flex-col items-center"
              >
                <div className="relative">
                  <Shirt className="w-20 h-20 text-slate-200" strokeWidth={1} />
                  {/* Embroidery Needle Visual */}
                  <motion.div 
                    animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="absolute top-4 left-1/2 w-[2px] h-8 bg-white/40"
                  />
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <motion.path
                      d="M 20 40 Q 40 60, 60 40 T 100 40"
                      fill="none"
                      stroke={threadColor}
                      strokeWidth="2"
                      className="embroidery-line"
                    />
                  </svg>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Palette className="w-3 h-3 text-blue-400" />
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Embroidery Engine</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="standard"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center"
              >
                <Zap className="w-14 h-14 text-blue-400 mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-white tracking-tight">EpicStitch</h3>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] mt-2">Orchestrator</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        {/* Context Text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={scene}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="mt-16 text-center"
          >
             <p className="text-sm font-medium text-slate-400 max-w-[280px] leading-relaxed italic">
               {scene === 0 && "Capturing orders from global business systems."}
               {scene === 1 && "Optimizing production paths automatically."}
               {scene === 2 && "Precision digital embroidery with dynamic color mapping."}
               {scene === 3 && "Smart routing to regional fulfillment centers."}
               {scene === 4 && "Final QC and regional facility verification."}
               {scene === 5 && "Secured delivery to premium golf destinations."}
             </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Production & Confirmation Section */}
      <div className="flex flex-col gap-8 w-64 items-end z-10">
        {facilities.map((fac, i) => (
          <motion.div
            key={fac.name}
            initial={{ x: 40, opacity: 0 }}
            animate={{ 
              x: 0, 
              opacity: scene >= 3 && scene <= 4 ? 1 : 0.4,
              scale: scene === 4 ? 1.05 : 1
            }}
            transition={{ delay: i * 0.15 }}
            className={`glass-card p-5 rounded-2xl flex items-center justify-end gap-5 border border-white/5 w-full shadow-2xl relative transition-all duration-700 ${
              scene === 3 || scene === 4 ? 'bg-slate-900/80 ring-1 ring-cyan-500/20' : ''
            }`}
          >
            {scene === 4 && (
              <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] z-20"
              >
                <Check className="w-5 h-5" />
              </motion.div>
            )}
            
            <div className="text-right flex flex-col">
              <span className="text-xs font-bold text-white tracking-tight">{fac.name}</span>
              <span className="text-[9px] text-cyan-400 uppercase tracking-widest font-bold">{fac.location}</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
              <Factory className="w-4 h-4" />
            </div>
          </motion.div>
        ))}

        {/* Final Goal: Golf Clubs */}
        <motion.div
          animate={{ 
            opacity: scene === 5 ? 1 : 0.3,
            scale: scene === 5 ? 1.08 : 1,
            borderColor: scene === 5 ? 'rgba(56,189,248,0.4)' : 'rgba(255,255,255,0.05)'
          }}
          className="mt-8 glass-card p-6 rounded-3xl bg-slate-950 text-white flex flex-col items-center w-full shadow-3xl border transition-all duration-1000"
        >
          <div className="relative mb-3">
             <Truck className={`w-10 h-10 ${scene === 5 ? 'text-blue-400' : 'text-slate-700'}`} strokeWidth={1.5} />
             {scene === 5 && (
               <motion.div 
                animate={{ x: [0, 40], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute top-1/2 left-full w-4 h-[1px] bg-blue-400/50"
               />
             )}
          </div>
          <span className="text-sm font-bold tracking-tight text-white">GOLF CLUBS</span>
          <span className="text-[9px] text-blue-500 uppercase tracking-[0.3em] mt-2 font-bold">Global Fulfillment</span>
        </motion.div>
      </div>

      {/* Floating Animated Packets */}
      <AnimatePresence>
        {scene !== 5 && [1, 2, 3].map((id) => (
          <motion.div
            key={`order-${id}`}
            initial={{ offsetDistance: "0%", opacity: 0 }}
            animate={{ 
              offsetDistance: "100%", 
              opacity: [0, 1, 1, 0],
              scale: [0.6, 1, 1, 0.6]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              delay: id * 2,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              offsetPath: scene < 2 
                ? "M 120 160 C 250 160, 250 320, 480 320" 
                : "M 720 320 C 850 320, 850 160, 1080 160",
            }}
            className="w-14 h-14 bg-slate-900/90 rounded-2xl shadow-2xl border border-blue-500/20 flex items-center justify-center z-50 pointer-events-none"
          >
             <Shirt className={`w-7 h-7 ${scene >= 2 ? 'text-blue-400' : 'text-slate-500'}`} strokeWidth={1} />
             {scene >= 2 && (
               <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-blue-500" />
             )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default InfinityNetwork;
