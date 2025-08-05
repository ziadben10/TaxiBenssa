import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function ReviewsNL() {
  const reviews = [
    {
      name: "Jan de Vries",
      rating: 5,
      text: "Uitstekende service! De taxi was netjes op tijd en de chauffeur was erg vriendelijk."
    },
    {
      name: "Sophie Klaasen",
      rating: 5,
      text: "Had een zeer comfortabele rit. Zeer tevreden over de professionele en veilige service."
    },
    {
      name: "Ali Hasan",
      rating: 4,
      text: "Goede ervaring. De chauffeur kende de weg goed. Zeker een aanrader, al was de verkeersdrukte wat hoog."
    }
  ];
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((current - 1 + reviews.length) % reviews.length);
  };
  const handleNext = () => {
    setCurrent((current + 1) % reviews.length);
  };

  const currentReview = reviews[current];

  return (
    <>
      <Head>
        <title>Reviews - Taxi BenSsa</title>
        <meta name="description" content="Lees klantbeoordelingen van Taxi BenSsa. Echte reviews met sterwaarderingen over onze taxi service." />
        <link rel="alternate" href="/en/reviews" hrefLang="en" />
        <link rel="alternate" href="/nl/reviews" hrefLang="nl" />
      </Head>
      <header className="navbar">
        <nav>
          <ul>
            <li><Link href="/nl"><a>Home</a></Link></li>
            <li><Link href="/nl/diensten"><a>Diensten</a></Link></li>
            <li><Link href="/nl/tarieven"><a>Tarieven</a></Link></li>
            <li><Link href="/nl/reviews"><a>Reviews</a></Link></li>
            <li><Link href="/nl/contact"><a>Contact</a></Link></li>
          </ul>
          <div className="lang-switch">
            <Link href="/nl/reviews"><a>NL</a></Link> | <Link href="/en/reviews"><a>EN</a></Link>
          </div>
        </nav>
      </header>

      <main className="page-content">
        <h1>Klantreviews</h1>
        <div className="carousel">
          <div className="review-card">
            <p>&ldquo;{currentReview.text}&rdquo;</p>
            <p><strong>{currentReview.name}</strong></p>
            <p className="stars">
              {"★".repeat(currentReview.rating) + "☆".repeat(5 - currentReview.rating)}
            </p>
          </div>
          <button className="arrow left" onClick={handlePrev} aria-label="Vorige review">‹</button>
          <button className="arrow right" onClick={handleNext} aria-label="Volgende review">›</button>
        </div>
      </main>
    </>
  );
}
