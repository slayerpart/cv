"use client";

import { motion, useScroll } from "framer-motion";

export const NavBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <nav className="sticky top-0 z-50 overflow-x-hidden pt-2 backdrop-blur">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className={`fixed inset-0 h-1 w-[105%] origin-left rounded-md bg-progress`}
      />
    </nav>
  );
};
