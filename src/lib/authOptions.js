import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (
        user.email === "garridomarcex@gmail.com" ||
        user.email === "devsoul256@gmail.com"
      ) {
        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  url: process.env.NEXTAUTH_URL,
};
