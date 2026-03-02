const products = [
  {
    slug: 'facility-growth-kit',
    name: 'NEMT Facility Growth Kit',
    price: '$249',
    desc: 'Direct contract outreach system for dialysis/oncology/specialty clinics.'
  },
  {
    slug: 'dispatch-margin-optimizer',
    name: 'Dispatch Margin Optimizer',
    price: '$199',
    desc: 'Route/utilization/margin control templates + weekly intervention playbook.'
  },
  {
    slug: 'compliance-sop-pack',
    name: 'NEMT Compliance SOP Pack',
    price: '$149',
    desc: 'Operational SOP templates for consistent service and audit readiness.'
  }
];

export default function NemtProductsPage() {
  return (
    <main style={{ padding: 24, fontFamily: 'Arial, sans-serif', maxWidth: 1000, margin: '0 auto' }}>
      <h1>NEMT Product Suite</h1>
      <p>Digital products designed to help transport operators grow revenue and protect margins.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 14, marginTop: 20 }}>
        {products.map((p) => (
          <a key={p.slug} href={`/nemt-products/${p.slug}`} style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 14, textDecoration: 'none', color: '#111827', background: '#fff' }}>
            <h3 style={{ marginTop: 0 }}>{p.name}</h3>
            <p style={{ margin: '6px 0', fontWeight: 700 }}>{p.price}</p>
            <p style={{ margin: 0 }}>{p.desc}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
