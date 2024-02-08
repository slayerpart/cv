import { getCookie, setCookie } from "cookies-next";
import { useCallback, useLayoutEffect, useMemo, useState } from "react";

export const MODE = { LIGHT: "light", DARK: "dark" } as const;
export type DarkLightMode = (typeof MODE)[keyof typeof MODE];

/**
 * Sets the dark/light mode for the application.
 * @param mode - The mode to set (either "light" or "dark").
 */
const setMode = (mode: DarkLightMode) => {
  const root = window.document.documentElement;

  if (mode === MODE.LIGHT) {
    root.classList.add(MODE.DARK);
    setCookie("darkMode", "true");
  } else {
    root.classList.remove(MODE.DARK);
    setCookie("darkMode", "false");
  }
};

/**
 * Custom hook for managing dark/light mode.
 * Retrieves the mode from cookie, if available, and initializes it.
 * Provides a function to toggle between dark and light mode.
 *
 * @returns An object containing the current dark/light mode and a function to toggle the mode.
 */
export const useDarkLightMode = () => {
  const [darkLightMode, setDarkLightMode] = useState<DarkLightMode>();

  const darkMode = useMemo(() => getCookie("darkMode") ?? "false", []);

  useLayoutEffect(() => {
    setDarkLightMode(darkMode === "true" ? MODE.DARK : MODE.LIGHT);
  }, [darkMode]);

  const toggleDarkLightMode = useCallback(() => {
    const switchMode = () => {
      setDarkLightMode((currentMode) =>
        currentMode === MODE.LIGHT ? MODE.DARK : MODE.LIGHT,
      );
    };

    if (!document.startViewTransition) switchMode();
    document.startViewTransition?.(switchMode);
  }, []);

  useLayoutEffect(() => {
    setMode(darkLightMode === MODE.LIGHT ? MODE.DARK : MODE.LIGHT);
  }, [darkLightMode]);

  return { darkLightMode, toggleDarkLightMode };
};
