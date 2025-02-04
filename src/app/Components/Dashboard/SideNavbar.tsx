"use client";

import { useState, useEffect } from "react";
import { Nav } from "./ui/nav";

import {
  ShoppingCart,
  LayoutDashboard,
  UsersRound,
  Settings,
  ChevronRight
} from "lucide-react";
import { Button } from "./ui/button";
import { useWindowWidth } from "@react-hook/window-size";

export default function SideNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileWidth, setMobileWidth] = useState(false);

  // Ensure window size is only checked on the client
  useEffect(() => {
    const width = window.innerWidth < 768;
    setMobileWidth(width);
  }, []); // Runs only once after initial render


  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          { title: "Dashboard", href: "/Dashboard", icon: LayoutDashboard, variant: "default" },
          { title: "Users", href: "/users", icon: UsersRound, variant: "ghost" },
          { title: "Orders", href: "/orders", icon: ShoppingCart, variant: "ghost" },
          { title: "Settings", href: "/settings", icon: Settings, variant: "ghost" }
        ]}
      />
    </div>
  );
}
