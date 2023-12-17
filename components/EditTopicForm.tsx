"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm(
  { id }: { id: any },
  { title }: { title: any },
  { description }: { description: any }
) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });
      if (!res.ok) {
        throw new Error("Failed to update topic");
      }
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-y-2 mt-8">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        type="text"
        placeholder="Topic name"
        className="input input-bordered input-info w-full max-w-xs"
      />

      <textarea
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        placeholder="Topic description"
        className="input input-bordered input-info w-full max-w-xs h-80 resize-none"
      />

      <button className="btn btn-wide btn-info">Update Topic</button>
    </form>
  );
}
