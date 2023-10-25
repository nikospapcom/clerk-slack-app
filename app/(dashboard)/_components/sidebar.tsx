import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { PropsWithChildren } from "react";

export const Sidebar = async ({ children }: PropsWithChildren) => {
  return (
    <div className="sticky top-0 left-0 h-screen w-[280px] p-8 pr-6 transition-all flex flex-col justify-between bg-gray-100">
      <div>
        <div className="flex justify-between mb-4">
          <OrganizationSwitcher hidePersonal />
          <UserButton afterSignOutUrl="/" />
        </div>

        <div className="text-sm text-gray-400 font-semibold mb-2">General</div>
        <ul>
          <li>
            <Link
              href="/app"
              className="text-gray-800 text-sm block w-full hover:bg-gray-200 rounded p-2"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/app/organization-profile"
              className="text-gray-800 text-sm block w-full hover:bg-gray-200 rounded p-2"
            >
              Organization Settings
            </Link>
          </li>
          <li>
            <Link
              href="/app/settings"
              className="text-gray-800 text-sm block w-full hover:bg-gray-200 rounded p-2"
            >
              My Settings
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link
              href="/app/organizations"
              className="text-gray-800 text-sm block w-full hover:bg-gray-200 rounded p-2"
            >
              Organizations
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
