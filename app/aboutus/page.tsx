
"use client"; // Ensure client-side rendering

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import { ParentModal } from "@/components/modals/ParentModal";
import { Toaster } from "react-hot-toast";

export default function AboutUsPage() {
  const [modal, setModal] = useState<"signin" | "signup" | null>(null);

  const handleShowSignUp = () => {
    setModal("signup");
  };

  const handleBackToSignIn = () => {
    setModal("signin");
  };

  const handleCloseModal = () => {
    setModal(null);
  };

  return (
    <>
      <Toaster position="top-right" />
      <Header onShowSignUp={handleShowSignUp} />

      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/image 1.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-6xl mx-auto pt-24 pb-12 px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-orange-500">About</span> Us
          </h1>
          <p className="text-lg mb-8">
            We are committed to providing the best services and experiences.
            Our goal is to build solutions that enhance your business and
            simplify your life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-white/80">
              Our mission is to continuously innovate and deliver top-tier, tailored solutions that empower our clients to thrive in an ever-evolving digital landscape. 
              We are driven by a deep commitment to excellence, 
              collaboration, and measurable results. Through every project and partnership, 
              we strive to not only meet expectations but to exceed them — ensuring that our clients are equipped with the tools, 
              strategies, and support they need to achieve sustainable success.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
              <p className="text-white/80">
              We envision a connected world where technology bridges gaps, enhances everyday experiences, and unlocks limitless potential. 
              Our vision is to be at the forefront of innovation — leading with purpose, shaping the future with creativity, and crafting solutions that are as transformative as they are reliable. 
              We aim to inspire progress and create meaningful impact by making advanced technology accessible, intuitive, and human-centered.
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <button
              onClick={handleShowSignUp}
              className="bg-orange-500 text-white py-3 px-8 rounded-full hover:bg-orange-600 transition"
            >
              Join Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Modal Logic */}
      <ParentModal
        modal={modal}
        onClose={handleCloseModal}
        onShowSignUp={handleShowSignUp}
        onBackToSignIn={handleBackToSignIn}
      />
    </>
  );
}

