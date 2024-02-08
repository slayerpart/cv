"use client";

import { MODE, useDarkLightMode } from "../hooks/use-dark-light-mode";
import { DarkLightModeIcon } from "./icons";
import { Button } from "./ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useRegisterHotkey } from "@/hooks/use-register-hotkey";
import { capitalize } from "@/lib/utils";
import { CommandIcon } from "lucide-react";
import React, { useState } from "react";

interface Props {
  links: { url: string; title: string }[];
  certificates: { verification?: { url: string }; abbreviation: string }[];
}

export const CommandMenu = ({ links, certificates }: Props) => {
  const [open, setOpen] = useState(false);
  const { darkLightMode, toggleDarkLightMode } = useDarkLightMode();

  useRegisterHotkey([
    {
      condition: (e: KeyboardEvent) =>
        e.key === "k" && (e.metaKey || e.ctrlKey),
      callback: toggleDarkLightMode,
    },
    {
      condition: (e: KeyboardEvent) =>
        e.key === "j" && (e.metaKey || e.ctrlKey),
      callback: () => setOpen((open) => !open),
    },
  ]);

  return (
    <>
      <p className="fixed bottom-0 left-0 right-0 hidden border-t border-t-muted bg-background p-1 text-center text-sm text-muted-foreground print:hidden xl:flex xl:align-center xl:justify-center gap-2">
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J Menu
        </kbd>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K Theme
        </kbd>
      </p>
      <Button
        onClick={() => setOpen((open) => !open)}
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 flex rounded-full shadow-2xl print:hidden xl:hidden"
      >
        <CommandIcon className="my-6 size-6" />
      </Button>
      <Button
        onClick={toggleDarkLightMode}
        variant="outline"
        size="icon"
        className="fixed bottom-16 right-4 p-2 flex rounded-full shadow-2xl print:hidden "
      >
        <DarkLightModeIcon mode={darkLightMode} />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem onSelect={toggleDarkLightMode}>
              <span>
                {darkLightMode && darkLightMode === MODE.DARK
                  ? capitalize(MODE.LIGHT)
                  : capitalize(MODE.DARK)}{" "}
                mode
              </span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setOpen(false);
                window.print();
              }}
            >
              <span>Print</span>
            </CommandItem>
            {certificates.map(({ verification, abbreviation }) => (
              <CommandItem
                key={abbreviation}
                onSelect={() => {
                  setOpen(false);
                  if (verification) {
                    window.open(verification.url, "_blank");
                  }
                }}
              >
                <span>Verify certificate</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Links">
            {links.map(({ url, title }) => (
              <CommandItem
                key={url}
                onSelect={() => {
                  setOpen(false);
                  window.open(url, "_blank");
                }}
              >
                <span>{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
};
