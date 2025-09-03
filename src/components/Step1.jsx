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

const Step1 = ({ onProgress }) => {
  // keep your original visual classes exactly the same
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);

  // minimal form state (no styling changes)
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dob: null,
  });

  const update = (field, value) => {
    setForm((p) => ({ ...p, [field]: value }));
  };

  // compute progress from fields and send to parent
  useEffect(() => {
    const total = 6; // fields counted: fullName,email,password,confirmPassword,gender,dob
    const filled = Object.values(form).filter(
      (v) => v !== "" && v !== null
    ).length;
    const progress = Math.round((filled / total) * 100);
    onProgress?.(progress);
  }, [form, onProgress]);

  return (
    <div className="max-w-5xl flex flex-col gap-5 mx-auto">
      {/* Full Name */}
      <div className="relative">
        <Input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={(e) => update("fullName", e.target.value)}
          className="peer text-whitefull text-white  px-5 pt-6 pb-5 border border-gray-300 rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent select-text 
                     selection:bg-blue-500 selection:text-white"
          placeholder=" "
        />
        <Label
          htmlFor="fullName"
          className="absolute left-4 -top-0 px-1 text-gray-400 transition-all duration-200 bg-none pointer-events-none
                     peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                     peer-focus:left-2 peer-focus:-top-1 peer-focus:bg-black peer-focus:text-xs peer-focus:text-blue-600
                     peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
                     peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
        >
          Your Name
        </Label>
      </div>

      {/* Email */}
      <div className="relative">
        <Input
          type="email"
          name="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="peer text-whitefull text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent select-text 
                     selection:bg-blue-500 selection:text-white"
          placeholder=" "
        />
        <Label
          htmlFor="email"
          className="absolute left-4 -top-0 peer-focus:bg-black px-1 text-gray-400 transition-all duration-200 pointer-events-none
                     peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                     peer-focus:left-2 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-blue-600
                     peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
                     peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
        >
          Email
        </Label>
      </div>

      {/* Password */}
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          name="password"
          value={form.password}
          onChange={(e) => update("password", e.target.value)}
          className="peer text-whitefull text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent select-text 
               selection:bg-blue-500 selection:text-white"
          placeholder=" "
        />
        <Label
          htmlFor="password"
          className="absolute left-4 -top-0 peer-focus:bg-black px-1 text-gray-400 transition-all duration-200 pointer-events-none
               peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
               peer-focus:left-2 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-blue-600
               peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
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

      {/* Confirm Password */}
      <div className="relative">
        <Input
          type={showConPassword ? "text" : "password"}
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={(e) => update("confirmPassword", e.target.value)}
          className="peer text-whitefull text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent select-text 
                     selection:bg-blue-500 selection:text-white"
          placeholder=" "
        />
        <Label
          htmlFor="confirmPassword"
          className="absolute left-4 -top-0 peer-focus:bg-black px-1 text-gray-400 transition-all duration-200 pointer-events-none
                     peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                     peer-focus:left-2 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-blue-600
                     peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black

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

      {/* Gender */}
      <div className="relative flex flex-col gap-3">
        {/* Gender Label */}
        <Label className="px-1 text-white">Gender</Label>

        <RadioGroup
          value={form.gender}
          onValueChange={(val) => update("gender", val)}
          className="flex gap-10"
        >
          <div className="flex items-center gap-3">
            <RadioGroupItem
              value="male"
              id="r1"
              className="border-gray-400 text-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
            />
            <Label className="text-white" htmlFor="r1">
              Male
            </Label>
          </div>

          <div className="flex items-center gap-3">
            <RadioGroupItem
              value="female"
              id="r2"
              className="border-gray-400 text-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
            />
            <Label className="text-white" htmlFor="r2">
              Female
            </Label>
          </div>

          <div className="flex items-center gap-3">
            <RadioGroupItem
              value="notToSay"
              id="r3"
              className="border-gray-400 text-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
            />
            <Label className="text-white" htmlFor="r3">
              Prefer Not to Say
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Date of Birth */}
      <div className="flex  flex-col gap-3">
        <Label htmlFor="date" className="px-1 text-white">
          Date of birth
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date"
              className="text-white48 justify-between font-normal"
            >
              {form.dob ? form.dob.toLocaleDateString() : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="text-whiteauto overflotext-whitehidden p-0"
            align="start"
          >
            <Calendar
              mode="single"
              selected={form.dob}
              onSelect={(d) => {
                update("dob", d);
                setDate(d);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Step1;
