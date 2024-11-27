import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata = {
  title: "NG Business Directory | Get Listed in The Nigerian Market Place",
  description: "NG Business Directory empowers business owners with visibility for their businesses",
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
