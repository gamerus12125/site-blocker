import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./app-provider";
import { Header } from "@/widgets/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Site Blocker",
  description: "Site for blocking sites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </AppProvider>
  );
}
