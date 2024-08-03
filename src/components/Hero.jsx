import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gray-800 text-white">
      <img src="/placeholder.svg" alt="Business person" className="w-full h-[600px] object-cover opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-light mb-2">Welcome to Made</h2>
          <h1 className="text-6xl font-bold mb-4">We Do Business All Of Time</h1>
          <p className="text-xl mb-8">- We Create a Concept into The Market -</p>
          <div className="space-x-4">
            <button className="bg-emerald-500 text-white px-6 py-3 rounded">Buy Now</button>
            <button className="border border-white text-white px-6 py-3 rounded">Take a Tour</button>
          </div>
        </div>
      </div>
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <ChevronLeft size={40} />
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <ChevronRight size={40} />
      </button>
    </div>
  );
};

export default Hero;
