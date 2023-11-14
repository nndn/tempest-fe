/* eslint-disable @next/next/no-head-element */
import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import Head from "next/head";
import { ThemeProvider } from "@/components/providers/theme_provider";
import SessionProvider from "@/components/providers/session_provider";
import { getServerSession } from "next-auth";
import { Toaster } from "@/components/ui/toaster";

import { cn } from "../@/lib/utils";
import Navbar from "./(components)/navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Head>
          <title>Project Tempest</title>
          <meta
            name="description"
            content="Secret project code named tempest"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SessionProvider session={session}>
              <Navbar />
              {children}
            </SessionProvider>
          </ThemeProvider>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
