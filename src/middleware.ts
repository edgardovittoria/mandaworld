import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ token }) {
      // Permetti accesso solo se token esiste e email è quella admin
      return !!token && token.email === "admin@mandaworld.it";
    },
  },
});

export const config = {
  matcher: ["/gestione-eventi"], // puoi aggiungere altre rotte qui
};
