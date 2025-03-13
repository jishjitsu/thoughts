import Image from "next/image";
import Link from "next/link";

const featuredPost = {
  slug: "featured-post",
  title: "The Most Important Post",
  excerpt: "This is a highlighted post that provides great insights and is given more emphasis.",
  previewImage: "/next.svg", // Ensure this image exists in the public folder
};

export default function FeaturedPost() {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-card shadow-lg rounded-xl border border-border overflow-hidden">
      {/* Featured Post Image */}
      <div className="w-full aspect-[16/7] relative mb-4">
        <Image 
          src={featuredPost.previewImage} 
          alt={featuredPost.title} 
          fill 
          className="rounded-md object-cover"
        />
      </div>

      {/* Featured Post Content */}
      <div className="p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{featuredPost.title}</h2>
        <p className="text-muted-foreground">{featuredPost.excerpt}</p>
        
        {/* Read More Link */}
        <Link href="/featured" className="text-primary hover:underline mt-2 block">
          Read More
        </Link>
      </div>
    </div>
  );
}
