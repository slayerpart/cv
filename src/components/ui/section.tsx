import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Section = forwardRef<HTMLElement, BadgeProps>(function Section(
  { className, ...props },
  ref,
) {
  return (
    <section
      ref={ref}
      className={cn("flex min-h-0 flex-col gap-y-3", className)}
      {...props}
    />
  );
});

Section.displayName = "Section";
