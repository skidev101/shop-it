import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { Footer } from "@/components/footer";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F9F9FB] font-sans">
      <AdminSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader 
          searchPlaceholder="Search system entities, transactions, or logs..."
          userName="Admin Authority"
          userRole="Superuser Access"
        />

        <main className="pt-[40px] px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
