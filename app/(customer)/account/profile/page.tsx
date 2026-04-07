"use client";

import AccountPageHeader from "@/components/account/account-page-header";
import { useAuth } from "@/hooks/use-auth";
import { User, Mail, Phone, Camera, Shield, Key, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const steps = [
    { label: "Account", href: "/account" },
    { label: "Profile", isCurrent: true },
];

export default function ProfilePage() {
    const { user } = useAuth();

    return (
        <div className="space-y-12 pb-10">
            <AccountPageHeader
                title="Profile Settings"
                description="Manage your personal information, security preferences, and account status."
                steps={steps}
            >
                <Button className="h-11 px-6 rounded-xl bg-[#1A1A1A] text-[11px] font-black uppercase tracking-widest hover:opacity-90 transition-all gap-2">
                    <Save className="h-4 w-4" />
                    Save Changes
                </Button>
            </AccountPageHeader>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Profile Info Form */}
                <div className="lg:col-span-2 space-y-8">
                    <section className="space-y-6">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-5 w-1 bg-[#1A1A1A] rounded-full" />
                            <h3 className="text-lg font-bold">
                                Personal Information
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label
                                    htmlFor="firstName"
                                    className="text-[10px] font-black uppercase tracking-widest text-[#999999] ml-1"
                                >
                                    First Name
                                </Label>
                                <div className="relative">
                                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#999999]" />
                                    <Input
                                        id="firstName"
                                        defaultValue={
                                            user?.firstName?.split(" ")[0] || ""
                                        }
                                        className="h-12 pl-11 rounded-xl border-[#E5E5E5] bg-white focus-visible:ring-[#1A1A1A] font-medium"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label
                                    htmlFor="lastName"
                                    className="text-[10px] font-black uppercase tracking-widest text-[#999999] ml-1"
                                >
                                    Last Name
                                </Label>
                                <div className="relative">
                                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#999999]" />
                                    <Input
                                        id="lastName"
                                        defaultValue={
                                            user?.lastName
                                                ?.split(" ")
                                                .slice(1)
                                                .join(" ") || ""
                                        }
                                        className="h-12 pl-11 rounded-xl border-[#E5E5E5] bg-white focus-visible:ring-[#1A1A1A] font-medium"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <Label
                                    htmlFor="email"
                                    className="text-[10px] font-black uppercase tracking-widest text-[#999999] ml-1"
                                >
                                    Email Address
                                </Label>
                                <div className="relative">
                                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#999999]" />
                                    <Input
                                        id="email"
                                        type="email"
                                        defaultValue={user?.email || ""}
                                        className="h-12 pl-11 rounded-xl border-[#E5E5E5] bg-white focus-visible:ring-[#1A1A1A] font-medium"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <Label
                                    htmlFor="phone"
                                    className="text-[10px] font-black uppercase tracking-widest text-[#999999] ml-1"
                                >
                                    Phone Number
                                </Label>
                                <div className="relative">
                                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#999999]" />
                                    <Input
                                        id="phone"
                                        placeholder="+234 800 000 0000"
                                        className="h-12 pl-11 rounded-xl border-[#E5E5E5] bg-white focus-visible:ring-[#1A1A1A] font-medium"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-6 pt-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-5 w-1 bg-[#1A1A1A] rounded-full" />
                            <h3 className="text-lg font-bold">
                                Security & Password
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label
                                    htmlFor="currentPass"
                                    className="text-[10px] font-black uppercase tracking-widest text-[#999999] ml-1"
                                >
                                    Current Password
                                </Label>
                                <div className="relative">
                                    <Key className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#999999]" />
                                    <Input
                                        id="currentPass"
                                        type="password"
                                        placeholder="••••••••••••"
                                        className="h-12 pl-11 rounded-xl border-[#E5E5E5] bg-white focus-visible:ring-[#1A1A1A] font-medium"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label
                                    htmlFor="newPass"
                                    className="text-[10px] font-black uppercase tracking-widest text-[#999999] ml-1"
                                >
                                    New Password
                                </Label>
                                <div className="relative">
                                    <Key className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#999999]" />
                                    <Input
                                        id="newPass"
                                        type="password"
                                        placeholder="Min. 8 characters"
                                        className="h-12 pl-11 rounded-xl border-[#E5E5E5] bg-white focus-visible:ring-[#1A1A1A] font-medium"
                                    />
                                </div>
                            </div>
                        </div>
                        <Button
                            variant="outline"
                            className="h-11 px-6 rounded-xl border-[#E5E5E5] text-[10px] font-black uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all"
                        >
                            Update Password
                        </Button>
                    </section>
                </div>

                {/* Sidebar / Profile Avatar */}
                <div className="space-y-8">
                    <Card className="rounded-3xl border-[#F5F5F7] shadow-none overflow-hidden">
                        <CardContent className="p-8 flex flex-col items-center">
                            <div className="relative group mb-6">
                                <div className="h-32 w-32 rounded-3xl bg-[#F5F5F7] flex items-center justify-center text-4xl font-black text-[#1A1A1A] border-4 border-white shadow-lg overflow-hidden">
                                    {user?.firstName?.charAt(0) || "M"}
                                </div>
                                <Button className="absolute -bottom-2 -right-2 h-10 w-10 bg-[#1A1A1A] text-white rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-[1.02] transition-transform">
                                    <Camera className="h-4 w-4" />
                                </Button>
                            </div>
                            <h4 className="text-lg font-black text-[#1A1A1A] mb-1">
                                {user?.firstName || "Member"}
                            </h4>
                            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#999999]">
                                Pro Member
                            </p>

                            <div className="w-full mt-8 pt-8 border-t border-[#F5F5F7] space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#999999]">
                                        Status
                                    </span>
                                    <span className="flex items-center gap-1 text-[10px] font-black uppercase text-emerald-500">
                                        <Shield className="h-3 w-3" />
                                        Active
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#999999]">
                                        Language
                                    </span>
                                    <span className="text-[10px] font-black uppercase text-[#1A1A1A]">
                                        English (US)
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="p-8 bg-rose-50 rounded-2xl border border-rose-100 space-y-4">
                        <h4 className="text-sm font-black text-rose-600 uppercase tracking-widest">
                            Danger Zone
                        </h4>
                        <p className="text-[11px] text-rose-600/70 font-medium leading-relaxed">
                            Once you delete your account, there is no going
                            back. Please be certain.
                        </p>
                        <Button
                            variant="outline"
                            className="w-full h-11 rounded-xl border-rose-200 bg-white text-rose-600 text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-all"
                        >
                            Delete Account
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
