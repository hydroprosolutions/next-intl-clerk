import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Children, Locale } from "@/types";

export default function LocaleLayout({
  children,
  params,
}: {
  children: Children;
  params: { locale: Locale };
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
