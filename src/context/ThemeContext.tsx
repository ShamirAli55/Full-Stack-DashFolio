"use client";

import { createContext, useState, ReactNode } from "react";

type ThemeContextType = {
  mode: "dark" | "light";
  themetoggle: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  mode: "dark",
  themetoggle: () => {},
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<"dark" | "light">("dark");

  const themetoggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, themetoggle }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
