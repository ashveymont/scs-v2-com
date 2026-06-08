"use client";

import { useEffect, useRef, useState } from "react";

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export default function RevealSection({
  children,
  className,
  style,
  delay = 0,
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setVisible(true), delay);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 600ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 600ms cubic-bezier(0.25, 0.1, 0.25, 1)`,
        transitionDelay: delay ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
}
