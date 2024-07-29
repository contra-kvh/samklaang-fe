import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("authToken")?.value;
  const isAuthenticated = Boolean(authToken);

  // Set the custom x-url header
  const requestUrl = request.url;
  request.headers.set('x-url', requestUrl);

  let response;
  
  if (
    isAuthenticated &&
    ["/auth/login", "/auth/register"].includes(request.nextUrl.pathname)
  ) {
    response = NextResponse.redirect(new URL("/dashboard", requestUrl));
  } else if (
    !isAuthenticated &&
    !["/auth/login", "/auth/register", "/"].includes(request.nextUrl.pathname)
  ) {
    response = NextResponse.redirect(new URL("/auth/login", requestUrl));
  } else {
    response = NextResponse.next();
  }

  // Set the x-url header on the response
  response.headers.set('x-url', requestUrl);
  return response;
}
