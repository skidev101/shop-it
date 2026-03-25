'use client';

import { cn } from "@/lib/utils";

interface AccountPageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export function AccountPageHeader({
  title,
  description,
  className,
  children
}: AccountPageHeaderProps) {
  return (
    <div className={cn("flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12", className)}>
      <div>
        <h2 className="text-3xl font-black tracking-tight text-[#1A1A1A] mb-2">
          {title}
        </h2>
        {description && (
          <p className="text-[#666666] text-sm font-medium">
            {description}
          </p>
        )}
      </div>
      {children && (
        <div className="flex items-center gap-4">
          {children}
        </div>
      )}
    </div>
  );
}
