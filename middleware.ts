import { authMiddleware, clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";

const publicRoutesThatShouldRedirectAfterAuth = ["/"];

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  afterAuth: async (auth, req) => {
    const organizations = await clerkClient.organizations.getOrganizationList();

    if (
      auth.userId &&
      publicRoutesThatShouldRedirectAfterAuth.includes(req.nextUrl.pathname)
    ) {
      return NextResponse.redirect(new URL("/app", req.url));
    }

    if (!auth.userId && req.nextUrl.pathname.includes("/app")) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    if (
      !organizations.length &&
      req.nextUrl.pathname !== "/sign-in" &&
      req.nextUrl.pathname !== "/app/create-organization"
    ) {
      return NextResponse.redirect(
        new URL("/app/create-organization", req.url)
      );
    }

    return NextResponse.next();
  },
  publicRoutes: [...publicRoutesThatShouldRedirectAfterAuth, "/(api|trpc)(.*)"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
