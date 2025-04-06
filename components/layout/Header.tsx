"use client"

import React, { useState } from "react"
import { SignInModal } from "@/components/modals/SignInModal"

export default function Header({ onShowSignUp }: { onShowSignUp: () => void }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-30 bg-transparent px-6 py-4 flex justify-between items-center text-white">
        <h2 className="text-xl font-bold">VirtualOffice</h2>
        <nav className="space-x-8 flex-1 flex justify-center">
          <a href="#features" className="hover:text-orange-400 transition">Home</a>
          <a href="#features" className="hover:text-orange-400 transition">Features</a>
          <a href="#pricing" className="hover:text-orange-400 transition">About Us</a>
          <a href="#contact" className="hover:text-orange-400 transition">Contact</a>
        </nav>
        <button
          onClick={() => setShowModal(true)}
          className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition absolute top-4 right-6"
        >
          Sign In
        </button>
      </header>

      {/* Reusable SignInModal */}
      <SignInModal isOpen={showModal} onClose={() => setShowModal(false)} onShowSignUp={onShowSignUp} />
    </>
  )
}
