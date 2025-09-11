import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connect();

        try {
          const user = await User.findOne({ email: credentials.email });

          if (!user) {
            console.warn("User not found:", credentials.email);
            return null; // clean fail
          }

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordCorrect) {
            console.warn("Wrong password for:", credentials.email);
            return null; // clean fail
          }

          // ✅ return safe plain object
          return {
            id: user._id.toString(),
            name: user.username || user.name || user.email,
            email: user.email,
          };
        } catch (err) {
          console.error("Authorize error:", err);
          return null; // avoid crashing JSON response
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  pages: {
    error: "/dashboard/login", // redirect on error
  },

  session: {
    strategy: "jwt", // required for credentials provider
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
      }
      return session;
    },
  },

  debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST };
