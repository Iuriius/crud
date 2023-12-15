"use client";

import { useState } from "react";

export default function addTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please input title and descripton");
      return;
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
