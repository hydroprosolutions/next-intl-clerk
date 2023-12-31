import createMiddleware from "next-intl/middleware";
import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

const locales = ["en", "es"];

const publicPages = [
  "/sign-in/",
  "/en/sign-in",
  "/es/sign-in",
  "sign-up",
  "/en/sign-up",
  "/es/sign-up",
];

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "es"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",
});

export default authMiddleware({
  beforeAuth: (req) => {
    const publicPathnameRegex = RegExp(
      `^(/(${locales.join("|")}))?(${publicPages.join("|")})?/?$`,
      "i"
    );
    const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);
    if (isPublicPage) {
      return intlMiddleware(req);
    }
  },
  afterAuth: (auth, req, evt) => {
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    return intlMiddleware(req);
  },
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
