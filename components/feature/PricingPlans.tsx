// // // // "use client"

// // // // import React, { useState } from "react";

// // // // export default function PricingPlans() {
// // // //   const [billingCycle, setBillingCycle] = useState("monthly");

// // // //   const plans = [
// // // //     {
// // // //       title: "Standard",
// // // //       price: "$99",
// // // //       cycle: "/Per Month",
// // // //       features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
// // // //       button: "Choose Plan",
// // // //     },
// // // //     {
// // // //       title: "Premium",
// // // //       price: "$299",
// // // //       cycle: "/Per Month",
// // // //       features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
// // // //       button: "Choose Plan",
// // // //       recommended: true,
// // // //     },
// // // //     {
// // // //       title: "Enterprise",
// // // //       price: "Custom Plan",
// // // //       cycle: "",
// // // //       features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
// // // //       button: "Contact Us",
// // // //     },
// // // //   ];

// // // //   return (
// // // //     // <section className="relative min-h-screen bg-cover bg-center text-white px-6 py-20" style={{ backgroundImage: `url('/your-background.jpg')` }}>
// // // //     <section
// // // //         id="features"
// // // //         className="relative min-h-screen bg-cover bg-center text-white px-6 py-20"
// // // //         style={{ backgroundImage: `url('/images/bg6.jpeg')` }}
// // // //     >
// // // //       <div className="absolute inset-0 bg-black/70 z-0" />
// // // //       <div className="relative z-10 max-w-6xl mx-auto text-center">
// // // //         <h2 className="text-4xl md:text-5xl font-bold">
// // // //           Flexible <span className="text-orange-500">Plans</span>
// // // //         </h2>
// // // //         <p className="mt-2 mb-8 text-lg">Choose a plan that work best for you & your team</p>

// // // //         {/* Billing Toggle */}
// // // //         <div className="inline-flex mb-12 rounded-full bg-white/10 p-1">
// // // //           <button
// // // //             onClick={() => setBillingCycle("monthly")}
// // // //             className={`px-6 py-2 rounded-full transition text-sm font-medium ${
// // // //               billingCycle === "monthly"
// // // //                 ? "bg-orange-500 text-white"
// // // //                 : "text-white hover:bg-white/20"
// // // //             }`}
// // // //           >
// // // //             Monthly
// // // //           </button>
// // // //           <button
// // // //             onClick={() => setBillingCycle("yearly")}
// // // //             className={`px-6 py-2 rounded-full transition text-sm font-medium ${
// // // //               billingCycle === "yearly"
// // // //                 ? "bg-blue-800 text-white"
// // // //                 : "text-white hover:bg-white/20"
// // // //             }`}
// // // //           >
// // // //             Yearly <span className="text-sm opacity-70">(Save 60%)</span>
// // // //           </button>
// // // //         </div>

// // // //         {/* Plans */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // //           {plans.map((plan, index) => (
// // // //             <div
// // // //               key={index}
// // // //               className={`rounded-lg px-6 py-10 bg-white/10 backdrop-blur-md shadow-xl flex flex-col justify-between border-2 ${
// // // //                 plan.recommended ? "border-orange-500 scale-105" : "border-transparent"
// // // //               }`}
// // // //             >
// // // //               <div>
// // // //                 <h3 className="text-xl font-semibold mb-4 text-white/90">{plan.title} {plan.recommended && <span className="text-xs text-orange-400">(Recommended)</span>}</h3>
// // // //                 <div className="text-4xl font-bold mb-2">{plan.price}</div>
// // // //                 <div className="text-sm mb-6 text-white/70">{plan.cycle}</div>
// // // //                 <ul className="space-y-2 text-sm text-white/80">
// // // //                   {plan.features.map((feature, idx) => (
// // // //                     <li key={idx}>• {feature}</li>
// // // //                   ))}
// // // //                 </ul>
// // // //               </div>
// // // //               <button
// // // //                 className={`mt-8 py-3 rounded-full font-medium text-sm transition ${
// // // //                   plan.recommended
// // // //                     ? "bg-orange-500 text-white hover:bg-orange-600"
// // // //                     : "bg-white/20 hover:bg-white/30 text-white"
// // // //                 }`}
// // // //               >
// // // //                 {plan.button}
// // // //               </button>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* Footer */}
// // // //         <div className="mt-12 flex justify-between text-xs text-white/60">
// // // //           <div>Term & Conditions</div>
// // // //           <div>Privacy Policy</div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }





