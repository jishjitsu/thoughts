"use client";
import Cards from './Components/Cards'
import {ThemeToggle} from './Components/ThemeToggle'

export default function Home() {
  return (
    <div >
      <header className="text-center text-2xl font-bold mb-6">Thoughts - jishjitsu</header>
      <ThemeToggle/>
      <Cards/>
    </div>
  );
}
