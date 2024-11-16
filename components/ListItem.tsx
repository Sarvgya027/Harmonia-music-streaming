'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BsPlayBtn } from 'react-icons/bs';
import { CgPlayButton } from 'react-icons/cg';
import { PiLayout, PiLayoutDuotone } from 'react-icons/pi';

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ href, image, name }) => {
  const router = useRouter();

  const onClick = () => {
    // add auth
    router.push(href);
  };

  return (
    <button 
      onClick={onClick}
      className="
        group relative flex items-center gap-x-4
        w-full rounded-xl overflow-hidden
        bg-slate-800/30 hover:bg-slate-800/50
        backdrop-blur-sm
        transition-all duration-300
        p-3 pr-8
        border border-slate-700/30
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900
      "
    >
      {/* Image Container */}
      <div className="
        relative aspect-square w-12 rounded-lg overflow-hidden
        ring-2 ring-slate-700/30
        transition-transform duration-300
        group-hover:scale-105
      ">
        <Image 
          src={image} 
          className="object-cover" 
          fill 
          alt={name}
        />
      </div>

      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="
          text-left text-sm font-medium truncate
          text-slate-200 group-hover:text-white
          transition duration-300
        ">
          {name}
        </p>
        <p className="
          text-left text-xs truncate
          text-slate-400 group-hover:text-slate-300
          transition duration-300
        ">
          Click to play
        </p>
      </div>

      {/* Play Icon - Appears on Hover */}
      <div className="
        absolute right-4 bottom-4
        opacity-0 scale-0 translate-y-3
        group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
        transition-all duration-300
      ">
        <CgPlayButton className="w-10 h-10 text-indigo-400" />
      </div>

      {/* Hover Gradient */}
      <div className="
        absolute inset-0 
        bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-indigo-500/10
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
      "/>
    </button>
  );
};

export default ListItem;