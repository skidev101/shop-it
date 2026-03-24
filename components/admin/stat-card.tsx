import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { AdminCard } from "./admin-card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  trend?: {
    value: string;
    isUp: boolean;
  };
  secondaryLabel?: string;
  icon?: LucideIcon;
  variant?: "default" | "accent";
  className?: string;
}

export function StatCard({ 
  label, 
  value, 
  trend, 
  secondaryLabel, 
  icon: Icon,
  variant = "default",
  className 
}: StatCardProps) {
  return (
    <AdminCard className={cn(
      "relative group overflow-hidden h-full", 
      variant === "accent" && "border-none bg-gradient-to-br from-[#1A1A1A] to-[#333333] text-white",
      className
    )}>
      <div className="flex justify-between items-start">
        <div className="space-y-4">
          <h4 className={cn(
            "text-[10px] font-black uppercase tracking-[0.2em]",
            variant === "accent" ? "text-white/50" : "text-[#999999]"
          )}>
            {label}
          </h4>
          <div className="space-y-1">
            <h2 className={cn(
              "text-[32px] font-black tracking-tight",
              variant === "accent" ? "text-white" : "text-[#1A1A1A]"
            )}>
              {value}
            </h2>
            {trend && (
              <div className="flex items-center gap-1.5 mt-2">
                <div className={cn(
                  "flex items-center gap-0.5 text-[11px] font-black uppercase tracking-widest",
                  trend.isUp ? "text-emerald-500" : "text-rose-500"
                )}>
                  {trend.isUp ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {trend.value}
                </div>
                {secondaryLabel && (
                  <span className={cn(
                    "text-[11px] font-medium",
                    variant === "accent" ? "text-white/40" : "text-[#E5E5E5]"
                  )}>
                    {secondaryLabel}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
        
        {Icon && (
          <div className={cn(
            "p-3 rounded-2xl transition-all duration-300",
            variant === "accent" ? "bg-white/10 text-white" : "bg-[#F5F5F7] text-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-white"
          )}>
            <Icon className="h-5 w-5" />
          </div>
        )}
      </div>

      {/* Background Decorative Pattern (inspired by mockup) */}
      {variant === "accent" && (
        <div className="absolute right-[-20px] bottom-[-20px] opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
          <div className="w-40 h-40 border-[20px] border-white rounded-full" />
        </div>
      )}
    </AdminCard>
  );
}
