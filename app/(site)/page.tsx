import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-950 min-h-full w-full overflow-hidden overflow-y-auto">
      {/* <Header> */}
        <div className="mb-8">
          <h1 className="text-slate-200 font-bold text-xl mb-6">
            Welcome back, <span className="text-indigo-400">Username</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {/* <ListItem */}
              image="/images/liked.png"
              name="Liked Songs"
              href="/liked"
            {/* /> */}
            {/* Add more ListItems as needed */}
          </div>
        </div>
        <div className="mt-2 mb-7 px-6">
          <div className="flex justify-between items-center">
            <h1 className="text-white font-semibold">Latest Songs</h1>
          </div>
          <div>list of songs</div>
        </div>
      {/* </Header> */}
    </div>
  );
}
