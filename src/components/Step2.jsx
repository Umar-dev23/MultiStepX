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

const Step2 = ({ onProgress }) => {
  const {
    register,
    control,
    formState: { errors },
    watch,
    trigger,
  } = useFormContext();

  // Watch fields for progress
  const watchedFields = watch([
    "contact.phone",
    "contact.altPhone",
    "contact.address1",
    "contact.address2",
    "contact.city",
    "contact.postalCode",
    "contact.country",
  ]);

  useEffect(() => {
    const total = 7; // phone, altPhone, address1, address2, city, postalCode, country
    const filled = watchedFields.filter(
      (v) => v !== "" && v !== null && v !== undefined
    ).length;
    const progress = Math.round((filled / total) * 100);
    onProgress?.(progress);
  }, [watchedFields, onProgress]);

  return (
    <div className="max-w-5xl flex flex-col gap-5 mx-auto">
      {/* Phone Number */}
      <div className="relative">
        <Input
          type="text"
          {...register("contact.phone", {
            required: "Phone Number is required",
          })}
          onBlur={() => trigger("contact.phone")}
          className="peer text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md w-full"
          placeholder=" "
        />
        <Label
          htmlFor="phone"
          className="absolute left-4 -top-0 px-1 text-gray-400 transition-all duration-200 pointer-events-none
                     peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2
                     peer-placeholder-shown:text-sm peer-focus:left-2 peer-focus:-top-1 peer-focus:bg-black
                     peer-focus:text-xs peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:-top-2
                     peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
                     peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
        >
          Phone Number
        </Label>
      </div>
      {errors.contact?.phone && (
        <p className="text-red-500 text-sm mt-[-15px]">
          {errors.contact.phone.message}
        </p>
      )}

      {/* Alternate Phone */}
      <div className="relative">
        <Input
          type="text"
          {...register("contact.altPhone")}
          onBlur={() => trigger("contact.altPhone")}
          className="peer text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md w-full"
          placeholder=" "
        />
        <Label
          htmlFor="altPhone"
          className="absolute left-4 -top-0 px-1 text-gray-400 transition-all duration-200 pointer-events-none
                     peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2
                     peer-placeholder-shown:text-sm peer-focus:left-2 peer-focus:-top-1 peer-focus:bg-black
                     peer-focus:text-xs peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:-top-2
                     peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
                     peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
        >
          Alternate Phone (Optional)
        </Label>
      </div>
      {errors.contact?.altPhone && (
        <p className="text-red-500 text-sm mt-[-15px]">
          {errors.contact.altPhone.message}
        </p>
      )}

      {/* Address Line 1 */}
      <div className="relative">
        <Input
          type="text"
          {...register("contact.address1", {
            required: "Address Line 1 is required",
          })}
          onBlur={() => trigger("contact.address1")}
          className="peer text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md w-full"
          placeholder=" "
        />
        <Label
          htmlFor="address1"
          className="absolute left-4 -top-0 px-1 text-gray-400 transition-all duration-200 pointer-events-none
                     peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2
                     peer-placeholder-shown:text-sm peer-focus:left-2 peer-focus:-top-1 peer-focus:bg-black
                     peer-focus:text-xs peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:-top-2
                     peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
                     peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
        >
          Address Line 1
        </Label>
      </div>
      {errors.contact?.address1 && (
        <p className="text-red-500 text-sm mt-[-15px]">
          {errors.contact.address1.message}
        </p>
      )}

      {/* Address Line 2 */}
      <div className="relative">
        <Input
          type="text"
          {...register("contact.address2")}
          onBlur={() => trigger("contact.address2")}
          className="peer text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md w-full"
          placeholder=" "
        />
        <Label
          htmlFor="address2"
          className="absolute left-4 -top-0 px-1 text-gray-400 transition-all duration-200 pointer-events-none
                     peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2
                     peer-placeholder-shown:text-sm peer-focus:left-2 peer-focus:-top-1 peer-focus:bg-black
                     peer-focus:text-xs peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:-top-2
                     peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
                     peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
        >
          Address Line 2 (Optional)
        </Label>
      </div>

      {/* City Dropdown */}
      <div className="flex flex-col gap-2">
        <Label className="px-1 text-white">City</Label>
        <Controller
          name="contact.city"
          control={control}
          rules={{ required: "City is required" }}
          render={({ field }) => (
            <Select
              value={field.value || ""}
              onValueChange={(value) => {
                field.onChange(value);
                trigger("contact.city");
              }}
            >
              <SelectTrigger className="text-white border border-gray-300 w-full">
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="karachi">Karachi</SelectItem>
                <SelectItem value="lahore">Lahore</SelectItem>
                <SelectItem value="islamabad">Islamabad</SelectItem>
                <SelectItem value="peshawar">Peshawar</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>
      {errors.contact?.city && (
        <p className="text-red-500 text-sm mt-[-15px]">
          {errors.contact.city.message}
        </p>
      )}

      {/* Postal Code */}
      <div className="relative">
        <Input
          type="text"
          {...register("contact.postalCode", {
            required: "Postal Code is required",
          })}
          onBlur={() => trigger("contact.postalCode")}
          className="peer text-white px-5 pt-6 pb-5 border border-gray-300 rounded-md w-full"
          placeholder=" "
        />
        <Label
          htmlFor="postalCode"
          className="absolute left-4 -top-0 px-1 text-gray-400 transition-all duration-200 pointer-events-none
                     peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2
                     peer-placeholder-shown:text-sm peer-focus:left-2 peer-focus:-top-1 peer-focus:bg-black
                     peer-focus:text-xs peer-focus:text-blue-600 peer-[&:not(:placeholder-shown)]:-top-2
                     peer-[&:not(:placeholder-shown)]:left-2 peer-[&:not(:placeholder-shown)]:bg-black
                     peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white"
        >
          Postal Code
        </Label>
      </div>
      {errors.contact?.postalCode && (
        <p className="text-red-500 text-sm mt-[-15px]">
          {errors.contact.postalCode.message}
        </p>
      )}

      {/* Country Dropdown */}
      <div className="flex flex-col gap-2">
        <Label className="px-1 text-white">Country</Label>
        <Controller
          name="contact.country"
          control={control}
          rules={{ required: "Country is required" }}
          render={({ field }) => (
            <Select
              value={field.value || ""}
              onValueChange={(value) => {
                field.onChange(value);
                trigger("contact.country");
              }}
            >
              <SelectTrigger className="text-white border border-gray-300 w-full">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pakistan">Pakistan</SelectItem>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="uae">UAE</SelectItem>
                <SelectItem value="usa">USA</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>
      {errors.contact?.country && (
        <p className="text-red-500 text-sm mt-[-15px]">
          {errors.contact.country.message}
        </p>
      )}
    </div>
  );
};

export default Step2;
