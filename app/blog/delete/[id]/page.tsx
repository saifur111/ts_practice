"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const deleteBlog = async (id: string) => {
  const res = fetch(`http://localhost:3000/api/blog/${id}`, {
    method: "DELETE",
    //@ts-ignore
    "Content-Type": "application/json",
  });
  return (await res).json();
};

const DeleteButton = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const router=useRouter();

  const handleDelete = async () => {
    toast.loading("Deleting Blog", { id: "2" });
    await deleteBlog(id);
    toast.success("Blog Deleted Successfully.", { id: "2" });
    router.push('/');
  };
  return (
    <>
      <Toaster />
      <Link
        href={`/blog/delete/${id}`}
        onClick={handleDelete}
        className="font-semibold px-4 py-2 shadow-xl bg-red-400 rounded-lg  m-auto mt-2 hover:bg-red-500"
      >
        DELETE
      </Link>
    </>
  );
};

export default DeleteButton;
