import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminHeader } from "@/components/admin/admin-header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F9F9FB] font-sans">
      <AdminSidebar />
      <div className="pl-[280px]">
        <AdminHeader />
        <main className="pt-[90px] p-10 min-h-[calc(100vh-90px)]">
          {children}
        </main>
      </div>
    </div>
  );
}
