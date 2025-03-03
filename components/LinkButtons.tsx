"use client";
import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function LinkButtons() {
  const ICON_SIZE = 64;
  const BUTTON_STYLE =
    "rounded-full transition duration-250 ease-in-out transform hover:scale-110";

  return (
    <div className="flex flex-row justify-center items-center gap-8">
      <Link href="https://github.com/aryansh3lke">
        <Button size="icon" className={BUTTON_STYLE}>
          <Github size={ICON_SIZE} />
        </Button>
      </Link>

      <Link href="https://linkedin.com/in/aryanshelke">
        <Button size="icon" className={BUTTON_STYLE}>
          <Linkedin size={ICON_SIZE} />
        </Button>
      </Link>

      <Button
        size="icon"
        className={BUTTON_STYLE}
        onClick={() =>
          window.open("/Resume.pdf", "_blank", "noopener,noreferrer")
        }
      >
        <FileText size={ICON_SIZE} />
      </Button>

      <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=aryan.shelke.2003@gmail.com">
        <Button size="icon" className={BUTTON_STYLE}>
          <Mail size={ICON_SIZE} />
        </Button>
      </Link>
    </div>
  );
}
