'use client';

import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
  id: number;
  label: string;
}

interface CheckoutStepsProps {
  currentStep: number;
  steps: Step[];
}

export function CheckoutSteps({ currentStep, steps }: CheckoutStepsProps) {
  return (
    <div className="flex items-center justify-center w-full mb-8">
      {steps.map((step, index) => {
        const isCompleted = currentStep > step.id;
        const isCurrent = currentStep === step.id;

        return (
          <div key={step.id} className="flex items-center">
            {/* Step Circle */}
            <div className="flex flex-col items-center gap-2">
              <div
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors duration-300",
                  isCompleted ? "bg-[#0047FF] border-[#0047FF] text-white" : 
                  isCurrent ? "border-[#0047FF] text-[#0047FF] font-bold" : 
                  "border-muted-foreground/30 text-muted-foreground"
                )}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : step.id}
              </div>
              <span className={cn(
                "text-xs font-medium absolute mt-10 w-max transition-colors duration-300",
                isCurrent ? "text-[#0047FF]" : "text-muted-foreground"
              )}>
                {step.label}
              </span>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div 
                className={cn(
                  "w-12 sm:w-24 h-[2px] mx-2 mb-4 transition-colors duration-300",
                  isCompleted ? "bg-[#0047FF]" : "bg-muted-foreground/20"
                )} 
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
