const features = [
  'Next.js 14 app router',
  'GitHub Actions CI + Vercel workflows',
  'Preview and production deployment rules',
  'Mission Control status section'
];

export default function HomePage() {
  return (
    <main style={{ padding: 24, fontFamily: 'Arial, sans-serif', maxWidth: 900, margin: '0 auto' }}>
      <h1>🦾 Kerico Builder Starter</h1>
      <p>Project OS v1 is active. Ready to build and deploy.</p>

      <section style={{ marginTop: 24, padding: 16, border: '1px solid #dbe4ff', borderRadius: 12, background: '#f8fbff' }}>
        <h2 style={{ marginTop: 0 }}>Mission Control</h2>
        <p style={{ marginBottom: 8 }}>
          Track live operations progress and KPIs from your central dashboard.
        </p>
        <a href="/mission-control" style={{ color: '#1d4ed8', fontWeight: 600 }}>
          Open Mission Control →
        </a>
      </section>

      <section style={{ marginTop: 24, padding: 16, border: '1px solid #dbe4ff', borderRadius: 12, background: '#f8fbff' }}>
        <h3 style={{ marginTop: 0 }}>New: Monetization Offer</h3>
        <p>Launch-ready digital product page for your first online sales test.</p>
        <a href="/nemt-starter-kit" style={{ color: '#1d4ed8', fontWeight: 700 }}>Open NEMT Starter Kit page →</a>
      </section>


      <section style={{ marginTop: 24, padding: 16, border: '1px solid #e5e7eb', borderRadius: 12, background: '#f9fafb' }}>
        <h3 style={{ marginTop: 0 }}>Fast Product Launch</h3>
        <p>Non-NEMT digital product built for immediate online sales.</p>
        <a href="/agent-business-kit" style={{ color: '#111827', fontWeight: 700 }}>Open Agent Business OS Kit →</a>
      </section>

      <section style={{ marginTop: 24, padding: 16, border: '1px solid #e5e7eb', borderRadius: 12, background: '#f9fafb' }}>
        <h3 style={{ marginTop: 0 }}>NEMT Product Suite</h3>
        <p>Dedicated NEMT digital products for direct-contract growth and margin operations.</p>
        <a href="/nemt-products" style={{ color: "#111827", fontWeight: 700 }}>Open NEMT Product Suite →</a>
      </section>

      <section style={{ marginTop: 24 }}>
        <h3>Starter Features</h3>
        <ul>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
