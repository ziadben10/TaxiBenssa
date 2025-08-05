import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Taxi BenSsa - 24/7 Taxi in Zuid-Holland</title>
        <meta name="description" content="Taxi BenSsa: Altijd snel en betrouwbaar taxi vervoer in Zuid-Holland. 24/7 bereikbaar, scherpe tarieven voor luchthavens." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero sectie */}
      <section id="hero" style={{ background: '#777', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Taxi BenSsa</h1>
        <p style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>Altijd snel, altijd beschikbaar in Zuid-Holland</p>
        <a href="https://wa.me/31612345678" target="_blank" rel="noopener noreferrer"
          style={{
            backgroundColor: '#25D366',
            color: 'white',
            padding: '15px 30px',
            fontSize: '1.1rem',
            textDecoration: 'none',
            borderRadius: '6px',
            display: 'inline-block'
          }}>
          📱 Boek nu via WhatsApp
        </a>
      </section>

      {/* Waarom sectie */}
      <section id="waarom" style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>Waarom Taxi BenSsa?</h2>
        <ul style={{ marginTop: '2rem', listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '1.5rem' }}>
            ⏰ <strong>Altijd op tijd</strong> – Wij staan voor je klaar, wanneer jij dat nodig hebt.
          </li>
          <li style={{ marginBottom: '1.5rem' }}>
            🚗 <strong>Comfortabel vervoer</strong> – Schone wagens en vriendelijke chauffeurs.
          </li>
          <li style={{ marginBottom: '1.5rem' }}>
            💳 <strong>Flexibel betalen</strong> – Via Tikkie of contant, wat jou uitkomt.
          </li>
        </ul>
        <p style={{ fontSize: '1.1rem' }}><strong>Actieve gebieden:</strong> Maassluis, Vlaardingen, Rotterdam en heel Zuid-Holland. Ook beschikbaar voor luchthavens, ziekenhuizen en evenementen.</p>
      </section>

      {/* Footer */}
      <footer style={{ background: '#000', color: '#fff', textAlign: 'center', padding: '20px' }}>
        <p>&copy; {new Date().getFullYear()} Taxi BenSsa</p>
      </footer>

      {/* WhatsApp Sticky Button */}
      <a href="https://wa.me/31612345678" target="_blank" rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '24px',
          textDecoration: 'none',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
        }}>
        📲
      </a>

      {/* Scroll to top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          background: '#333',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          fontSize: '20px',
          cursor: 'pointer'
        }}>
        ↑
      </button>
    </>
  );
}
