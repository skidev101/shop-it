import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type StatusType = 
  | "active" 
  | "flagged" 
  | "suspended" 
  | "settled" 
  | "processing" 
  | "in-stock" 
  | "low-stock" 
  | "out-of-stock"
  | "verified"
  | "pending";

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const statusConfig: Record<StatusType, { label: string; className: string }> = {
  active: { label: "Active", className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  flagged: { label: "Flagged", className: "bg-amber-50 text-amber-700 border-amber-200" },
  suspended: { label: "Suspended", className: "bg-rose-50 text-rose-700 border-rose-200" },
  settled: { label: "Settled", className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  processing: { label: "Processing", className: "bg-slate-100 text-slate-600 border-slate-200" },
  "in-stock": { label: "In Stock", className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  "low-stock": { label: "Low Stock", className: "bg-amber-50 text-amber-700 border-amber-200" },
  "out-of-stock": { label: "Out of Stock", className: "bg-rose-50 text-rose-700 border-rose-200" },
  verified: { label: "Verified", className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  pending: { label: "Pending", className: "bg-slate-100 text-slate-600 border-slate-200" },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status] || statusConfig.pending;
  
  return (
    <Badge 
      variant="outline" 
      className={cn("px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border", config.className, className)}
    >
      {config.label}
    </Badge>
  );
}
