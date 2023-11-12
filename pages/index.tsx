import Head from "next/head";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Project Tempest</title>
        <meta name="description" content="Secret project code named tempest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <>
          <Button variant="secondary" className="h-10 bg-purple-500">
            Click Me
          </Button>
        </>
      </main>
    </>
  );
}
