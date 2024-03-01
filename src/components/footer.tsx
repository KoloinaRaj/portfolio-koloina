import React from "react";

export default function Footer() {
  let date = new Date();
  const ans = date.getFullYear();
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; Copyright 2024 Cathy. tout droit réservé .
      </small>
      <p className="text-xs">
        <span className="font-semibold">A propos de ce site:</span> construit avec
        React & Next.js (actions de routeur d'application et de serveur), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend.
      </p>
    </footer>
  );
}
