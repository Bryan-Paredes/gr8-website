import { useState, useEffect } from "react";

interface AnimatedCounterProps {
  end: number;
  duration: number;
  label: string;
  sufix: string;
}

export default function AnimatedCounter({
  end,
  duration,
  label,
  sufix,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const increment = Math.min(end, Math.floor((progress / duration) * end));

      setCount(increment);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <div className="text-center text-white">
      <div className="text-5xl font-bold mb-2">
        <span>{count}</span>
        <span>{sufix}</span>
      </div>
      <div className="text-lg text-gray-400">{label}</div>
    </div>
  );
}
