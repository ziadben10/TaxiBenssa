import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - Taxi BenSsa</title>
        <meta name="description" content="Taxi BenSsa Services: Airport transfers, group transport (minibus), business travel and local taxi service in South Holland." />
        <link rel="alternate" href="/en/services" hrefLang="en" />
        <link rel="alternate" href="/nl/diensten" hrefLang="nl" />
      </Head>
      <header className="navbar">
        <nav>
          <ul>
            <li><Link href="/en"><a>Home</a></Link></li>
            <li><Link href="/en/services"><a>Services</a></Link></li>
            <li><Link href="/en/rates"><a>Rates</a></Link></li>
            <li><Link href="/en/reviews"><a>Reviews</a></Link></li>
            <li><Link href="/en/contact"><a>Contact</a></Link></li>
          </ul>
          <div className="lang-switch">
            <Link href="/nl/diensten"><a>NL</a></Link> | <Link href="/en/services"><a>EN</a></Link>
          </div>
        </nav>
      </header>

      <main className="page-content">
        <h1>Our Services</h1>
        <h3>Airport &amp; Long-Distance Rides</h3>
        <p>We provide comfortable taxis to airports like Schiphol and Rotterdam The Hague Airport at fixed rates. Longer distances, even international trips, are available on request.</p>
        <h3>Group Transport (Minibus)</h3>
        <p>Traveling with more than 4 people? No problem! Our spacious taxi van can transport groups up to 8 passengers, perfect for outings or airport trips with lots of luggage.</p>
        <h3>Local &amp; Business Travel</h3>
        <p>For short city rides or business travel, we are at your service 24/7. Whether it's a ride to an appointment or a night out, Taxi BenSsa gets you there safely and quickly.</p>
      </main>
    </>
  );
}
