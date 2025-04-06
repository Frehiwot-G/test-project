"use client"

import React, { useRef, useState } from "react"
import { toast } from "react-hot-toast"

interface SignUpModalProps {
  isOpen: boolean
  onClose: () => void
  onBackToSignIn: () => void
}

export const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose, onBackToSignIn }) => {
  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [companyWebsite, setCompanyWebsite] = useState("")
  const [companySize, setCompanySize] = useState("")
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  if (!isOpen) return null

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setLogoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerFileSelect = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: typeof errors = {}

    if (!logoPreview) newErrors.logo = "Company logo is required"
    if (!email.trim()) newErrors.email = "Email is required"
    if (!password.trim()) newErrors.password = "Password is required"
    if (!confirmPassword.trim()) newErrors.confirmPassword = "Confirm Password is required"
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match"
    if (!companyName.trim()) newErrors.companyName = "Company name is required"
    if (!companyWebsite.trim()) newErrors.companyWebsite = "Company website is required"
    if (!companySize) newErrors.companySize = "Company size is required"

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      toast.success("Company registered successfully!")
      onClose()
      onBackToSignIn()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white text-black rounded-lg p-6 w-full max-w-sm shadow-lg relative">
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-lg"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Logo Upload */}
        <div className="flex flex-col items-center mb-4">
          <div
            onClick={triggerFileSelect}
            className={`w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden cursor-pointer border-2 border-dashed ${
              errors.logo ? "border-red-500" : "border-orange-400"
            } hover:border-orange-600 transition`}
          >
            {logoPreview ? (
              <img src={logoPreview} alt="Company Logo" className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-400 text-sm text-center px-2">Upload Logo</span>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleImageUpload}
          />
          {errors.logo && <p className="text-red-500 text-sm mt-2">{errors.logo}</p>}
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-center">Company Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Company Name</label>
            <input
              type="text"
              className={`w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                errors.companyName ? "border-red-500 ring-red-400" : "focus:ring-orange-500"
              }`}
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Company Website</label>
            <input
              type="url"
              className={`w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                errors.companyWebsite ? "border-red-500 ring-red-400" : "focus:ring-orange-500"
              }`}
              value={companyWebsite}
              onChange={(e) => setCompanyWebsite(e.target.value)}
            />
            {errors.companyWebsite && (
              <p className="text-red-500 text-sm mt-1">{errors.companyWebsite}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Company Size</label>
            <select
              value={companySize}
              onChange={(e) => setCompanySize(e.target.value)}
              className={`w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                errors.companySize ? "border-red-500 ring-red-400" : "focus:ring-orange-500"
              }`}
            >
              <option value="">Select Company Size</option>
              <option value="0-10">0-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="500+">500+ employees</option>
            </select>
            {errors.companySize && <p className="text-red-500 text-sm mt-1">{errors.companySize}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Company Email</label>
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
            <label className="block text-sm font-medium mb-1">Password</label>
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

          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              className={`w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                errors.confirmPassword ? "border-red-500 ring-red-400" : "focus:ring-orange-500"
              }`}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Register Company
          </button>
        </form>

        {/* Link to Sign In Modal */}
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500">
            Already have an account?{" "}
            <button
              type="button"
              onClick={onBackToSignIn}
              className="text-orange-500 font-medium hover:text-orange-600"
            >
              Sign In
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}

