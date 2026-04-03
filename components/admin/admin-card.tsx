import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AdminCardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  headerAction?: React.ReactNode;
  footer?: React.ReactNode;
}

export function AdminCard({ 
  title, 
  subtitle, 
  children, 
  className, 
  contentClassName, 
  headerAction,
  footer
}: AdminCardProps) {
  return (
    <Card className={cn("border-[#E5E5E5] shadow-none rounded-2xl overflow-hidden", className)}>
      {(title || subtitle || headerAction) && (
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6 pt-7 px-7">
          <div className="space-y-1.5">
            {title && (
              <CardTitle className="text-[13px] font-black uppercase tracking-[0.15em] text-[#1A1A1A]">
                {title}
              </CardTitle>
            )}
            {subtitle && (
              <p className="text-[12px] text-[#999999] font-medium leading-relaxed max-w-[400px]">
                {subtitle}
              </p>
            )}
          </div>
          {headerAction}
        </CardHeader>
        
      )}
      <CardContent className={cn("px-7 pb-7", contentClassName)}>
        {children}
      </CardContent>
      {footer && (
        <div className="px-7 py-5 bg-[#F9F9F9] border-t border-[#E5E5E5]">
          {footer}
        </div>
      )}
    </Card>
  );
}
