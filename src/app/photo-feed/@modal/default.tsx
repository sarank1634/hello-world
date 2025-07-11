import React from "react";

interface ModalProps {
  children: React.ReactNode;
}

// Generic modal overlay used by all routes under `@modal`
// It centers the dialog content and applies a translucent backdrop.
export default function Modal({ children }: ModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="max-h-full w-full max-w-lg overflow-auto rounded-md bg-white shadow-xl">
        {children}
      </div>
    </div>
  );
}