// pages/index.js

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <header
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/taxiboard-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Taxi BenSsa
            </h1>
            <p className="text-white text-lg md:text-xl font-light mb-8">
              Altijd snel, altijd beschikbaar in Zuid-Holland
            </p>
            <a
              href="https://wa.me/31643636957"
              className="inline-block bg-green-500 hover:bg-green-600 text-white text-lg font-medium px-6 py-3 rounded-full shadow-lg transition"
            >
              Boek nu via WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Waarom Taxi BenSsa */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Waarom Taxi BenSsa?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start">
              <img src="/clock.svg" className="w-6 h-6 mt-1 mr-3" alt="Op tijd" />
              <p>
                <strong>Altijd op tijd</strong> – Wij staan voor je klaar, wanneer jij dat nodig hebt.
              </p>
            </div>
            <div className="flex items-start">
              <img src="/car.svg" className="w-6 h-6 mt-1 mr-3" alt="Comfort" />
              <p>
                <strong>Comfortabel vervoer</strong> – Schone wagens en vriendelijke chauffeurs.
              </p>
            </div>
            <div className="flex items-start">
              <img src="/pay.svg" className="w-6 h-6 mt-1 mr-3" alt="Betalen" />
              <p>
                <strong>Flexibel betalen</strong> – Via Tikkie of contant, wat jou uitkomt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Actieve Gebieden */}
      <section className="py-16 px-4 md:px-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Actieve Gebieden</h2>
          <p className="text-lg">
            Dagelijks actief in <strong>Maassluis</strong>, <strong>Vlaardingen</strong>, <strong>Rotterdam</strong> en heel <strong>Zuid-Holland</strong>. Ook voor luchthavens, ziekenhuizen en evenementen.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center text-sm">
        <p>&copy; 2025 Taxi BenSsa. Alle rechten voorbehouden.</p>
      </footer>
    </div>
  );
}
