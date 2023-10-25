import { UserButton } from "@clerk/nextjs";
import { PropsWithChildren } from "react";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative flex w-screen h-screen">
      <div className="m-8 flex-1 rounded-2xl border border-default-200 p-8 py-0 transition-all ">
        <div className="mt-8">
          <UserButton afterSignOutUrl="/" />
        </div>
        {children}
      </div>
    </div>
  );
}
