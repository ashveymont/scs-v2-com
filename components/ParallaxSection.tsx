"use client";

import { useEffect, useRef, useState } from "react";

export default function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [ty, setTy] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

    const update = () => {
      const overflow = Math.max(0, img.offsetHeight - container.offsetHeight);
      if (overflow > 0) {
        const rect = container.getBoundingClientRect();
        const vh = window.innerHeight;
        const containerH = container.offsetHeight;
        const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + containerH)));
        setTy(-Math.round(progress * overflow));
      }
      rafRef.current = requestAnimationFrame(update);
    };

    // Start the RAF loop once the image has dimensions
    const start = () => {
      rafRef.current = requestAnimationFrame(update);
    };

    if (img.complete && img.naturalHeight > 0) {
      start();
    } else {
      img.addEventListener("load", start, { once: true });
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-12 mb-12 md:mt-24 md:mb-24"
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "21/9",
        minHeight: "260px",
        overflow: "hidden",
      }}
    >
      <img
        ref={imgRef}
        src="/images/dining-background.jpg"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "auto",
          display: "block",
          transform: `translateY(${ty}px)`,
          willChange: "transform",
        }}
      />
    </div>
  );
}
