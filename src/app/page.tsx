"use client";
import Cards from './Components/Cards'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <header className="text-center text-2xl font-bold mb-6">Thoughts - jishjitsu</header>
      <Cards/>
    </div>
  );
}
