// app/providers/ToastProvider.tsx

"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastProvider() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable
      theme="light"
      limit={4}
      toastClassName={() =>
        "rounded-2xl border border-gray-200 bg-white/95 shadow-2xl backdrop-blur-md p-0 overflow-hidden"
      }
      progressClassName="!bg-gradient-to-r !from-violet-500 !to-fuchsia-500"
    />
  );
}