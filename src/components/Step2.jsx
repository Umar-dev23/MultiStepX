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

const Step2 = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div className="max-w-5xl flex flex-col gap-5 mx-auto">
      {/* Phone Number */}
      <div className="relative">
        <Input
          type="text"
          name="phone"
          className="peer text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent select-text 
                     selection:bg-blue-500 selection:text-white"
          placeholder=" "
        />
        <Label
          htmlFor="phone"
          className="absolute left-4 -top-0 peer-focus:bg-black px-1 text-gray-400 transition-all duration-200 pointer-events-none
                     peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                     peer-focus:left-2 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-blue-600
                     peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
                     peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
        >
          Phone Number
        </Label>
      </div>

      {/* Alternate Phone */}
      <div className="relative">
        <Input
          type="text"
          name="altPhone"
          className="peer text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent select-text 
                     selection:bg-blue-500 selection:text-white"
          placeholder=" "
        />
        <Label
          htmlFor="altPhone"
          className="absolute left-4 -top-0 peer-focus:bg-black px-1 text-gray-400 transition-all duration-200 pointer-events-none
                     peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                     peer-focus:left-2 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-blue-600
                     peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
                     peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
        >
          Alternate Phone (Optional)
        </Label>
      </div>

      {/* Address Line 1 */}
      <div className="relative">
        <Input
          type="text"
          name="address1"
          className="peer text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent select-text 
                     selection:bg-blue-500 selection:text-white"
          placeholder=" "
        />
        <Label
          htmlFor="address1"
          className="absolute left-4 -top-0 peer-focus:bg-black px-1 text-gray-400 transition-all duration-200 pointer-events-none
                     peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                     peer-focus:left-2 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-blue-600
                     peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
                     peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
        >
          Address Line 1
        </Label>
      </div>

      {/* Address Line 2 */}
      <div className="relative">
        <Input
          type="text"
          name="address2"
          className="peer text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent select-text 
                     selection:bg-blue-500 selection:text-white"
          placeholder=" "
        />
        <Label
          htmlFor="address2"
          className="absolute left-4 -top-0 peer-focus:bg-black px-1 text-gray-400 transition-all duration-200 pointer-events-none
                     peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                     peer-focus:left-2 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-blue-600
                     peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
                     peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
        >
          Address Line 2 (Optional)
        </Label>
      </div>

      {/* City Dropdown */}
      <div className="flex flex-col gap-2">
        <Label className="px-1 text-white">City</Label>
        <Select value={city} onValueChange={setCity}>
          <SelectTrigger className="text-white border border-gray-300">
            <SelectValue placeholder="Select City" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="karachi">Karachi</SelectItem>
            <SelectItem value="lahore">Lahore</SelectItem>
            <SelectItem value="islamabad">Islamabad</SelectItem>
            <SelectItem value="peshawar">Peshawar</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Postal Code */}
      <div className="relative">
        <Input
          type="text"
          name="postalCode"
          className="peer text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent select-text 
                     selection:bg-blue-500 selection:text-white"
          placeholder=" "
        />
        <Label
          htmlFor="postalCode"
          className="absolute left-4 -top-0 peer-focus:bg-black px-1 text-gray-400 transition-all duration-200 pointer-events-none
                     peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
                     peer-focus:left-2 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-blue-600
                     peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
                     peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
        >
          Postal Code
        </Label>
      </div>

      {/* Country Dropdown */}
      <div className="flex flex-col gap-2">
        <Label className="px-1 text-white">Country</Label>
        <Select value={country} onValueChange={setCountry}>
          <SelectTrigger className="text-white border border-gray-300">
            <SelectValue placeholder="Select Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pakistan">Pakistan</SelectItem>
            <SelectItem value="india">India</SelectItem>
            <SelectItem value="uae">UAE</SelectItem>
            <SelectItem value="usa">USA</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Step2;
