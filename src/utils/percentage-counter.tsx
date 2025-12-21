"use client";
import { useEffect, useRef, useState } from "react";

type PercentageCounterProps = {
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
};

export default function PercentageCounter({
  to,
  duration = 2,
  suffix = "%",
  className = "",
}: PercentageCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setCount(0);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    const el = elementRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const fps = 60;
    const totalFrames = duration * fps;
    const increment = to / totalFrames;
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      setCount((prev) => {
        const next = prev + increment;
        return next >= to ? to : next;
      });

      if (frame >= totalFrames) clearInterval(interval);
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [to, duration, isVisible]);

  return (
    <span ref={elementRef} className={className}>
      {Math.round(count)}
      {suffix}
    </span>
  );
}
