"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import toast, { Toaster } from "react-hot-toast";
import { ParentModal } from "@/components/modals/ParentModal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({
    name: "",
    email: "",
    message: "",
  });

  const [modal, setModal] = useState<"signin" | "signup" | null>(null);

  const handleShowSignUp = () => setModal("signup");
  const handleBackToSignIn = () => setModal("signin");
  const handleCloseModal = () => setModal(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    const { name, email, message } = formData;

    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!message.trim()) newErrors.message = "Message is required";
    if (email && !validateEmail(email)) newErrors.email = "Invalid email address";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    toast.success("Message sent successfully!");

    setFormData({ name: "", email: "", message: "" });
    setErrors({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Toaster position="top-right" />
      <Header onShowSignUp={handleShowSignUp} />

      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/image 1.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <main className="relative z-10 flex items-center justify-center pt-24 px-4 min-h-screen">
          <div className="bg-white/20 backdrop-blur-md text-white rounded-2xl shadow-2xl w-full max-w-3xl p-10">
            <h1 className="text-4xl font-bold mb-6">
              <span className="text-orange-500">Contact</span> Us
            </h1>
            <p className="text-white/80 mb-8">
              We'd love to hear from you! Fill out the form and we'll be in touch soon.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white">Name</label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 rounded-xl border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-white">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 rounded-xl border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-white">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 rounded-xl border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Tell us how we can help..."
                ></textarea>
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </main>

        {/* SignIn / SignUp Modal */}
        <ParentModal
          modal={modal}
          onClose={handleCloseModal}
          onShowSignUp={handleShowSignUp}
          onBackToSignIn={handleBackToSignIn}
        />
      </section>
    </>
  );
}
