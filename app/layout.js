import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata = {
  title: "NGBD | NG Business Directory",
  description: "Get Listed in The Nigerian Market Place. NG Business Directory empowers business owners with visibility for their businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Nav/>
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
