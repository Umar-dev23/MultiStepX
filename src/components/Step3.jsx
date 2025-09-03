import React, { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext, Controller } from "react-hook-form";

const Step3 = ({ onProgress }) => {
  const {
    register,
    control,
    formState: { errors },
    watch,
    trigger,
  } = useFormContext();

  const employmentStatus = watch("employment.employmentStatus");

  // Watch fields for progress
  const watchedFields = watch([
    "employment.jobTitle",
    "employment.employmentStatus",
    "employment.companyName",
    "employment.experience",
    "employment.resume",
  ]);

  useEffect(() => {
    const total = 5;
    const filled = watchedFields.filter(
      (v) => v !== "" && v !== null && v !== undefined
    ).length;
    const progress = Math.round((filled / total) * 100);
    onProgress?.(progress);
  }, [watchedFields, onProgress]);

  return (
    <div className="max-w-5xl w-full flex flex-col gap-5 mx-auto">
      {/* Job Title */}
      <div className="relative">
        <Input
          type="text"
          {...register("employment.jobTitle", {
            required: "Job Title is required",
          })}
          onBlur={() => trigger("employment.jobTitle")}
          className="peer text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md"
          placeholder=" "
        />
        <Label
          htmlFor="jobTitle"
          className="absolute left-4 -top-0 px-1 text-gray-400 transition-all duration-200 pointer-events-none
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm
            peer-focus:left-2 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-black
            peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
            peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
        >
          Current Job Title
        </Label>
      </div>
      {errors.employment?.jobTitle && (
        <p className="text-red-500 text-sm mt-[-15px]">
          {errors.employment.jobTitle.message}
        </p>
      )}

      {/* Employment Status */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="employmentStatus" className="px-1 text-white">
          Employment Status
        </Label>
        <Controller
          name="employment.employmentStatus"
          control={control}
          rules={{ required: "Employment Status is required" }}
          render={({ field }) => (
            <Select
              value={field.value || ""}
              onValueChange={(value) => {
                field.onChange(value);
                trigger("employment.employmentStatus");
              }}
            >
              <SelectTrigger className="w-full text-white border border-gray-300">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="employed">Employed</SelectItem>
                <SelectItem value="unemployed">Unemployed</SelectItem>
                <SelectItem value="student">Student</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>
      {errors.employment?.employmentStatus && (
        <p className="text-red-500 text-sm mt-[-15px]">
          {errors.employment.employmentStatus.message}
        </p>
      )}

      {/* Company Name (conditional) */}
      {employmentStatus === "employed" && (
        <>
          <div className="relative">
            <Input
              type="text"
              {...register("employment.companyName", {
                validate: (value) =>
                  employmentStatus === "employed"
                    ? value
                      ? true
                      : "Company Name is required"
                    : true,
              })}
              onBlur={() => trigger("employment.companyName")}
              className="peer text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md"
              placeholder=" "
            />
            <Label
              htmlFor="companyName"
              className="absolute left-4 -top-0 px-1 text-gray-400 transition-all duration-200 pointer-events-none
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm
                peer-focus:left-2 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-black
                peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
                peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
            >
              Company Name
            </Label>
          </div>
          {errors.employment?.companyName && (
            <p className="text-red-500 text-sm mt-[-15px]">
              {errors.employment.companyName.message}
            </p>
          )}
        </>
      )}

      {/* Years of Experience */}
      <div className="relative">
        <Input
          type="number"
          {...register("employment.experience", {
            required: "Years of Experience is required",
            min: {
              value: 0,
              message: "Years of Experience must be at least 0",
            },
            valueAsNumber: true,
          })}
          onBlur={() => trigger("employment.experience")}
          className="peer text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md"
          placeholder=" "
        />
        <Label
          htmlFor="experience"
          className="absolute left-4 -top-0 px-1 text-gray-400 transition-all duration-200 pointer-events-none
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm
            peer-focus:left-2 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-black
            peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
            peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
        >
          Years of Experience
        </Label>
      </div>
      {errors.employment?.experience && (
        <p className="text-red-500 text-sm mt-[-15px]">
          {errors.employment.experience.message}
        </p>
      )}

      {/* Resume Upload */}
      <div className="flex text-white flex-col gap-2">
        <Label htmlFor="resume" className="px-1 text-white">
          Resume Upload
        </Label>

        <Controller
          name="employment.resume"
          control={control}
          rules={{ required: "Resume is required" }}
          render={({ field: { onChange, name, ref, value } }) => (
            <>
              <label
                htmlFor="resume"
                className="block border-2 border-dashed border-white rounded-md p-5 text-center cursor-pointer hover:bg-white/10"
              >
                <p className="text-sm text-white font-medium">
                  Drag your file to start uploading
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  --------OR----------
                </p>
                <span className="inline-block mt-2 px-4 py-2 rounded-xl bg-white text-black text-sm font-medium">
                  Browse file
                </span>
              </label>

              <input
                id="resume"
                type="file"
                accept=".jpg,.pdf,.png,.mp4,.svg,.zip"
                className="hidden"
                ref={ref}
                name={name}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  onChange(file);
                  trigger("employment.resume");
                }}
              />

              {/* Show uploaded file */}
              {value && (
                <div className="mt-3 p-4 bg-gray-800/50 border border-gray-600 rounded-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">
                          {value.name}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {(value.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        onChange(null);
                        const fileInput = document.getElementById("resume");
                        if (fileInput) fileInput.value = "";
                        trigger("employment.resume");
                      }}
                      className="text-red-400 hover:text-red-300 p-1"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        />
      </div>
      {errors.employment?.resume && (
        <p className="text-red-500 text-sm mt-[-15px]">
          {errors.employment.resume.message}
        </p>
      )}
    </div>
  );
};

export default Step3;
