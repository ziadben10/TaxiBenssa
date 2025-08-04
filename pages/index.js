export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Taxi BenSsa</h1>
        <a
          href="https://wa.me/31643636957"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600"
        >
          Boek via WhatsApp
        </a>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Altijd snel op weg in Zuid-Holland</h2>
        <p className="text-lg mb-6">
          Betrouwbare taxi in Maassluis, Vlaardingen, Rotterdam en omstreken.
        </p>
        <a
          href="https://wa.me/31643636957"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-200"
        >
          Boek jouw rit nu
        </a>
      </section>

      {/* Waarom kiezen voor BenSsa? */}
      <section className="py-16 px-6">
        <h3 className="text-2xl font-bold text-center mb-10">Waarom kiezen voor Taxi BenSsa?</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="font-semibold mb-2">Altijd op tijd</h4>
            <p>Wij staan klaar wanneer jij dat nodig hebt.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="font-semibold mb-2">Comfort en netheid</h4>
            <p>Schone en comfortabele voertuigen met vriendelijke chauffeurs.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="font-semibold mb-2">Flexibel betalen</h4>
            <p>Tikkie of contant — alles is mogelijk.</p>
          </div>
        </div>
      </section>

      {/* Actieve gebieden */}
      <section className="bg-white py-16 px-6">
        <h3 className="text-2xl font-bold text-center mb-6">Actieve gebieden</h3>
        <p className="text-center max-w-2xl mx-auto">
          Wij rijden dagelijks in Maassluis, Vlaardingen, Rotterdam en omliggende regio's.
          Ook beschikbaar voor ritten naar luchthavens, ziekenhuizen en speciale evenementen.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Taxi BenSsa. Alle rechten voorbehouden.
      </footer>
    </div>
  );
}

