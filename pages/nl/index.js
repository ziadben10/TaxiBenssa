import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [lang, setLang] = useState('nl');
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }, []);

  const t = {
    nl: {
      title: 'Taxi BenSsa – Snel & Betrouwbaar in Zuid-Holland',
      tagline: 'Altijd beschikbaar in Maassluis, Vlaardingen, Rotterdam en omgeving',
      diensten: 'Diensten',
      tarieven: 'Tarieven',
      reviews: 'Reviews',
      contact: 'Contact',
      voordelen: 'Waarom Taxi BenSsa?',
      voordeel1: 'Altijd op tijd – Wij staan voor je klaar',
      voordeel2: 'Comfortabel vervoer – Schone wagens, vriendelijke chauffeurs',
      voordeel3: 'Flexibel betalen – Via Tikkie of contant',
      prijzen: 'Ritprijzen vanaf €10 binnen de regio, luchthavenritten vanaf €45',
      review1: '"Beste taxi ervaring ooit, altijd op tijd!" – Fatima A.',
      review2: '"Heel vriendelijk en auto was super schoon." – Johan V.',
      review3: '"Binnen 10 minuten stond hij voor mijn deur." – Sara E.',
      neemContact: 'Neem contact op via WhatsApp of het formulier hieronder:',
      naam: 'Naam',
      bericht: 'Bericht',
      verzenden: 'Verzenden',
      terug: '⬆ Terug omhoog',
      taal: 'Taal'
    },
    en: {
      title: 'Taxi BenSsa – Fast & Reliable in South Holland',
      tagline: 'Always available in Maassluis, Vlaardingen, Rotterdam and area',
      diensten: 'Services',
      tarieven: 'Rates',
      reviews: 'Reviews',
      contact: 'Contact',
      voordelen: 'Why Choose Taxi BenSsa?',
      voordeel1: 'Always on time – We’re there when you need us',
      voordeel2: 'Comfortable rides – Clean cars, friendly drivers',
      voordeel3: 'Flexible payment – Tikkie or cash, your choice',
      prijzen: 'Ride prices from €10 in town, airport rides from €45',
      review1: '"Best taxi experience ever, always on time!" – Fatima A.',
      review2: '"Very friendly and car was super clean." – Johan V.',
      review3: '"Arrived within 10 minutes." – Sara E.',
      neemContact: 'Contact us via WhatsApp or form below:',
      naam: 'Name',
      bericht: 'Message',
      verzenden: 'Send',
      terug: '⬆ Back to top',
      taal: 'Language'
    }
  }[lang];

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.tagline} />
      </Head>

      <style jsx global>{`
        body {
          margin: 0;
          font-family: 'Arial', sans-serif;
          scroll-behavior: smooth;
        }
        .hero {
          background: url('/taxiboard-banner.jpg') center/cover no-repeat;
          height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
        h1 { font-size: 3rem; margin: 0.5rem 0; }
        .tagline { font-size: 1.2rem; }
        .lang-switch {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: white;
          border-radius: 4px;
          padding: 0.3rem 0.6rem;
        }
        .lang-switch button {
          background: none;
          border: none;
          cursor: pointer;
          margin: 0 0.2rem;
          font-weight: bold;
        }
        section {
          padding: 3rem 1.5rem;
          max-width: 800px;
          margin: auto;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease;
        }
        section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        ul { list-style: none; padding: 0; }
        li { margin-bottom: 1rem; }
        .whatsapp-btn {
          background: #25D366;
          color: white;
          padding: 0.8rem 1.4rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
        }
        .sticky-wa {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #25D366;
          color: white;
          padding: 0.8rem 1rem;
          border-radius: 50px;
          font-weight: bold;
          text-decoration: none;
          z-index: 999;
        }
        .scroll-top {
          position: fixed;
          bottom: 80px;
          right: 20px;
          background: #000;
          color: white;
          border: none;
          padding: 0.5rem 0.9rem;
          border-radius: 30px;
          cursor: pointer;
        }
        footer {
          text-align: center;
          padding: 2rem;
          background: #f2f2f2;
          margin-top: 4rem;
          font-size: 0.9rem;
        }
        input, textarea {
          width: 100%;
          padding: 0.7rem;
          margin: 0.5rem 0;
          border: 1px solid #ccc;
          border-radius: 6px;
        }
        button.send {
          background: black;
          color: white;
          padding: 0.8rem 1.2rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        .reviews { display: flex; overflow-x: scroll; gap: 1rem; scroll-snap-type: x mandatory; }
        .review {
          background: #f9f9f9;
          padding: 1rem;
          border-radius: 8px;
          flex: 0 0 80%;
          scroll-snap-align: start;
        }
      `}</style>

      <div className="lang-switch">
        <span>{t.taal}: </span>
        <button onClick={() => setLang('nl')}>NL</button>
        <button onClick={() => setLang('en')}>EN</button>
      </div>

      <section className="hero">
        <h1>Taxi BenSsa</h1>
        <p className="tagline">{t.tagline}</p>
        <a href="https://wa.me/31643636957" className="whatsapp-btn" target="_blank" rel="noreferrer">📱 WhatsApp</a>
      </section>

      <section id="diensten" className="fade-in">
        <h2>{t.voordelen}</h2>
        <ul>
          <li>✅ {t.voordeel1}</li>
          <li>✅ {t.voordeel2}</li>
          <li>✅ {t.voordeel3}</li>
        </ul>
      </section>

      <section id="tarieven" className="fade-in">
        <h2>{t.tarieven}</h2>
        <p>{t.prijzen}</p>
      </section>

      <section id="reviews" className="fade-in">
        <h2>{t.reviews}</h2>
        <div className="reviews">
          <div className="review">⭐⭐⭐⭐⭐<br />{t.review1}</div>
          <div className="review">⭐⭐⭐⭐⭐<br />{t.review2}</div>
          <div className="review">⭐⭐⭐⭐⭐<br />{t.review3}</div>
        </div>
      </section>

      <section id="contact" className="fade-in">
        <h2>{t.contact}</h2>
        <p>{t.neemContact}</p>
        <form onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder={t.naam} required />
          <textarea rows="4" placeholder={t.bericht} required />
          <button className="send">{t.verzenden}</button>
        </form>
      </section>

      <a href="#top" className="scroll-top">{t.terug}</a>
      <a className="sticky-wa" href="https://wa.me/31643636957" target="_blank">💬 WhatsApp</a>

      <footer>
        &copy; 2025 Taxi BenSsa – Alle rechten voorbehouden
      </footer>
    </>
  );
}
