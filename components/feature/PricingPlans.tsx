"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/modals/PaymentModal";

export default function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(1);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const plans = [
    {
      title: "Standard",
      price: "$99",
      cycle: "/Per Month",
      features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
      button: "Choose Plan",
    },
    {
      title: "Premium",
      price: "$299",
      cycle: "/Per Month",
      features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
      button: "Choose Plan",
    },
    {
      title: "Enterprise",
      price: "Custom Plan",
      cycle: "",
      features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
      button: "Contact Us",
    },
  ];

  return (
    <section
      id="features"
      className="relative min-h-screen bg-cover bg-center text-white px-6 py-20"
      style={{ backgroundImage: `url('/images/bg6.jpeg')` }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Flexible <span className="text-orange-500">Plans</span>
        </h2>
        <p className="mt-2 mb-8 text-lg">Choose a plan that work best for you & your team</p>

        <div className="inline-flex mb-12 rounded-full bg-white/10 p-1">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-2 rounded-full transition text-sm font-medium ${
              billingCycle === "monthly" ? "bg-orange-500 text-white" : "text-white hover:bg-white/20"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-6 py-2 rounded-full transition text-sm font-medium ${
              billingCycle === "yearly" ? "bg-blue-800 text-white" : "text-white hover:bg-white/20"
            }`}
          >
            Yearly <span className="text-sm opacity-70">(Save 60%)</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              onClick={() => setSelectedPlanIndex(index)}
              className={`cursor-pointer rounded-lg px-6 py-10 bg-white/10 backdrop-blur-md shadow-xl flex flex-col justify-between border-2 transition-transform duration-200 ${
                selectedPlanIndex === index ? "border-orange-500 scale-105" : "border-transparent"
              }`}
            >
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white/90">
                  {plan.title} {index === 1 && <span className="text-xs text-orange-400">(Recommended)</span>}
                </h3>
                <div className="text-4xl font-bold mb-2">{plan.price}</div>
                <div className="text-sm mb-6 text-white/70">{plan.cycle}</div>
                <ul className="space-y-2 text-sm text-white/80">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (plan.button === "Contact Us") {
                    window.location.href = "/contact";
                  } else {
                    setShowPaymentForm(true);
                  }
                }}
                className={`mt-8 py-3 rounded-full font-medium text-sm transition ${
                  index === 1
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-white/20 hover:bg-white/30 text-white"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>

        <PaymentModal isOpen={showPaymentForm} onClose={() => setShowPaymentForm(false)} />

        <div className="mt-12 flex justify-between text-xs text-white/60">
          <div>Term & Conditions</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </section>
  );
}
