"use client";

import { QuarterSlice } from "./QuarterSlice";

const quarters = [
  { title: "Механика", subtitle: "Движение и силы", color: "#4ea1ff", rotation: 0, index: 0 },
  { title: "Термодинамика", subtitle: "Тепло и молекулы", color: "#7ee081", rotation: 90, index: 1 },
  { title: "Электродинамика", subtitle: "Ток и поля", color: "#ffb347", rotation: 180, index: 2 },
  { title: "Оптика", subtitle: "Свет и волны", color: "#b79cff", rotation: 270, index: 3 },
];

type PhysicsWheelProps = {
  onQuarterClick?: (index: number) => void;
  activeQuarter?: number;
};

export const PhysicsWheel = ({ onQuarterClick, activeQuarter }: PhysicsWheelProps) => {
  return (
    <svg width="700" height="700" viewBox="0 0 800 800">
      {quarters.map((q) => (
        <QuarterSlice
          key={q.index}
          title={q.title}
          subtitle={q.subtitle}
          color={q.color}
          rotation={q.rotation}
          index={q.index}
          isActive={activeQuarter === q.index}
          onClick={() => onQuarterClick?.(q.index)}
        />
      ))}
    </svg>
  );
};