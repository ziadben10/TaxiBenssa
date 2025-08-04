export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="bg-black text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Taxi BenSsa</h1>
          <p className="text-sm">Altijd snel op weg in Zuid-Holland</p>
        </div>
      </header>

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">Welkom bij Taxi BenSsa</h2>
        <p className="mb-6">
          Jouw betrouwbare taxi in <strong>Maassluis</strong>, <strong>Vlaardingen</strong>, <strong>Rotterdam</strong> en heel <strong>Zuid-Holland</strong>.
        </p>

        <h3 className="text-xl font-semibold mb-2">Waarom Taxi BenSsa?</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Altijd op tijd – wij staan klaar wanneer jij dat nodig hebt</li>
          <li>Comfortabel en schoon vervoer</li>
          <li>Vriendelijke chauffeurs</li>
          <li>Betalen via Tikkie of contant mogelijk</li>
          <li>Boek snel via WhatsApp of het formulier</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-2">Boek direct jouw rit</h3>
        <p className="mb-2">
          📱 <a className="text-blue-600 underline" href="https://wa.me/31643636957">WhatsApp ons op 06 4363 6957</a>
        </p>
        <p>📧 Of vul het formulier in (binnenkort beschikbaar)</p>

        <h3 className="text-xl font-semibold mt-10 mb-2">Actieve gebieden</h3>
        <p>
          Wij rijden dagelijks in Maassluis, Vlaardingen, Rotterdam en omliggende regio's. Ook beschikbaar voor ritten
          naar luchthavens, ziekenhuizen en speciale evenementen.
        </p>
      </section>

      <footer className="bg-gray-900 text-white py-4 mt-10">
        <div className="container mx-auto px-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Taxi BenSsa. Alle rechten voorbehouden.
        </div>
      </footer>
    </main>
  );
}
