import React, { useEffect, useRef } from 'react';

const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const mouse = { x: 0, y: 0 };
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    const lines: any[] = [];
    const gap = 40;
    
    // Create grid points
    for (let y = 0; y < height + gap; y += gap) {
        lines.push({ y: y, baseY: y });
    }

    const render = () => {
        // Clear with slight trail effect
        ctx.fillStyle = 'rgba(5, 5, 5, 0.5)';
        ctx.fillRect(0, 0, width, height);
        
        ctx.lineWidth = 1;
        const time = Date.now() / 1000;

        lines.forEach((line, i) => {
            ctx.beginPath();
            ctx.strokeStyle = '#1A1A1A'; // Dark Grey
            
            // Highlight lines near mouse vertical axis
            const distY = Math.abs(line.y - mouse.y);
            if (distY < 100) {
                 ctx.strokeStyle = `rgba(255, 77, 0, ${1 - distY / 100})`;
            }

            for (let x = 0; x <= width; x += 10) {
                // Wave effect
                const distToMouse = Math.sqrt(Math.pow(x - mouse.x, 2) + Math.pow(line.y - mouse.y, 2));
                const maxDist = 200;
                
                let offsetY = 0;
                
                // Mouse repulsion/distortion
                if (distToMouse < maxDist) {
                    const force = (maxDist - distToMouse) / maxDist;
                    offsetY = Math.sin(force * Math.PI) * 40;
                }

                // Ambient wave
                offsetY += Math.sin(x * 0.01 + time) * 5;

                ctx.lineTo(x, line.y + offsetY);
            }
            ctx.stroke();
        });

        // Vertical lines (Static Grid)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
        for (let x = 0; x <= width; x += gap) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }

        animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default BackgroundCanvas;