import Link from "next/link";
import EditIcon from "./icons/EditIcon";

export default function EditBtn({ topic }) {
  return (
    <Link href={`/editTopic/${topic._id}`}>
      <button className="btn btn-outline btn-warning">
        <EditIcon />
        Edit Topic
      </button>
    </Link>
  );
}
