import { NextRequest, NextResponse } from "next/server";
export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("authToken")?.value;
  console.log("Auth token: ", authToken);
  const isAuthenticated = Boolean(authToken);

  if (
    isAuthenticated &&
    ["/login", "/register"].includes(request.nextUrl.pathname)
  ) {
    console.log("Redirecting to /");
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (
    !isAuthenticated &&
    !["/login", "/register"].includes(request.nextUrl.pathname)
  ) {
    console.log("Redirecting to /login");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|static|favicon.ico).*)"],
};
