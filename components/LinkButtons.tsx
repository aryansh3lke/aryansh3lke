"use client";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function LinkButtons() {
  const BUTTON_STYLE =
    "rounded-full transition duration-250 ease-in-out transform hover:scale-110";

  return (
    <TooltipProvider delayDuration={100}>
      <div className="flex flex-row justify-center items-center gap-8">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="https://github.com/aryansh3lke">
              <Button size="icon" className={BUTTON_STYLE}>
                <Icons.github className="size-4" />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>GitHub</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="https://linkedin.com/in/aryanshelke">
              <Button size="icon" className={BUTTON_STYLE}>
                <Icons.linkedin className="size-4" />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>LinkedIn</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className={BUTTON_STYLE}
              onClick={() =>
                window.open("/Resume.pdf", "_blank", "noopener,noreferrer")
              }
            >
              <Icons.resume className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Resume</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="https://devpost.com/aryan-shelke-2003">
              <Button size="icon" className={BUTTON_STYLE}>
                <Icons.devpost className="size-6" />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Devpost</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="https://x.com/user59500283">
              <Button size="icon" className={BUTTON_STYLE}>
                <Icons.x className="size-6" />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>X</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
