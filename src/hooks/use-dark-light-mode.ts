import { useCallback, useLayoutEffect, useState } from "react";
import { z } from "zod";

export const MODE = { LIGHT: "light", DARK: "dark" } as const;
const DarkLightModeSchema = z.enum([MODE.LIGHT, MODE.DARK]);
export type DarkLightMode = z.infer<typeof DarkLightModeSchema>;

/**
 * Sets the dark/light mode for the application.
 * @param mode - The mode to set (either "light" or "dark").
 */
const setMode = (mode: DarkLightMode) => {
  const root = window.document.documentElement;

  if (mode === MODE.LIGHT) {
    root.classList.add(MODE.DARK);
    localStorage.setItem("darkLightMode", JSON.stringify(MODE.DARK));
  } else {
    root.classList.remove(MODE.DARK);
    localStorage.setItem("darkLightMode", JSON.stringify(MODE.LIGHT));
  }
};

/**
 * Custom hook for managing dark/light mode.
 * Retrieves the mode from local storage, if available, and initializes it.
 * Provides a function to toggle between dark and light mode.
 *
 * @returns An object containing the current dark/light mode and a function to toggle the mode.
 */
export const useDarkLightMode = () => {
  const storageValue = localStorage.getItem("darkLightMode");
  const storedMode = storageValue
    ? DarkLightModeSchema.parse(JSON.parse(storageValue))
    : undefined;
  const [darkLightMode, setDarkLightMode] = useState<DarkLightMode>(
    storedMode ?? MODE.LIGHT,
  );

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
    const targetMode = darkLightMode === MODE.LIGHT ? MODE.DARK : MODE.LIGHT;
    setMode(targetMode);
  }, [darkLightMode]);

  return { darkLightMode, toggleDarkLightMode };
};
