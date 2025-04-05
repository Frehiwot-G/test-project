"use client"
import { useState } from "react"
import Header from "@/components/layout/Header"
import { CarouselPlugin } from "@/components/landing/CarouselPlugin"
import { Toaster } from "react-hot-toast"
import { ParentModal } from "@/components/modals/ParentModal"

export default function Home() {
  const [modal, setModal] = useState<"signin" | "signup" | null>(null)

  const handleShowSignUp = () => {
    setModal("signup") // Switch to SignUp Modal
  }

  const handleBackToSignIn = () => {
    setModal("signin") // Switch to SignIn Modal
  }

  const handleCloseModal = () => {
    setModal(null) // Close the Modal
  }

  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      <Toaster position="top-right" />

      {/* Header with onShowSignUp */}
      <Header onShowSignUp={handleShowSignUp} />

      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <CarouselPlugin />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4 mt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome To Your <span className="text-orange-500">Virtual Office</span>
        </h1>
      </div>

      {/* CTA Buttons */}
      <div className="absolute bottom-16 left-0 right-0 z-20 flex justify-center gap-4 px-4">
        <button className="bg-orange-500 text-white px-6 py-3 rounded shadow hover:bg-orange-600 transition">
          Instant Demo
        </button>
        <button
          className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black transition"
          onClick={() => setModal("signup")} // Open SignUp Modal
        >
          Setup Your Company
        </button>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-4 text-xs text-white/70 z-20">
        Terms & Conditions
      </div>
      <div className="absolute bottom-4 right-4 text-xs text-white/70 z-20">
        Privacy Policy
      </div>

      {/* Parent Modal to manage SignIn and SignUp modals */}
      <ParentModal
        modal={modal}
        onClose={handleCloseModal}
        onShowSignUp={handleShowSignUp}
        onBackToSignIn={handleBackToSignIn}
      />
    </main>
  )
}
