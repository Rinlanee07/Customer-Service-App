import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import * as jose from 'jose'

// Regex to check whether something has an extension, e.g. .jpg
const PUBLIC_FILE = /\.(.*)$/;

export default function middleware(req: NextRequest) {
    const verify = req.cookies.get("token")?.value;
    const pathname = req.nextUrl.pathname;
    try {
        if (
            req.nextUrl.pathname.startsWith("/_next") ||
            req.nextUrl.pathname.includes("/api/") ||
            PUBLIC_FILE.test(req.nextUrl.pathname)
        ) {
            return;
        }
        if (!verify && (!req.nextUrl.pathname.startsWith('/login'))) {
            return NextResponse.redirect(new URL('/login', req.url));
        } else if (verify && pathname != "/warehouses") {
            try {
                const decodeToken = jose.decodeJwt(verify);
                if (decodeToken && decodeToken.exp) {
                    const currentTime = Math.floor(Date.now() / 1000);
                    // If expired
                    if (decodeToken.exp < currentTime) {
                        // เปลี่ยน redirect ไป login
                        if (!pathname.startsWith("/login")) {
                            return NextResponse.redirect(new URL('/login', req.url));
                        }
                    } else {
                        if (req.nextUrl.pathname.startsWith("/login")) {
                            return NextResponse.redirect(new URL('/', req.url));
                        }
                        return NextResponse.next();
                    }
                } else {
                    // ถ้า decode ไม่ได้ ให้ redirect ไป login
                    if (!pathname.startsWith("/login")) {
                        return NextResponse.redirect(new URL('/login', req.url));
                    }
                }
            } catch (err) {
                // ถ้า token ผิด ให้ redirect ไป login
                if (!pathname.startsWith("/login")) {
                    return NextResponse.redirect(new URL('/login', req.url));
                }
            }
        }

        return NextResponse.next()
    } catch (e) {
        console.error("******************** Error ********************", e);
        return;
    }

}
export const config = {
    matcher: '/((?!api|_next/static|_next/image|button|bg|favicon.ico).*)',
};