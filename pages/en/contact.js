import Head from 'next/head';
import Link from 'next/link';

export default function ContactEN() {
  return (
    <>
      <Head>
        <title>Contact - Taxi BenSsa</title>
        <meta name="description" content="Contact Taxi BenSsa: request a taxi via WhatsApp or the contact form. We respond quickly to your message." />
        <link rel="alternate" href="/en/contact" hrefLang="en" />
        <link rel="alternate" href="/nl/contact" hrefLang="nl" />
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
            <Link href="/nl/contact"><a>NL</a></Link> | <Link href="/en/contact"><a>EN</a></Link>
          </div>
        </nav>
      </header>

      <main className="page-content">
        <h1>Contact</h1>
        <p>Send us a message via WhatsApp or use the form below. Taxi BenSsa is available 24/7 for all your rides.</p>
        <p><strong>Phone:</strong> <a href="tel:0101234567">010-1234567</a><br/>
           <strong>Email:</strong> <a href="mailto:info@taxibenssa.nl">info@taxibenssa.nl</a></p>
        <form action="https://formspree.io/f/YOURENDPOINT" method="POST">
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
    </>
  );
}
