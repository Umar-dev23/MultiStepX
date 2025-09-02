import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

const Step5 = () => {
  return (
    <div className="space-y-6 text-white">
      {/* Preferred Mode of Contact */}
      <div className="space-y-3">
        <Label className="text-lg font-semibold">
          Preferred Mode of Contact?
        </Label>
        <RadioGroup defaultValue="email" className="flex gap-6">
          <div className="flex items-center gap-2">
            <RadioGroupItem   className="border-gray-400 text-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600" value="email" id="contact-email" />
            <Label htmlFor="contact-email">Email</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem   className="border-gray-400 text-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600" value="phone" id="contact-phone" />
            <Label htmlFor="contact-phone">Phone</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem className="border-gray-400 text-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"   value="sms" id="contact-sms" />
            <Label htmlFor="contact-sms">SMS</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Hobbies and Interests */}
      <div className="space-y-3">
        <Label className="text-lg font-semibold">Hobbies & Interests?</Label>
        <div className="grid grid-cols-2 gap-4">
          {["Sports", "Music", "Reading", "Traveling", "Gaming"].map(
            (hobby, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Checkbox className="border-gray-400 text-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"  id={`hobby-${hobby}`} />
                <Label htmlFor={`hobby-${hobby}`}>{hobby}</Label>
              </div>
            )
          )}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="space-y-3">
        <Label className="text-lg font-semibold">Newsletter?</Label>
        <div className="flex items-center gap-2">
          <Checkbox className="border-gray-400 text-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"  id="newsletter" />
          <Label htmlFor="newsletter">Subscribe to our newsletter</Label>
        </div>
      </div>
    </div>
  );
};

export default Step5;
