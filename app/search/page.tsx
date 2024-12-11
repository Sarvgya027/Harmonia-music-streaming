// // // import getSongsByTitle from "@/actions/getSongsByTitle"
// // // import Header from "@/components/Header";
// // // import SearchInput from "@/components/SearchInput";
// // // import SearchContent from "./components/SearchContent";

// // // interface SearchProps {
// // //   searchParams: {
// // //     title: string
// // //   }
// // // }

// // // const Search = async ({searchParams}: SearchProps) => {
// // //   const songs = await getSongsByTitle(searchParams.title);

// // //   return (
// // //     <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      
// // //       <Header className="from-bg-neutral-900">
// // //         <div className="mb-2 flex flex-col gap-y-6">
// // //           <h1>
// // //             Search
// // //           </h1>
// // //           <SearchInput />

// // //         </div>
// // //       </Header>
// // //       <SearchContent  />
// // //     </div>
// // //   )
// // // }

// // // export default Search;

// // import getSongsByTitle from "@/actions/getSongsByTitle"
// // import Header from "@/components/Header";
// // import SearchInput from "@/components/SearchInput";
// // import SearchContent from "./components/SearchContent";

// // interface SearchProps {
// //   searchParams: {
// //     title: string
// //   }
// // }

// // const Search = async ({searchParams}: SearchProps) => {
// //   const songs = await getSongsByTitle(searchParams.title);

// //   return (
// //     <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
// //       <Header className="from-bg-neutral-900">
// //         <div className="mb-2 flex flex-col gap-y-6">
// //           <h1 className="text-white text-3xl font-semibold">
// //             Search
// //           </h1>
// //           <SearchInput />
// //         </div>
// //       </Header>
// //       <div className="mt-32 px-6">
// //         <SearchContent songs={} />
// //       </div>
// //     </div>
// //   );
// // }

// // export default Search;

// import getSongsByTitle from "@/actions/getSongsByTitle"
// import Header from "@/components/Header";
// import SearchInput from "@/components/SearchInput";
// import SearchContent from "./components/SearchContent";

// interface SearchProps {
//   searchParams: {
//     title: string
//   }
// }

// const Search = async ({searchParams}: SearchProps) => {
//   const songs = await getSongsByTitle(searchParams.title);

//   return (
//     <div className="
//       bg-slate-950 
//       rounded-lg 
//       h-full w-full 
//       overflow-hidden overflow-y-auto
//     ">
//       <Header className="from-slate-900">
//         <div className="mb-2 flex flex-col gap-y-6">
//           <h1 className="
//             text-slate-200 
//             text-3xl 
//             font-bold
//           ">
//             Search your music
//           </h1>
//           <SearchInput />
//         </div>
//       </Header>

//       <div className="
//         mt-32 
//         px-6 
//         space-y-4
//       ">
//         {searchParams.title && (
//           <h2 className="text-slate-400 text-lg font-medium">
//             Search results for: <span className="text-indigo-400">{searchParams.title}</span>
//           </h2>
//         )}
//         <SearchContent songs={songs} />
//       </div>
//     </div>
//   );
// }

// export default Search;


import getSongsByTitle from "@/actions/getSongsByTitle"
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import SearchContent from "./components/SearchContent";

interface SearchProps {
  searchParams: { title: string }
}

const Search = async ({ searchParams }: SearchProps) => {
  const title = await searchParams?.title || ''; 
  const songs = await getSongsByTitle(title);

  return (
    <div className="bg-slate-950 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-slate-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-slate-200 text-3xl font-bold">
            Search your music
          </h1>
          <SearchInput />
        </div>
      </Header>

      <div className="mt-32 px-6 space-y-4">
        {title && (
          <h2 className="text-slate-400 text-lg font-medium">
            Search results for: <span className="text-indigo-400">{title}</span>
          </h2>
        )}
        <SearchContent songs={songs} />
      </div>
    </div>
  );
}

export default Search;