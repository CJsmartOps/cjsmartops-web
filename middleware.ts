import { NextRequest, NextResponse } from "next/server";

const locales = ["es", "en"];

function getLocale(request: NextRequest): string {
  const acceptLang = request.headers.get("accept-language") || "";
  if (acceptLang.startsWith("en")) return "en";
  return "es";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    const locale = pathname.split("/")[1];
    const response = NextResponse.next();
    response.headers.set("x-lang", locale);
    response.headers.set("Content-Language", locale);
    return response;
  }

  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  newUrl.search = request.nextUrl.search;
  const response = NextResponse.redirect(newUrl);
  response.headers.set("x-lang", locale);
  response.headers.set("Content-Language", locale);
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
