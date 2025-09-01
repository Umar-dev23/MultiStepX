import React from "react";

const Stepper = ({ currentStep, steps }) => {
  return (
    <div className="flex justify-between items-center mb-8 relative max-w-3xl mx-auto px-4">
      {/* Progress line (background track) */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-400/50 transform -translate-y-1/2 -z-10"></div>

      {/* Progress bar */}
      <div
        className="absolute top-1/2 left-0 h-1 transform -translate-y-1/2 -z-10 transition-all duration-500"
        style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
      ></div>

      {steps.map((step, index) => (
        <div key={index} className="step relative flex flex-col items-center">
          <div
            className={`w-13 h-13 rounded-full flex items-center justify-center  font-bold border-2 transition-all duration-300
              ${
                index < currentStep
                  ? " text-violet-600"
                  : index === currentStep
                  ? " text-violet-600 font-bold"
                  : " text-gray-500"
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
          <p
            className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-sm whitespace-nowrap transition-colors duration-300
              ${
                index <= currentStep
                  ? "text-violet-300 font-medium"
                  : "text-gray-500"
              }`}
          >
            {step}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
