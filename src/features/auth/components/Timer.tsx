"use client";

import { useEffect, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(165);

  useEffect(() => {
    if (seconds <= 0) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);

  const remaining = seconds % 60;

  return (
    <div className="mt-6 text-center">

      <p className="text-gray-500">

        Code expires in{" "}

        <span className="font-bold text-violet-600">
          {String(minutes).padStart(2, "0")}:
          {String(remaining).padStart(2, "0")}
        </span>

      </p>

    </div>
  );
}