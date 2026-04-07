'use client';

import { 
  Settings, 
  Globe, 
  Lock, 
  Bell, 
  ShieldCheck, 
  CreditCard, 
  Database,
  Save,
  ChevronRight
} from "lucide-react";
import { AdminCard } from "@/components/admin/admin-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-[32px] font-black tracking-tight text-[#1A1A1A]">Platform Settings</h1>
          <p className="text-[14px] text-[#999999] font-medium mt-1">Configure global parameters and system preferences</p>
        </div>
        <Button className="h-12 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 bg-[#1A1A1A] text-white shadow-xl shadow-black/10">
          <Save className="h-4 w-4" />
          Save All Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-8">
        <TabsList className="bg-[#F5F5F7] p-1 rounded-2xl h-14">
          <TabsTrigger value="general" className="rounded-xl px-8 text-[10px] font-black uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:shadow-sm">
            General
          </TabsTrigger>
          <TabsTrigger value="security" className="rounded-xl px-8 text-[10px] font-black uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:shadow-sm">
            Security
          </TabsTrigger>
          <TabsTrigger value="payments" className="rounded-xl px-8 text-[10px] font-black uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:shadow-sm">
            Payments
          </TabsTrigger>
          <TabsTrigger value="notifications" className="rounded-xl px-8 text-[10px] font-black uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:shadow-sm">
            Notifications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8 space-y-8">
              <AdminCard title="Platform Information">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-[#999999]">Platform Name</Label>
                      <Input defaultValue="Merchant Atlas" className="h-12 rounded-xl border-[#E5E5E5] font-bold" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-[#999999]">Support Email</Label>
                      <Input defaultValue="ops@atlas.com" className="h-12 rounded-xl border-[#E5E5E5] font-bold" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-[#999999]">Platform URL</Label>
                    <Input defaultValue="https://atlas.com" className="h-12 rounded-xl border-[#E5E5E5] font-bold" />
                  </div>
                </div>
              </AdminCard>

              <AdminCard title="Regional Configuration">
                 <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F9F9FB] border border-[#F0F0F0]">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-xl bg-white border border-[#E5E5E5] flex items-center justify-center">
                          <Globe className="h-5 w-5 text-[#1A1A1A]" />
                        </div>
                        <div>
                          <p className="text-[13px] font-black text-[#1A1A1A]">Multi-currency Support</p>
                          <p className="text-[11px] font-medium text-[#999999]">Allow transactions in local currencies</p>
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F9F9FB] border border-[#F0F0F0]">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-xl bg-white border border-[#E5E5E5] flex items-center justify-center">
                          <Database className="h-5 w-5 text-[#1A1A1A]" />
                        </div>
                        <div>
                          <p className="text-[13px] font-black text-[#1A1A1A]">Data Residency (EU)</p>
                          <p className="text-[11px] font-medium text-[#999999]">Strict adherence to GDPR data protocols</p>
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                 </div>
              </AdminCard>
            </div>

            <div className="col-span-4">
               <AdminCard title="System Status">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#666666]">Core API</span>
                      <span className="flex items-center gap-2 text-[10px] font-black uppercase text-emerald-500">
                        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        Operational
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#666666]">Database Cluster</span>
                      <span className="flex items-center gap-2 text-[10px] font-black uppercase text-emerald-500">
                        <div className="h-2 w-2 rounded-full bg-emerald-500" />
                        Operational
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#666666]">Storage Engine</span>
                      <span className="flex items-center gap-2 text-[10px] font-black uppercase text-amber-500">
                        <div className="h-2 w-2 rounded-full bg-amber-500" />
                        Degraded
                      </span>
                    </div>
                    <Button variant="outline" className="w-full h-11 rounded-xl text-[10px] font-black uppercase tracking-widest border-[#E5E5E5] mt-4">
                      Detailed Health Check
                    </Button>
                  </div>
               </AdminCard>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="security">
           <AdminCard title="Security Protocols">
              <div className="space-y-6">
                 <div className="flex items-center justify-between p-6 rounded-2xl bg-[#F9F9FB] border border-[#F0F0F0]">
                    <div>
                       <h4 className="text-[14px] font-black text-[#1A1A1A]">Two-Factor Authentication (2FA)</h4>
                       <p className="text-[12px] font-medium text-[#999999] mt-1">Enforce 2FA for all administrative accounts</p>
                    </div>
                    <Switch defaultChecked />
                 </div>
                 <div className="flex items-center justify-between p-6 rounded-2xl bg-[#F9F9FB] border border-[#F0F0F0]">
                    <div>
                       <h4 className="text-[14px] font-black text-[#1A1A1A]">Session Timeout</h4>
                       <p className="text-[12px] font-medium text-[#999999] mt-1">Automatically log out inactive sessions after 30 mins</p>
                    </div>
                    <Switch defaultChecked />
                 </div>
                 <div className="flex items-center justify-between p-6 rounded-2xl bg-[#F9F9FB] border border-[#F0F0F0]">
                    <div>
                       <h4 className="text-[14px] font-black text-[#1A1A1A]">IP Whitelisting</h4>
                       <p className="text-[12px] font-medium text-[#999999] mt-1">Restrict admin access to specific IP ranges</p>
                    </div>
                    <Button variant="outline" className="h-10 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest border-[#E5E5E5]">
                       Manage IPs
                    </Button>
                 </div>
              </div>
           </AdminCard>
        </TabsContent>
      </Tabs>
    </div>
  );
}
