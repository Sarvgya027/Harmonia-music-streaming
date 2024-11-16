// import Link from 'next/link';
// import React from 'react'
// import { IconType } from 'react-icons'
// import { twMerge } from 'tailwind-merge';

// interface SidebarItemProps {
//   icon: IconType;
//   label: string;
//   active?: boolean;
//   href: string;
// }

// function SidebarItem({ href, icon: Icon, label, active }: SidebarItemProps) {
//   return (
//     <Link href={href} className={twMerge(`flex flex-row h-auto items-center w-full gap-x-4 text-md cursor-pointer hover:text-white transition-all text-neutral-400 py-1`, active && `text-white`)}>
//       <Icon size={24} />
//       <p className='truncate w-full'>{label}</p>
//     </Link>
//   )
// }

// export default SidebarItem


import Link from 'next/link';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface SidebarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem = ({ href, icon: Icon, label, active }: SidebarItemProps) => (
  <Link 
    href={href} 
    className={twMerge(
      `flex flex-row items-center w-full gap-x-4 px-4 py-3 rounded-lg
      text-sm font-medium cursor-pointer transition-all duration-200
      text-slate-400 hover:bg-indigo-500/10 hover:text-indigo-400`,
      active && `bg-indigo-500/15 text-indigo-400`
    )}
  >
    <Icon size={20} />
    <p className="truncate w-full">{label}</p>
  </Link>
);

export default SidebarItem;