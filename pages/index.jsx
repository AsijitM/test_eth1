import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Mudra</title>
        <meta name="description" content="Mudra: DAO Tool" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-[calc(100vh-71px)] flex flex-col items-center justify-center space-y-2 text-white bg-black">
        {/* <img src="/cryptocurrency.png" alt="" /> */}
        <h1 className="text-9xl">Mudra</h1>
        <p className="text-lg">The Only DAO / Community product you will need.</p>
        <button className="bg-[#6200C5] px-4 py-2 text-white rounded-lg transition hover:scale-95">
          Get Started
        </button>
      </main>
    </>
  )
}
