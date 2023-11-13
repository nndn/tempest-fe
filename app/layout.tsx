/* eslint-disable @next/next/no-head-element */
import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import Head from "next/head";
import { ThemeProvider } from "@/components/theme-provider";

import { cn } from "../@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
