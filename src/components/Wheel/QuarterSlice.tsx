"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle: string;
  color: string;
  rotation: number;
  index: number;
  isActive?: boolean;
  onClick?: () => void;
};

export const QuarterSlice = ({ title, subtitle, color, rotation, index, isActive, onClick }: Props) => {
  const cx = 400;
  const cy = 400;
  const radius = 210;

  const angles = [315, 45, 135, 225];
  const angleRad = (angles[index % 4] * Math.PI) / 180;
  const textX = cx + radius * Math.cos(angleRad);
  const textY = cy + radius * Math.sin(angleRad);

  return (
    <motion.g
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.25 }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
      onClick={onClick}
      cursor="pointer"
    >
      {/* Повернутый сектор */}
      <g transform={`rotate(${rotation} ${cx} ${cy})`}>
        <path
          d="M 400 400 L 400 80 A 320 320 0 0 1 720 400 Z"
          fill={color}
          opacity={isActive ? 1 : 0.7}
        />
        <path
          d="M 400 400 L 400 80 A 320 320 0 0 1 720 400 Z"
          fill="rgba(255,255,255,0.08)"
        />
        <path
          d="M 400 400 L 400 80 A 320 320 0 0 1 720 400 Z"
          fill="url(#glow)"
          opacity="0.2"
        />
      </g>

      {/* Текст без поворота, в правильных координатах */}
      <g transform={`translate(${textX}, ${textY})`}>
        <text
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="28"
          fontWeight="700"
        >
          {title}
        </text>
        <text
          y="32"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="rgba(255,255,255,0.9)"
          fontSize="16"
        >
          {subtitle}
        </text>
      </g>
    </motion.g>
  );
};