"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import {
  BarChart3,
  CreditCard,
  DollarSign,
  Home,
  LineChart,
  LogOut,
  Menu,
  PieChart,
  Settings,
  Target,
  Wallet,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import EditProfile from "@/components/dashboard/EditProfile";
import toast from "react-hot-toast";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);

  // Redirect if not authenticated
  if (status === "unauthenticated") {
    // router.push("/login");
    window.open("/");
    return null;
  }

  // Show loading state
  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  const routes = [
    {
      label: "Dashboard",
      icon: Home,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Transactions",
      icon: CreditCard,
      href: "/dashboard/transactions",
      active: pathname === "/dashboard/transactions",
    },
    {
      label: "Savings Goals",
      icon: Target,
      href: "/dashboard/goals",
      active: pathname === "/dashboard/goals",
    },
    {
      label: "Insights",
      icon: PieChart,
      href: "/dashboard/insights",
      active: pathname === "/dashboard/insights",
    },
    {
      label: "Budget",
      icon: Wallet,
      href: "/dashboard/budget",
      active: pathname === "/dashboard/budget",
    },
    {
      label: "AI Assistant",
      href: "/dashboard/ai-assistant",
      icon: MessageSquare,
      active: pathname === "/dashboard/ai-assistant",
    },
  ];

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    toast.success("Logged out successfully");
    router.push("/");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col pr-0 sm:max-w-xs">
            <nav className="grid gap-2 text-lg font-medium">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
                onClick={() => setOpen(false)}
              >
                <img src="/logo.png" alt="" className="size-10 rounded-md" />
                <span className="sr-only">AstraFin</span>
              </Link>
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent",
                    route.active ? "bg-accent" : "transparent"
                  )}
                >
                  <route.icon className="h-5 w-5" />
                  {route.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto">
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                onClick={handleSignOut}
              >
                <LogOut className="h-5 w-5" />
                Logout
              </Button>
            </div>
          </SheetContent>
        </Sheet>
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <img src="/logo.png" alt="" className="size-10 rounded-md" />
          <span>AstraFin</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <EditProfile />

          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex"
            onClick={handleSignOut}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>
      <div className="grid flex-1 md:grid-cols-[240px_1fr]">
        <aside className="hidden border-r md:block">
          <nav className="grid gap-2 p-4 text-sm">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent",
                  route.active ? "bg-accent" : "transparent"
                )}
              >
                <route.icon className="h-4 w-4" />
                {route.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
