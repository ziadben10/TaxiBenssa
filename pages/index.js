import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Taxi BenSsa | Taxi Maassluis & Zuid-Holland</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Taxi BenSsa – Snel & Betrouwbaar in Zuid-Holland" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
        }
        body {
          background-color: #f8f9fa;
          color: #212529;
          line-height: 1.6;
        }
        header {
          background-image: url('/taxiboard-banner.jpg');
          background-size: cover;
          background-position: center;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-shadow: 0 1px 6px rgba(0, 0, 0, 0.6);
          text-align: center;
          padding: 2rem;
        }
        header h1 {
          font-size: 2.8rem;
        }
        .container {
          max-width: 1000px;
          margin: 3rem auto;
          padding: 0 1rem;
        }
        .whatsapp-btn {
          background-color: #25d366;
          color: white;
          padding: 0.8rem 1.6rem;
          font-weight: bold;
          border-radius: 6px;
          text-decoration: none;
          display: inline-block;
          margin-top: 1rem;
        }
        section {
          margin-top: 3rem;
        }
        h2 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: #111;
        }
        .features {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .feature {
          display: flex;
          align-items: center;
        }
        .feature img {
          width: 28px;
          margin-right: 1rem;
        }
        footer {
          margin-top: 4rem;
          padding: 2rem 1rem;
          text-align: center;
          font-size: 0.9rem;
          color: #6c757d;
        }
      `}</style>

      <header>
        <h1>Taxi BenSsa – Snel & Betrouwbaar in Zuid-Holland</h1>
      </header>

      <main className="container">
        <p>
          Altijd snel beschikbaar in <strong>Maassluis</strong>, <strong>Vlaardingen</strong>, <strong>Rotterdam</strong> en regio.
        </p>
        <a href="https://wa.me/31643636957" className="whatsapp-btn">Boek nu via WhatsApp</a>

        <section>
          <h2>Waarom Taxi BenSsa?</h2>
          <div className="features">
            <div className="feature">
              <img src="/clock.svg" alt="Op tijd" />
              <p><strong>Altijd op tijd</strong> – Wij staan klaar wanneer jij dat nodig hebt.</p>
            </div>
            <div className="feature">
              <img src="/car.svg" alt="Comfort" />
              <p><strong>Comfortabel vervoer</strong> – Schone wagens en vriendelijke chauffeurs.</p>
            </div>
            <div className="feature">
              <img src="/pay.svg" alt="Betaling" />
              <p><strong>Flexibel betalen</strong> – Tikkie of contant, wat jou uitkomt.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Actieve Gebieden</h2>
          <p>
            Dagelijks actief in <strong>Maassluis</strong>, <strong>Vlaardingen</strong>, <strong>Rotterdam</strong> en heel <strong>Zuid-Holland</strong>.
            Ook voor ritten naar luchthavens, ziekenhuizen of speciale evenementen.
          </p>
        </section>
      </main>

      <footer>
        &copy; 2025 Taxi BenSsa. Alle rechten voorbehouden.
      </footer>
    </>
  );
}

