import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

const UserAuth = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionLink = user ? "/api/auth/signout" : "/api/auth/signin";
  const actionDashboard = user ? "Dashboard" : null;
  return (
    <div className="flex justify-between gap-2">
      <Link href="/users/dashboard" className="py-1">
        {actionDashboard}
      </Link>
      <Link
        href={actionLink}
        className="bg-color-dark text-color-accent py-1 px-12 inline-block"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserAuth;
