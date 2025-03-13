"use client";
import Cards from './Components/Cards';
import { ThemeToggle } from './Components/buttons/ThemeToggle';
import FeaturedPost from './Components/Featured';
import Title from './Components/Title';
import Instagram from './Components/buttons/Insta';
import Twitter from './Components/buttons/Twitter';
import Random from './Components/buttons/Random';
import {Footer} from './Components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 md:px-8">
      <div className="fixed top-6 left-4 z-50">
        <Instagram/>
      </div>
      <div className="fixed top-6 left-16 z-50">
        <Twitter/>
      </div>
      <div className="fixed top-6 right-16 z-50">
        <Random/>
      </div>
      <div className="fixed top-6 right-4 z-50">
        <ThemeToggle />
      </div>
      <div className='mt-6 text-3xl md:text-xl text-center'>
      <Title/>
      </div>
      
      <div className="pt-8 mb-12">
        <FeaturedPost />
      </div>
      <div className="mt-12">
        <Cards />
      </div>
      <Footer/>
    </div>
  );
}
