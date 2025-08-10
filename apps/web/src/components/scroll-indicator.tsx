import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [showIndicator, setShowIndicator] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Check if user has scrolled
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
        setShowIndicator(false);
      }
    };

    // Show indicator after 7 seconds if user hasn't scrolled
    const timer = setTimeout(() => {
      if (!hasScrolled) {
        setShowIndicator(true);
      }
    }, 7000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  if (!showIndicator) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center">
      {/* SCROLL text */}
      <div className="flex flex-col items-center mb-2">
        <span className="text-black font-sans text-sm font-medium tracking-wider">
          S
        </span>
        <span className="text-black font-sans text-sm font-medium tracking-wider">
          C
        </span>
        <span className="text-black font-sans text-sm font-medium tracking-wider">
          R
        </span>
        <span className="text-black font-sans text-sm font-medium tracking-wider">
          O
        </span>
        <span className="text-black font-sans text-sm font-medium tracking-wider">
          L
        </span>
        <span className="text-black font-sans text-sm font-medium tracking-wider">
          L
        </span>
      </div>
      
      {/* Animated line */}
      <div className="w-px h-8 bg-gray-300 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-3 bg-black animate-scroll-line shadow-sm"></div>
      </div>
    </div>
  );
} 