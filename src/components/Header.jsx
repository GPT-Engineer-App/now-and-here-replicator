import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/placeholder.svg" alt="Here and Now AI Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">Here and Now AI</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Login</a>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign Up</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <a href="#features" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Features</a>
          <a href="#pricing" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Pricing</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Login</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Sign Up</a>
        </div>
      )}
    </header>
  );
};

export default Header;
