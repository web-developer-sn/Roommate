import { NextRequest, NextResponse } from "next/server";

import { verifyToken } from "@/lib/jwt";

const publicRoutes = [
  "/login",
  "/register",
  "/verify-email",
  "/forgot-password",
];

export function proxy(request: NextRequest) {
  
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("token")?.value;

  console.log("Path:", pathname);
  console.log("Token:", token);
  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // No token
  if (!token || token==="undefined") {
    if (isPublicRoute) {
      return NextResponse.next();
    }

    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  try {
    verifyToken(token);

    if (isPublicRoute) {
      return NextResponse.redirect(
        new URL("/", request.url)
      );
    }

    return NextResponse.next();
  } catch {
    const response = NextResponse.redirect(
      new URL("/login", request.url)
    );

    response.cookies.delete("token");

    return response;
  }
}

export const config = {
  matcher: [
    "/((?!api|_next|favicon.ico|.*\\..*).*)",
  ],
};