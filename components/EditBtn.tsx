import Link from "next/link";
import EditIcon from "./icons/EditIcon";

interface Topic {
  _id: string;
}

interface EditBtnProps {
  topic: Topic;
}

export default function EditBtn({ topic }: EditBtnProps) {
  return (
    <button className="btn btn-outline btn-warning flex">
      <Link href={`/editTopic/${topic._id}`}>
        <EditIcon />
      </Link>
    </button>
  );
}
