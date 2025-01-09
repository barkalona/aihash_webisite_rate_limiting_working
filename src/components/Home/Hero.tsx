import React from 'react';
import ParticleBackground from './ParticleBackground';
import { Link } from 'react-router-dom';

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="relative w-16 h-16">
      {/* Outer hexagon */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF9D] to-[#2D7FF9] rounded-lg transform rotate-45"></div>
      {/* Inner cube/hash pattern */}
      <div className="absolute inset-2 bg-[#0D1117] rounded-lg transform rotate-45 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-1 transform -rotate-45">
          <div className="w-3 h-3 bg-[#00FF9D]"></div>
          <div className="w-3 h-3 bg-[#2D7FF9]"></div>
          <div className="w-3 h-3 bg-[#2D7FF9]"></div>
          <div className="w-3 h-3 bg-[#00FF9D]"></div>
        </div>
      </div>
      {/* AI circuit overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#00FF9D]/50 to-transparent transform rotate-45"></div>
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#2D7FF9]/50 to-transparent transform -rotate-45"></div>
      </div>
    </div>
    <span className="text-4xl font-bold bg-gradient-to-r from-[#00FF9D] to-[#2D7FF9] bg-clip-text text-transparent">
      ai<span className="text-white">Hash</span>
    </span>
  </div>
);

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 text-center px-6">
        <div className="mb-8 flex items-center justify-center">
          <Logo />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00FF9D] to-[#2D7FF9] text-transparent bg-clip-text">
          The Future of Decentralized Hash Power
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Trade computing power on the first truly decentralized hash marketplace. 
          Secure, efficient, and powered by blockchain technology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/marketplace"
            className="bg-[#00FF9D] text-[#0D1117] px-8 py-3 rounded-lg font-medium hover:bg-[#00FF9D]/90 transition-colors"
          >
            Start Trading
          </Link>
          <Link
            to="/docs"
            className="border border-[#00FF9D] text-[#00FF9D] px-8 py-3 rounded-lg font-medium hover:bg-[#00FF9D]/10 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}