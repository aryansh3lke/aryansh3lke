import Navbar from "@/components/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TooltipProvider delayDuration={0}>
      {children}
      <Navbar />
    </TooltipProvider>
  );
}
