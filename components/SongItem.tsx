"use client";

import { useLoadImage } from "@/hooks/useLoadImge";
import { Song } from "@/types";
import Image from "next/image";
import { BsPlayFill } from "react-icons/bs"; // Add this import

interface SongItemProps {
  data: Song;
  onClick: (id: string) => void;
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);

  return (
    <div
      onClick={() => onClick(data.id)}
      className="
        relative group flex flex-col items-center justify-center 
        rounded-md overflow-hidden gap-x-4 
        bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 
        transition p-3
      "
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image 
          alt={data.title} 
          className="object-cover" 
          src={imagePath || '/images/liked.png'} 
          fill  
        />
        {/* Add play button overlay */}
        <div className="
          absolute bottom-2 right-2
          opacity-0 group-hover:opacity-100
          transition-all duration-300
          translate-y-4 group-hover:translate-y-0
        ">
          <div className="
            flex items-center justify-center
            bg-indigo-500 rounded-full p-4
            drop-shadow-md
            hover:scale-110 hover:bg-indigo-400
            transition-all duration-200
          ">
            <BsPlayFill className="text-white text-xl" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full text-slate-200">
          {data.title}
        </p>
        <p className="text-sm text-slate-400 truncate w-full">
          By {data.author}
        </p>
      </div>
    </div>
  );
};

export default SongItem;
