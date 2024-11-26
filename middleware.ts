import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if CV data exists in the session/store
  // If not, redirect to home page
  const hasData = true; // Replace with actual check

  if (!hasData && request.nextUrl.pathname === '/preview') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/preview',
};