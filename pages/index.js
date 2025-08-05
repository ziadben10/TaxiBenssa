
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Taxi BenSsa | Taxi Maassluis & Zuid-Holland</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/style.css" />
      </Head>

      <header>
        <div className="container">
          <h1>Taxi BenSsa</h1>
          <p>Snel & betrouwbaar in Maassluis, Vlaardingen & Zuid-Holland</p>
          <a className="btn" href="https://wa.me/31643636957" target="_blank" rel="noopener noreferrer">
            📱 Boek via WhatsApp
          </a>
        </div>
      </header>

      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/diensten">Diensten</Link></li>
          <li><Link href="/tarieven">Tarieven</Link></li>
          <li><Link href="/reviews">Reviews</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      <main className="container">
        <section>
          <h2>Waarom Taxi BenSsa?</h2>
          <ul className="features">
            <li><strong>✅ Altijd op tijd</strong> – Wij staan klaar wanneer jij dat nodig hebt.</li>
            <li><strong>🚘 Comfortabel vervoer</strong> – Schone wagens en vriendelijke chauffeurs.</li>
            <li><strong>💶 Flexibel betalen</strong> – Tikkie of contant, wat jou uitkomt.</li>
            <li><strong>🌍 Actief in regio</strong> – Maassluis, Vlaardingen, Rotterdam & Zuid-Holland.</li>
            <li><strong>🛫 Luchthavenvervoer</strong> – Schiphol, Rotterdam Airport, Düsseldorf, etc.</li>
          </ul>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2025 Taxi BenSsa. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </>
  );
}
