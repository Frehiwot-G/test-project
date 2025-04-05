"use client"

import { SignInModal } from "./SignInModal"
import { SignUpModal } from "./SignUpModal"

interface ParentModalProps {
  modal: "signin" | "signup" | null
  onClose: () => void
  onShowSignUp: () => void
  onBackToSignIn: () => void
}

export const ParentModal: React.FC<ParentModalProps> = ({
  modal,
  onClose,
  onShowSignUp,
  onBackToSignIn
}) => {
  if (!modal) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {modal === "signin" && (
        <SignInModal
          isOpen={modal === "signin"}
          onClose={onClose}
          onShowSignUp={onShowSignUp}
        />
      )}
      {modal === "signup" && (
        <SignUpModal
          isOpen={modal === "signup"}
          onClose={onClose}
          onBackToSignIn={onBackToSignIn}
        />
      )}
    </div>
  )
}
