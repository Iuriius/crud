import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
/*
/**|======================================
/**| pics
/**|======================================
*/
import crud from "@/public/crud.png";
import nextjs from "@/public/nextjs.webp";
import tw from "@/public/tailwind.webp";
import ts from "@/public/ts.webp";
import mdb from "@/public/mongodb.webp";
import auth0 from "@/public/auth0.png";
import daisy from "@/public/daisy.png";
import heroicons from "@/public/heroicons.webp";
/*
/**|======================================
/**| code
/**|======================================
*/
export default async function Home() {
  const session = await getSession();
  if (session?.user) {
    redirect("/crud");
  }
  return (
    <main className="flex flex-col justify-center items-center align-middle">
      <p className="text-2xl mt-40">Welcome to my App</p>
      <Image src={crud} alt="crud picture" priority={true} />
      <div className="flex gap-2 mb-6">
        <Image src={nextjs} alt="tech picture" width={30} />
        <Image src={mdb} alt="tech picture" width={30} />
        <Image src={auth0} alt="tech picture" width={30} />
        <Image src={heroicons} alt="tech picture" width={30} />
        <Image src={ts} alt="tech picture" width={30} />
        <Image src={daisy} alt="tech picture" width={30} />
        <Image src={tw} alt="tech picture" width={30} />
      </div>
      <a href="/api/auth/login">
        <button className="btn btn-ghost text-white border-solid border-slate-700 text-sm md:text-2xl">
          Login
        </button>
      </a>
      <p className="text-slate-400 text-xs text-center mt-6">
        if you got any concerns using your
        <br />
        Google or Apple credentials
        <br />
        <br />
        <Link className="text-gray-50" href="https://temp-mail.org/en" target="_blank">
          <u>please use a temporary e-mail</u>
        </Link>
      </p>
    </main>
  );
}
