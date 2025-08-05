import Head from 'next/head';
import Link from 'next/link';

export default function ContactNL() {
  return (
    <>
      <Head>
        <title>Contact - Taxi BenSsa</title>
        <meta name="description" content="Neem contact op met Taxi BenSsa: vraag een taxi aan via WhatsApp of het contactformulier. Wij reageren snel op uw bericht." />
        <link rel="alternate" href="/en/contact" hrefLang="en" />
        <link rel="alternate" href="/nl/contact" hrefLang="nl" />
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
            <Link href="/nl/contact"><a>NL</a></Link> | <Link href="/en/contact"><a>EN</a></Link>
          </div>
        </nav>
      </header>

      <main className="page-content">
        <h1>Contact</h1>
        <p>Stuur ons een bericht via WhatsApp of gebruik onderstaand formulier. Taxi BenSsa is 24/7 bereikbaar voor al uw ritten.</p>
        <p><strong>Telefoon:</strong> <a href="tel:0101234567">010-1234567</a><br/>
           <strong>E-mail:</strong> <a href="mailto:info@taxibenssa.nl">info@taxibenssa.nl</a></p>
        <form action="https://formspree.io/f/YOURENDPOINT" method="POST">
          <div className="form-field">
            <label htmlFor="name">Naam</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Telefoonnummer</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className="form-field">
            <label htmlFor="message">Bericht</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Verstuur</button>
        </form>
      </main>
    </>
  );
}
