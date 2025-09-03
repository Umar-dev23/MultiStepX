import React, { useState, useCallback } from "react";
import Header from "@/components/Header";
import Stepper from "@/components/Stepper";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";
import Step4 from "@/components/Step4";
import Step5 from "@/components/Step5";
import { Button } from "./ui/button";
import { useForm, FormProvider } from "react-hook-form";

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
  const methods = useForm({
    mode: "onSubmit",
    defaultValues: {
      profile: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        dob: null,
      },
      contact: {
        phone: "",
        altPhone: "",
        address1: "",
        address2: "",
        city: "",
        postalCode: "",
        country: "",
      },
      employment: {
        jobTitle: "",
        employmentStatus: "",
        companyName: "",
        experience: "",
        resume: null,
      },
      financial: {
        income: "",
        loanStatus: "no",
        loanAmount: "",
        creditScore: "",
      },
      preferences: {
        contactMode: "",
        hobbies: [],
        newsletter: false,
      },
    },
  });

  const handleStepProgress = useCallback(
    (rawProgress) => {
      let p = Number(rawProgress) || 0;
      if (p > 0 && p <= 1) p = Math.round(p * 100);
      p = Math.round(p);
      if (p < 0) p = 0;
      if (p > 100) p = 100;

      setStepProgress((prev) => {
        if (prev[currentStep] === p) return prev;
        const updated = [...prev];
        updated[currentStep] = p;
        return updated;
      });
    },
    [currentStep]
  );

  const handleSubmit = (data) => {
    console.log("form final data", data);
  };

  const nextStep = () => {
    if (currentStep < stepsData.length - 1) setCurrentStep((p) => p + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep((p) => p - 1);
  };

  const handleNext = async () => {
    let fieldsToValidate;
    switch (currentStep) {
      case 0:
        fieldsToValidate = "profile";
        break;
      case 1:
        fieldsToValidate = "contact";
        break;
      case 2:
        fieldsToValidate = "employment";
        break;
      case 3:
        fieldsToValidate = "financial";
        break;
      case 4:
        fieldsToValidate = "preferences";
        break;
      default:
        fieldsToValidate = null;
    }

    if (fieldsToValidate) {
      const isValid = await methods.trigger(fieldsToValidate);
      if (!isValid) {
        console.log(
          `Validation failed for step ${currentStep + 1}:`,
          methods.formState.errors
        );
        return;
      }
    }

    nextStep();
  };

  return (
    <div className="flex flex-col items-center justify-start gap-6">
      <Header />
      <Stepper
        currentStep={currentStep}
        steps={stepsData}
        progress={stepProgress}
      />
      <FormProvider {...methods}>
        <form className="w-[80%]" onSubmit={methods.handleSubmit(handleSubmit)}>
          <div className="w-full">
            <div
              className={`w-full ${
                currentStep !== stepsData.length - 1 ? "h-140" : "h-auto"
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
                type="button"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="px-6 w-[40%] py-2 border border-white bg-none text-white rounded-md disabled:opacity-50"
              >
                Back
              </Button>

              <Button
                type={
                  currentStep === stepsData.length - 1 ? "submit" : "button"
                }
                onClick={
                  currentStep !== stepsData.length - 1 ? handleNext : undefined
                }
                className="px-6 w-[40%] py-2 bg-[#7F22FE] hover:bg-[#7F57FA] text-white rounded-md disabled:opacity-50"
              >
                {currentStep !== stepsData.length - 1 ? "Next" : "Submit"}
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default MainForm;
