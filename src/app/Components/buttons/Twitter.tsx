"use client";

import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";

export default function InstagramButton() {
  const twitterURL = "https://www.x.com/jishjitsu";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => window.open(twitterURL, "_blank")}
    >
      <Twitter className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Open Instagram</span> {/* Accessibility support */}
    </Button>
  );
}
