'use client'

import { Song } from "@/types"
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import Slider from "./Slider";
import usePlayer from "@/hooks/usePlayer";
import { useEffect, useState } from "react";
import useSound from "use-sound";

interface PlayerContentProps {
  song: Song;
  songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({song, songUrl}) => {
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const Icon = isPlaying ? BsPauseFill : BsPlayFill; 
  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;
  const player = usePlayer();

  const onPlayNext = () => {
    if(player.ids.length === 0){
      return;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const nextSong = player.ids[currentIndex + 1];

    if(!nextSong){
      return player.setId(player.ids[0])

    }

    player.setId(nextSong);
  }

  const onPlayPrevious = () => {
    if(player.ids.length === 0){
      return;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const previousSong = player.ids[currentIndex - 1];

    if(!previousSong){
      return player.setId(player.ids[player.ids.length - 1])

    }

    player.setId(previousSong);
  }

  const [play, { pause, sound }] = useSound(
    songUrl,
    {
      volume: volume,
      onPlay: () => setIsPlaying(true),
      onend: () => {
        setIsPlaying(false);
        onPlayNext();
      },
      onpause: () => setIsPlaying(false),
      format: ['mp3']
    }
  );

  const handlePlay = () => {
    if (!isPlaying) {
      play();
    } else {
      pause();
    }
  };
  
  useEffect(() => {
    sound?.play();
    
    return () => {
      sound?.unload();
    }
  }, [sound]);
  

  const toggleMute = () => {
      if(volume === 0){
        setVolume(1);
      } else {
        setVolume(0);
      }
  }

  return (
    <div className="fixed bottom-0 backdrop-blur-lg w-full py-2 h-[80px] px-4">
      <div className="grid grid-cols md:grid-cols-3 h-full max-w-[1500px] mx-auto">
        {/* Left section - Song info */}
        <div className="flex w-full justify-start">
          <div className="flex items-center gap-x-4">
            <MediaItem data={song} />
            <LikeButton songId={song.id} />
          </div>
        </div>

        {/* Mobile Play Button */}
        <div className="flex md:hidden col-auto w-full justify-end items-center">
          <div onClick={handlePlay} 
               className="h-10 w-10 flex items-center justify-center rounded-full bg-indigo-500 hover:bg-indigo-400 transition p-1 cursor-pointer">
            <Icon size={30} className="text-white"/>
          </div>
        </div>

        {/* Desktop Controls */}
        <div className="hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6">
          <AiFillStepBackward 
            onClick={onPlayPrevious} 
            size={30} 
            className="text-slate-400 hover:text-white cursor-pointer transition"
          /> 
          <div onClick={handlePlay} 
               className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500 hover:bg-indigo-400 transition cursor-pointer">
            <Icon size={30} className="text-white" />
          </div>
          <AiFillStepForward 
            onClick={onPlayNext}
            size={30}
            className="text-slate-400 hover:text-white cursor-pointer transition"
          />
        </div>

        {/* Volume Controls */}
        <div className="hidden md:flex w-full justify-end pr-4">
          <div className="flex items-center gap-x-2 w-[150px]">
            <VolumeIcon 
              onClick={toggleMute} 
              className="cursor-pointer text-slate-400 hover:text-white transition" 
              size={25} 
            />
            <Slider value={volume} onChange={(value) => setVolume(value)} />
          </div>
        </div>
      </div>
    </div>
);

}

export default PlayerContent
