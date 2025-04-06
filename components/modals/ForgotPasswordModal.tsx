"use client"

import React, { useState } from "react"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation" 

interface ForgotPasswordModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({ isOpen, onClose }) => {
  const [forgotEmail, setForgotEmail] = useState("")
  const [forgotErrors, setForgotErrors] = useState<{ email?: string }>({})
  const router = useRouter() // Initialize useRouter

  if (!isOpen) return null

  const handleForgotPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newForgotErrors: typeof forgotErrors = {}

    if (!forgotEmail.trim()) newForgotErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(forgotEmail)) newForgotErrors.email = "Please enter a valid email"

    setForgotErrors(newForgotErrors)

    if (Object.keys(newForgotErrors).length === 0) {
      // Mock sending a password reset email
      toast.success("Check your email, we have sent you a link to reset your password.")
      
      onClose() // Close the forgot password modal

      // Redirect to the homepage
      router.push("/") // Navigate to the homepage after successful submission
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
      <div className="bg-white/20 backdrop-blur-md text-white rounded-2xl shadow-2xl w-full max-w-sm p-8 relative">
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-white text-lg"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center">Forgot Password</h2>
        <form className="space-y-4" onSubmit={handleForgotPasswordSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className={`w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                forgotErrors.email ? "border-red-500 ring-red-400" : "focus:ring-orange-500"
              }`}
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
            />
            {forgotErrors.email && <p className="text-red-500 text-sm mt-1">{forgotErrors.email}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  )
}

