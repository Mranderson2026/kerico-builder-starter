const checkoutLink = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || '#';

const includes = [
  'Direct facility contract outreach scripts (dialysis/oncology/specialty)',
  'Margin guardrail framework (25%+ target discipline)',
  'Weekly KPI tracker templates (utilization, trips/van/day, close rate)',
  'Referral + family intake scripts',
  'Bookkeeper replacement doc-drop workflow templates',
  '30-day implementation plan + operating cadence'
];

export default function NemtStarterKitPage() {
  return (
    <main style={{ padding: 24, fontFamily: 'Arial, sans-serif', maxWidth: 960, margin: '0 auto' }}>
      <h1>NEMT Direct Contract Starter Kit</h1>
      <p style={{ fontSize: 18 }}>
        Turn broker-heavy chaos into a repeatable direct-facility growth system.
      </p>

      <section style={{ border: '1px solid #dbe4ff', borderRadius: 12, padding: 16, background: '#f8fbff', marginTop: 20 }}>
        <h2 style={{ marginTop: 0 }}>What you get</h2>
        <ul>
          {includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: 20 }}>
        <h2>Who this is for</h2>
        <p>
          NEMT operators and healthcare transport teams that need better margins, stronger facility relationships,
          and a weekly operating system that actually drives revenue.
        </p>
      </section>

      <section style={{ marginTop: 20, border: '1px solid #e2e8f0', borderRadius: 12, padding: 16 }}>
        <h2 style={{ marginTop: 0 }}>Launch Pricing (Test)</h2>
        <p><strong>$199 one-time</strong> (early operator cohort pricing)</p>
        <p>Includes starter kit assets + implementation checklist.</p>
        <a
          href={checkoutLink}
          style={{
            display: 'inline-block',
            marginTop: 10,
            background: '#1d4ed8',
            color: 'white',
            padding: '10px 16px',
            borderRadius: 8,
            textDecoration: 'none',
            fontWeight: 700
          }}
        >
          Get the Starter Kit
        </a>
        {checkoutLink === '#' && (
          <p style={{ color: '#b45309', marginTop: 10 }}>
            Checkout link not configured yet. Set <code>NEXT_PUBLIC_STRIPE_PAYMENT_LINK</code> in Vercel env.
          </p>
        )}
      </section>
    </main>
  );
}
