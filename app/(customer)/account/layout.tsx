import AccountSidebar from "@/components/account/account-sidebar";
import AccountHeader from "@/components/account/account-header";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F9F9FB] font-sans">
      <AccountSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <AccountHeader />

        <main className="pt-[40px] px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
