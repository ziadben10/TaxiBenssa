import Head from 'next/head';
import Link from 'next/link';

export default function Tarieven() {
  return (
    <>
      <Head>
        <title>Tarieven - Taxi BenSsa</title>
        <meta name="description" content="Taxi BenSsa Tarieven: Voordelige vaste prijzen voor taxi van Maassluis naar Schiphol, Rotterdam Airport en meer. Transparante tarieven." />
        <link rel="alternate" href="/en/rates" hrefLang="en" />
        <link rel="alternate" href="/nl/tarieven" hrefLang="nl" />
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
            <Link href="/nl/tarieven"><a>NL</a></Link> | <Link href="/en/rates"><a>EN</a></Link>
          </div>
        </nav>
      </header>

      <main className="page-content">
        <h1>Tarieven</h1>
        <p>Bij Taxi BenSsa hanteren we scherpe en transparante tarieven. Enkele voorbeelden van vaste prijzen:</p>
        <ul>
          <li>Maassluis &#8594; Schiphol (1-4 pers): €119 &nbsp; | &nbsp; (taxibus 5-8 pers): €139</li>
          <li>Maassluis &#8594; Rotterdam Airport (1-4 pers): €65 &nbsp; | &nbsp; (taxibus 5-8 pers): €75</li>
          <li>Binnen Maassluis/regio: starttarief €7 + €2,50 per km (indicatie)</li>
        </ul>
        <p><em>* Voor specifieke bestemmingen of langdurig vervoer maken wij graag een offerte op maat. Neem contact op voor meer informatie.</em></p>
      </main>
    </>
  );
}
