"use client";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/Theme/theme-provider";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="mt-5 w-4/5 md:w-full" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const { setTheme } = useTheme();
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="flex flex-row justify-evenly w-full">
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <a href="/home">Chat with AI</a>
              <a href="/plot">Function Plotter</a>
              <a href="/docs">Docs</a>
              <a href="/worldchat">World Chat</a>
            </div>
          </MenuItem>
          <a href="/docs" className="text-sm">Docs</a>

          <MenuItem setActive={setActive} active={active} item="Theme">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink onClick={() => setTheme("light")}>Light</HoveredLink>
              <HoveredLink onClick={() => setTheme("dark")}>Dark</HoveredLink>
              <HoveredLink onClick={() => setTheme("system")}>
                System
              </HoveredLink>
            </div>
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}
