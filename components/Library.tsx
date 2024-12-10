import UseAuthModal from "@/hooks/useAuthModal";
import UseUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { BsPlusSquare } from "react-icons/bs";
import { TbPlaylist } from "react-icons/tb";
import MediaItem from "./MediaItem";

interface LibraryProps {
  songs: Song[];
}

const Library: React.FC<LibraryProps> = ({ songs }) => {
  const authModal = UseAuthModal();
  const uploadModal = UseUploadModal();
  const { user } = useUser();
  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
    // chec for subscription

    return uploadModal.onOpen();
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="inline-flex items-center gap-x-3">
          <TbPlaylist className="text-indigo-400" size={22} />
          <p className="text-slate-200 font-medium">Your Library</p>
        </div>
        <button
          onClick={onClick}
          className="p-2 rounded-lg hover:bg-indigo-500/10 transition-colors duration-200"
        >
          <BsPlusSquare
            className="text-indigo-400 hover:text-indigo-300"
            size={20}
          />
        </button>
      </div>
      <div className="flex flex-col gap-y-4 mt-4 px-3 ">
        {songs.map((item) => (
          <MediaItem onClick={() => {}} key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Library;
