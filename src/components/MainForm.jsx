import React, { useState } from "react";
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

  // Handle navigation
  const nextStep = () => {
    if (currentStep < stepsData.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className=" flex  flex-col items-center justify-start gap-6">
      <Header />
      <Stepper currentStep={currentStep} steps={stepsData} />

      <div className="max-w-2xl w-full">
        <div className={`w-full  ${currentStep !== stepsData.length - 1? "h-125":"h-auo"}`}>
          {currentStep === 0 && (
            <div>
              <Step1 />
            </div>
          )}
          {currentStep === 1 && (
            <div>
              <Step2 />
            </div>
          )}
          {currentStep === 2 && (
            <div className="">
              <Step3 />
            </div>
          )}
          {currentStep === 3 && (
            <div>
              <Step4 />
            </div>
          )}
          {currentStep === 4 && (
            <div>
              <Step5 />
            </div>
          )}
          {currentStep === 5 && <div>Summary Step</div>}
        </div>

        {/* Navigation Buttons */}
        <div
          className="flex justify-between w-full
       gap-7 mt-6"
        >
          <Button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="px-6 w-[40%] py-2 border border-white bg-none text-white rounded-md disabled:opacity-50"
          >
            Back
          </Button>
          {currentStep !== stepsData.length - 1 ? (
            <Button
              onClick={nextStep}
              className="px-6 w-[40%] py-2 bg-[#7F22FE] hover:bg-[#7F57FA] text-white rounded-md disabled:opacity-50"
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={nextStep}
              className="px-6 w-[40%] py-2 bg-[#7F22FE] hover:bg-[#7F57FA] text-white rounded-md disabled:opacity-50"
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainForm;
