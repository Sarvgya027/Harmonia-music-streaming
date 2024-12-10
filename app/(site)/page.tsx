import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import PageContent from "./components/PageContent";

export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();

  console.log('lone aas', songs)
  return (
    <div className="bg-slate-950 min-h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-8">
          <h1 className="text-slate-200 font-bold text-xl mb-6">
            Welcome back, <span className="text-indigo-400">Username</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            <ListItem
              image="/images/liked.png"
              name="Liked Songs"
              href="/liked"
            />
            {/* Add more ListItems as needed */}
          </div>
        </div>
        <div className="mt-2 mb-7 px-6">
          <div className="flex justify-between items-center">
            <h1 className="text-white ml-6 font-semibold">Latest Songs</h1>
          </div>
          <div className="mt-2 mb-7 px-6">

            
            <PageContent songs={songs} />
          </div>
        </div>
      </Header>
    </div>
  );
}
