"use client";

import { usePageScrollProgress } from "@/hooks/use-page-scroll-progress";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";

export const NavBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { damping: 35, stiffness: 500 });

  // useMotionValueEvent(translateY, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });

  return (
    <nav className="sticky top-0 z-50 overflow-x-hidden pt-1 backdrop-blur">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        // style={{
        //   transform: `translateX(${(scrollYProgress.get() - 1) * 100}%)`,
        // }}
        className={`fixed inset-0 h-1 w-[105%] origin-left rounded-md bg-red-400`}
      />
    </nav>
  );
};
