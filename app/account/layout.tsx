import AccountSidebar from "@/components/account/account-sidebar";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <div className="bg-white min-h-screen w-full">
    //   <div className="px-4 lg:px-8 py-12">
    //     <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
    //       {/* Sidebar */}
    //       <AccountSidebar />

    //       {/* Main Content */}
    //       <main className="flex-1 min-w-0 w-full">
    //         {children}
    //       </main>
    //     </div>
    //   </div>
    // </div>

    <div className="flex min-h-screen bg-[#F9F9FB] font-sans">
      <AccountSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <main className="pt-[100px] p-6 lg:p-10 min-h-[calc(100vh-90px)]">
          {children}
        </main>
      </div>
    </div>
  );
}
