"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, cardNumber, expiry, cvv } = formData;
    if (!name || !cardNumber || !expiry || !cvv) {
      toast.error("All fields are required.");
      return;
    }
    toast.success("Payment info submitted successfully!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-white text-black rounded-lg p-8 w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Payment Information</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
              className="w-1/2 border border-gray-300 px-4 py-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="CVV"
              value={formData.cvv}
              onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
              className="w-1/2 border border-gray-300 px-4 py-2 rounded"
              required
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
