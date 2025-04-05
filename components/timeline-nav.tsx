"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";

interface TimelineNavProps {
  sections: {
    id: string;
    label: string;
  }[];
  delay?: number;
}

export function TimelineNav({ sections, delay = 0.04 }: TimelineNavProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Check for transitions and delay animation
  useEffect(() => {
    // Check if we're transitioning from another page
    const isTransitioning = document.body.hasAttribute("data-transitioning");

    if (isTransitioning) {
      // Wait for the transition to complete before animating
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 1000); // Delay until after the transition completes

      return () => clearTimeout(timer);
    } else {
      // If not transitioning (direct page load), animate immediately
      setShouldAnimate(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust this value to control the amount of space above the section
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Don't render anything until we're ready to animate
  if (!shouldAnimate) {
    return (
      <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:block opacity-0">
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-px bg-border" />
          <div className="space-y-8">
            {sections.map((section) => (
              <div
                key={section.id}
                className="group relative flex items-center"
              >
                <div className="h-3 w-3 rounded-full border-2 border-background bg-foreground" />
                <span className="ml-4 text-xs font-medium text-muted-foreground">
                  {section.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:block">
      <BlurFade delay={delay}>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-px bg-border" />
          <div className="space-y-8">
            {sections.map((section, index) => (
              <BlurFade key={section.id} delay={delay * 2 + index * 0.05}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="group relative flex items-center"
                >
                  <div
                    className={cn(
                      "h-3 w-3 rounded-full border-2 border-background bg-foreground transition-all",
                      activeSection === section.id
                        ? "scale-125 bg-primary"
                        : "group-hover:scale-110"
                    )}
                  />
                  <span
                    className={cn(
                      "ml-4 text-xs font-medium transition-colors",
                      activeSection === section.id
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-foreground"
                    )}
                  >
                    {section.label}
                  </span>
                </button>
              </BlurFade>
            ))}
          </div>
        </div>
      </BlurFade>
    </div>
  );
}
