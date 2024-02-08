"use client";

import { DarkLightMode, MODE } from "@/hooks/use-dark-light-mode";
import { motion } from "framer-motion";

type PropsType = {
  mode: DarkLightMode;
};

export const DarkLightModeIcon = ({ mode }: PropsType) => {
  return (
    <>
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width="100%"
        height="100%"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={
            mode === MODE.LIGHT
              ? {
                  pathLength: 1,
                  opacity: 1,
                }
              : {
                  opacity: 0,
                  pathLength: 0,
                }
          }
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={
            mode === MODE.DARK
              ? {
                  pathLength: 1,
                  opacity: 1,
                }
              : {
                  opacity: 0,
                  pathLength: 0,
                }
          }
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
      <span className="sr-only">
        Toggle {mode === MODE.DARK ? MODE.LIGHT : MODE.DARK} mode
      </span>
    </>
  );
};
