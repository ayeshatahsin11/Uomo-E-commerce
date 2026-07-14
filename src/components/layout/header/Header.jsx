"use client"
import React, { useEffect, useState, useRef } from 'react'
import TopHeader from './TopHeader'
import Navbar from './Navbar'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      // requestAnimationFrame diye throttle kortesi, 
      // jate onek fast scroll event fire holeo ekta frame e ekbar e state update hoy
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          // Hysteresis: 80px cross korle "scrolled" hobe,
          // kintu 40px er niche na neme gele abar "not scrolled" hobe na.
          // Ei gap (40-80) er moddhe thakle state change hobe na, tai flicker hobe na.
          setIsScrolled((prev) => {
            if (scrollY > 80) return true;
            if (scrollY < 40) return false;
            return prev;
          });

          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      <TopHeader isScrolled={isScrolled} />
      <Navbar isScrolled={isScrolled} />
    </header>
  )
}

export default Header



