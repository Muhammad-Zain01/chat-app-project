import { Inter } from "next/font/google";
import "./globals.css";
import { ChatProvider } from "@/context/chat-context";
import { UserProvider } from "@/context/user-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chat Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
