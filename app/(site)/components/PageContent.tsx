"use client";

import { Song } from "@/types";

interface PageContentProps {
  songs: Song[];
}

const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No Songs Available</div>;
  }
  return (
    <div
      className="
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    md:grid-cols-3 
    lg:grid-cols-4 
    xl:grid-cols-5 
    2xl:grid-cols-6 
    gap-4 
    mt-4
  "
    >
      {songs.map((song) => (
        <div
          key={song.id}
          className="
          group
          relative
          flex
          flex-col
          items-center
          justify-center
          rounded-xl
          overflow-hidden
          bg-slate-800/30
          hover:bg-slate-800/50
          transition-colors
          duration-300
          cursor-pointer
          p-3
          border
          border-slate-700/30
        "
        >
          <div
            className="
          relative 
          aspect-square 
          w-full
          h-full 
          rounded-xl 
          overflow-hidden
        "
          ></div>
          <div className="flex flex-col items-start w-full pt-4 gap-y-1">
            <p className="font-semibold truncate w-full text-slate-200">
              {song.title}
            </p>
            <p className="text-sm text-slate-400 truncate w-full">
              By {song.author}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PageContent;
