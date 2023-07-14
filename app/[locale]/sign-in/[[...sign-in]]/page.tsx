import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100 p-12">
      <SignIn />
    </div>
  );
}
