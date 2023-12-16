"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function addTopic() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please input title and descripton");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error();
      }
    } catch (error) {
      ("Failed to create a topic");
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-y-2 mt-8">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Topic name"
        className="input input-bordered input-info w-full max-w-xs"
      />

      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder="Topic sescription"
        className="input input-bordered input-info w-full max-w-xs h-80 resize-none"
      />

      <button type="submit" className="btn btn-wide btn-info">
        Add Topic
      </button>
    </form>
  );
}
