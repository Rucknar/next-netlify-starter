import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Vintaga Ltd.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to Vintaga Ltd.</h1>
        <p className="description">
          We're excited to be launching soon, watch this space.
        </p>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .title {
          font-size: 4rem;
          margin: 0;
        }
        .description {
          font-size: 1.5rem;
          margin: 0.5rem 0;
        }
      `}</style>
    </div>
  );
}
