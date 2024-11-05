import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Home = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  return (
    <div className="flex w-screen items-center justify-center">
      <div className="flex h-full items-center justify-center">
        <UserButton showName appearance={{}} />
      </div>
    </div>
  );
};

export default Home;
