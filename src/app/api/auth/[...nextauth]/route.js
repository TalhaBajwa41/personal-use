import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // 🔐 Hardcoded admin credentials
        const hardcodedAdmin = {
          id: '1',
          name: 'Admin User',
          username: 'admin',
          password: 'admin123',
        };

        if (
          credentials.username === hardcodedAdmin.username &&
          credentials.password === hardcodedAdmin.password
        ) {
          return hardcodedAdmin;
        }

        return null; // ❌ Invalid login
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
