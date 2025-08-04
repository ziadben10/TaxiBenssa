export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      {/* Banner afbeelding gecentreerd */}
      <div style={{ textAlign: 'center' }}>
        <img
          src="/taxiboard-banner.jpg"
          alt="Taxi BenSsa Banner"
          style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
        />
      </div>

      <h1 style={{ marginTop: '2rem' }}>Taxi BenSsa</h1>
      <p>Altijd snel, altijd beschikbaar in Zuid-Holland</p>

      <a
        href="https://wa.me/31643636957"
        style={{ color: 'purple', textDecoration: 'underline', fontWeight: 'bold' }}
      >
        Boek nu via WhatsApp
      </a>

      <h2 style={{ marginTop: '3rem' }}>Waarom Taxi BenSsa?</h2>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
        <img src="/clock.svg" alt="Op tijd" style={{ width: '24px', marginRight: '8px' }} />
        <p><strong>Altijd op tijd</strong> – Wij staan voor je klaar, wanneer jij dat nodig hebt.</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/car.svg" alt="Comfort" style={{ width: '24px', marginRight: '8px' }} />
        <p><strong>Comfortabel vervoer</strong> – Schone wagens en vriendelijke chauffeurs.</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/pay.svg" alt="Betalen" style={{ width: '24px', marginRight: '8px' }} />
        <p><strong>Flexibel betalen</strong> – Via Tikkie of contant, wat jou uitkomt.</p>
      </div>

      <h2 style={{ marginTop: '3rem' }}>Actieve Gebieden</h2>
      <p>
        Dagelijks actief in <strong>Maassluis</strong>, <strong>Vlaardingen</strong>, <strong>Rotterdam</strong> en heel <strong>Zuid-Holland</strong>.
        Ook voor luchthavens, ziekenhuizen en evenementen.
      </p>

      <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#888' }}>
        © 2025 Taxi BenSsa. Alle rechten voorbehouden.
      </p>
    </main>
  );
}
