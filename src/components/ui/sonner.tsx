"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type SonnerTheme = "light" | "dark" | "system";

const Toaster = (props: any) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as SonnerTheme}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