// // // "use client"

// // // import React, { useState } from "react";
// // // import { useRouter } from "next/navigation";

// // // export default function PricingPlans() {
// // //   const [billingCycle, setBillingCycle] = useState("monthly");
// // //   const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
// // //   const [showPopup, setShowPopup] = useState(false);
// // //   const router = useRouter();

// // //   const plans = [
// // //     {
// // //       title: "Standard",
// // //       price: "$99",
// // //       cycle: "/Per Month",
// // //       features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
// // //       button: "Choose Plan",
// // //     },
// // //     {
// // //       title: "Premium",
// // //       price: "$299",
// // //       cycle: "/Per Month",
// // //       features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
// // //       button: "Choose Plan",
// // //       recommended: true,
// // //     },
// // //     {
// // //       title: "Enterprise",
// // //       price: "Custom Plan",
// // //       cycle: "",
// // //       features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
// // //       button: "Contact Us",
// // //     },
// // //   ];

// // //   const handleChoosePlan = (plan: string) => {
// // //     setSelectedPlan(plan);
// // //     setShowPopup(true);
// // //   };

// // //   const handleContactClick = () => {
// // //     router.push("/contact");
// // //   };

// // //   return (
// // //     <section
// // //       id="features"
// // //       className="relative min-h-screen bg-cover bg-center text-white px-6 py-20"
// // //       style={{ backgroundImage: `url('/images/bg6.jpeg')` }}
// // //     >
// // //       <div className="absolute inset-0 bg-black/70 z-0" />
// // //       <div className="relative z-10 max-w-6xl mx-auto text-center">
// // //         <h2 className="text-4xl md:text-5xl font-bold">
// // //           Flexible <span className="text-orange-500">Plans</span>
// // //         </h2>
// // //         <p className="mt-2 mb-8 text-lg">Choose a plan that work best for you & your team</p>

// // //         <div className="inline-flex mb-12 rounded-full bg-white/10 p-1">
// // //           <button
// // //             onClick={() => setBillingCycle("monthly")}
// // //             className={`px-6 py-2 rounded-full transition text-sm font-medium ${
// // //               billingCycle === "monthly"
// // //                 ? "bg-orange-500 text-white"
// // //                 : "text-white hover:bg-white/20"
// // //             }`}
// // //           >
// // //             Monthly
// // //           </button>
// // //           <button
// // //             onClick={() => setBillingCycle("yearly")}
// // //             className={`px-6 py-2 rounded-full transition text-sm font-medium ${
// // //               billingCycle === "yearly"
// // //                 ? "bg-blue-800 text-white"
// // //                 : "text-white hover:bg-white/20"
// // //             }`}
// // //           >
// // //             Yearly <span className="text-sm opacity-70">(Save 60%)</span>
// // //           </button>
// // //         </div>

// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //           {plans.map((plan, index) => (
// // //             <div
// // //               key={index}
// // //               onClick={() => !plan.button.includes("Contact") && setSelectedPlan(plan.title)}
// // //               className={`rounded-lg px-6 py-10 bg-white/10 backdrop-blur-md shadow-xl flex flex-col justify-between border-2 transition duration-300 cursor-pointer ${
// // //                 selectedPlan === plan.title ? "border-orange-500" : plan.recommended ? "border-orange-500 scale-105" : "border-transparent"
// // //               }`}
// // //             >
// // //               <div>
// // //                 <h3 className="text-xl font-semibold mb-4 text-white/90">
// // //                   {plan.title} {plan.recommended && <span className="text-xs text-orange-400">(Recommended)</span>}
// // //                 </h3>
// // //                 <div className="text-4xl font-bold mb-2">{plan.price}</div>
// // //                 <div className="text-sm mb-6 text-white/70">{plan.cycle}</div>
// // //                 <ul className="space-y-2 text-sm text-white/80">
// // //                   {plan.features.map((feature, idx) => (
// // //                     <li key={idx}>• {feature}</li>
// // //                   ))}
// // //                 </ul>
// // //               </div>
// // //               <button
// // //                 onClick={() =>
// // //                   plan.button === "Contact Us"
// // //                     ? handleContactClick()
// // //                     : handleChoosePlan(plan.title)
// // //                 }
// // //                 className={`mt-8 py-3 rounded-full font-medium text-sm transition ${
// // //                   plan.recommended
// // //                     ? "bg-orange-500 text-white hover:bg-orange-600"
// // //                     : "bg-white/20 hover:bg-white/30 text-white"
// // //                 }`}
// // //               >
// // //                 {plan.button}
// // //               </button>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         <div className="mt-12 flex justify-between text-xs text-white/60">
// // //           <div>Term & Conditions</div>
// // //           <div>Privacy Policy</div>
// // //         </div>
// // //       </div>

// // //       {showPopup && (
// // //         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
// // //           <div className="bg-white text-black rounded-xl shadow-lg p-6 max-w-sm text-center">
// // //             <h3 className="text-2xl font-bold mb-4">Thank you!</h3>
// // //             <p className="mb-6">You selected the <span className="font-semibold text-orange-600">{selectedPlan}</span> plan.</p>
// // //             <button
// // //               onClick={() => setShowPopup(false)}
// // //               className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
// // //             >
// // //               Close
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </section>
// // //   );
// // // }



// // "use client"

// // import React, { useState } from "react";
// // import { useRouter } from "next/navigation";

// // export default function PricingPlans() {
// //   const [billingCycle, setBillingCycle] = useState("monthly");
// //   const [selectedPlan, setSelectedPlan] = useState("Premium");
// //   const [showPopup, setShowPopup] = useState(false);
// //   const [popupContent, setPopupContent] = useState("");

// //   const router = useRouter();

// //   const plans = [
// //     {
// //       title: "Standard",
// //       price: "$99",
// //       cycle: "/Per Month",
// //       features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
// //       button: "Choose Plan",
// //     },
// //     {
// //       title: "Premium",
// //       price: "$299",
// //       cycle: "/Per Month",
// //       features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
// //       button: "Choose Plan",
// //       recommended: true,
// //     },
// //     {
// //       title: "Enterprise",
// //       price: "Custom Plan",
// //       cycle: "",
// //       features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
// //       button: "Contact Us",
// //     },
// //   ];

// //   const handleButtonClick = (plan: string, isContact: boolean) => {
// //     setSelectedPlan(plan);
// //     if (isContact) {
// //       router.push("/contact");
// //     } else {
// //       setPopupContent(`You selected the ${plan} plan.`);
// //       setShowPopup(true);
// //     }
// //   };

// //   return (
// //     <section
// //       id="features"
// //       className="relative min-h-screen bg-cover bg-center text-white px-6 py-20"
// //       style={{ backgroundImage: `url('/images/bg6.jpeg')` }}
// //     >
// //       <div className="absolute inset-0 bg-black/70 z-0" />
// //       <div className="relative z-10 max-w-6xl mx-auto text-center">
// //         <h2 className="text-4xl md:text-5xl font-bold">
// //           Flexible <span className="text-orange-500">Plans</span>
// //         </h2>
// //         <p className="mt-2 mb-8 text-lg">Choose a plan that work best for you & your team</p>

// //         {/* Billing Toggle */}
// //         <div className="inline-flex mb-12 rounded-full bg-white/10 p-1">
// //           <button
// //             onClick={() => setBillingCycle("monthly")}
// //             className={`px-6 py-2 rounded-full transition text-sm font-medium ${
// //               billingCycle === "monthly"
// //                 ? "bg-orange-500 text-white"
// //                 : "text-white hover:bg-white/20"
// //             }`}
// //           >
// //             Monthly
// //           </button>
// //           <button
// //             onClick={() => setBillingCycle("yearly")}
// //             className={`px-6 py-2 rounded-full transition text-sm font-medium ${
// //               billingCycle === "yearly"
// //                 ? "bg-blue-800 text-white"
// //                 : "text-white hover:bg-white/20"
// //             }`}
// //           >
// //             Yearly <span className="text-sm opacity-70">(Save 60%)</span>
// //           </button>
// //         </div>

