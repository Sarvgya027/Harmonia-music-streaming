// "use client";

// import React, { useState } from "react";
// import Modal from "./Modal";
// import UseUploadModal from "@/hooks/useUploadModal";
// import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// import Input from "./Input";
// import Button from "./Button";

// const UploadModal = () => {
//   const uploadModal = UseUploadModal();
//   const [isLoading, setIsLoading] = useState();

//   const { register, handleSubmit, reset } = useForm<FieldValues>({
//     defaultValues: {
//       author: "",
//       title: "",
//       song: null,
//       image: null,
//     },
//   });
//   const onChange = (open: boolean) => {
//     if (!open) {
//       reset();
//       uploadModal.onClose();
//     }
//   };

//   const onSubmit: SubmitHandler<FieldValues> = (values) => {};

//   return (
//     <Modal
//       title="Add a song"
//       description="Upload MP3 file"
//       isOpen={uploadModal.isOpen}
//       onChange={onChange}
//     >
//       <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
//         <Input
//           id="title"
//           disabled={isLoading}
//           {...register("title", { required: true })}
//           placeholder="Song title"
//         />
//         <Input
//           id="author"
//           disabled={isLoading}
//           {...register("author", { required: true })}
//           placeholder="Song author"
//         />

//         <div>
//           <div className="pb-1">Select a song file</div>
//           <Input
//             id="song"
//             type="file"
//             disabled={isLoading}
//             {...register("song", { required: true })}
//             accept=".mp3"
//           />
//         </div>
//         <div>
//           <div className="pb-1">Select an image for song cover</div>
//           <Input
//             id="image"
//             type="file"
//             disabled={isLoading}
//             {...register("image", { required: true })}
//             accept="image/*"
//           />
//         </div>
//         <Button disabled={isLoading} type="submit">Create</Button>
//       </form>
//     </Modal>
//   );
// };

// export default UploadModal;


"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import UseUploadModal from "@/hooks/useUploadModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";

const UploadModal = () => {
  const uploadModal = UseUploadModal();
  const [isLoading, setIsLoading] = useState();

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

  const onSubmit: SubmitHandler<FieldValues> = (values) => {};

  return (
    <Modal
      title="Add a song"
      description="Upload your favorite tracks"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form 
        className="flex flex-col gap-y-6" 
        onSubmit={handleSubmit(onSubmit)}
      >
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

        <Button 
          disabled={isLoading} 
          type="submit"
          className="w-full"
        >
          Upload Song
        </Button>
      </form>
    </Modal>
  );
};

export default UploadModal;
