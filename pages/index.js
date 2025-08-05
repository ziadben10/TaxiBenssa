import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [language, setLanguage] = useState('nl');

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Taxi BenSsa | Snel & Betrouwbaar</title>
        <meta name="description" content="Taxi BenSsa is snel, betaalbaar en beschikbaar in Maassluis, Vlaardingen, Rotterdam en omgeving." />
      </Head>

      <header className="navbar">
        <nav>
          <ul>
            <li onClick={() => scrollTo('diensten')}>Diensten</li>
            <li onClick={() => scrollTo('reviews')}>Reviews</li>
            <li onClick={() => scrollTo('contact')}>Contact</li>
          </ul>
          <div className="lang-switch">
            <span onClick={() => setLanguage('nl')} style={{ fontWeight: language === 'nl' ? 'bold' : 'normal' }}>NL</span> | 
            <span onClick={() => setLanguage('en')} style={{ fontWeight: language === 'en' ? 'bold' : 'normal' }}>EN</span>
          </div>
        </nav>
      </header>

      <section className="hero">
        <h1>Taxi BenSsa</h1>
        <p>Altijd snel, altijd beschikbaar in Zuid-Holland</p>
        <a href="https://wa.me/31643636957" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
          📱 Boek nu via WhatsApp
        </a>
      </section>

      <section id="diensten" className="features">
        <h2>Waarom Taxi BenSsa?</h2>
        <ul>
          <li>✅ <strong>Altijd op tijd</strong> – Wij staan klaar wanneer jij dat nodig hebt.</li>
          <li>🚖 <strong>Comfortabel vervoer</strong> – Schone wagens en vriendelijke chauffeurs.</li>
          <li>💳 <strong>Flexibel betalen</strong> – Tikkie of contant, wat jou uitkomt.</li>
          <li>🌍 <strong>Actief in regio</strong> – Maassluis, Vlaardingen, Rotterdam & Zuid-Holland.</li>
          <li>🛫 <strong>Luchthaventransfers</strong> – Schiphol, Rotterdam Airport, Düsseldorf, etc.</li>
        </ul>
      </section>

      <section id="reviews" className="reviews">
        <h2>Klantreviews</h2>
        <div className="review-slider">
          <div className="review">⭐️⭐️⭐️⭐️⭐️ “Altijd netjes op tijd. Aanrader.”</div>
          <div className="review">⭐️⭐️⭐️⭐️⭐️ “Zeer vriendelijk en schoon vervoer.”</div>
          <div className="review">⭐️⭐️⭐️⭐️⭐️ “Goede communicatie via WhatsApp.”</div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Stuur ons een bericht via WhatsApp of vul het formulier hieronder in.</p>
        <form action="https://formspree.io/f/xqkrgyyd" method="POST">
          <input type="text" name="name" placeholder="Naam" required />
          <input type="email" name="email" placeholder="E-mail" required />
          <textarea name="message" placeholder="Bericht" required></textarea>
          <button type="submit">Verzenden</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2025 Taxi BenSsa. Alle rechten voorbehouden.</p>
      </footer>

      <style jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
        }
        body {
          background: #fff;
          color: #111;
        }
        .navbar {
          background: #000;
          color: white;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
        }
        nav ul {
          list-style: none;
          display: flex;
          gap: 2rem;
        }
        nav ul li {
          cursor: pointer;
        }
        .lang-switch span {
          cursor: pointer;
          margin-left: 0.5rem;
        }
        .hero {
          background: url('/banner-taxi-ai.jpg') center/cover no-repeat;
          padding: 6rem 2rem;
          text-align: center;
          color: white;
        }
        .whatsapp-btn {
          margin-top: 1.5rem;
          background: #25d366;
          color: white;
          padding: 1rem 2rem;
          border-radius: 6px;
          text-decoration: none;
          display: inline-block;
          font-weight: bold;
        }
        .features, .reviews, .contact {
          padding: 4rem 2rem;
          max-width: 900px;
          margin: auto;
        }
        .features ul {
          list-style: none;
          line-height: 2;
        }
        .review-slider {
          display: flex;
          overflow-x: auto;
          gap: 2rem;
          scroll-snap-type: x mandatory;
        }
        .review {
          min-width: 300px;
          background: #f8f8f8;
          padding: 1rem;
          border-radius: 10px;
          scroll-snap-align: start;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        input, textarea {
          padding: 1rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        button {
          background: #000;
          color: white;
          padding: 1rem;
          border: none;
          cursor: pointer;
        }
        footer {
          background: #f1f1f1;
          text-align: center;
          padding: 2rem;
          font-size: 0.9rem;
        }
      `}</style>
    </>
  );
}

