import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home({ fortune }) {
  return (
    <div className="container">
      <Head>
        <title>Fortune Cookie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '80vh',
        padding: '2rem'
      }}>
        <Header title="Your Fortune Cookie" />
        <div id="fortune" style={{
          fontSize: '2em',
          textAlign: 'center',
          padding: '20px',
          border: '1px solid #ccc',
          background: '#fff',
          marginTop: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}>
          {fortune}
        </div>
      </main>

      <Footer />
    </div>
  )
}

// Runs on every request, picking a random fortune
export async function getServerSideProps() {
  const fortunes = [
    "A new adventure is coming your way.",
    "Trust your instincts today.",
    "You'll make someone smile soon.",
    "Opportunity knocks lightly—be ready!",
    "A pleasant surprise is in store."
    // ← add more fortunes here
  ];

  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const fortune = fortunes[randomIndex];

  return {
    props: { fortune }
  };
}
