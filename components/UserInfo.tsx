import { getSession, Session } from "@auth0/nextjs-auth0";

export default async function ProfileServer() {
  const session: Session | null | undefined = await getSession();

  return (
    session?.user && (
      <div>
        <img src={session.user.picture} alt={session.user.name} width={20} />
        <h2 className="text-xs">{session.user.name}</h2>
      </div>
    )
  );
}
