"use client";
import { signIn, signOut, useSession } from "next-auth/react";
const SigninButton = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session && session.user) {
    return (
      <div className="flex w-full gap-4 justify-end ">
        <div className="flex gap-2 border-r-2 px-4 items-center">
          <img
            src={session.user.image}
            alt={session.user.name}
            className="w-[40px] h-auto flex-shrink-0 rounded-full "
          />
          <p className="hidden md:block">{session.user.name}</p>
        </div>
        <button className="" onClick={() => signOut()}>
          Sign Out
        </button>
      </div>
    );
  }
  return <button className="border px-6  border-purple-500 text-purple-500  font-semibold hover:bg-purple-600 hover:text-white transition-all ease-in-out delay-100 rounded-xl" onClick={() => signIn()}>Sign In</button>;
};

export default SigninButton;
