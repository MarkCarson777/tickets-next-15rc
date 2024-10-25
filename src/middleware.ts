import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";

export default withAuth(
  async function middleware(req: NextRequest) {
    // console.log(request)
  },
  {
    isReturnToCurrentPage: true,
  }
);
export const config = {
  /*
  	(?!...): This is a negative lookahead, meaning it ensures that the following patterns do not match.
	  api: Excludes paths that start with /api (likely to exclude API routes).
	  _next/static and _next/image: Excludes Next.js’ internal static and image handling routes.
	  auth: Excludes routes related to authentication (e.g., /auth).
	  favicon.ico and robots.txt: Excludes requests for common files like favicon.ico and robots.txt.
	  images: Excludes paths related to image handling.
	  login: Excludes routes related to login (e.g., /login).
	  $: This indicates the end of the URL string.
	  .*: Matches any other path that doesn’t match the excluded patterns.
  */
  matcher: [
    "/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|login|$).*)",
  ],
};
