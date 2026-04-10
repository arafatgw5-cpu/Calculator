"use client";
import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const buttons = [
    "C", "DEL", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "=",
  ];

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      return;
    }

    if (value === "DEL") {
      setInput((prev) => prev.slice(0, -1));
      return;
    }

    if (value === "=") {
      try {
        const result = eval(input);
        setInput(result.toString());
      } catch {
        setInput("Error");
      }
      return;
    }

    if (input === "Error") {
      setInput(value);
      return;
    }

    setInput((prev) => prev + value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">

      {/* Calculator Card */}
      <div className="w-[320px] bg-white p-5 rounded-2xl shadow-2xl">

        {/* Title */}
        <h1 className="text-xl font-bold text-center mb-4 text-gray-700">
          Calculator
        </h1>

        {/* Display */}
        <div className="w-full h-16 mb-5 px-4 flex items-center justify-end bg-gray-100 rounded-xl text-2xl font-semibold text-gray-800 shadow-inner">
          {input || "0"}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn, i) => (
            <button
              key={i}
              onClick={() => handleClick(btn)}
              className={`
                py-4 rounded-xl font-bold text-lg transition-all duration-200
                ${btn === "=" 
                  ? "col-span-2 bg-blue-500 text-white hover:bg-blue-600"
                  : btn === "C"
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : btn === "DEL"
                  ? "bg-yellow-400 text-white hover:bg-yellow-500"
                  : ["+", "-", "*", "/", "%"].includes(btn)
                  ? "bg-gray-800 text-white hover:bg-gray-900"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }
                active:scale-95 shadow-md
              `}
            >
              {btn}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Calculator;