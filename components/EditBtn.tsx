import Link from "next/link";
import EditIcon from "./icons/EditIcon";

export default function EditBtn() {
    return (
        <Link href={"/editTopic/123"}>
            <button className="btn btn-outline btn-warning"><EditIcon />Edit Topic</button></Link>
    )
}
