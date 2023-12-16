import Link from "next/link";
import EditIcon from "./icons/EditIcon";

export default function EditBtn({ topic }) {
  return (
    <button className="btn btn-outline btn-warning flex">
      <Link href={`/editTopic/${topic._id}`}>
        <EditIcon />
      </Link>
    </button>
  );
}
