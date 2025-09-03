// Step1.jsx
import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ChevronDownIcon, Eye, EyeOff } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useFormContext } from "react-hook-form";

const Step1 = ({ onProgress }) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);

  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  // Watch fields for progress
  const watchedFields = watch([
    "profile.fullName",
    "profile.email",
    "profile.password",
    "profile.confirmPassword",
    "profile.gender",
    "profile.dob",
  ]);

  useEffect(() => {
    const total = 6; // fullname,email,password,confirmPassword,gender,dob
    const filled = watchedFields.filter(
      (v) => v !== "" && v !== null && v !== undefined
    ).length;
    const progress = Math.round((filled / total) * 100);
    onProgress?.(progress);
  }, [watchedFields, onProgress]);

  return (
    <div className="flex flex-col w-full gap-6 mx-auto">
      {/* Full Name */}
      <div className="relative">
        <Input
          type="text"
          {...register("profile.fullName", {
            required: "Fullname is required",
          })}
          className="peer text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md"
          placeholder=" "
        />
        <Label
          htmlFor="fullName"
          className="absolute left-4 -top-0 px-1 text-gray-400 transition-all duration-200 pointer-events-none
                     peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2
                     peer-placeholder-shown:text-sm peer-focus:left-2 peer-focus:-top-1 peer-focus:bg-black
                     peer-focus:text-xs peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:-top-2
                     peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
                     peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
        >
          Your Name
        </Label>
      </div>
      {errors.profile?.fullName && (
        <p className="text-red-500 text-sm mt-[-15px]">
          {errors.profile.fullName.message}
        </p>
      )}

      {/* Email */}
      <div className="relative">
        <Input
          type="email"
          {...register("profile.email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid Email Format",
            },
          })}
          className="peer text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md"
          placeholder=" "
        />
        <Label
          htmlFor="email"
          className="absolute left-4 -top-0 px-1 text-gray-400 transition-all duration-200 pointer-events-none
                     peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2
                     peer-placeholder-shown:text-sm peer-focus:left-2 peer-focus:-top-1 peer-focus:bg-black
                     peer-focus:text-xs peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:-top-2
                     peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
                     peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
        >
          Email
        </Label>
      </div>
      {errors.profile?.email && (
        <p className="text-red-500 text-sm mt-[-15px]">
          {errors.profile.email.message}
        </p>
      )}

      {/* Password */}
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          {...register("profile.password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/,
              message:
                "Password must include uppercase, lowercase, number, and special character",
            },
          })}
          className="peer text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md"
          placeholder=" "
        />
        <Label
          htmlFor="password"
          className="absolute left-4 -top-0 px-1 text-gray-400 transition-all duration-200 pointer-events-none
                     peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2
                     peer-placeholder-shown:text-sm peer-focus:left-2 peer-focus:-top-1 peer-focus:bg-black
                     peer-focus:text-xs peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:-top-2
                     peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
                     peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
        >
          Password
        </Label>
        <Eye
          size={20}
          onClick={() => setShowPassword(true)}
          className={`${
            showPassword ? "hidden" : "block"
          } text-white cursor-pointer right-4 absolute top-3`}
        />
        <EyeOff
          size={20}
          onClick={() => setShowPassword(false)}
          className={`${
            showPassword ? "block" : "hidden"
          } text-white cursor-pointer right-4 absolute top-3`}
        />
      </div>
      {errors.profile?.password && (
        <p className="text-red-500 text-sm mt-[-15px]">
          {errors.profile.password.message}
        </p>
      )}

      {/* Confirm Password */}
      <div className="relative">
        <Input
          type={showConPassword ? "text" : "password"}
          {...register("profile.confirmPassword", {
            required: "Confirm Password is required",
            validate: (val) => {
              if (val !== watch("profile.password")) {
                return "Passwords do not match";
              }
            },
          })}
          className="peer text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md"
          placeholder=" "
        />
        <Label
          htmlFor="confirmPassword"
          className="absolute left-4 -top-0 px-1 text-gray-400 transition-all duration-200 pointer-events-none
                     peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2
                     peer-placeholder-shown:text-sm peer-focus:left-2 peer-focus:-top-1 peer-focus:bg-black
                     peer-focus:text-xs peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:-top-2
                     peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
                     peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
        >
          Confirm Password
        </Label>
        <Eye
          size={20}
          onClick={() => setShowConPassword(true)}
          className={`${
            showConPassword ? "hidden" : "block"
          } text-white cursor-pointer right-4 absolute top-3`}
        />
        <EyeOff
          size={20}
          onClick={() => setShowConPassword(false)}
          className={`${
            showConPassword ? "block" : "hidden"
          } text-white cursor-pointer right-4 absolute top-3`}
        />
      </div>
      {errors.profile?.confirmPassword && (
        <p className="text-red-500 text-sm mt-[-15px]">
          {errors.profile.confirmPassword.message}
        </p>
      )}

      {/* Gender */}
      <div className="relative flex flex-col gap-3">
        <Label className="px-1 text-white">Gender</Label>
        <RadioGroup
          {...register("profile.gender", { required: "Gender is required" })}
          className="flex gap-10"
        >
          <div className="flex items-center gap-3">
            <RadioGroupItem value="male" id="r1" />
            <Label className="text-white" htmlFor="r1">
              Male
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="female" id="r2" />
            <Label className="text-white" htmlFor="r2">
              Female
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="notToSay" id="r3" />
            <Label className="text-white" htmlFor="r3">
              Prefer Not to Say
            </Label>
          </div>
        </RadioGroup>
      </div>
      {errors.profile?.gender && (
        <p className="text-red-500 text-sm mt-[-15px]">
          {errors.profile.gender.message}
        </p>
      )}

      {/* Date of Birth */}
      <div className="flex flex-col gap-3">
        <Label htmlFor="date" className="px-1 text-white">
          Date of birth
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date"
              className="justify-between font-normal"
            >
              {watch("profile.dob")
                ? new Date(watch("profile.dob")).toLocaleDateString()
                : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0" align="start">
            <Calendar
              mode="single"
              selected={watch("profile.dob")}
              onSelect={(d) => {
                if (d) {
                  // manually set dob in form
                  const event = { target: { name: "profile.dob", value: d } };
                  register("profile.dob").onChange(event);
                  setDate(d);
                  setOpen(false);
                }
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      {errors.profile?.dob && (
        <p className="text-red-500 text-sm mt-[-15px]">
          {errors.profile.dob.message}
        </p>
      )}
    </div>
  );
};

export default Step1;
