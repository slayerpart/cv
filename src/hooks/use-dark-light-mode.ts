import { getCookie, hasCookie, setCookie } from "cookies-next";
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
 * Custom hook that manages the dark/light mode state.
 * It determines the initial mode based on the user's preferred color scheme,
 * or falls back to the value stored in a cookie.
 * Provides a function to toggle between dark and light mode.
 *
 * @returns An object containing the current dark/light mode and a function to toggle the mode.
 */
export const useDarkLightMode = () => {
  const [darkLightMode, setDarkLightMode] = useState<DarkLightMode>();

  useLayoutEffect(() => {
    console.log({
      hasCookie: hasCookie("darkMode"),
      cookie: getCookie("darkMode"),
    });
    const darkMode = hasCookie("darkMode")
      ? getCookie("darkMode")
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "true"
        : "false";

    setDarkLightMode(darkMode === "true" ? MODE.DARK : MODE.LIGHT);
    setMode(darkMode === "true" ? MODE.DARK : MODE.LIGHT);
  }, []);

  const toggleDarkLightMode = useCallback(() => {
    const switchMode = () => {
      setDarkLightMode((currentMode) => {
        const newMode = currentMode === MODE.LIGHT ? MODE.DARK : MODE.LIGHT;
        setMode(newMode);

        return newMode;
      });
    };

    if (!document.startViewTransition) switchMode();
    document.startViewTransition?.(switchMode);
  }, []);

  return { darkLightMode, toggleDarkLightMode };
};
