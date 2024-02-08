import { getCookie, setCookie } from "cookies-next";
import { useCallback, useLayoutEffect, useState } from "react";

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

  useLayoutEffect(() => {
    console.log(
      'window.matchMedia("(prefers-color-scheme: dark)").matches',
      window.matchMedia("(prefers-color-scheme: dark)").matches,
    );

    console.log(
      'window.matchMedia("(prefers-color-scheme: light)").matches',
      window.matchMedia("(prefers-color-scheme: light)").matches,
    );
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "true"
      : window.matchMedia("(prefers-color-scheme: light)").matches
        ? "false"
        : getCookie("darkMode") ?? "false";
    setDarkLightMode(darkMode === "true" ? MODE.DARK : MODE.LIGHT);
  }, []);

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
