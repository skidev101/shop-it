import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";

export default function AccountStatCard({
  label,
  value,
  icon: Icon,
  href,
  className,
}: {
  label: string;
  value: string | number;
  icon: any;
  href: string;
  className?: string;
}) {
  return (
    <Link href={href} className="block group">
      <Card
        className={cn(
          "border-none bg-[#F5F5F7] transition-all duration-300 group-hover:bg-[#1A1A1A] group-hover:shadow-xl",
          className,
        )}
      >
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#999999] group-hover:text-white/50 transition-colors">
                {label}
              </h4>
              <h2 className="text-3xl font-black tracking-tight text-[#1A1A1A] group-hover:text-white transition-colors">
                {value}
              </h2>
            </div>
            <div className="p-3 rounded-2xl bg-white text-[#1A1A1A] group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
              <Icon className="h-5 w-5" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
