"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();
  const activeTheme = theme === "system" ? resolvedTheme : theme;

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      size="icon"
      className="rounded-full hover:rotate-90 transition duration-250 ease-in-out transform"
      onClick={() => setTheme(activeTheme === "dark" ? "light" : "dark")}
    >
      {activeTheme === "dark" ? (
        <SunIcon className="h-[1.2rem] w-[1.2rem] light:text-neutral-800 dark:text-white" />
      ) : (
        <MoonIcon className=" h-[1.2rem] w-[1.2rem] light:text-neutral-800  dark:text-white" />
      )}
    </Button>
  );
};

export { ThemeSwitcher };
