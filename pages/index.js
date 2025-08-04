export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <img
        src="/taxiboard-banner.jpg"
        alt="Taxi BenSsa Banner"
        style={{ width: "100%", borderRadius: "10px", marginBottom: "30px" }}
      />

      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>Taxi BenSsa</h1>
      <p style={{ fontSize: "18px", color: "#333" }}>Altijd snel, altijd beschikbaar in Zuid-Holland</p>

      <p style={{ marginTop: "10px" }}>
        <a href="https://wa.me/31643636957" target="_blank" style={{ color: "#6b46c1", fontWeight: "bold", textDecoration: "underline" }}>
          Boek nu via WhatsApp
        </a>
      </p>

      <h2 style={{ marginTop: "40px" }}>Waarom Taxi BenSsa?</h2>

      <ul style={{ listStyle: "none", paddingLeft: 0, fontSize: "17px" }}>
        <li style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
          <img src="/clock.svg" alt="Op tijd" width={24} height={24} style={{ marginRight: "10px" }} />
          <strong>Altijd op tijd –</strong> Wij staan voor je klaar, wanneer jij dat nodig hebt.
        </li>
        <li style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
          <img src="/car.svg" alt="Comfort" width={24} height={24} style={{ marginRight: "10px" }} />
          <strong>Comfortabel vervoer –</strong> Schone wagens en vriendelijke chauffeurs.
        </li>
        <li style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
          <img src="/pay.svg" alt="Betalen" width={24} height={24} style={{ marginRight: "10px" }} />
          <strong>Flexibel betalen –</strong> Via Tikkie of contant, wat jou uitkomt.
        </li>
      </ul>

      <h2 style={{ marginTop: "40px" }}>Actieve Gebieden</h2>
      <p style={{ fontSize: "17px" }}>
        Dagelijks actief in <strong>Maassluis, Vlaardingen, Rotterdam</strong> en heel <strong>Zuid-Holland</strong>. Ook voor luchthavens, ziekenhuizen en evenementen.
      </p>

      <p style={{ fontSize: "14px", marginTop: "40px", color: "#888" }}>© 2025 Taxi BenSsa. Alle rechten voorbehouden.</p>
    </div>
  );
}
