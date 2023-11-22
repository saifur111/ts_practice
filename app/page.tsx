import Link from "next/link";

import GetAllBlogs from "./blog/getallblogs/page";
import toast from "react-hot-toast";
import ModalForDeleteButton from "./components/ModalForDeleteButton";
export async function fetchBlogs() {
  const res= await fetch("http://localhost:3000/api/blog",{
    next:{
      revalidate:10,
    },
  });
  const data = await res.json();
  if(!data)toast.loading("Fetching Blog Data...", { id: "1" });
  return data.posts;
  
}

export default async function Home() {
  const posts = await fetchBlogs() ;

  return (
    <>

      <main className="w-full h-full ">
          <div className="ms:w-2/4 sm:w-3/4 m-auto p-4 my-4 rounded-lg bg-slate-700 drop-shadow-xl">
              <h1 className="text-slate-200 text-center text-2xl font-extyrabold font-[verdana]">
                  My FullStack Blog App
              </h1>
          </div>
          {/* Link */}
      <div className="flex my-5">
        <Link
          href={"/blog/add"}
          className=" md:w-1/6 sm:w-2/4 text-center rounded-md p-2 m-auto bg-slate-200 font-semibold"
        >
          Add New Blog 🚀
        </Link>
      </div>
      <GetAllBlogs posts={posts}/>
      </main>
    </>
  )
}
