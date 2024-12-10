'use client';

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";


import Box from "./Box";
import SidebarItem from "./SIdebarItem";
import Library from "./Library";
import { Song } from "@/types";

interface SidebarProps {
  children: React.ReactNode;
  song: Song[]
}

export const Sidebar = ({ children, song }: SidebarProps) => {
  const pathname = usePathname();

  const routes = useMemo(() => [
    {
      icon: HiHome,
      label: 'Home',
      active: pathname !== '/search',
      href: '/'
    },
    {
      icon: BiSearch,
      label: 'Search',
      active: pathname === '/search',
      href: '/search'
    }
  ], [pathname]);

  return (
    <div className="flex w-full h-screen bg-slate-950">
      <div 
        className="hidden md:flex flex-col gap-y-2 h-full w-[250px] p-2 
        bg-gradient-to-b from-slate-900 to-slate-950"
      >
        <Box>
          {/* side bar  */}
          <div className="flex flex-col gap-y-1 p-2">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto flex-1">
          {/* song library */}
          <Library songs={songs} />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2 px-2 bg-gradient-to-b from-slate-900/50 to-slate-950">
        {children}
      </main>
    </div>
  );
};