import { useEffect, useRef, useState } from "react";

export const Header = () => {
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [current, setCurrent] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTarget({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const animate = () => {
      setCurrent((prev) => {
        const ease = 0.1;
        const dx = target.x - prev.x;
        const dy = target.y - prev.y;
        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease,
        };
      });
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [target]);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative m-3 flex h-[calc(100vh-5rem)] w-full overflow-hidden rounded-lg"
      style={{
        background: `radial-gradient(
          circle at ${current.x}px ${current.y}px,
          rgba(20, 184, 166, 0.9),
          rgba(13, 148, 136, 1) 60px
        )`,
      }}
    >
      <div className="pointer-events-none relative z-10 flex flex-col justify-center px-20 text-5xl font-bold text-white">
        <div>
          Hi, my name is <span className="text-teal-950">Linn Claesson</span>
        </div>
        <div>
          I'm a <span className="font-roboto-mono">developer</span> and designer
        </div>
      </div>
    </section>
  );
};
