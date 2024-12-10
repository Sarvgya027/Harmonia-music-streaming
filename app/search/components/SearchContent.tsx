'use client'

import MediaItem from "@/components/MediaItem";
import { Song } from "@/types"

interface SearchContentProps {
  songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({songs}) => {
  if(songs.length === 0) {
    return (
      <div>
        No Songs Found
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-y-2 w-full">
      {songs.map((song) => (
        <div key={song.id}
        className="flex items-center gap-x-4 w-full"
         >
          <div className="flex-1">
            <MediaItem onClick={() => {}} data={song} /> 
              

          </div>
          {/* add like button */}
        </div>
      ))}
    </div>
  )
}

export default SearchContent
