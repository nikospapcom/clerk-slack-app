import { CreateOrganization } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-full">
      <div>
        <CreateOrganization />
      </div>
    </div>
  );
}
