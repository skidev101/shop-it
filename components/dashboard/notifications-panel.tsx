import { Bell, Check, ShoppingCart, Star, UserPlus, Inbox } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const notifications = [
  {
    id: 1,
    title: "New order received",
    description: "Order #ORD-1234 from John Doe",
    time: "2 mins ago",
    icon: ShoppingCart,
    unread: true,
  },
  {
    id: 2,
    title: "New user registered",
    description: "A new user just joined the platform",
    time: "1 hour ago",
    icon: UserPlus,
    unread: true,
  },
  {
    id: 3,
    title: "New review",
    description: "Product 'Summer T-Shirt' received a 5-star review",
    time: "5 hours ago",
    icon: Star,
    unread: false,
  },
];

export function NotificationsPanel() {
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative h-9 w-9 rounded-full transition-colors hover:bg-accent"
        >
          <Bell className="h-[20px] w-[20px] text-foreground/80" />
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 flex h-2 w-2 rounded-full bg-primary border-2 border-background" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="left"
        className="w-80 overflow-hidden rounded-xl border-border/40 shadow-lg"
      >
        <div className="flex items-center justify-between px-4 py-3">
          <DropdownMenuLabel className="p-0 text-sm font-bold tracking-tight">
            Notifications
          </DropdownMenuLabel>
          {unreadCount > 0 && (
            <Badge
              variant="secondary"
              className="px-1.5 py-0 h-4 text-[10px] font-bold"
            >
              {unreadCount} NEW
            </Badge>
          )}
        </div>
        <DropdownMenuSeparator className="m-0" />

        <div className="max-h-[380px] overflow-y-auto py-1">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className={cn(
                  "flex items-start gap-3 p-3 transition-colors cursor-pointer mx-1 my-0.5 rounded-lg focus:bg-accent/50",
                  notification.unread && "bg-accent/30",
                )}
              >
                <div
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/10",
                    notification.unread
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  <notification.icon className="h-4 w-4" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-[13px] font-bold leading-none text-foreground">
                      {notification.title}
                    </p>
                    {notification.unread && (
                      <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    )}
                  </div>
                  <p className="text-[12px] leading-snug text-muted-foreground line-clamp-2">
                    {notification.description}
                  </p>
                  <p className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-wider">
                    {notification.time}
                  </p>
                </div>
              </DropdownMenuItem>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
              <Inbox className="h-8 w-8 text-muted-foreground/30 mb-2" />
              <p className="text-sm font-medium text-muted-foreground">
                No notifications yet
              </p>
            </div>
          )}
        </div>

        <DropdownMenuSeparator className="m-0" />
        <div className="p-2">
          <Button
            variant="ghost"
            size="sm"
            className="w-full text-[11px] font-bold uppercase tracking-widest h-8 hover:bg-accent/50"
          >
            Mark all read
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
