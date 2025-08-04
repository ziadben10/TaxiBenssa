export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>Taxi BenSsa – Altijd snel op weg in Zuid-Holland</h1>
      <p>
        Welkom bij <strong>Taxi BenSsa</strong> – jouw betrouwbare taxi in <strong>Maassluis</strong>,
        <strong> Vlaardingen</strong>, <strong>Rotterdam</strong> en heel <strong>Zuid-Holland</strong>.
      </p>

      <h2>Waarom Taxi BenSsa?</h2>
      <ul>
        <li>✔️ Altijd op tijd – wij staan klaar wanneer jij dat nodig hebt</li>
        <li>✔️ Comfortabel en schoon vervoer</li>
        <li>✔️ Vriendelijke chauffeurs</li>
        <li>✔️ Betalen via Tikkie of contant mogelijk</li>
        <li>✔️ Boek snel via WhatsApp of het formulier</li>
      </ul>

      <h2>Boek direct jouw rit</h2>
      <p>
        📱 WhatsApp ons op{' '}
        <a href="https://wa.me/31643636957" target="_blank" rel="noopener noreferrer">
          06 4363 6957
        </a>{' '}
        <br />
        ✉️ Of vul het formulier in (binnenkort beschikbaar)
      </p>

      <h2>Actieve gebieden</h2>
      <p>
        Wij rijden dagelijks in Maassluis, Vlaardingen, Rotterdam en omliggende regio's. Ook beschikbaar voor
        ritten naar luchthavens, ziekenhuizen en speciale evenementen.
      </p>

      <footer style={{ marginTop: '4rem', fontSize: '0.8rem', color: '#555' }}>
        &copy; {new Date().getFullYear()} Taxi BenSsa. Alle rechten voorbehouden.
      </footer>
    </main>
  );
}
