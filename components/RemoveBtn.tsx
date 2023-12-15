"use client";
import RemoveIcon from "./icons/RemoveIcon";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("delete?");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      } else {
        throw new Error();
      }
    }
  };
  return (
    <button onClick={removeTopic} className="btn btn-outline btn-error">
      <RemoveIcon />
      Remove
    </button>
  );
}
