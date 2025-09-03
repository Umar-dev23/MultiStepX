import { useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

const Step5 = ({ onProgress }) => {
  const {
    control,
    formState: { errors, touchedFields, isSubmitted },
    watch,
    trigger,
  } = useFormContext();

  const watchedFields = watch([
    "preferences.contactMode",
    "preferences.hobbies",
    "preferences.newsletter",
  ]);

  // Calculate progress
  useEffect(() => {
    const total = 3; // contactMode, hobbies, newsletter
    const filled = watchedFields.filter((v) =>
      Array.isArray(v)
        ? v.length > 0
        : v !== "" && v !== null && v !== undefined
    ).length;
    const progress = Math.round((filled / total) * 100);
    onProgress?.(progress);
  }, [watchedFields, onProgress]);

  return (
    <div className="space-y-6 text-white">
      {/* Preferred Mode of Contact */}
      <div className="space-y-3 text-white">
        <Label className="text-lg font-semibold">
          Preferred Mode of Contact?
        </Label>
        <Controller
          name="preferences.contactMode"
          control={control}
          rules={{ required: "Please select a contact mode" }}
          render={({ field }) => (
            <RadioGroup
              value={field.value || ""}
              onValueChange={(value) => {
                field.onChange(value);
                trigger("preferences.contactMode");
              }}
              className="flex gap-6"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  className="border-gray-400 text-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  value="email"
                  id="contact-email"
                />
                <Label htmlFor="contact-email">Email</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  className="border-gray-400 text-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  value="phone"
                  id="contact-phone"
                />
                <Label htmlFor="contact-phone">Phone</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  className="border-gray-400 text-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  value="sms"
                  id="contact-sms"
                />
                <Label htmlFor="contact-sms">SMS</Label>
              </div>
            </RadioGroup>
          )}
        />
        {errors.preferences?.contactMode && (
          <p className="text-red-500 text-sm mt-1">
            {errors.preferences.contactMode.message}
          </p>
        )}
      </div>

      {/* Hobbies and Interests */}
      <div className="space-y-3">
        <Label className="text-lg font-semibold">Hobbies & Interests?</Label>
        <Controller
          name="preferences.hobbies"
          control={control}
          rules={{
            validate: (value) =>
              (value && value.length > 0) || "Please select at least one hobby",
          }}
          render={({ field }) => (
            <div className="grid grid-cols-2 gap-4">
              {["Sports", "Music", "Reading", "Traveling", "Gaming"].map(
                (hobby, idx) => {
                  const checked = field.value?.includes(hobby) || false;
                  return (
                    <div key={idx} className="flex items-center gap-2">
                      <Checkbox
                        className="border-gray-400 text-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                        id={`hobby-${hobby}`}
                        checked={checked}
                        onCheckedChange={(checked) => {
                          let updated = field.value || [];
                          if (checked) {
                            updated = [...updated, hobby];
                          } else {
                            updated = updated.filter((h) => h !== hobby);
                          }
                          field.onChange(updated);
                          trigger("preferences.hobbies");
                        }}
                      />
                      <Label htmlFor={`hobby-${hobby}`}>{hobby}</Label>
                    </div>
                  );
                }
              )}
            </div>
          )}
        />
        {
          errors.preferences?.hobbies && (
            <p className="text-red-500 text-sm mt-1">
              {errors.preferences.hobbies.message}
            </p>
          )}
      </div>

      {/* Newsletter Subscription */}
      <div className="space-y-3">
        <Label className="text-lg font-semibold">Newsletter?</Label>
        <Controller
          name="preferences.newsletter"
          control={control}
          render={({ field }) => (
            <div className="flex items-center gap-2">
              <Checkbox
                className="border-gray-400 text-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                id="newsletter"
                checked={field.value || false}
                onCheckedChange={(checked) => {
                  field.onChange(checked);
                  trigger("preferences.newsletter");
                }}
              />
              <Label htmlFor="newsletter">Subscribe to our newsletter</Label>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default Step5;
