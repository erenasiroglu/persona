import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Mevcut URL'i al
  const pathname = request.nextUrl.pathname;
  
  // Response'u oluştur
  const response = NextResponse.next();
  
  // Header'a pathname'i ekle
  response.headers.set('x-pathname', pathname);

  // Preview sayfası kontrolü
  if (pathname === '/preview') {
    const hasData = true; // Replace with actual check
    if (!hasData) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return response;
}

export const config = {
  matcher: ['/preview', '/dashboard'],
};