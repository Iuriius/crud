import { getSession } from "@auth0/nextjs-auth0";

export default async function ProfileServer() {
  const { user } = await getSession();

  return (
    user && (
      <div>
        <img src={user.picture} alt={user.name} width={20} />
        <h2 className="text-xs">{user.name}</h2>
      </div>
    )
  );
}
