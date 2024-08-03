import { Phone, Mail, Facebook, Twitter, Linkedin, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2 text-sm text-gray-600">
          <div className="flex space-x-4">
            <span className="flex items-center"><Phone size={16} className="mr-1" /> Call us: 1234 5678 90</span>
            <span className="flex items-center"><Mail size={16} className="mr-1" /> Contact us: your@email.com</span>
          </div>
          <div className="flex space-x-2">
            <Facebook size={16} />
            <Twitter size={16} />
            <Linkedin size={16} />
          </div>
        </div>
        <nav className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-emerald-500">MADE</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Service</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Portfolio</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
          <Search size={20} className="text-gray-600" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
