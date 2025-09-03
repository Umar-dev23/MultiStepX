// Stepper.jsx
import React from "react";

const clamp = (v, a = 0, b = 100) => Math.max(a, Math.min(b, v));

const Stepper = ({ currentStep = 0, steps = [], progress = [] }) => {
  return (
    <div className="flex w-[100%] justify-between items-center mb-8 relative max-w-3xl mx-auto px-4">
      <style>{`
        /* horizontal movement for waves */
        @keyframes wave-move-1 { 0% { transform: translateX(0%); } 50% { transform: translateX(-30%); } 100% { transform: translateX(0%); } }
        @keyframes wave-move-2 { 0% { transform: translateX(0%); } 50% { transform: translateX(-20%); } 100% { transform: translateX(0%); } }
        /* small bob for surface */
        @keyframes bob { 0% { transform: translateY(0); } 50% { transform: translateY(-2px); } 100% { transform: translateY(0); } }

        .wave-1 { animation: wave-move-1 7.0s ease-in-out  infinite; will-change: transform; }
        .wave-2 { animation: wave-move-2 7.4s ease-in-out  infinite; will-change: transform; opacity: 0.95; }
        .wave-surface { animation: bob 7.8s ease-in-out infinite; }

        .wave-1, .wave-2, .wave-surface { pointer-events: none; user-select: none; display: block; }
      `}</style>

      {steps.map((label, index) => {
        const arr = Array.isArray(progress) ? progress : [];
        let raw = arr[index];
        raw = raw === undefined || raw === null ? 0 : Number(raw) || 0;
        if (raw > 0 && raw <= 1) raw = raw * 100; // support fractional input like 0.5
        const fillPercent =
          index < currentStep ? 100 : clamp(Math.round(raw), 0, 100);
        const isDone = index < currentStep;
        const isComplete = fillPercent === 100;
        const showCheck = isDone || isComplete;
        const isActive = index === currentStep;

        return (
          <div
            key={index}
            className="flex-1 flex flex-col items-center relative"
          >
            {/* Circle (clipped) */}
            <div
              className="w-10 h-10 z-10 rounded-full flex items-center justify-center font-bold border-2 transition-all duration-300 overflow-hidden relative"
              style={{
                borderColor:
                  isActive || isDone || isComplete ? "#7F22FE" : "#9CA3AF",
                background: isDone ? "#7F22FE" : "#000000",
                color:
                  isDone || isComplete
                    ? "#ffffff"
                    : isActive
                    ? "#7F22FE"
                    : "#9CA3AF",
              }}
            >
              {/* Water area (height = exact percent). */}
              <div
                className="absolute left-0 bottom-0 w-full"
                style={{
                  height: `${fillPercent*2.3}%`,
                  transition: "height ease-in-out  2000ms cubic-bezier(.2,.9,.2,1)",
                  zIndex: 6,
                }}
                aria-hidden
              >
                {/* wrapper so waves slide horizontally; width 200% for smooth loop */}
                <div
                  style={{
                    position: "absolute",
                    left: "-10%",
                    bottom: 0,
                    width: "200%",
                    height: "120%",
                    overflow: "hidden",
                  }}
                >
                  {/* Back wave - denser (shorter wavelength). NOTE: every `C` has three pairs. */}
                  <svg
                    viewBox="0 0 600 100"
                    preserveAspectRatio="none"
                    className="wave-1"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <path
                      d="M0,60 C30,45 60,75 90,60 C120,45 150,75 180,60 C210,45 240,75 270,60 C300,45 330,75 360,60 C390,45 420,75 450,60 C480,45 510,75 540,60 C570,45 600,60 600,60 L600,100 L0,100 Z"
                      fill="#4f0ecf"
                    />
                  </svg>

                  {/* Front surface wave - shorter wavelength, bobbing. Each C ends with a pair. */}
                  <svg
                    viewBox="0 0 600 100"
                    preserveAspectRatio="none"
                    className="wave-2 wave-surface"
                    style={{ width: "100%", height: "100%", marginTop: "-8px" }}
                  >
                    <path
                      d="M0,55 C30,40 60,70 90,55 C120,40 150,70 180,55 C210,40 240,70 270,55 C300,40 330,70 360,55 C390,40 420,70 450,55 C480,40 510,70 540,55 C570,40 600,55 600,55 L600,100 L0,100 Z"
                      fill="#6e1ae5"
                      opacity="0.95"
                    />
                  </svg>
                </div>
              </div>

              {/* Number or check (on top) */}
              <div
                style={{
                  position: "relative",
                  zIndex: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {showCheck ? (
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <span style={{ fontSize: 12 }}>{index + 1}</span>
                )}
              </div>
            </div>

            {/* Label */}
            <p
              className={`mt-2 text-sm whitespace-nowrap transition-colors duration-300 ${
                index <= currentStep
                  ? "text-violet-400 font-medium"
                  : "text-gray-500"
              }`}
            >
              {label}
            </p>

            {/* Connector */}
            {index < steps.length - 1 && (
              <div
                className="absolute top-5 w-full h-1 -translate-y-1/2"
                style={{
                  transform: "translateX(50%)",
                  background:
                    index < currentStep ? "#7F22FE" : "rgba(156,163,175,0.3)",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
