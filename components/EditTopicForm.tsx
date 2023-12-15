"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }) {
  const [newtitle, setNewtitle] = useState(title);
  const [newdescription, setNewdescription] = useState(description);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newtitle, newdescription }),
      });
      if (!res.ok) {
        throw new Error("Failed to update topic");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-y-2 mt-8">
      <input
        onChange={(e) => setNewtitle(e.target.value)}
        value={newtitle}
        type="text"
        placeholder="Topic name"
        className="input input-bordered input-info w-full max-w-xs"
      />

      <textarea
        onChange={(e) => setNewdescription(e.target.value)}
        value={newdescription}
        placeholder="Topic sescription"
        className="input input-bordered input-info w-full max-w-xs h-80 resize-none"
      />

      <button className="btn btn-wide btn-info">Update Topic</button>
    </form>
  );
}