// //         {/* Plans */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //           {plans.map((plan, index) => (
// //             <div
// //               key={index}
// //               className={`rounded-lg px-6 py-10 bg-white/10 backdrop-blur-md shadow-xl flex flex-col justify-between border-2 transition-transform duration-300 cursor-pointer ${
// //                 selectedPlan === plan.title ? "border-orange-500 scale-105" : "border-transparent"
// //               }`}
// //               onClick={() => setSelectedPlan(plan.title)}
// //             >
// //               <div>
// //                 <h3 className="text-xl font-semibold mb-4 text-white/90">
// //                   {plan.title} {plan.recommended && <span className="text-xs text-orange-400">(Recommended)</span>}
// //                 </h3>
// //                 <div className="text-4xl font-bold mb-2">{plan.price}</div>
// //                 <div className="text-sm mb-6 text-white/70">{plan.cycle}</div>
// //                 <ul className="space-y-2 text-sm text-white/80">
// //                   {plan.features.map((feature, idx) => (
// //                     <li key={idx}>• {feature}</li>
// //                   ))}
// //                 </ul>
// //               </div>
// //               <button
// //                 className={`mt-8 py-3 rounded-full font-medium text-sm transition w-full ${
// //                   plan.recommended
// //                     ? "bg-orange-500 text-white hover:bg-orange-600"
// //                     : "bg-white/20 hover:bg-white/30 text-white"
// //                 }`}
// //                 onClick={() => handleButtonClick(plan.title, plan.button === "Contact Us")}
// //               >
// //                 {plan.button}
// //               </button>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Footer */}
// //         <div className="mt-12 flex justify-between text-xs text-white/60">
// //           <div>Term & Conditions</div>
// //           <div>Privacy Policy</div>
// //         </div>
// //       </div>

// //       {/* Popup */}
// //       {showPopup && (
// //         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70">
// //           <div className="bg-white text-black p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
// //             <h3 className="text-lg font-bold mb-4">Plan Selected</h3>
// //             <p className="mb-6">{popupContent}</p>
// //             <button
// //               className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
// //               onClick={() => setShowPopup(false)}
// //             >
// //               Close
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </section>
// //   );
// // }



// "use client"

// import React, { useState } from "react";
// import { toast } from "react-hot-toast";

// export default function PricingPlans() {
//   const [billingCycle, setBillingCycle] = useState("monthly");
//   const [selectedPlanIndex, setSelectedPlanIndex] = useState(1);
//   const [showPaymentForm, setShowPaymentForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     cardNumber: "",
//     expiry: "",
//     cvv: "",
//   });

//   const plans = [
//     {
//       title: "Standard",
//       price: "$99",
//       cycle: "/Per Month",
//       features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
//       button: "Choose Plan",
//     },
//     {
//       title: "Premium",
//       price: "$299",
//       cycle: "/Per Month",
//       features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
//       button: "Choose Plan",
//     },
//     {
//       title: "Enterprise",
//       price: "Custom Plan",
//       cycle: "",
//       features: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
//       button: "Contact Us",
//     },
//   ];

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const { name, cardNumber, expiry, cvv } = formData;
//     if (!name || !cardNumber || !expiry || !cvv) {
//       toast.error("All fields are required.");
//       return;
//     }
//     setShowPaymentForm(false);
//     toast.success("Payment info submitted successfully!");
//   };

