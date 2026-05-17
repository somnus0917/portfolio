"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 450, damping: 35 });
  const springY = useSpring(cursorY, { stiffness: 450, damping: 35 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine) and (min-width: 768px)");
    const updateEnabled = () => setEnabled(media.matches);

    updateEnabled();
    media.addEventListener("change", updateEnabled);

    const onMove = (event: MouseEvent) => {
      cursorX.set(event.clientX - 10);
      cursorY.set(event.clientY - 10);
      const target = event.target as HTMLElement | null;
      setIsPointer(Boolean(target?.closest("a, button, input, textarea, [role='button']")));
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      media.removeEventListener("change", updateEnabled);
      window.removeEventListener("mousemove", onMove);
    };
  }, [cursorX, cursorY]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-5 w-5 rounded-full border border-accent/80 mix-blend-difference md:block"
      style={{ x: springX, y: springY }}
      animate={{ scale: isPointer ? 1.9 : 1 }}
      transition={{ duration: 0.18 }}
    />
  );
}
