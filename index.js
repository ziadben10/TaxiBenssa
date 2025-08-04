import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  return (
    <div>
      <Head>
        <title>Taxi BenSsa - Taxi Maassluis & Zuid-Holland</title>
        <meta name="description" content="Taxi BenSsa biedt professioneel taxivervoer in Maassluis, Vlaardingen, Rotterdam en Zuid-Holland. Boek direct via WhatsApp." />
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Taxi BenSsa</h1>
        <p>24/7 taxi in Maassluis, Vlaardingen, Rotterdam & Zuid-Holland</p>

        <h2>📲 WhatsApp Boeking</h2>
        <a href="https://wa.me/31643636957" target="_blank">Stuur een WhatsApp</a>

        <h2>📩 Offerte Aanvragen</h2>
        <form action="https://formspree.io/f/mayzvlqv" method="POST">
          <input name="name" placeholder="Naam" required /><br/>
          <input name="email" type="email" placeholder="E-mail" required /><br/>
          <textarea name="message" placeholder="Waar wil je naartoe?" required></textarea><br/>
          <button type="submit">Verzend</button>
        </form>

        <h2>🚕 Voorbeeldprijzen</h2>
        <ul>
          <li>Maassluis → Rotterdam Airport: €65</li>
          <li>Maassluis → Schiphol: €95</li>
        </ul>

        <h2>📍 Taxi Maassluis → Rotterdam</h2>
        <p>Boek eenvoudig vervoer van Maassluis naar Rotterdam via WhatsApp.</p>
      </main>
    </div>
  )
}