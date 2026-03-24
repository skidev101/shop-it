'use client';

import { 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  ShieldCheck, 
  Lock, 
  UserX, 
  Save, 
  X,
  Info
} from "lucide-react";
import Link from "next/link";
import { AdminCard } from "@/components/admin/admin-card";
import { StatusBadge } from "@/components/admin/status-badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function EditUserPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-10 max-w-[1200px]">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <nav className="flex items-center gap-2 mb-4">
            <Link href="/admin/users" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#999999] hover:text-[#1A1A1A] transition-colors">Users</Link>
            <ChevronRight className="h-3 w-3 text-[#E5E5E5]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]">Edit Profile</span>
          </nav>
          <h1 className="text-[32px] font-black tracking-tight text-[#1A1A1A]">Edit User Profile</h1>
          <p className="text-[14px] text-[#999999] font-medium mt-1">Modify administrative details and platform access levels.</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/admin/users">
            <Button variant="outline" className="h-12 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest border-[#E5E5E5] bg-white">
              Cancel
            </Button>
          </Link>
          <Button className="h-12 px-8 rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 bg-[#1A1A1A] text-white shadow-xl shadow-black/10">
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Profile Snapshot */}
        <div className="col-span-4 space-y-8">
          <AdminCard className="bg-white">
            <div className="flex flex-col items-center text-center space-y-6 py-4">
              <div className="relative group cursor-pointer">
                <Avatar className="h-40 w-40 rounded-[48px] border-4 border-[#F5F5F7] shadow-xl group-hover:opacity-80 transition-all">
                  <AvatarImage src="https://i.pravatar.cc/150?u=elena" />
                  <AvatarFallback className="text-3xl font-black">ER</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-2 right-2 h-10 w-10 bg-[#1A1A1A] text-white rounded-2xl flex items-center justify-center border-4 border-white shadow-lg opacity-0 group-hover:opacity-100 transition-all">
                  <Camera className="h-4 w-4" />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-black text-[#1A1A1A]">Elena Rodriguez</h3>
                <p className="text-[13px] font-medium text-[#999999] mt-1">Senior Content Cartographer</p>
              </div>

              <div className="flex gap-2">
                <StatusBadge status="active" className="bg-[#1A1A1A] text-white border-none" />
                <span className="px-3 py-1 bg-[#F5F5F7] text-[#1A1A1A] rounded-full text-[10px] font-black uppercase tracking-widest border border-[#E5E5E5]">Administrator</span>
              </div>

              <div className="w-full grid grid-cols-1 gap-2 pt-4">
                {[
                  { label: "User ID", value: "#ATLAS-9928" },
                  { label: "Joined Date", value: "Mar 12, 2023" },
                  { label: "Last Login", value: "2 hours ago" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center px-4 py-3 rounded-xl bg-[#F9F9FB] border border-[#F0F0F0]">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#999999]">{item.label}</span>
                    <span className="text-[12px] font-black text-[#1A1A1A]">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-[#F0F0F0]">
                <div className="text-left space-y-1">
                  <p className="text-[9px] font-black uppercase tracking-widest text-[#999999]">Total Edits</p>
                  <p className="text-[18px] font-black text-[#1A1A1A]">1,284</p>
                </div>
                <div className="text-left space-y-1">
                  <p className="text-[9px] font-black uppercase tracking-widest text-[#999999]">Avg Sessions</p>
                  <p className="text-[18px] font-black text-[#1A1A1A]">4.2/day</p>
                </div>
              </div>
            </div>
          </AdminCard>

          <AdminCard title="Security & Compliance">
             <div className="space-y-6">
               <Button variant="outline" className="w-full h-12 rounded-xl text-[10px] font-black uppercase tracking-widest border-[#E5E5E5] gap-2 hover:bg-white">
                 <Lock className="h-4 w-4" />
                 Force Password Reset
               </Button>
               <Button variant="outline" className="w-full h-12 rounded-xl text-[10px] font-black uppercase tracking-widest border-rose-100 text-rose-600 hover:bg-rose-50 hover:border-rose-200 gap-2">
                 <UserX className="h-4 w-4" />
                 Lock Account Access
               </Button>
               
               <div className="p-4 rounded-2xl bg-[#F5F5F7] flex gap-3">
                 <Info className="h-5 w-5 text-[#999999] shrink-0" />
                 <p className="text-[11px] font-medium text-[#666666] leading-relaxed">
                   Modifying security settings will trigger an automated notification to the user's primary email and log a record in the system audit history.
                 </p>
               </div>
             </div>
          </AdminCard>
        </div>

        {/* Edit Forms */}
        <div className="col-span-8 space-y-8">
          <AdminCard title="Basic Information">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label className="text-[11px] font-black uppercase tracking-widest text-[#999999]">Full Name</Label>
                <Input defaultValue="Elena Rodriguez" className="h-12 bg-[#F5F5F7] border-none rounded-xl text-[13px] font-bold" />
              </div>
              <div className="space-y-3">
                <Label className="text-[11px] font-black uppercase tracking-widest text-[#999999]">Email Address</Label>
                <Input defaultValue="elena.r@merchantatlas.com" className="h-12 bg-[#F5F5F7] border-none rounded-xl text-[13px] font-bold" />
              </div>
              <div className="space-y-3">
                <Label className="text-[11px] font-black uppercase tracking-widest text-[#999999]">Phone Number</Label>
                <Input defaultValue="+1 (555) 012-3456" className="h-12 bg-[#F5F5F7] border-none rounded-xl text-[13px] font-bold" />
              </div>
              <div className="space-y-3">
                <Label className="text-[11px] font-black uppercase tracking-widest text-[#999999]">Timezone</Label>
                <Input defaultValue="Pacific Time (PT)" className="h-12 bg-[#F5F5F7] border-none rounded-xl text-[13px] font-bold" />
              </div>
              <div className="col-span-2 space-y-3">
                <Label className="text-[11px] font-black uppercase tracking-widest text-[#999999]">Bio</Label>
                <Textarea 
                  defaultValue="Expert in geographic market analysis with over 8 years of experience in content curation and vendor relations." 
                  className="min-h-[120px] bg-[#F5F5F7] border-none rounded-2xl text-[13px] font-bold p-4 leading-relaxed resize-none" 
                />
              </div>
            </div>
          </AdminCard>

          <AdminCard title="Role & Access Control">
            <div className="grid grid-cols-2 gap-8">
               <div className="space-y-3">
                <Label className="text-[11px] font-black uppercase tracking-widest text-[#999999]">User Role</Label>
                <Input defaultValue="Editor / Content Manager" className="h-12 bg-[#F5F5F7] border-none rounded-xl text-[13px] font-bold" />
              </div>
              <div className="space-y-3">
                <Label className="text-[11px] font-black uppercase tracking-widest text-[#999999]">Account Status</Label>
                <Input defaultValue="Active" className="h-12 bg-[#F5F5F7] border-none rounded-xl text-[13px] font-bold" />
              </div>
            </div>

            <div className="mt-10 space-y-6">
              <h5 className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]">Permission Matrix</h5>
              <div className="space-y-4">
                {[
                  { label: "Vendor Approval", desc: "Allow user to verify and launch new vendor profiles", default: true },
                  { label: "Financial Data Access", desc: "View sensitive revenue and commission reports", default: false },
                  { label: "System Configuration", desc: "Modify global application settings and theme", default: false },
                ].map((perm, idx) => (
                  <div key={idx} className="flex items-center justify-between p-5 rounded-2xl bg-[#F9F9FB] border border-[#F0F0F0]">
                    <div className="space-y-1">
                      <p className="text-[13px] font-black text-[#1A1A1A]">{perm.label}</p>
                      <p className="text-[11px] font-medium text-[#999999]">{perm.desc}</p>
                    </div>
                    <Switch defaultChecked={perm.default} className="data-[state=checked]:bg-[#1A1A1A]" />
                  </div>
                ))}
              </div>
            </div>
          </AdminCard>

          <AdminCard title="System Notes (Admin Only)">
             <div className="space-y-3">
                <Label className="text-[11px] font-black uppercase tracking-widest text-[#999999]">Internal Comments</Label>
                <Textarea 
                  placeholder="Enter administrative comments or internal observations about this user..." 
                  className="min-h-[150px] bg-[#F5F5F7] border-none rounded-2xl text-[13px] font-bold p-4 leading-relaxed resize-none" 
                />
              </div>
          </AdminCard>

          <div className="flex items-center justify-between pt-4">
             <button className="text-[11px] font-black uppercase tracking-widest text-[#999999] hover:text-rose-600 transition-colors">Discard Changes</button>
             <Button className="h-14 px-12 rounded-2xl text-[11px] font-black uppercase tracking-widest gap-2 bg-[#3B4761] text-white shadow-xl shadow-[#3B4761]/20">
               Update Profile
             </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
