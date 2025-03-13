"use client";

import { ThemeToggle } from "@/app/Components/buttons/ThemeToggle";
import Image from "next/image";
import Back from "@/app/Components/buttons/back"
import { AspectRatio } from "@/components/ui/aspect-ratio";


// Featured post data
const featuredPost = {
  title: "The Most Important Post",
  content: "This is the full content of the featured post...",
  imageTop: "/next.svg",
  imageBottom: "/vercel.svg",
};

export default function FeaturedPage() {
  return (
      <div className='overflow-hidden'>
      <div className="max-w-3xl">
        <div className="w-[1520px] mx-auto">
        <div className="fixed top-4 left-4 z-50">
             <Back/>
          </div>
            <AspectRatio ratio={4 / 1}>
              <Image 
                src={featuredPost.imageTop} 
                alt={`${featuredPost.title} top image`} 
                fill 
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
          <div className="fixed top-4 right-4 z-50">
             <ThemeToggle />
          </div>
          </div>
        
        {/* Card Layout */}
        
        <div className="max-w-3xl mx-auto p-6 bg-background shadow-lg rounded-lg overflow-hidden">
          {/* Text Content */}
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4 text-center">{featuredPost.title}</h1>
            <p className="text-foreground">{featuredPost.content}</p>
          </div>
  
          {/* Bottom Image with Aspect Ratio */}
          <div className="w-[300px] mx-auto">
            <AspectRatio ratio={1 / 1}>
              <Image 
                src={featuredPost.imageBottom} 
                alt={`${featuredPost.title} bottom image`} 
                fill 
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
      </div>
      </div>
    );
  }