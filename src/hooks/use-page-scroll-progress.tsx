import { useEffect, useState } from "react";
import { throttle } from "throttle-debounce";

/**
 * React Hook to get the scroll percentage from the page, returns value from 0 to 100
 */
export function usePageScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const getScrollPercentage = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const winHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const docHeight =
        document.body.scrollHeight || document.documentElement.scrollHeight;
      const scrollHeight = docHeight - winHeight;
      if (scrollHeight) {
        return Number(scrollY / scrollHeight) * 100;
      }
      return 0;
    };

    const updateScrollPercentage = throttle(10, () => {
      const scrollPercentage = getScrollPercentage();
      setProgress(scrollPercentage);
    });

    window.addEventListener("scroll", updateScrollPercentage);
    updateScrollPercentage();

    return () => {
      window.removeEventListener("scroll", updateScrollPercentage);
    };
  }, []);

  return progress;
}
