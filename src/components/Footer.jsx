const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Here and Now AI</h4>
            <p className="text-sm">Experience the future of AI, today.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm">
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Home</a></li>
              <li className="mb-2"><a href="#features" className="hover:text-gray-300">Features</a></li>
              <li className="mb-2"><a href="#pricing" className="hover:text-gray-300">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="text-sm">
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm mb-2">Email: info@hereandnowai.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 Here and Now AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
