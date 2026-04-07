'use client';

import { 
  ShieldCheck, 
  Search, 
  Filter, 
  AlertTriangle, 
  Info, 
  Lock, 
  User, 
  Globe,
  MoreVertical,
  ChevronRight,
  Download,
  Terminal
} from "lucide-react";
import { AdminCard } from "@/components/admin/admin-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AUDIT_LOGS = [
  { 
    id: "LOG-9281", 
    event: "Admin Login Success", 
    user: "liam_admin", 
    ip: "192.168.1.1", 
    location: "Tokyo, JP",
    time: "2 mins ago",
    type: "info"
  },
  { 
    id: "LOG-9282", 
    event: "Merchant Status Changed", 
    user: "system_auth", 
    ip: "Internal", 
    location: "Server",
    time: "14 mins ago",
    type: "warning"
  },
  { 
    id: "LOG-9283", 
    event: "Multiple Failed Login Attempts", 
    user: "vanguard_mch", 
    ip: "45.12.9.102", 
    location: "Berlin, DE",
    time: "42 mins ago",
    type: "critical"
  },
  { 
    id: "LOG-9284", 
    event: "System Config Updated", 
    user: "marcus_admin", 
    ip: "102.12.4.5", 
    location: "Seattle, US",
    time: "1 hour ago",
    type: "info"
  },
];

export default function SystemAuditPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-[32px] font-black tracking-tight text-[#1A1A1A]">System Audit</h1>
          <p className="text-[14px] text-[#999999] font-medium mt-1">Immutable ledger of all platform administrative actions</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-12 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 border-[#E5E5E5]">
            <Download className="h-4 w-4" />
            Download Security Report
          </Button>
          <Button className="h-12 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 bg-[#1A1A1A] text-white shadow-xl shadow-black/10">
            <Terminal className="h-4 w-4" />
            Real-time Streams
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <AdminCard 
          headerAction={
            <div className="flex items-center gap-4">
               <div className="flex items-center gap-2 px-4 py-2 bg-[#F5F5F7] rounded-xl border border-transparent focus-within:border-[#1A1A1A] transition-all">
                  <Search className="h-4 w-4 text-[#999999]" />
                  <input 
                    placeholder="Search logs by user, event, or IP..." 
                    className="bg-transparent border-none text-[12px] font-bold outline-none w-[320px]"
                  />
                </div>
                <Button variant="outline" className="h-10 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest gap-2 border-[#E5E5E5]">
                  <Filter className="h-3 w-3" />
                  Severity: All
                </Button>
            </div>
          }
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-[#F0F0F0]">
                  <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Event Type</th>
                  <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Actor</th>
                  <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Source IP</th>
                  <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Location</th>
                  <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Timestamp</th>
                  <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#999999]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0F0F0]">
                {AUDIT_LOGS.map((log) => (
                  <tr key={log.id} className="group hover:bg-[#F9F9FB] transition-all">
                    <td className="py-6">
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "h-8 w-8 rounded-lg flex items-center justify-center",
                          log.type === 'info' ? "bg-blue-50 text-blue-600" : 
                          log.type === 'warning' ? "bg-amber-50 text-amber-600" : 
                          "bg-rose-50 text-rose-600"
                        )}>
                          {log.type === 'info' ? <Info className="h-4 w-4" /> : 
                           log.type === 'warning' ? <AlertTriangle className="h-4 w-4" /> : 
                           <Lock className="h-4 w-4" />}
                        </div>
                        <span className="text-[13px] font-black text-[#1A1A1A]">{log.event}</span>
                      </div>
                    </td>
                    <td className="py-6">
                      <div className="flex items-center gap-2">
                        <User className="h-3 w-3 text-[#999999]" />
                        <span className="text-[12px] font-bold text-[#1A1A1A]">{log.user}</span>
                      </div>
                    </td>
                    <td className="py-6">
                      <span className="text-[12px] font-medium text-[#666666]">{log.ip}</span>
                    </td>
                    <td className="py-6">
                      <div className="flex items-center gap-2">
                        <Globe className="h-3 w-3 text-[#999999]" />
                        <span className="text-[12px] font-medium text-[#666666]">{log.location}</span>
                      </div>
                    </td>
                    <td className="py-6">
                      <span className="text-[12px] font-bold text-[#999999]">{log.time}</span>
                    </td>
                    <td className="py-6">
                      <Button variant="ghost" className="h-8 w-8 p-0 rounded-lg text-[#999999] hover:text-[#1A1A1A] hover:bg-white border border-transparent hover:border-[#E5E5E5]">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex items-center justify-center border-t border-[#F0F0F0] pt-6">
            <Button variant="outline" className="h-10 px-8 rounded-xl text-[10px] font-black uppercase tracking-widest border-[#E5E5E5]">
              Load More Audit Logs
            </Button>
          </div>
        </AdminCard>
      </div>
    </div>
  );
}
