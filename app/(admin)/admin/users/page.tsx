'use client';

import { useState } from "react";
import Link from "next/link";
import { 
  Users, 
  UserPlus, 
  Search, 
  Filter, 
  Calendar, 
  MoreVertical, 
  CheckCircle2, 
  ShieldCheck,
  History,
  Lock,
  Flag,
  UserX,
  ChevronRight
} from "lucide-react";
import { AdminCard } from "@/components/admin/admin-card";
import { StatusBadge } from "@/components/admin/status-badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const USERS = [
  { 
    id: "#ATLAS-9928", 
    name: "Elena Rodriguez", 
    email: "elena.rod@atlas.com", 
    role: "SELLER", 
    status: "active" as const, 
    activity: "1,240 Sales", 
    activitySub: "Member since Jan 2023",
    img: "https://i.pravatar.cc/150?u=elena"
  },
  { 
    id: "#ATLAS-4412", 
    name: "Marcus Thorne", 
    email: "m.thorne@global.net", 
    role: "BUYER", 
    status: "flagged" as const, 
    activity: "42 Orders", 
    activitySub: "Member since Nov 2023",
    img: "https://i.pravatar.cc/150?u=marcus"
  },
  { 
    id: "#ATLAS-3319", 
    name: "Liam Chen", 
    email: "liam_c@venture.io", 
    role: "ADMIN", 
    status: "active" as const, 
    activity: "0 Activity", 
    activitySub: "Member since Mar 2024",
    img: "https://i.pravatar.cc/150?u=liam"
  },
  { 
    id: "#ATLAS-2104", 
    name: "James Vance", 
    email: "jvance@redacted.com", 
    role: "BUYER", 
    status: "suspended" as const, 
    activity: "12 Orders", 
    activitySub: "Banned Feb 2024",
    img: "https://i.pravatar.cc/150?u=james"
  },
];

