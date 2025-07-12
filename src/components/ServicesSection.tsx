'use client';

import { useState, useRef, useEffect } from 'react';

const asset = (file: string) => `/Supreme%20Group%20assets/${file}`;

const services = [
  {
    id: 0,
    title: 'Passenger vehicles',
    description: 'Revving up innovation from interior to exterior.',
    image: asset('Passenger Alpha.bc06b347f5b526ad9a60.mp4'),
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" fill="none"/><rect x="8" y="20" width="32" height="12" rx="3" fill="currentColor"/><circle cx="16" cy="36" r="3" fill="currentColor"/><circle cx="32" cy="36" r="3" fill="currentColor"/></svg>
    )
  },
  {
    id: 1,
    title: 'Commercial vehicles',
    description: 'Advancing engineering for heavy-duty vehicles.',
    image: asset('Commercial-Cabin.69adf15a8021267cbe8c.mp4'),
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" fill="none"/><rect x="8" y="18" width="28" height="14" rx="3" fill="currentColor"/><rect x="36" y="22" width="4" height="6" rx="1" fill="currentColor"/><circle cx="16" cy="36" r="3" fill="currentColor"/><circle cx="32" cy="36" r="3" fill="currentColor"/></svg>
    )
  }
];

export default function ServicesSection() {
  const [active, setActive] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Play video when active service changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [active]);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="services" className="min-h-screen bg-black flex flex-col justify-center items-center py-20">
      {/* Center Heading */}
      <div className="w-full flex flex-col items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-white text-center leading-tight">
          Evolving the drive with <span className="font-bold">360-degree</span><br />comprehensive solutions
        </h2>
      </div>
      <div className="flex flex-col md:flex-row w-full max-w-6xl items-center justify-center flex-1">
        {/* Left: Vertical Selector */}
        <div className="flex flex-col space-y-8 w-full md:w-1/2 max-w-md">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`pl-8 py-6 border-l-4 transition-all duration-300 cursor-pointer ${
                active === idx ? 'border-white text-white' : 'border-gray-700 text-gray-500'
              }`}
              onClick={() => setActive(idx)}
            >
              <div className={`text-3xl font-semibold mb-2 ${active === idx ? '' : 'opacity-60'}`}>{service.title}</div>
              <div className={`text-lg ${active === idx ? 'text-white' : 'text-gray-500'} ${active === idx ? '' : 'opacity-60'}`}>{service.description}</div>
            </div>
          ))}
        </div>
        {/* Right: Video in circular frame with play/pause */}
        <div className="flex-1 flex items-center justify-center w-full md:w-1/2 relative">
          <div className="rounded-full shadow-2xl bg-black flex items-center justify-center relative" style={{width: 320, height: 320, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.5)'}}>
            <video
              ref={videoRef}
              className="rounded-full object-cover w-[300px] h-[300px]"
              autoPlay
              loop
              muted
              playsInline
              key={services[active].image}
            >
              <source src={services[active].image} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Play/Pause Button */}
            <button
              onClick={handlePlayPause}
              className="absolute bottom-4 right-4 w-12 h-12 bg-black/70 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              style={{boxShadow: '0 2px 8px 0 rgba(0,0,0,0.3)'}}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect x="6" y="6" width="5" height="16" rx="2" fill="currentColor"/><rect x="17" y="6" width="5" height="16" rx="2" fill="currentColor"/></svg>
              ) : (
                <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><polygon points="7,5 23,14 7,23" fill="currentColor"/></svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Bottom: Icons */}
      <div className="flex space-x-12 mt-16">
        {services.map((service, idx) => (
          <button
            key={service.id}
            onClick={() => setActive(idx)}
            className="focus:outline-none"
            aria-label={service.title}
          >
            <span className={`transition-colors duration-300 ${active === idx ? 'text-white' : 'text-gray-700'}`}>{service.icon}</span>
          </button>
        ))}
      </div>
    </section>
  );
} 