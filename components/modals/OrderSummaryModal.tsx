"use client"

import React from "react"
import { Plan } from "@/components/feature/PricingPlans"

interface OrderSummaryModalProps {
  isOpen: boolean
  onClose: () => void
  plan: Plan
}

export const OrderSummaryModal: React.FC<OrderSummaryModalProps> = ({
  isOpen,
  onClose,
  plan,
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
      <div className="bg-white/20 backdrop-blur-md text-white rounded-2xl shadow-2xl p-10 w-full max-w-2xl">
        <h2 className="text-3xl font-extrabold mb-6">
          Your Order <span className="text-orange-500">Summary</span>
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Selected Plan</h3>
          <div className="bg-white border-2 border-orange-500 rounded-xl p-6 shadow-sm flex justify-between items-center">
            <div>
              <div className="text-lg text-black font-bold">{plan.title}</div>
              {/* <div className="text-sm text-gray-600 mt-1">{plan.description}</div> */}
              <div className="text-sm text-gray-400 mt-1">{plan.cycle}</div>
            </div>
            <div className="text-right">
              <div className="text-xl text-black font-bold">{plan.price}</div>
              <div className="text-sm text-gray-500">Per Month</div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
