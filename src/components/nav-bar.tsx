"use client";
import { usePageScrollProgress } from "@/hooks/use-page-scroll-progress";

export const NavBar = () => {
  const scrollPercentage = usePageScrollProgress();
  return (
    <nav className="sticky top-0 z-50 pt-1 backdrop-blur">
      <span
        style={{
          transform: `translateX(${scrollPercentage - 100}%)`,
        }}
        className={`absolute top-0 h-1 w-[110%] rounded-md bg-red-400`}
      />
    </nav>
  );
};
