"use client"

import React, { useState } from "react"
import { toast } from "react-hot-toast"
import { Plan } from "@/components/feature/PricingPlans"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  onPaymentSuccess: (plan: Plan) => void
  selectedPlan: Plan
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  onPaymentSuccess,
  selectedPlan,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
  })

  // Error state for form validation
  const [errors, setErrors] = useState<Record<string, string>>({
    name: "",
    cardNumber: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  
    const newErrors: Record<string, string> = {} // Store errors here
    const { name, cardNumber } = formData
  

    if (!name.trim()) {
      newErrors.name = "Name is required"
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      newErrors.name = "Name can only contain letters and spaces"
    }
  
    // Card number validation
    if (!cardNumber.trim()) {
      newErrors.cardNumber = "Card number is required"
    } else if (!/^\d{13,19}$/.test(cardNumber.replace(/\s+/g, ''))) { // Check if card number is between 13-19 digits
      newErrors.cardNumber = "Card number must be between 13 and 19 digits"
    } 
  
    // If there are errors, set the state and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
  
    // Simulate successful submission
    toast.success("Payment info submitted successfully!")
    onPaymentSuccess(selectedPlan)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
      <div className="bg-white/20 backdrop-blur-md text-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-white text-lg"
          onClick={onClose}
        >
          &times;
        </button>
        <h3 className="text-xl font-bold mb-4 text-center">Payment Information</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                errors.name ? "border-red-500 ring-red-400" : "focus:ring-orange-500"
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Account Number"
              value={formData.cardNumber}
              onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
              className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                errors.cardNumber ? "border-red-500 ring-red-400" : "focus:ring-orange-500"
              }`}
            />
            {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
