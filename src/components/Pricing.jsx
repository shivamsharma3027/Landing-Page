import React from 'react';

function Pricing() {
  // Pricing plans with detailed features
  const plans = [
    {
      name: "Basic",
      price: "$10/month",
      features: [
        "Shared Hosting",
        "5GB Storage",
        "Basic Security",
        "Community Support"
      ],
    },
    {
      name: "Pro",
      price: "$30/month",
      features: [
        "VPS Hosting",
        "50GB Storage",
        "Advanced Security",
        "24/7 Support",
        "Free Domain"
      ],
    },
    {
      name: "Enterprise",
      price: "$50/month",
      features: [
        "Dedicated Hosting",
        "Unlimited Storage",
        "Premium Security",
        "Priority 24/7 Support",
        "Custom Domain",
        "Daily Backups"
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-100 text-center">
      {/* Pricing Header */}
      <h2 className="text-4xl font-bold text-gray-800 mb-10">Pricing Plans</h2>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col p-8 bg-white border border-gray-300 shadow-lg rounded-lg transition-transform transform hover:scale-105"
          >
            {/* Plan Name */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
            {/* Plan Price */}
            <h4 className="text-3xl font-bold text-blue-600 mb-4">{plan.price}</h4>
            
            {/* Features List (Left-Aligned) */}
            <ul className="text-gray-600 mb-6 space-y-2 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-blue-500">✔</span> {feature}
                </li>
              ))}
            </ul>

            {/* Choose Plan Button */}
            <button className="mt-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
