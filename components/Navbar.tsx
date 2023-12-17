import Link from "next/link";
import ProfileServer from "@/components/UserInfo";
import Logout from "@/components/icons/Logout";
export default function Navbar() {
  return (
    <div className="navbar bg-base-100 p-0">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost text-sm text-white md:text-2xl">
          CRUD
        </Link>
      </div>
      <div className="flex-none gap-2">
        <Link
          href={"/addTopic"}
          className="btn btn-ghost text-white border-solid border-slate-700 text-sm md:text-2xl"
        >
          Add Topic
        </Link>
        <ProfileServer />
        <a href="/api/auth/logout">
          <Logout />
        </a>
      </div>
    </div>
  );
}
