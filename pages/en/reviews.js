import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function ReviewsEN() {
  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      text: "Excellent service! The taxi was right on time and the driver was very friendly."
    },
    {
      name: "Emily Smith",
      rating: 5,
      text: "Had a very comfortable ride. Very satisfied with the professional and safe service."
    },
    {
      name: "Ahmed K.",
      rating: 4,
      text: "Good experience. The driver knew the route well. Highly recommended, even though traffic was a bit heavy."
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
        <meta name="description" content="Read customer reviews for Taxi BenSsa. Real testimonials with star ratings about our taxi service." />
        <link rel="alternate" href="/en/reviews" hrefLang="en" />
        <link rel="alternate" href="/nl/reviews" hrefLang="nl" />
      </Head>
      <header className="navbar">
        <nav>
          <ul>
            <li><Link href="/en"><a>Home</a></Link></li>
            <li><Link href="/en/services"><a>Services</a></Link></li>
            <li><Link href="/en/rates"><a>Rates</a></Link></li>
            <li><Link href="/en/reviews"><a>Reviews</a></Link></li>
            <li><Link href="/en/contact"><a>Contact</a></Link></li>
          </ul>
          <div className="lang-switch">
            <Link href="/nl/reviews"><a>NL</a></Link> | <Link href="/en/reviews"><a>EN</a></Link>
          </div>
        </nav>
      </header>

      <main className="page-content">
        <h1>Customer Reviews</h1>
        <div className="carousel">
          <div className="review-card">
            <p>&ldquo;{currentReview.text}&rdquo;</p>
            <p><strong>{currentReview.name}</strong></p>
            <p className="stars">
              {"★".repeat(currentReview.rating) + "☆".repeat(5 - currentReview.rating)}
            </p>
          </div>
          <button className="arrow left" onClick={handlePrev} aria-label="Previous review">‹</button>
          <button className="arrow right" onClick={handleNext} aria-label="Next review">›</button>
        </div>
      </main>
    </>
  );
}
