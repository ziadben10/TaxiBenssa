import Head from 'next/head';
import Link from 'next/link';

export default function Diensten() {
  return (
    <>
      <Head>
        <title>Diensten - Taxi BenSsa</title>
        <meta name="description" content="Taxi BenSsa Diensten: Luchthavenvervoer, groepsvervoer (taxibus), zakelijke ritten en lokale taxi service in Zuid-Holland." />
        <link rel="alternate" href="/en/services" hrefLang="en" />
        <link rel="alternate" href="/nl/diensten" hrefLang="nl" />
      </Head>
      <header className="navbar">
        <nav>
          <ul>
            <li><Link href="/nl"><a>Home</a></Link></li>
            <li><Link href="/nl/diensten"><a>Diensten</a></Link></li>
            <li><Link href="/nl/tarieven"><a>Tarieven</a></Link></li>
            <li><Link href="/nl/reviews"><a>Reviews</a></Link></li>
            <li><Link href="/nl/contact"><a>Contact</a></Link></li>
          </ul>
          <div className="lang-switch">
            <Link href="/nl/diensten"><a>NL</a></Link> | <Link href="/en/services"><a>EN</a></Link>
          </div>
        </nav>
      </header>

      <main className="page-content">
        <h1>Onze Diensten</h1>
        <h3>Luchthaven &amp; Lange Afstand</h3>
        <p>Wij bieden comfortabele taxi's naar luchthavens zoals Schiphol en Rotterdam The Hague Airport tegen vaste tarieven. Ook langere afstanden, zelfs internationaal, zijn mogelijk op aanvraag.</p>
        <h3>Groepsvervoer (Taxibus)</h3>
        <p>Reist u met meer dan 4 personen? Geen probleem! Onze ruime taxibus vervoert groepen tot 8 personen, ideaal voor uitjes of luchthavenvervoer met veel bagage.</p>
        <h3>Lokale &amp; Zakelijke Ritten</h3>
        <p>Voor korte ritten in de stad of zakelijk vervoer staan wij 24/7 paraat. Of het nu gaat om een taxi naar een afspraak of een avondje uit, Taxi BenSsa brengt u veilig en snel ter plaatse.</p>
      </main>
    </>
  );
}
