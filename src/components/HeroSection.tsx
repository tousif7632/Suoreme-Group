'use client';

import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] h-[90vh] flex items-center justify-center overflow-hidden py-16">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Supreme Group assets/automotive.224e7418884105595114.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto relative z-10">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold mb-10 leading-tight text-center">
          Welcome to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Supreme Group
          </span>
        </h1>
        <p className="text-2xl sm:text-3xl lg:text-4xl mb-12 text-gray-200 max-w-4xl mx-auto text-center">
          Leading the future of automotive excellence with cutting-edge technology and unparalleled innovation
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="w-80 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-6 px-14 rounded-xl text-2xl transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore Our Services
          </button>
          <button className="w-60 border-4 border-white text-white font-bold py-6 px-14 rounded-xl text-2xl hover:bg-white hover:text-black transition-all duration-300 shadow-lg">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
} 