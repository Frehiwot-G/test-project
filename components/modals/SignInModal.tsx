"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import { ForgotPasswordModal } from "@/components/modals/ForgotPasswordModal"

interface SignInModalProps {
  isOpen: boolean
  onClose: () => void
  onShowSignUp: () => void
}

export const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose, onShowSignUp }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const router = useRouter()

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: typeof errors = {}

    if (!email.trim()) newErrors.email = "Email is required"
    if (!password.trim()) newErrors.password = "Password is required"

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      toast.success("Signed in successfully!")
      onClose()
      router.push("/")
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white/20 backdrop-blur-md text-white rounded-2xl shadow-2xl p-6 w-full max-w-sm">
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-white text-lg"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign In</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Email</label>
            <input
              type="email"
              className={`w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-500 ring-red-400" : "focus:ring-orange-500"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-white">Password</label>
            <input
              type="password"
              className={`w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                errors.password ? "border-red-500 ring-red-400" : "focus:ring-orange-500"
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Log In
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setShowForgotPassword(true)}
            className="text-sm text-orange-500 hover:text-orange-600"
          >
            Forgot Password?
          </button>
        </div>

        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500">
            Don’t have an account?{" "}
            <button
              type="button"
              onClick={onShowSignUp}
              className="text-orange-500 font-medium ml-1 hover:text-orange-600"
            >
              Sign Up
            </button>
          </span>
        </div>
      </div>

      {/* Include the ForgotPasswordModal component */}
      <ForgotPasswordModal
        isOpen={showForgotPassword}
        onClose={() => {
          setShowForgotPassword(false)
          onClose() // Close SignInModal as well
        }}
      />
    </div>
  )
}
