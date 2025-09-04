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
                <Icons.github className="size-8" />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>GitHub</p>
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
              <Icons.resume className="size-8" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Resume</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=aryan.shelke.2003@gmail.com">
              <Button size="icon" className={BUTTON_STYLE}>
                <Icons.email className="size-8" />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Email</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
