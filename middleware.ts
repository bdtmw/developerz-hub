import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  if (request.nextUrl.pathname.startsWith('/temp')) {
    response.headers.set('x-bare-layout', '1');
  }
  return response;
}

export const config = { matcher: ['/temp', '/temp/'] };
