"use client"

import Link from "next/link";
import DeleteButton from "../delete/[id]/page";
import toast, { Toaster } from "react-hot-toast";
import { fetchBlogs } from "@/app/page";
import {useEffect,useState} from 'react'

 const GetAllBlogs=({posts}) =>{
    const [p,setPost] = useState([]);

  useEffect(() => {
    if(posts===null) toast.loading("Fetching Blog Details 🚀", { id: "1" });
    setPost(posts);
  }, [posts]);
  
  console.log(posts);
  return (
    <>
        <Toaster />
        {/* Blogs */}
        <div className="w-full flex  flex-col justify-center items-center">
          {posts?.map((post: any) => (
            <div key={post.id} className="w-3/4 p-4 rounded-md mx-3 my-2 bg-slate-200 flex flex-col justify-center">
              {/* Title and Action */}
              <div className="flex items-center my-3 ">
                <div className="mr-auto">
                  <h2 className="mr-auto font-semibold">{post.title}</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href={`/blog/edit/${post.id}`}
                    className="font-semibold  px-4 py-2 shadow-xl bg-green-400 rounded-lg  m-auto mt-2 hover:bg-green-500"
                  >
                  Edit
                  </Link>
                  <DeleteButton params={post}  />
                </div>
              </div>
              {/* Date & Description */}
              <div className="mr-auto my-1">
                <blockquote className="font-bold text-slate-700">
                  {new Date(post.date).toDateString()}
                </blockquote>
              </div>
              <div className=" mr-auto my-1">
                <h2>{post.description}</h2>
              </div>
            </div>
          ))}
        </div>
    </>
          
  )
}
export default GetAllBlogs