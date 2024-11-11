import React from "react";

export default function Footer() {
  let date = new Date();
  const ans = date.getFullYear();
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
      {/* &copy; Copyright {ans} Cathy. tout droit réservé . */}
      &copy; Copyright 2024 Koloina. tout droit réservé.
      </small>
    
    </footer>
  );
}
