import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Taxi BenSsa | Taxi Maassluis & Zuid-Holland</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Taxi BenSsa is actief in Maassluis, Vlaardingen, Rotterdam en heel Zuid-Holland. Boek snel en eenvoudig via WhatsApp of ons contactformulier." />
      </Head>

      <header className="bg-cover bg-center h-96 text-white flex items-center justify-center" style={{ backgroundImage: "url('/taxiboard-banner.jpg')" }}>
        <h1 className="text-4xl md:text-5xl font-bold text-center drop-shadow">Taxi BenSsa – Snel & Betrouwbaar</h1>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <section className="text-center">
          <p className="text-lg md:text-xl">Altijd beschikbaar in <strong>Maassluis</strong>, <strong>Vlaardingen</strong>, <strong>Rotterdam</strong> en omgeving.</p>
          <a
            href="https://wa.me/31643636957"
            className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded shadow"
          >
            Boek via WhatsApp
          </a>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Waarom Taxi BenSsa?</h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <img src="/clock.svg" alt="Op tijd" className="w-7 mr-4" />
              <p><strong>Altijd op tijd</strong> – Wij staan klaar wanneer jij dat nodig hebt.</p>
            </div>
            <div className="flex items-center">
              <img src="/car.svg" alt="Comfort" className="w-7 mr-4" />
              <p><strong>Comfortabel vervoer</strong> – Schone wagens en vriendelijke chauffeurs.</p>
            </div>
            <div className="flex items-center">
              <img src="/pay.svg" alt="Betaling" className="w-7 mr-4" />
              <p><strong>Flexibel betalen</strong> – Tikkie of contant, wat jou uitkomt.</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Actieve Gebieden</h2>
          <p>
            Dagelijks actief in <strong>Maassluis</strong>, <strong>Vlaardingen</strong>, <strong>Rotterdam</strong> en heel <strong>Zuid-Holland</strong>.
            Ook beschikbaar voor ritten naar luchthavens, ziekenhuizen of evenementen.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact</h2>
          <p>Stuur ons een bericht via WhatsApp of gebruik het contactformulier op de contactpagina.</p>
          <Link href="/contact">
            <a className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded shadow">
              Contactpagina
            </a>
          </Link>
        </section>
      </main>

      <footer className="bg-gray-100 text-center text-sm py-6 text-gray-500">
        &copy; {new Date().getFullYear()} Taxi BenSsa. Alle rechten voorbehouden.
      </footer>
    </div>
  );
}
