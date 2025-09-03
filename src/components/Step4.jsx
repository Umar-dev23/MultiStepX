import React, { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useFormContext, Controller } from "react-hook-form";

const Step4 = ({ onProgress }) => {
  const {
    register,
    control,
    formState: { errors, touchedFields, isSubmitted },
    watch,
    trigger,
  } = useFormContext();

  const loanStatus = watch("financial.loanStatus");

  // Watch fields for progress
  const watchedFields = watch([
    "financial.monthlyIncome",
    "financial.loanStatus",
    "financial.loanAmount",
    "financial.creditScore",
  ]);

  useEffect(() => {
    let requiredFields = [
      "financial.monthlyIncome",
      "financial.loanStatus",
      "financial.creditScore",
    ];

    if (loanStatus === "yes") {
      requiredFields.push("financial.loanAmount");
    }

    const total = requiredFields.length;
    const filled = requiredFields.filter((field) => {
      const value =
        watchedFields[
          field === "financial.monthlyIncome"
            ? 0
            : field === "financial.loanStatus"
            ? 1
            : field === "financial.loanAmount"
            ? 2
            : 3
        ];
      return value !== "" && value !== null && value !== undefined;
    }).length;

    const progress = Math.round((filled / total) * 100);
    onProgress?.(progress);
  }, [watchedFields, loanStatus, onProgress]);

  return (
    <div className="max-w-5xl flex flex-col gap-5 mx-auto">
      {/* Monthly Income */}
      <div className="relative">
        <Input
          type="number"
          {...register("financial.monthlyIncome", {
            required: "Monthly Income is required",
            min: {
              value: 0,
              message: "Monthly Income must be greater than 0",
            },
            valueAsNumber: true,
          })}
          onBlur={() => trigger("financial.monthlyIncome")}
          className="peer text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md w-full"
          placeholder=" "
        />
        <Label
          htmlFor="monthlyIncome"
          className="absolute left-4 -top-0 px-1 text-gray-400 transition-all duration-200 pointer-events-none
                     peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2
                     peer-placeholder-shown:text-sm peer-focus:left-2 peer-focus:-top-1 peer-focus:bg-black
                     peer-focus:text-xs peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:-top-2
                     peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
                     peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
        >
          Monthly Income
        </Label>
        {
          errors.financial?.monthlyIncome && (
            <p className="text-red-500 text-sm mt-1">
              {errors.financial.monthlyIncome.message}
            </p>
          )}
      </div>

      {/* Loan Status */}
      <div className="flex flex-col gap-3">
        <Label className="px-1 text-white text-lg font-semibold">
          Do you have any existing loans?
        </Label>
        <Controller
          name="financial.loanStatus"
          control={control}
          rules={{ required: "Please select your loan status" }}
          render={({ field }) => (
            <RadioGroup
              value={field.value || ""}
              onValueChange={(value) => {
                field.onChange(value);
                trigger("financial.loanStatus");
              }}
              className="flex gap-8"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  className="border-gray-400 text-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  value="yes"
                  id="loan-yes"
                />
                <Label htmlFor="loan-yes" className="text-white">
                  Yes
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  className="border-gray-400 text-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  value="no"
                  id="loan-no"
                />
                <Label htmlFor="loan-no" className="text-white">
                  No
                </Label>
              </div>
            </RadioGroup>
          )}
        />
        {
          errors.financial?.loanStatus && (
            <p className="text-red-500 text-sm mt-1">
              {errors.financial.loanStatus.message}
            </p>
          )}
      </div>

      {/* Loan Amount (conditional) */}
      {loanStatus === "yes" && (
        <div className="relative">
          <Input
            type="number"
            {...register("financial.loanAmount", {
              validate: (value) =>
                loanStatus === "yes"
                  ? value && value > 0
                    ? true
                    : "Loan Amount is required and must be greater than 0"
                  : true,
              valueAsNumber: true,
            })}
            onBlur={() => trigger("financial.loanAmount")}
            className="peer text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md w-full"
            placeholder=" "
          />
          <Label
            htmlFor="loanAmount"
            className="absolute left-4 -top-0 px-1 text-gray-400 transition-all duration-200 pointer-events-none
                       peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2
                       peer-placeholder-shown:text-sm peer-focus:left-2 peer-focus:-top-1 peer-focus:bg-black
                       peer-focus:text-xs peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:-top-2
                       peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
                       peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
          >
            Loan Amount
          </Label>
          {
            errors.financial?.loanAmount && (
              <p className="text-red-500 text-sm mt-1">
                {errors.financial.loanAmount.message}
              </p>
            )}
        </div>
      )}

      {/* Credit Score */}
      <div className="relative">
        <Input
          type="number"
          {...register("financial.creditScore", {
            required: "Credit Score is required",
            validate: (value) => {
              const numValue = parseFloat(value);
              if (!value || isNaN(numValue)) return "Credit Score is required";
              if (numValue < 300) return "Credit Score must be at least 300";
              if (numValue > 850) return "Credit Score cannot exceed 850";
              return true;
            },
          })}
          onBlur={() => trigger("financial.creditScore")}
          className="peer text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md w-full"
          placeholder=" "
        />
        <Label
          htmlFor="creditScore"
          className="absolute left-4 -top-0 px-1 text-gray-400 transition-all duration-200 pointer-events-none
                     peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2
                     peer-placeholder-shown:text-sm peer-focus:left-2 peer-focus:-top-1 peer-focus:bg-black
                     peer-focus:text-xs peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:-top-2
                     peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
                     peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
        >
          Credit Score (300-850)
        </Label>
        {
          errors.financial?.creditScore && (
            <p className="text-red-500 text-sm mt-1">
              {errors.financial.creditScore.message}
            </p>
          )}
      </div>
    </div>
  );
};

export default Step4;
