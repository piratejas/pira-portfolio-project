import Head from "next/head";
import About from "../components/About";

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>piratejas</title>
        <link rel="icon" href="/SoC_avatar.png" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');
        </style>
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About />
      </main>
    </div>
  );
}
