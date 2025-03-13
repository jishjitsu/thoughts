"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Dice5 } from "lucide-react";

export default function RandomPostButton() {
  const router = useRouter();

  // List of random post slugs or URLs
  const posts = [
    "/posts/post1",
    "/posts/post2",
    "/posts/post3",
    "/posts/post4",
    "/posts/post5"
  ];

  const goToRandomPost = () => {
    const randomIndex = Math.floor(Math.random() * posts.length);
    router.push(posts[randomIndex]); // Navigate to a random post
  };

  return (
    <Button variant="outline" size="icon" onClick={goToRandomPost}>
      <Dice5 className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Go to a random post</span> {/* Accessibility support */}
    </Button>
  );
}