//   return (
//     <section
//       id="features"
//       className="relative min-h-screen bg-cover bg-center text-white px-6 py-20"
//       style={{ backgroundImage: `url('/images/bg6.jpeg')` }}
//     >
//       <div className="absolute inset-0 bg-black/70 z-0" />
//       <div className="relative z-10 max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl md:text-5xl font-bold">
//           Flexible <span className="text-orange-500">Plans</span>
//         </h2>
//         <p className="mt-2 mb-8 text-lg">Choose a plan that work best for you & your team</p>

//         <div className="inline-flex mb-12 rounded-full bg-white/10 p-1">
//           <button
//             onClick={() => setBillingCycle("monthly")}
//             className={`px-6 py-2 rounded-full transition text-sm font-medium ${
//               billingCycle === "monthly" ? "bg-orange-500 text-white" : "text-white hover:bg-white/20"
//             }`}
//           >
//             Monthly
//           </button>
//           <button
//             onClick={() => setBillingCycle("yearly")}
//             className={`px-6 py-2 rounded-full transition text-sm font-medium ${
//               billingCycle === "yearly" ? "bg-blue-800 text-white" : "text-white hover:bg-white/20"
//             }`}
//           >
//             Yearly <span className="text-sm opacity-70">(Save 60%)</span>
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {plans.map((plan, index) => (
//             <div
//               key={index}
//               onClick={() => setSelectedPlanIndex(index)}
//               className={`cursor-pointer rounded-lg px-6 py-10 bg-white/10 backdrop-blur-md shadow-xl flex flex-col justify-between border-2 transition-transform duration-200 ${
//                 selectedPlanIndex === index ? "border-orange-500 scale-105" : "border-transparent"
//               }`}
//             >
//               <div>
//                 <h3 className="text-xl font-semibold mb-4 text-white/90">
//                   {plan.title} {index === 1 && <span className="text-xs text-orange-400">(Recommended)</span>}
//                 </h3>
//                 <div className="text-4xl font-bold mb-2">{plan.price}</div>
//                 <div className="text-sm mb-6 text-white/70">{plan.cycle}</div>
//                 <ul className="space-y-2 text-sm text-white/80">
//                   {plan.features.map((feature, idx) => (
//                     <li key={idx}>• {feature}</li>
//                   ))}
//                 </ul>
//               </div>
//               <button
//                 onClick={() => {
//                   if (plan.button === "Contact Us") {
//                     window.location.href = "/contact";
//                   } else {
//                     setShowPaymentForm(true);
//                   }
//                 }}
//                 className={`mt-8 py-3 rounded-full font-medium text-sm transition ${
//                   index === 1 ? "bg-orange-500 text-white hover:bg-orange-600" : "bg-white/20 hover:bg-white/30 text-white"
//                 }`}
//               >
//                 {plan.button}
//               </button>
//             </div>
//           ))}
//         </div>

//         {showPaymentForm && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
//             <div className="bg-white text-black rounded-lg p-8 w-full max-w-md">
//               <h3 className="text-xl font-bold mb-4">Payment Information</h3>
//               <form onSubmit={handleFormSubmit} className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   className="w-full border border-gray-300 px-4 py-2 rounded"
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Card Number"
//                   value={formData.cardNumber}
//                   onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
//                   className="w-full border border-gray-300 px-4 py-2 rounded"
//                   required
//                 />
//                 <div className="flex gap-4">
//                   <input
//                     type="text"
//                     placeholder="MM/YY"
//                     value={formData.expiry}
//                     onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
//                     className="w-1/2 border border-gray-300 px-4 py-2 rounded"
//                     required
//                   />
//                   <input
//                     type="text"
//                     placeholder="CVV"
//                     value={formData.cvv}
//                     onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
//                     className="w-1/2 border border-gray-300 px-4 py-2 rounded"
//                     required
//                   />
//                 </div>
//                 <div className="flex justify-end gap-4">
//                   <button
//                     type="button"
//                     onClick={() => setShowPaymentForm(false)}
//                     className="text-gray-500 hover:text-gray-800"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}

//         <div className="mt-12 flex justify-between text-xs text-white/60">
//           <div>Term & Conditions</div>
//           <div>Privacy Policy</div>
//         </div>
//       </div>
//     </section>
//   );
// }


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
