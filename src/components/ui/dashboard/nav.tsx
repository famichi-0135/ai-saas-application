import AuthButton from "@/components/auth/auth-button";
import CreditDisplay from "./credit-display";
import NavItems from "./nav-items";
import { Button } from "../button";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";

const DashboardNav = async () => {
  // const pathname = usePathname();
  const user = await currentUser();

  return (
    <nav className="grid gap-2 items-start">
      <NavItems />

      <div className="my-4 px-4 md:hidden">
        <AuthButton />
      </div>

      <div className="p-4">
        <CreditDisplay />
        {user && (
          <Button
            asChild
            className="w-full mt-4 text-white"
            variant={"premium2"}
          >
            <Link href={"/dashboard/plans"}>アップグレード</Link>
          </Button>
        )}
      </div>
    </nav>
  );
};

export default DashboardNav;
