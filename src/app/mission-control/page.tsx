const kpis = [
  { name: 'Vans utilized %', value: '—' },
  { name: 'Trips/van/day', value: '—' },
  { name: 'Margin/trip', value: '25% floor' },
  { name: 'Pipeline count', value: '—' }
];

const policies = [
  'Minimum margin per trip: 25%',
  'Maximum payment terms: Net 30',
  'Facility targeting mix: Balanced',
  'CTA focus: Facility operators only'
];

export default function MissionControlPage() {
  return (
    <main style={{ padding: 24, fontFamily: 'Arial, sans-serif', maxWidth: 1000, margin: '0 auto' }}>
      <h1>Mission Control</h1>
      <p>Lightweight operating dashboard for Kerico Builder workflows.</p>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 12, marginTop: 16 }}>
        {kpis.map((kpi) => (
          <div key={kpi.name} style={{ border: '1px solid #e2e8f0', borderRadius: 10, padding: 12, background: '#fff' }}>
            <div style={{ fontSize: 12, color: '#64748b' }}>{kpi.name}</div>
            <div style={{ fontSize: 22, fontWeight: 700 }}>{kpi.value}</div>
          </div>
        ))}
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Policy Locks</h2>
        <ul>
          {policies.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
