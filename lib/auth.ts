import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// Initialize NextAuth
const handler = NextAuth(authConfig);

// Export the auth function and handlers separately
export const auth = handler.auth;
export const handlers = handler.handlers;