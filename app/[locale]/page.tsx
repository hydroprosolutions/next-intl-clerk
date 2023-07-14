import { useTranslations } from "next-intl";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";

export default function Index() {
  const t = useTranslations("Index");
  const { userId } = auth();
  console.log({ userId });
  return (
    <div className="h-screen flex justify-start items-start bg-gray-100 p-12">
      <div className="flex flex-col w-full">
        <div className="flex flex-row space-x-8 h-16 w-full px-8 mx-auto p-12">
          <div className="w-1/3">
            <Link href="/es">To Spanish</Link>
          </div>
          <div className="w-1/3">
            <Link href="/en">To English</Link>
          </div>
          <div className="w-1/3">
            {userId ? <UserButton /> : <span>Clerk auth not available</span>}
          </div>
        </div>
        <div className="flex justify-center items-center pt-12">
          <h1 className="text-3xl">{t("title")}</h1>
        </div>
      </div>
    </div>
  );
}
