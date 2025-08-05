import Head from 'next/head';
import Link from 'next/link';

export default function HomeNL() {
  return (
    <>
      <Head>
        <title>Taxi BenSsa - 24/7 Taxi in Zuid-Holland</title>
        <meta name="description" content="Taxi BenSsa: Altijd snel en betrouwbaar taxi vervoer in Zuid-Holland. 24/7 bereikbaar, scherpe tarieven voor luchthavens." />
        <link rel="alternate" href="/en" hrefLang="en" />
        <link rel="alternate" href="/nl" hrefLang="nl" />
      </Head>

      {/* Top navigatie met taal-switch */}
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
            <Link href="/nl"><a>NL</a></Link> | <Link href="/en"><a>EN</a></Link>
          </div>
        </nav>
      </header>

      {/* Hero sectie met achtergrondafbeelding */}
      <section className="hero">
        <h1>Taxi BenSsa</h1>
        <p className="tagline">Altijd snel, altijd beschikbaar in Zuid-Holland</p>
        <a href="https://wa.me/31612345678" className="whatsapp-btn" target="_blank" rel="noopener">📱 Boek nu via WhatsApp</a>
      </section>

      {/* Waarom Taxi BenSsa sectie */}
      <section className="features">
        <h2>Waarom Taxi BenSsa?</h2>
        <ul>
          <li><img src="/clock.svg" alt="" /> <strong>Altijd op tijd</strong> – Wij staan voor je klaar, wanneer jij dat nodig hebt.</li>
          <li><img src="/car.svg" alt="" /> <strong>Comfortabel vervoer</strong> – Schone wagens en vriendelijke chauffeurs.</li>
          <li><img src="/pay.svg" alt="" /> <strong>Flexibel betalen</strong> – Via Tikkie of contant, wat jou uitkomt.</li>
        </ul>
        <p><strong>Actieve gebieden:</strong> Dagelijks actief in Maassluis, Vlaardingen, Rotterdam en heel Zuid-Holland. Ook beschikbaar voor luchthavens, ziekenhuizen en evenementen.</p>
      </section>
    </>
  );
}
