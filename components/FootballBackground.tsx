"use client";

import Football from "@/components/icons/Football";
import Goal from "@/components/icons/Goal";

type FloatingItem = {
  id: number;
  type: "football" | "goal";
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  animation: "a" | "b";
};

const items: FloatingItem[] = [
  { id: 1, type: "football", x: 8, y: 12, size: 58, delay: 0, duration: 18, animation: "a" },
  { id: 2, type: "goal", x: 28, y: 24, size: 72, delay: 1, duration: 22, animation: "b" },
  { id: 3, type: "football", x: 44, y: 10, size: 48, delay: 0.5, duration: 19, animation: "a" },
  { id: 4, type: "football", x: 67, y: 30, size: 64, delay: 2, duration: 24, animation: "b" },
  { id: 5, type: "goal", x: 82, y: 18, size: 70, delay: 0.8, duration: 21, animation: "a" },
  { id: 6, type: "football", x: 14, y: 62, size: 52, delay: 1.5, duration: 23, animation: "b" },
  { id: 7, type: "goal", x: 35, y: 74, size: 76, delay: 0.2, duration: 20, animation: "a" },
  { id: 8, type: "football", x: 58, y: 66, size: 56, delay: 2.4, duration: 22, animation: "b" },
  { id: 9, type: "goal", x: 78, y: 78, size: 68, delay: 1.1, duration: 25, animation: "a" },
  { id: 10, type: "football", x: 92, y: 56, size: 50, delay: 0.6, duration: 19, animation: "b" },
];

export default function FootballBackground() {
  return (
    <div className="football-bg-layer pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {items.map((item) => (
        <div
          key={item.id}
          className={`football-bg-item absolute text-white ${item.animation === "a" ? "football-drift-a" : "football-drift-b"}`}
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
          }}
        >
          {item.type === "football" ? (
            <Football size={item.size} />
          ) : (
            <Goal size={item.size} />
          )}
        </div>
      ))}
    </div>
  );
}
