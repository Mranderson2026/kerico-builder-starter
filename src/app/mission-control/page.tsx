import fs from 'node:fs';
import path from 'node:path';

type DashboardData = {
  updatedAt?: string;
  source?: string;
  kpis?: Record<string, string>;
  tickets?: Array<{ id: string; objective: string; owner: string; reviewer: string; due: string; status: string }>;
  activity?: Array<{ time: string; source: string; activity: string }>;
};

function readDashboardData(): DashboardData {
  const filePath = path.join(process.cwd(), 'public', 'data', 'mission-control.json');
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export default function MissionControlPage() {
  const data = readDashboardData();
  const kpis = data.kpis || {};
  const tickets = data.tickets || [];
  const activity = data.activity || [];

  return (
    <main style={{ padding: 24, fontFamily: 'Arial, sans-serif', maxWidth: 1100, margin: '0 auto' }}>
      <h1>Mission Control</h1>
      <p>
        Synced from local operations dashboard. Last sync:{' '}
        <strong>{data.updatedAt ? new Date(data.updatedAt).toLocaleString() : '—'}</strong>
      </p>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 12, marginTop: 16 }}>
        {[
          ['Vans utilized %', kpis.vans_utilized_pct || '—'],
          ['Trips/van/day', kpis.trips_per_van_per_day || '—'],
          ['Margin/trip', kpis.margin_per_trip || '—'],
          ['Pipeline count', kpis.facility_pipeline_count || '—'],
          ['Close rate %', kpis.close_rate_pct || '—'],
          ['Broker share %', kpis.broker_trip_share_pct || '—']
        ].map(([name, value]) => (
          <div key={name} style={{ border: '1px solid #e2e8f0', borderRadius: 10, padding: 12, background: '#fff' }}>
            <div style={{ fontSize: 12, color: '#64748b' }}>{name}</div>
            <div style={{ fontSize: 22, fontWeight: 700 }}>{value}</div>
          </div>
        ))}
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Live Ticket Board</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['ID', 'Objective', 'Owner', 'Reviewer', 'Due', 'Status'].map((h) => (
                <th key={h} style={{ textAlign: 'left', borderBottom: '1px solid #cbd5e1', padding: 8 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tickets.length ? (
              tickets.map((t) => (
                <tr key={t.id}>
                  <td style={{ padding: 8, borderBottom: '1px solid #e2e8f0' }}>{t.id}</td>
                  <td style={{ padding: 8, borderBottom: '1px solid #e2e8f0' }}>{t.objective}</td>
                  <td style={{ padding: 8, borderBottom: '1px solid #e2e8f0' }}>{t.owner}</td>
                  <td style={{ padding: 8, borderBottom: '1px solid #e2e8f0' }}>{t.reviewer}</td>
                  <td style={{ padding: 8, borderBottom: '1px solid #e2e8f0' }}>{t.due}</td>
                  <td style={{ padding: 8, borderBottom: '1px solid #e2e8f0' }}>{t.status}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan={6} style={{ padding: 8 }}>No ticket data yet</td></tr>
            )}
          </tbody>
        </table>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>TUI Activity Feed</h2>
        <ul>
          {activity.length ? activity.map((a, idx) => (
            <li key={`${a.time}-${idx}`}>
              <strong>{a.time}</strong> [{a.source}] — {a.activity}
            </li>
          )) : <li>No recent activity yet</li>}
        </ul>
      </section>

      <p style={{ color: '#64748b', fontSize: 12, marginTop: 24 }}>Source: {data.source || 'n/a'}. Run <code>node scripts/sync-mission-control.mjs</code> before deploy to refresh.</p>
    </main>
  );
}
