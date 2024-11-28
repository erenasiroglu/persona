import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Bu kısımda kendi authentication mantığınızı yazacaksınız
        // Örnek olarak basit bir kontrol:
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Burada normalde veritabanından kullanıcıyı kontrol edersiniz
        // Şimdilik sabit bir kullanıcı ile test edelim
        if (credentials.email === "test@test.com" && credentials.password === "test123") {
          return {
            id: "1",
            email: credentials.email,
            name: "Test User",
          };
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: "/login", // özel login sayfanızın path'i
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
}; 