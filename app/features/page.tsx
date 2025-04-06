"use client";

import React, { useState } from "react";
import PricingPlans from "@/components/feature/PricingPlans";
import Header from "@/components/layout/Header";
import { ParentModal } from "@/components/modals/ParentModal";
import { Toaster } from "react-hot-toast";

export default function FeaturesPage() {
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
      <PricingPlans />

      {/* Parent Modal with proper switching */}
      <ParentModal
        modal={modal}
        onClose={handleCloseModal}
        onShowSignUp={handleShowSignUp}
        onBackToSignIn={handleBackToSignIn}
      />
    </>
  );
}
