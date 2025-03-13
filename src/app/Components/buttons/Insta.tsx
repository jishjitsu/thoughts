"use client";

import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

export default function InstagramButton() {
  const instagramURL = "https://www.instagram.com/jishhjitsu"; // Replace with your IG profile

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => window.open(instagramURL, "_blank")} // Opens IG in a new tab
    >
      <Instagram className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Open Instagram</span> {/* Accessibility support */}
    </Button>
  );
}
