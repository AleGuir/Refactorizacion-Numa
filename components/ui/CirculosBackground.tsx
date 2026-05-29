"use client";

import { useEffect, useRef } from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

// Configuración de cada anillo: radio (en px base), densidad de puntos y opacidad máxima
const RINGS = [
  { radius: 45,  pointCount: 700,  maxOpacity: 0.08 },
  { radius: 115, pointCount: 2020,  maxOpacity: 0.08},
  { radius: 190, pointCount: 3080,  maxOpacity: 0.08 },
  { radius: 275, pointCount: 2850,  maxOpacity: 0.16 },
  { radius: 375, pointCount: 880,  maxOpacity: 0.42 },
  { radius: 490, pointCount: 1020,  maxOpacity: 0.46 },
  { radius: 620, pointCount: 1060, maxOpacity: 0.40 },
  { radius: 770, pointCount: 1200, maxOpacity: 0.45 },
  { radius: 940, pointCount: 1340, maxOpacity: 0.50 },
];

// Color de los puntos (tono arena oscuro sobre el fondo crema)
const POINT_COLOR = "169, 160, 143";

function drawRings(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const W = canvas.width;
  const H = canvas.height;

  ctx.clearRect(0, 0, W, H);

  // Centro ligeramente desplazado (igual que en el diseño original)
  const cx = W * 0.47;
  const cy = H * 0.50;

  for (const ring of RINGS) {
    const { radius, pointCount, maxOpacity } = ring;

    for (let i = 0; i < pointCount; i++) {
      // Ángulo aleatorio para distribuir los puntos alrededor del anillo
      const angle = Math.random() * Math.PI * 2;

      // Dispersión radial: los puntos no caen exactamente en el radio,
      // sino en una banda gaussiana → simula el puntillismo real
      const spread = radius * 0.045;
      const r = radius + (Math.random() - 0.5) * spread * 2.2

      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;

      // Opacidad variable por punto → efecto de densidad irregular
      const opacity = Math.random() * maxOpacity;

      // Tamaño de punto pequeño e irregular
      const size = Math.random() * 1.4 + 0.3;

      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${POINT_COLOR}, ${opacity})`;
      ctx.fill();
    }
  }
}

export default function ConcentricBackground({ children, className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resize = () => {
      canvas.width  = container.offsetWidth;
      canvas.height = container.offsetHeight;
      drawRings(canvas);
    };

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full min-h-screen bg-[#ECE7DB] overflow-hidden ${className}`}
    >
      {/* Canvas del fondo puntillista */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        aria-hidden="true"
      />

      {/* Contenido de la página encima del fondo */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}