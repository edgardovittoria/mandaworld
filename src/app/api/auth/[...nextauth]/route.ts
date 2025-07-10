import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (
          credentials?.username === "admin" &&
          credentials?.password === "mandaworld2025"
        ) {
          return {
			id: "1e5f90b8-567d-4cb0-8c6e-3f1f72c6b7a2", // UUID valido
			name: "Admin",
			email: "admin@mandaworld.it",
			};
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET, // ✅ corretto ora
  },
  cookies: {
    sessionToken: {
      name: 'next-auth.session-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.sub;
      session.accessToken = token;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
