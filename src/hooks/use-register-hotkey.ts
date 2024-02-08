import { useEffect } from "react";

type RegisterKey = {
  condition: (e: KeyboardEvent) => boolean;
  callback: (e: KeyboardEvent) => void;
};

type RegisterHotkeyProps = [RegisterKey, ...RegisterKey[]];

export const useRegisterHotkey = (props: RegisterHotkeyProps) => {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      props.forEach(({ condition, callback }) => {
        if (condition(e)) {
          e.preventDefault();
          callback(e);
        }
      });
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [props]);
};
