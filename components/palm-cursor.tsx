"use client";

import { useEffect, useState } from "react";

export function PalmCursor() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateEnabled = () => setEnabled(media.matches);
    updateEnabled();
    media.addEventListener("change", updateEnabled);

    const move = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      const target = event.target as HTMLElement | null;
      const cursor = target ? window.getComputedStyle(target).cursor : "default";
      setIsPointer(cursor === "pointer");
    };

    window.addEventListener("mousemove", move);

    return () => {
      media.removeEventListener("change", updateEnabled);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className={`palm-cursor-layer ${isPointer ? "is-pointer" : ""}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div className="palm-cursor-glow" />
      <div className="palm-cursor-icon" />
    </div>
  );
}
