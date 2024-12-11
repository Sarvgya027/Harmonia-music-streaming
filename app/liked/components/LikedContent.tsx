'use client'

import LikeButton from '@/components/LikeButton'
import MediaItem from '@/components/MediaItem'
import { useUser } from '@/hooks/useUser'
import { Song } from '@/types'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

interface likedContentProps {
  songs: Song[]
}

const LikedContent:React.FC<likedContentProps> = ({songs}) => {
  const router = useRouter();
  const {isLoading, user} = useUser();

  useEffect(() => {
    if(!isLoading && !user){
      router.replace('/')
    }
  }, [isLoading, user, router]);
   
  if(songs.length === 0){
    return (
      <div className="flex flex-col gap-y-2 w-full px-6">
        <h1 className="text-slate-400 text-2xl font-medium">
          No liked songs yet
        </h1>
        <p className="text-slate-500">
          Your favorite tracks will appear here
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-y-2 w-full mt-60 p-6">
      {songs.map((song) => (
        <div 
          key={song.id} 
          className="
            flex items-center gap-x-4 w-full 
            bg-slate-800/20 
            hover:bg-slate-800/40 
            rounded-md 
            transition-colors
            duration-300
          "
        >
          <div className="flex-1">
            <MediaItem onClick={() => {}} data={song} />
          </div>
          <div className="mx-4">
            <LikeButton songId={song.id} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default LikedContent

//bug in this for like button not changing the songs list in liked page