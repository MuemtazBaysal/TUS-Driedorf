"use client";

import { useEffect, useState } from "react";
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
};

export default function FootballBackground() {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    const generatedItems: FloatingItem[] = [];
    for (let i = 0; i < 8; i++) {
      generatedItems.push({
        id: i,
        type: i % 3 === 0 ? "goal" : "football",
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 20 + Math.random() * 30,
        delay: Math.random() * 3,
        duration: 3 + Math.random() * 2,
      });
    }
    setItems(generatedItems);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-[0.03]">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute animate-float text-white"
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
