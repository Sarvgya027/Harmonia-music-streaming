"use client";

import React, { useState } from "react";
import uniqid from "uniqid";
import Modal from "./Modal";
import UseUploadModal from "@/hooks/useUploadModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import toast from "react-hot-toast";
import { tree } from "next/dist/build/templates/app-page";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

const UploadModal = () => {
  const uploadModal = UseUploadModal();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    // console.log(values)
    try {
      setIsLoading(true);

      const imageFile = values.image?.[0];
      const songFile = values.song?.[0];

      if (!imageFile || !songFile || !user) {
        toast.error("Missing fields");
        return;
      }
      const uniqueId = uniqid();

      //upload song
      const { data: songData, error: songError } = await supabaseClient.storage
        .from("songs")
        .upload(`song-${values.title}-${uniqueId}`, songFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (songError) {
        setIsLoading(false);
        console.log(songError.message)
        return toast.error(`Failed to upload song.`);
      }

      //upload image
      const { data: imageData, error: imageError } =
        await supabaseClient.storage
          .from("images")
          .upload(`image-${values.title}-${uniqueId}`, imageFile, {
            cacheControl: "3600",
            upsert: false,
          });

      if (imageError) {
        setIsLoading(false);
        return toast.error(`Failed to upload image.`);
      }

      const { error: supabaseError } = await supabaseClient
        .from("songs")
        .insert({
          user_id: user.id,
          title: values.title,
          author: values.author,
          image_path: imageData?.path,
          song_path: songData.path,
        });

      if (supabaseError) {
        setIsLoading(false);
        return toast.error(supabaseError.message);
      }

      router.refresh();
      setIsLoading(false);
      toast.success("Song created");
      reset();
      uploadModal.onClose();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Add a song"
      description="Upload your favorite tracks"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form className="flex flex-col gap-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-2">
          <Input
            id="title"
            disabled={isLoading}
            {...register("title", { required: true })}
            placeholder="Song title"
            className="focus:ring-indigo-500"
          />
          <Input
            id="author"
            disabled={isLoading}
            {...register("author", { required: true })}
            placeholder="Song author"
            className="focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col gap-y-4">
          <div className="space-y-2">
            <label
              htmlFor="song"
              className="text-sm font-medium text-slate-300"
            >
              Select a song file
            </label>
            <Input
              id="song"
              type="file"
              disabled={isLoading}
              {...register("song", { required: true })}
              accept=".mp3"
              className="
                file:mr-4 
                file:py-2 
                file:px-4
                file:rounded-lg
                file:border-0
                file:text-sm
                file:font-medium
                file:bg-indigo-500/10
                file:text-indigo-400
                hover:file:bg-indigo-500/20
                file:transition
                file:duration-300
              "
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="image"
              className="text-sm font-medium text-slate-300"
            >
              Select an image for song cover
            </label>
            <Input
              id="image"
              type="file"
              disabled={isLoading}
              {...register("image", { required: true })}
              accept="image/*"
              className="
                file:mr-4 
                file:py-2 
                file:px-4
                file:rounded-lg
                file:border-0
                file:text-sm
                file:font-medium
                file:bg-indigo-500/10
                file:text-indigo-400
                hover:file:bg-indigo-500/20
                file:transition
                file:duration-300
              "
            />
          </div>
        </div>

        <Button disabled={isLoading} type="submit" className="w-full">
          Upload Song
        </Button>
      </form>
    </Modal>
  );
};

export default UploadModal;
