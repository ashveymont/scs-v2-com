"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src?: string;
  aspectRatio?: string;
  maxWidth?: string;
  className?: string;
};

export default function ParallaxSection({
  src = "/images/dining-background.jpg",
  aspectRatio = "21/9",
  maxWidth,
  className = "mt-12 mb-12 md:mt-24 md:mb-24",
}: Props) {
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
    <div style={maxWidth ? { maxWidth, margin: "0 auto", width: "100%" } : undefined}>
      <div
        ref={containerRef}
        className={className}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio,
          minHeight: "260px",
          overflow: "hidden",
        }}
      >
        <img
          ref={imgRef}
          src={src}
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
    </div>
  );
}
