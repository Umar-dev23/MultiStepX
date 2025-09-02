import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Step3 = () => {
  const [employmentStatus, setEmploymentStatus] = useState("");

  return (
    <div className="max-w-5xl flex flex-col gap-5 mx-auto">
      {/* Job Title */}
      <div className="relative">
        <Input
          type="text"
          name="jobTitle"
          className="peer text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent select-text 
            selection:bg-blue-500 selection:text-white"
          placeholder=" "
        />
        <Label
          htmlFor="jobTitle"
          className="absolute left-4 -top-0 px-1 text-gray-400 transition-all duration-200 pointer-events-none
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
            peer-focus:left-2 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-black
            peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
            peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
        >
          Current Job Title
        </Label>
      </div>

      {/* Employment Status */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="employmentStatus" className="px-1 text-white">
          Employment Status
        </Label>
        <Select onValueChange={setEmploymentStatus}>
          <SelectTrigger className="w-full text-white border border-gray-300">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="employed">Employed</SelectItem>
            <SelectItem value="unemployed">Unemployed</SelectItem>
            <SelectItem value="student">Student</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Company Name (conditional) */}
      {employmentStatus === "employed" && (
        <div className="relative">
          <Input
            type="text"
            name="companyName"
            className="peer text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent select-text 
              selection:bg-blue-500 selection:text-white"
            placeholder=" "
          />
          <Label
            htmlFor="companyName"
            className="absolute left-4 -top-0 px-1 text-gray-400 transition-all duration-200 pointer-events-none
              peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
              peer-focus:left-2 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-black
              peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
              peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
          >
            Company Name
          </Label>
        </div>
      )}

      {/* Years of Experience */}
      <div className="relative">
        <Input
          type="number"
          name="experience"
          min="0"
          className="peer text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent select-text 
            selection:bg-blue-500 selection:text-white"
          placeholder=" "
        />
        <Label
          htmlFor="experience"
          className="absolute left-4 -top-0 px-1 text-gray-400 transition-all duration-200 pointer-events-none
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
            peer-focus:left-2 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-black
            peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
            peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
        >
          Years of Experience
        </Label>
      </div>

      {/* Resume Upload */}
      <div className="flex text-white flex-col gap-2">
        {/* Title label (shadcn Label is fine here) */}
        <Label htmlFor="resume" className="px-1 text-white">
          Resume Upload
        </Label>

        {/* Clickable dropzone using a native label */}
        <label
          htmlFor="resume"
          className="block border-2 border-dashed border-white rounded-md p-5 text-center cursor-pointer hover:bg-white/10"
        >
          <p className="text-sm text-white font-medium">
            Drag your file(s) to start uploading
          </p>
          <p className="text-xs text-gray-400 mt-1">--------OR----------</p>

          {/* Styled as a button (no JS needed) */}
          <span className="inline-block mt-2 px-4 py-2 rounded-xl bg-white text-black text-sm font-medium">
            Browse files
          </span>
        </label>

        {/* Hidden file input */}
        <input
          id="resume"
          type="file"
          accept=".jpg,.pdf,.png,.mp4,.svg,.zip"
          className="hidden"
        />
      </div>
    </div>
  );
};

export default Step3;
