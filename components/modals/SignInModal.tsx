"use client"

import React, { useState } from "react"
import { SignUpModal } from "@/components/modals/SignUpModal" 

interface SignInModalProps {
  isOpen: boolean
  onClose: () => void
}

export const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
  const [showSignUpModal, setShowSignUpModal] = useState(false)

  if (!isOpen) return null

  const handleShowSignUp = () => {
    setShowSignUpModal(true) // Show the SignUpModal
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="bg-white text-black rounded-lg p-6 w-full max-w-sm shadow-lg relative">
          <button
            className="absolute top-2 right-3 text-gray-500 hover:text-black text-lg"
            onClick={onClose}
          >
            &times;
          </button>
          <h2 className="text-2xl font-semibold mb-4 text-center">Sign In</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Log In
            </button>
          </form>
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-500">
              Don't have an account?
              <button
                onClick={handleShowSignUp}
                className="text-orange-500 font-medium ml-1 hover:text-orange-600"
              >
                Sign Up
              </button>
            </span>
          </div>
        </div>
      </div>

      {showSignUpModal && <SignUpModal isOpen={showSignUpModal} onClose={() => setShowSignUpModal(false)} />}
    </>
  )
}
