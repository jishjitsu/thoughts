"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react"; // Import arrow icon
import { Button } from "@/components/ui/button"; // Use the same button styling

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => router.back()} // Go back to the previous page
    >
      <ArrowLeft className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Go back</span> {/* Screen reader accessibility */}
    </Button>
  );
}
