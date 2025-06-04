import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { auth } from "./lib/auth"

const protectedRoutes = ["/dashboard"]

export default async function middleware(request: NextRequest) {
  const session = await auth()
  const { pathname } = request.nextUrl
  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route))

  if (isProtected && !session) {
    // Create a new URL for redirect
    const loginUrl = new URL("/", request.nextUrl.origin)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}