"use client"

import React, { useState } from "react"
import { SignInModal } from "@/components/modals/SignInModal"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ onShowSignUp }: { onShowSignUp: () => void }) {
  const [showModal, setShowModal] = useState(false)
  const pathname = usePathname(); 

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-30 bg-transparent px-6 py-4 flex justify-between items-center text-white">
        <Link href="/">
          <img
            src="/images/Teamify - 1 - Logo Name White Orange I 1.png"
            alt="Virtual Office Logo"
            className="h-8"
          />
        </Link>
        
         <nav className="space-x-8 flex-1 flex justify-center">
            <Link
              href="/"
              className={`hover:text-orange-400 transition ${
                pathname === "/" ? "text-orange-500 font-semibold" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/features"
              className={`hover:text-orange-400 transition ${
                pathname === "/features" ? "text-orange-500 font-semibold" : ""
              }`}
            >
              Features
            </Link>
            <Link
              href="/aboutus"
              className={`hover:text-orange-400 transition ${
                pathname.startsWith("/about") ? "text-orange-500 font-semibold" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`hover:text-orange-400 transition ${
                pathname === "/contact" ? "text-orange-500 font-semibold" : ""
              }`}
            >
              Contact
            </Link>
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
