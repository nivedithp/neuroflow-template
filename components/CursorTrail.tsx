"use client";

import { useEffect, useState } from "react";

export default function CursorTrail() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        className="pointer-events-none fixed z-[999] h-4 w-4 rounded-full bg-yellow-300 mix-blend-screen transition-transform duration-75"
        style={{
          left: position.x - 8,
          top: position.y - 8,
        }}
      />

      {/* Glow */}
      <div
        className="pointer-events-none fixed z-[998] h-24 w-24 rounded-full bg-yellow-400/10 blur-3xl transition-all duration-150"
        style={{
          left: position.x - 48,
          top: position.y - 48,
        }}
      />
    </>
  );
}