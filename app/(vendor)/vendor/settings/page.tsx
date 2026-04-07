"use client";

import { Store, User, Bell, Shield, CreditCard, Save } from "lucide-react";
import { AdminCard } from "@/components/admin/admin-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function VendorSettings() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-[32px] font-black tracking-tight text-[#1A1A1A]">
          Store Settings
        </h1>
        <p className="text-[14px] text-[#999999] font-medium mt-1">
          Configure your store profile, preferences, and payout methods.
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-8">
        <TabsList className="bg-[#F5F5F7] p-1 rounded-xl h-12">
          <TabsTrigger value="profile" className="rounded-lg px-6 text-[10px] font-black uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:text-[#1A1A1A] text-[#999999]">
            Store Profile
          </TabsTrigger>
          <TabsTrigger value="account" className="rounded-lg px-6 text-[10px] font-black uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:text-[#1A1A1A] text-[#999999]">
            Account
          </TabsTrigger>
          <TabsTrigger value="notifications" className="rounded-lg px-6 text-[10px] font-black uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:text-[#1A1A1A] text-[#999999]">
            Notifications
          </TabsTrigger>
          <TabsTrigger value="payouts" className="rounded-lg px-6 text-[10px] font-black uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:text-[#1A1A1A] text-[#999999]">
            Payouts
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-8">
          <AdminCard title="General Information" subtitle="This information will be displayed publicly to customers.">
            <div className="space-y-8">
              <div className="flex items-center gap-8">
                <Avatar className="h-24 w-24 rounded-2xl border-4 border-[#F5F5F7]">
                  <AvatarImage src="https://i.pravatar.cc/150?u=vanguard" />
                  <AvatarFallback className="text-xl font-black">VG</AvatarFallback>
                </Avatar>
                <div className="space-y-3">
                  <Button variant="outline" className="h-10 rounded-lg text-[10px] font-black uppercase tracking-widest border-[#E5E5E5]">
                    Change Logo
                  </Button>
                  <p className="text-[11px] text-[#999999] font-medium">
                    JPG, GIF or PNG. Max size of 2MB.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]">Store Name</Label>
                  <Input defaultValue="Vanguard Gear" className="h-12 bg-[#F5F5F7] border-none rounded-xl text-[13px] font-bold" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]">Store Email</Label>
                  <Input defaultValue="hello@vanguardgear.com" className="h-12 bg-[#F5F5F7] border-none rounded-xl text-[13px] font-bold" />
                </div>
                <div className="col-span-full space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]">Store Description</Label>
                  <Textarea 
                    defaultValue="Premium outdoor and tactical gear for the modern explorer. We focus on durability, functionality, and minimalist design." 
                    className="min-h-[120px] bg-[#F5F5F7] border-none rounded-xl text-[13px] font-bold py-4" 
                  />
                </div>
              </div>
            </div>
          </AdminCard>

          <AdminCard title="Store Location" subtitle="Physical address of your primary warehouse or storefront.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-full space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]">Street Address</Label>
                <Input defaultValue="1248 Industrial Way, Suite B" className="h-12 bg-[#F5F5F7] border-none rounded-xl text-[13px] font-bold" />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]">City</Label>
                <Input defaultValue="Portland" className="h-12 bg-[#F5F5F7] border-none rounded-xl text-[13px] font-bold" />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]">Postal Code</Label>
                <Input defaultValue="97201" className="h-12 bg-[#F5F5F7] border-none rounded-xl text-[13px] font-bold" />
              </div>
            </div>
          </AdminCard>

          <div className="flex justify-end">
            <Button className="bg-[#1A1A1A] text-white hover:bg-[#333333] rounded-xl px-10 h-12 text-[12px] font-black uppercase tracking-widest gap-2">
              <Save className="h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
           <AdminCard title="Notification Preferences" subtitle="Control which alerts you receive via email and push.">
              <div className="space-y-6">
                 {[
                    { title: "New Order Alerts", desc: "Get notified as soon as a customer places an order." },
                    { title: "Inventory Alerts", desc: "Receive warnings when products are low or out of stock." },
                    { title: "Payout Confirmations", desc: "Get notified when funds are transferred to your bank." },
                    { title: "Customer Messages", desc: "Direct alerts for new inquiries or support tickets." },
                 ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between py-2">
                       <div className="space-y-1">
                          <h4 className="text-[13px] font-black text-[#1A1A1A]">{item.title}</h4>
                          <p className="text-[11px] text-[#999999] font-medium">{item.desc}</p>
                       </div>
                       <Switch defaultChecked className="data-[state=checked]:bg-[#1A1A1A]" />
                    </div>
                 ))}
              </div>
           </AdminCard>
        </TabsContent>
      </Tabs>
    </div>
  );
}
