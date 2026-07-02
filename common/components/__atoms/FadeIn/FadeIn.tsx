"use client";
import React from "react";
import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

const OFFSETS: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
  none: {},
};

const FadeIn = ({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance,
  once = true,
}: FadeInProps) => {
  const offset = OFFSETS[direction];
  const initial = {
    opacity: 0,
    ...(offset.x !== undefined && { x: distance ?? offset.x }),
    ...(offset.y !== undefined && { y: distance ?? offset.y }),
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] as const }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
