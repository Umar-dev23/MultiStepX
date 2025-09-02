import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Step4 = () => {
  const [loanStatus, setLoanStatus] = useState("no");

  return (
    <div className="space-y-6 text-white">
      {/* Monthly Income */}
      <div className="space-y-2">
        <Label htmlFor="income" className="text-lg font-semibold">
          Monthly Income
        </Label>
        <Input
          id="income"
          type="number"
          placeholder="Enter your monthly income"
          className="bg-transparent text-white"
        />
      </div>

      {/* Loan Status */}
      <div className="space-y-2">
        <Label className="text-lg font-semibold">Loan Status</Label>
        <RadioGroup
          value={loanStatus}
          onValueChange={setLoanStatus}
          className="flex gap-6"
         
        >
          <div className="flex items-center gap-2">
            <RadioGroupItem  className="border-gray-400 text-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600" value="yes" id="loan-yes" />
            <Label htmlFor="loan-yes">Yes</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem  className="border-gray-400 text-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600" value="no" id="loan-no" />
            <Label htmlFor="loan-no">No</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Loan Amount (conditional) */}
      {loanStatus === "yes" && (
        <div className="space-y-2">
          <Label htmlFor="loanAmount" className="text-lg font-semibold">
            Loan Amount
          </Label>
          <Input
            id="loanAmount"
            type="number"
            placeholder="Enter loan amount"
            className="bg-transparent text-white"
          />
        </div>
      )}

      {/* Credit Score */}
      <div className="space-y-2">
        <Label htmlFor="creditScore" className="text-lg font-semibold">
          Credit Score
        </Label>
        <Input
          id="creditScore"
          type="number"
          placeholder="Enter your credit score"
          className="bg-transparent text-white"
        />
      </div>
    </div>
  );
};

export default Step4;