export default function UserManagementPage() {
  const [selectedUser, setSelectedUser] = useState(USERS[0]);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-[32px] font-black tracking-tight text-[#1A1A1A]">User Management</h1>
          <p className="text-[14px] text-[#999999] font-medium mt-1">Showing <span className="text-[#1A1A1A] font-black">12,408</span> total active registered users</p>
        </div>
        <Button className="h-12 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 bg-[#3B4761] text-white shadow-xl shadow-[#3B4761]/20">
          <UserPlus className="h-4 w-4" />
          Add New User
        </Button>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* User List Table */}
        <div className="col-span-8">
          <AdminCard 
            headerAction={
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#F5F5F7] rounded-xl border border-transparent focus-within:border-[#1A1A1A] transition-all">
                  <Search className="h-4 w-4 text-[#999999]" />
                  <input 
                    placeholder="Search by name, email, or ID..." 
                    className="bg-transparent border-none text-[12px] font-bold outline-none w-[240px]"
                  />
                </div>
                <div className="h-8 w-[1px] bg-[#E5E5E5]" />
                <Button variant="outline" className="h-10 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 border-[#E5E5E5]">
                  Status: All
                </Button>
                <Button variant="outline" className="h-10 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 border-[#E5E5E5]">
                  Role: All
                </Button>
              </div>
            }
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-[#F0F0F0]">
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">User</th>
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Role</th>
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Status</th>
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Activity</th>
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0F0F0]">
                  {USERS.map((user) => (
                    <tr 
                      key={user.id} 
                      className={cn(
                        "group hover:bg-[#F9F9FB] transition-all cursor-pointer",
                        selectedUser.id === user.id && "bg-[#F9F9FB]"
                      )}
                      onClick={() => setSelectedUser(user)}
                    >
                      <td className="py-6">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12 rounded-2xl border border-white shadow-sm">
                            <AvatarImage src={user.img} />
                            <AvatarFallback className="font-black text-[10px]">{user.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="text-[13px] font-black text-[#1A1A1A]">{user.name}</h4>
                            <p className="text-[11px] font-medium text-[#999999]">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-6">
                        <span className="text-[10px] font-black bg-[#F5F5F7] px-2.5 py-1 rounded-md text-[#666666] tracking-widest">{user.role}</span>
                      </td>
                      <td className="py-6">
                        <div className="flex items-center gap-2">
                           <div className={cn(
                             "h-1.5 w-1.5 rounded-full",
                             user.status === 'active' ? "bg-emerald-500" : user.status === 'flagged' ? "bg-amber-500" : "bg-rose-500"
                           )} />
                           <span className="text-[12px] font-bold text-[#1A1A1A] capitalize">{user.status}</span>
                        </div>
                      </td>
                      <td className="py-6">
                        <div>
                          <p className="text-[12px] font-black text-[#1A1A1A]">{user.activity}</p>
                          <p className="text-[10px] font-medium text-[#999999]">{user.activitySub}</p>
                        </div>
                      </td>
                      <td className="py-6">
                        <Link href={`/admin/users/${user.id.replace('#', '')}/edit`}>
                          <Button variant="ghost" className="h-9 px-4 rounded-lg text-[10px] font-black uppercase tracking-widest text-[#999999] hover:text-[#1A1A1A] hover:bg-white border border-transparent hover:border-[#E5E5E5]">
                            View Profile
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AdminCard>
        </div>

        {/* Quick View Sidebar */}
        <div className="col-span-4">
          <div className="sticky top-[120px] space-y-8">
            <AdminCard className="bg-white">
              <div className="flex flex-col items-center text-center space-y-6 pt-4">
                <div className="relative">
                  <Avatar className="h-32 w-32 rounded-[40px] border-4 border-[#F5F5F7] shadow-xl">
                    <AvatarImage src={selectedUser.img} />
                    <AvatarFallback className="text-2xl font-black">{selectedUser.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="absolute bottom-1 right-1 h-8 w-8 bg-emerald-500 border-4 border-white rounded-full flex items-center justify-center text-white">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#1A1A1A] tracking-tight">{selectedUser.name}</h3>
                  <p className="text-[13px] font-medium text-[#999999] mt-1">{selectedUser.email}</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-4 py-1.5 bg-[#F5F5F7] text-[#1A1A1A] rounded-full text-[10px] font-black uppercase tracking-widest border border-[#E5E5E5]">Premium Seller</span>
                  <span className="px-4 py-1.5 bg-[#F5F5F7] text-[#1A1A1A] rounded-full text-[10px] font-black uppercase tracking-widest border border-[#E5E5E5]">ID: 489-02</span>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="p-4 rounded-2xl bg-[#F9F9FB] text-left border border-[#F0F0F0]">
                    <p className="text-[9px] font-black uppercase tracking-widest text-[#999999]">Join Date</p>
                    <p className="text-[13px] font-black text-[#1A1A1A] mt-1">Jan 12, 2023</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F9F9FB] text-left border border-[#F0F0F0]">
                    <p className="text-[9px] font-black uppercase tracking-widest text-[#999999]">Last Login</p>
                    <p className="text-[13px] font-black text-[#1A1A1A] mt-1">2 hours ago</p>
                  </div>
                </div>

                <div className="w-full space-y-4 pt-4 border-t border-[#F0F0F0]">
                  <div className="flex items-center justify-between">
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]">Recent Activity</h5>
                    <button className="text-[9px] font-black uppercase tracking-widest text-[#0047FF]">See Logs</button>
                  </div>
                  <div className="space-y-4">
                    {[
                      { icon: CheckCircle2, title: "Product Sale Confirmed", time: "10m", color: "bg-blue-50 text-blue-600" },
                      { icon: ShieldCheck, title: "Security Login", time: "2h", color: "bg-emerald-50 text-emerald-600" },
                      { icon: History, title: "Profile Updated", time: "1d", color: "bg-purple-50 text-purple-600" }
                    ].map((log, idx) => (
                      <div key={idx} className="flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className={cn("h-8 w-8 rounded-xl flex items-center justify-center", log.color)}>
                            <log.icon className="h-4 w-4" />
                          </div>
                          <span className="text-[11px] font-black text-[#1A1A1A] group-hover:text-[#0047FF] transition-colors">{log.title}</span>
                        </div>
                        <span className="text-[10px] font-bold text-[#999999]">{log.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full space-y-4 pt-6 border-t border-[#F0F0F0]">
                   <h5 className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A] text-left">Administrative Controls</h5>
                   <div className="grid grid-cols-2 gap-4">
                     <button className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-[#F5F5F7] hover:bg-[#1A1A1A] hover:text-white transition-all group">
                        <History className="h-5 w-5 text-[#999999] group-hover:text-white" />
                        <span className="text-[9px] font-black uppercase tracking-widest">Reset Password</span>
                     </button>
                     <button className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-[#F5F5F7] hover:bg-[#1A1A1A] hover:text-white transition-all group">
                        <Lock className="h-5 w-5 text-[#999999] group-hover:text-white" />
                        <span className="text-[9px] font-black uppercase tracking-widest">Permissions</span>
                     </button>
                     <button className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-[#F5F5F7] hover:bg-amber-500 hover:text-white transition-all group">
                        <Flag className="h-5 w-5 text-[#999999] group-hover:text-white" />
                        <span className="text-[9px] font-black uppercase tracking-widest">Flag Review</span>
                     </button>
                     <button className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-[#F5F5F7] hover:bg-rose-500 hover:text-white transition-all group">
                        <UserX className="h-5 w-5 text-[#999999] group-hover:text-white" />
                        <span className="text-[9px] font-black uppercase tracking-widest">Suspend</span>
                     </button>
                   </div>
                </div>

                <Link href={`/admin/users/${selectedUser.id.replace('#', '')}/edit`} className="w-full">
                  <Button variant="outline" className="w-full h-12 rounded-xl text-[10px] font-black uppercase tracking-widest border-[#E5E5E5] mt-4">
                    Edit Detailed Profile
                  </Button>
                </Link>
              </div>
            </AdminCard>
          </div>
        </div>
      </div>
    </div>
  );
}
