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
    e.preventDefault();
    const newErrors: typeof errors = {};
  
    // Logo validation
    if (!logoPreview) newErrors.logo = "Company logo is required";
  
    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {  // Regex for basic email format
      newErrors.email = "Please enter a valid email address";
    }
  
    // Password validation
    if (!password.trim()) newErrors.password = "Password is required";
  
    // Confirm Password validation
    if (!confirmPassword.trim()) newErrors.confirmPassword = "Confirm Password is required";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";
  
    // Company Name validation
    if (!companyName.trim()) newErrors.companyName = "Company name is required";
  
    // Company Website validation (regex for http://www.example.com format)
    if (!companyWebsite.trim()) {
      newErrors.companyWebsite = "Company website is required";
    } else if (!/^https?:\/\/(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/.test(companyWebsite)) {
      newErrors.companyWebsite = "Please enter a valid website (e.g., http://www.example.com)";
    }
  
    // Company Size validation
    if (!companySize) newErrors.companySize = "Company size is required";
  
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) {
      toast.success("Company registered successfully!");
      onClose();
      onBackToSignIn();
    }
  };

  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
      <div className="bg-white/20 backdrop-blur-md text-white rounded-2xl shadow-2xl w-full max-w-sm p-8 relative">
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-white text-lg"
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
              className={`w-full border  px-3 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                errors.companySize ? "border-red-500 ring-red-400" : "focus:ring-orange-500"
              }`}
            >
              <div className="text-black">
              <option value="">Select Company Size</option>
              <option value="0-10">0-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="500+">500+ employees</option>
              </div>
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
