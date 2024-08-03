import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    { name: "Basic", price: "$9", features: ["1 AI model", "100 queries/day", "Email support"] },
    { name: "Pro", price: "$29", features: ["3 AI models", "1000 queries/day", "Priority support", "API access"] },
    { name: "Enterprise", price: "Custom", features: ["Unlimited AI models", "Unlimited queries", "24/7 support", "Dedicated account manager"] },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-lg text-gray-600">/month</span></p>
              <ul className="mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="block text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Choose Plan</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
