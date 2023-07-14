import Link from "next/link";
import { useTranslations } from "next-intl";
export default function Index() {
  const t = useTranslations("Index");
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100 p-12">
      <div className="flex justify-center items-center h-12 w-48 px-4 py-2 rounded-lg bg-sky-700 hover:bg-sky-900 text-white transition-all duration-300">
        {" "}
        <Link href="/demo">{t("demo")}</Link>
      </div>
    </div>
  );
}
