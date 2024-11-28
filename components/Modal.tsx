// import React from "react";
// import * as Dialog from "@radix-ui/react-dialog";
// import { IoMdClose } from "react-icons/io";

// interface ModalProps {
//   isOpen: boolean;
//   onChange: (open: boolean) => void;
//   title: string;
//   description: string;
//   children: React.ReactNode;
// }

// const Modal: React.FC<ModalProps> = ({
//   isOpen,
//   onChange,
//   title,
//   description,
//   children,
// }) => {
//   return (
//     <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
//       <Dialog.Portal>
//         <Dialog.Overlay className="bg-neutral-700/10 backdrop-blur-sm fixed inset-0" />
//         <Dialog.Content className="fixed drop-shadow-md border border-neutral-500 top-[50%] left-[50%] max-x-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-neutral-800 p-[25px] focus:outline-none">
//           <Dialog.Title className="text-xl font-bold mb-4 text-center">{title}</Dialog.Title>
//           <Dialog.Description>{description}</Dialog.Description>
//           <div>
//             {children}
//           </div>
//           <Dialog.Close asChild>
//             <button>
//               <IoMdClose />
//             </button>
//           </Dialog.Close>
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// };

// export default Modal;

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-slate-900/80 backdrop-blur-sm fixed inset-0" />
        <Dialog.Content className="
          fixed 
          drop-shadow-2xl 
          border border-slate-700/30
          top-[50%] 
          left-[50%] 
          max-x-full 
          h-full 
          md:h-auto 
          md:max-h-[85vh] 
          w-full 
          md:w-[90vw] 
          md:max-w-[450px] 
          translate-x-[-50%] 
          translate-y-[-50%] 
          rounded-xl 
          bg-slate-800/90 
          p-6
          focus:outline-none
          focus-visible:ring-2 
          focus-visible:ring-indigo-500 
          focus-visible:ring-offset-2
        ">
          <Dialog.Title className="text-xl text-slate-200 font-bold mb-4 text-center">
            {title}
          </Dialog.Title>
          <Dialog.Description className="text-slate-400 text-sm mb-5">
            {description}
          </Dialog.Description>
          <div>{children}</div>
          <Dialog.Close asChild>
            <button className="
              absolute 
              top-4 
              right-4 
              p-2 
              rounded-full 
              text-slate-400 
              hover:text-white 
              hover:bg-slate-700/50
              transition
              duration-300
            ">
              <IoMdClose size={20} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
