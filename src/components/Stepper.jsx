import React from "react";

const Stepper = ({ currentStep, steps }) => {
  return (
    <div className="flex w-[100%] justify-between items-center mb-8 relative max-w-3xl mx-auto px-4">
      {steps.map((step, index) => (
        <div key={index} className="flex-1 flex flex-col items-center relative">
          {/* Circle */}
          <div
            className={`w-10 h-10 z-10 rounded-full flex items-center justify-center font-bold border-2 transition-all duration-300
              ${
                index < currentStep
                  ? "border-violet-600 bg-violet-600 text-white"
                  : index 
                  === currentStep
                  ? "border-violet-600 bg-black text-violet-600"
                  : "border-gray-400 bg-black text-gray-500"
              }`}
              
          >
            {index < currentStep ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            ) : (
              <span>{index + 1}</span>
            )}
          </div>

          {/* Step Label */}
          <p
            className={`mt-2 text-sm whitespace-nowrap transition-colors duration-300
              ${
                index <= currentStep
                  ? "text-violet-400 font-medium"
                  : "text-gray-500"
              }`}
          >
            {step}
          </p>

          {/* Connector line (except last circle) */}
          {index < steps.length - 1 && (
            <div
              className={`absolute top-5 w-full h-1 -translate-y-1/2 
                ${index < currentStep ? "bg-violet-600" : "bg-gray-400/50"}`}
              style={{ transform: "translateX(50%)" }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
