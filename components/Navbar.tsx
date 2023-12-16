import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost text-xl text-white">
          CRUD
        </Link>
      </div>
      <div className="flex-none gap-2">
        <Link
          href={"/addTopic"}
          className="btn btn-ghost text-xl text-white border-solid border-slate-700"
        >
          Add Topic
        </Link>
      </div>
    </div>
  );
}
