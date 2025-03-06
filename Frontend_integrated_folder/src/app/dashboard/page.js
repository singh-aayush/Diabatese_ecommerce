"use client";
import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    return <p className="text-center text-xl">You are not logged in.</p>;
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">Welcome, {session.user.name}!</h1>
      <button
        onClick={() => signOut()}
        className="mt-4 bg-red-500 text-white px-6 py-2 rounded-md"
      >
        Logout
      </button>
    </div>
  );
}
