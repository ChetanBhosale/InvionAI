import { NextAuthOptions, User, getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { createUser, getUser } from "@/app/action/user";

import { IUser } from "@/types/types";

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }:any) {
      if (user && user.email) {
        const response = await getUser(user.email);
        if (!response.status) {
          const res = await createUser(user);
          if (!res.status) {
            return false;
          }
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        const dbUser = await getUser(token.email as string);
        if('user_id' in dbUser.data) {
            token.user_id = dbUser.data.user_id
        }
      }
      return token;
    },

    async session({ session, token }:any) {
      if (token && 'user_id' in token) {
        session.user.user_id = token.user_id
      }
      return session;
    },
  },
};

export async function loginIsRequiredServer() {
  const session = await getServerSession(authConfig);
  if (!session) return redirect("/");
  else return session
}

export function loginIsRequiredClient() {
  if (typeof window !== "undefined") {
    const session = useSession();
    if (!session) return redirect('/');
  }
}
