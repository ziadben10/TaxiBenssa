import Head from 'next/head';
import Link from 'next/link';

export default function Rates() {
  return (
    <>
      <Head>
        <title>Rates - Taxi BenSsa</title>
        <meta name="description" content="Taxi BenSsa Rates: Competitive fixed taxi prices from Maassluis to Schiphol, Rotterdam Airport and more. Transparent pricing." />
        <link rel="alternate" href="/en/rates" hrefLang="en" />
        <link rel="alternate" href="/nl/tarieven" hrefLang="nl" />
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
            <Link href="/nl/tarieven"><a>NL</a></Link> | <Link href="/en/rates"><a>EN</a></Link>
          </div>
        </nav>
      </header>

      <main className="page-content">
        <h1>Rates</h1>
        <p>Taxi BenSsa offers competitive and transparent pricing. A few examples of our fixed rates:</p>
        <ul>
          <li>Maassluis &#8594; Schiphol Airport (1-4 pax): €119 &nbsp; | &nbsp; (minibus 5-8 pax): €139</li>
          <li>Maassluis &#8594; Rotterdam Airport (1-4 pax): €65 &nbsp; | &nbsp; (minibus 5-8 pax): €75</li>
          <li>Within Maassluis/region: base fare €7 + €2.50 per km (approx.)</li>
        </ul>
        <p><em>* For specific destinations or long-distance trips, we provide custom quotes. Please contact us for details.</em></p>
      </main>
    </>
  );
}
