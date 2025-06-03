// types/next-auth.d.ts
import "next-auth";

declare module "next-auth" { 
  interface User {
    id: string;
    name?: string;
    email?: string;
  }

  interface Session {
    user: {
      id: string;
      name?: string;
      email?: string;
    };
  }
}