"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function TransitionProvider({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ x: -50, opacity: 0 }}     // comes from left
        animate={{ x: 0, opacity: 1 }}       // moves to center
        exit={{ x: 50, opacity: 0 }}         // exits to right
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
