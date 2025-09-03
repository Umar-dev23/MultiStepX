// MainForm.jsx
import React, { useState, useCallback } from "react";
import Header from "@/components/Header";
import Stepper from "@/components/Stepper";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";
import Step4 from "@/components/Step4";
import Step5 from "@/components/Step5";
import { Button } from "./ui/button";

const stepsData = [
  "Profile",
  "Contact",
  "Employment",
  "Financial",
  "Preferences",
  "Summary",
];

const MainForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepProgress, setStepProgress] = useState(
    Array(stepsData.length).fill(0)
  );

  // handler from Step1 (or any step) => store progress at that step index
  const handleStepProgress = useCallback(
    (rawProgress) => {
      // normalize progress to an integer 0..100
      let p = Number(rawProgress) || 0;
      // if someone passed fraction like 0.5 -> treat as 50%
      if (p > 0 && p <= 1) p = Math.round(p * 100);
      p = Math.round(p);
      if (p < 0) p = 0;
      if (p > 100) p = 100;

      setStepProgress((prev) => {
        // Avoid unnecessary state updates that cause re-renders
        if (prev[currentStep] === p) return prev;
        const updated = [...prev];
        updated[currentStep] = p;
        return updated;
      });
    },
    [currentStep]
  );

  const nextStep = () => {
    if (currentStep < stepsData.length - 1) setCurrentStep((p) => p + 1);
  };
  const prevStep = () => {
    if (currentStep > 0) setCurrentStep((p) => p - 1);
  };

  return (
    <div className="flex flex-col items-center justify-start gap-6">
      <Header />
      <Stepper
        currentStep={currentStep}
        steps={stepsData}
        progress={stepProgress}
      />

      <div className="max-w-2xl w-full">
        <div
          className={`w-full ${
            currentStep !== stepsData.length - 1 ? "h-125" : "h-auto"
          }`}
        >
          {currentStep === 0 && <Step1 onProgress={handleStepProgress} />}
          {currentStep === 1 && <Step2 onProgress={handleStepProgress} />}
          {currentStep === 2 && <Step3 onProgress={handleStepProgress} />}
          {currentStep === 3 && <Step4 onProgress={handleStepProgress} />}
          {currentStep === 4 && <Step5 onProgress={handleStepProgress} />}
          {currentStep === 5 && <div>Summary Step</div>}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between w-full gap-7 mt-6">
          <Button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="px-6 w-[40%] py-2 border border-white bg-none text-white rounded-md disabled:opacity-50"
          >
            Back
          </Button>

          <Button
            onClick={nextStep}
            className="px-6 w-[40%] py-2 bg-[#7F22FE] hover:bg-[#7F57FA] text-white rounded-md disabled:opacity-50"
          >
            {currentStep !== stepsData.length - 1 ? "Next" : "Submit"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainForm;
