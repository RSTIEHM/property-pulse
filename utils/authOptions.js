import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    //Invoke On Success
    async signIn({ profile }) {
      //1 Connect to DB
      // 2 Check if user exists
      // 3 If Not, add user to DB
      // Retun true to allow signin
    },
    // Modifies The Session Object
    async session({ session }) {
      // Get user From DB
      // ASSIGN USER ID TO SESSION
      // RETURN SESSION
    },
  },
};
