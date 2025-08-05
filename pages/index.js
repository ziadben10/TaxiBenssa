import Head from 'next/head';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const [language, setLanguage] = useState('nl');

  const t = {
    nl: {
      title: 'Taxi BenSsa',
      subtitle: 'Altijd snel, altijd beschikbaar in Zuid-Holland',
      whatsapp: '📱 Boek nu via WhatsApp',
      features: [
        { icon: '⏰', text: 'Altijd op tijd – Wij staan voor je klaar wanneer jij dat nodig hebt.' },
        { icon: '🚗', text: 'Comfortabel vervoer – Schone wagens en vriendelijke chauffeurs.' },
        { icon: '💳', text: 'Flexibel betalen – Via Tikkie of contant, wat jou uitkomt.' },
      ],
      gebied: 'Actieve regio: Maassluis, Vlaardingen, Rotterdam & Zuid-Holland.',
      reviews: ['Beste taxi ooit! 👌', 'Snel & netjes geholpen.', 'Altijd bereikbaar!'],
      contact: 'Neem contact op via het formulier hieronder:',
      submit: 'Verzend',
    },
    en: {
      title: 'Taxi BenSsa',
      subtitle: 'Always fast, always available in South Holland',
      whatsapp: '📱 Book via WhatsApp',
      features: [
        { icon: '⏰', text: 'Always on time – We’re ready when you need us.' },
        { icon: '🚗', text: 'Comfortable rides – Clean cars and friendly drivers.' },
        { icon: '💳', text: 'Flexible payment – Tikkie or cash, you choose.' },
      ],
      gebied: 'Operating region: Maassluis, Vlaardingen, Rotterdam & South Holland.',
      reviews: ['Best taxi ever! 👌', 'Fast & polite driver.', 'Always available!'],
      contact: 'Get in touch using the form below:',
      submit: 'Submit',
    },
  };

  const lang = t[language];

  return (
    <>
      <Head>
        <title>{lang.title} - Taxi Zuid-Holland</title>
        <meta name="description" content={lang.subtitle} />
      </Head>

      {/* Taal-switch */}
      <div style={{ position: 'fixed', top: 10, right: 20, zIndex: 1000 }}>
        <button onClick={() => setLanguage('nl')}>NL</button> | <button onClick={() => setLanguage('en')}>EN</button>
      </div>

      {/* Hero sectie */}
      <section className="hero" id="hero" data-aos="fade-in">
        <h1>{lang.title}</h1>
        <p>{lang.subtitle}</p>
        <a href="https://wa.me/31643636957" className="whatsapp-btn">{lang.whatsapp}</a>
      </section>

      {/* Features */}
      <section className="features" data-aos="fade-up">
        <h2>Waarom {lang.title}?</h2>
        <ul>
          {lang.features.map((f, i) => (
            <li key={i}>{f.icon} {f.text}</li>
          ))}
        </ul>
        <p><strong>{lang.gebied}</strong></p>
      </section>

      {/* Reviews */}
      <section className="reviews" data-aos="fade-up">
        <h2>Reviews</h2>
        <div className="review-slider">
          {lang.reviews.map((r, i) => (
            <div key={i} className="review">{r}</div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="contact" data-aos="fade-up">
        <h2>Contact</h2>
        <p>{lang.contact}</p>
        <form className="contact-form">
          <input type="text" placeholder="Naam" required />
          <input type="email" placeholder="E-mail" required />
          <textarea placeholder="Bericht" required></textarea>
          <button type="submit">{lang.submit}</button>
        </form>
      </section>

      {/* Sticky WhatsApp + Scroll to top */}
      <a href="https://wa.me/31643636957" className="floating-whatsapp">💬</a>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="scroll-top">⬆️</button>

      <style jsx>{`
        body {
          font-family: sans-serif;
        }
        .hero {
          background: url('/taxi-bg.jpg') center/cover no-repeat;
          height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }
        .whatsapp-btn {
          background: #25d366;
          color: white;
          padding: 12px 24px;
          border-radius: 5px;
          text-decoration: none;
          font-weight: bold;
        }
        .features, .reviews, .contact {
          padding: 60px 20px;
          max-width: 800px;
          margin: auto;
        }
        .review-slider {
          display: flex;
          gap: 10px;
          overflow-x: auto;
        }
        .review {
          min-width: 250px;
          padding: 20px;
          background: #f2f2f2;
          border-radius: 5px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .contact-form input, .contact-form textarea {
          padding: 10px;
          width: 100%;
        }
        .floating-whatsapp {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #25d366;
          color: white;
          font-size: 24px;
          padding: 10px 15px;
          border-radius: 50%;
          z-index: 999;
          text-decoration: none;
        }
        .scroll-top {
          position: fixed;
          bottom: 80px;
          right: 20px;
          padding: 8px 12px;
          font-size: 20px;
          z-index: 999;
        }
      `}</style>
    </>
  );
}
