import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("authToken")?.value;
  const isAuthenticated = Boolean(authToken);

  const requestUrl = request.url;

  let response;

  if (
    isAuthenticated &&
    ["/auth/login", "/auth/register"].includes(request.nextUrl.pathname)
  ) {
    console.log("Redirecting to /");
    response = NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (
    !isAuthenticated &&
    !["/auth/login", "/auth/register", "/"].includes(request.nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  } else {
    response = NextResponse.next()
  }

  response.headers.set('x-url', requestUrl);
  return response;
}

export const config = {
  matcher: ["/((?!_next|static|favicon.ico).*)"],
};
