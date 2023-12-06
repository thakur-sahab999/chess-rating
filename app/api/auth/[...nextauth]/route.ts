import { SupabaseAdapter } from "@auth/supabase-adapter";
import NextAuth from "next-auth/next";
import Email from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY,

  }) as import("next-auth/adapters").Adapter,
});

export { handler as GET, handler as POST };
