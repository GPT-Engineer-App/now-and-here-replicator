import { Zap, Shield, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    { icon: <Zap className="h-12 w-12 text-blue-500" />, title: "Lightning Fast", description: "Our AI processes data at incredible speeds, giving you real-time insights." },
    { icon: <Shield className="h-12 w-12 text-blue-500" />, title: "Secure & Private", description: "Your data is protected with state-of-the-art encryption and privacy measures." },
    { icon: <Smartphone className="h-12 w-12 text-blue-500" />, title: "Mobile Friendly", description: "Access our AI tools from any device, anywhere, anytime." },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Here and Now AI?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
