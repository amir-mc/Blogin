'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface MatrixItem {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  symbol: string;
  rotation: number;
  rotationSpeed: number;
}

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();

    // Matrix items
    const items: MatrixItem[] = [];
    const colors = [
      'rgba(110, 231, 183, 0.3)',
      'rgba(59, 130, 246, 0.3)',
      'rgba(139, 92, 246, 0.3)',
      'rgba(244, 63, 94, 0.3)'
    ];
    const symbols = ['❖', '◆', '■', '▲', '◼', '●', '◈', '◉'];

    // Create random items
    for (let i = 0; i < 30; i++) {
      items.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 15 + 5,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 4
      });
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update items
      items.forEach(item => {
        ctx.save();
        ctx.translate(item.x, item.y);
        ctx.rotate(item.rotation * Math.PI / 180);
        ctx.fillStyle = item.color;
        ctx.font = `${item.size}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(item.symbol, 0, 0);
        ctx.restore();
        
        // Update position
        item.x += item.speedX;
        item.y += item.speedY;
        item.rotation += item.rotationSpeed;
        
        // Bounce off edges
        if (item.x < 0 || item.x > canvas.width) item.speedX *= -1;
        if (item.y < 0 || item.y > canvas.height) item.speedY *= -1;
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      resizeCanvas();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 md:px-16 py-10">
      {/* Background canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
      />
      
      {/* Glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>
      
      {/* Left Part */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-500">
         | Amir Blog
        </h1>
        <p className="text-gray-300 mt-4 text-lg md:text-xl max-w-lg">
          Exploring the universe of code, design and creativity
        </p>
        <p className="text-gray-400 mt-4 text-xs md:text-xl max-w-lg">
          Next JS | Front-End developer
        </p>
        <Button asChild className="px-8 py-6 my-6 text-lg group" variant="outline">
          <Link href='/posts'>
            <span className="group-hover:text-emerald-400 transition-colors duration-300">
              Read My Blog
            </span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </Button>
      </div>
      
      {/* Right Part */}
      <div className="w-full md:w-1/2 relative z-10 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-emerald-400/30 flex items-center justify-center">
          <div 
            className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-spin-slow" 
            style={{ animationDuration: '20s' }}
          ></div>
          <div 
            className="absolute inset-4 rounded-full border-2 border-purple-400/30 animate-spin-reverse" 
            style={{ animationDuration: '25s' }}
          ></div>
          <div className="text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500 font-bold">
            AF 
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;