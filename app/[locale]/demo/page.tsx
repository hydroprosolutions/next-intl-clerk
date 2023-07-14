import { useTranslations } from "next-intl";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
import { useLocale } from "next-intl";
import ClerkButton from "@/app/components/ClerkButton";

export default function Demo() {
  const t = useTranslations("Index");
  const { userId } = auth();
  const locale = useLocale();
  console.log({ userId });
  return (
    <div className="h-screen w-full flex justify-start items-start bg-gray-100 p-12">
      <div className="w-full flex justify-center items-center pt-12">
        <h1 className="text-3xl">{t("title")}</h1>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-row space-x-8 h-16 w-full px-8 mx-auto p-12">
          <div className="w-1/2">
            <div className="flex justify-center items-center h-12 w-48 px-4 py-2 rounded-lg bg-sky-700 hover:bg-sky-900 text-white transition-all duration-300">
              {locale === "es" ? (
                <Link href="/en/demo">English</Link>
              ) : (
                <Link href="/es/demo">Español</Link>
              )}
            </div>
          </div>

          <div className="w-1/2">
            <p>Clerk userID: {userId}</p>
            <p>Did the user button disappear fro the box below?</p>
            <div className="p-4 mt-4 border-2 border-slate-500 rounded-xl flex justify-center items-center">
              <ClerkButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
