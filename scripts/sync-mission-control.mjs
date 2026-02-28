import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const mdPath = path.resolve(root, '../../ops/mission-control/mission-control-dashboard.md');
const outPath = path.resolve(root, 'public/data/mission-control.json');

const data = {
  updatedAt: new Date().toISOString(),
  source: 'ops/mission-control/mission-control-dashboard.md',
  kpis: {},
  tickets: [],
  activity: []
};

if (fs.existsSync(mdPath)) {
  const text = fs.readFileSync(mdPath, 'utf8');

  const kpiPatterns = {
    vans_utilized_pct: /- Vans utilized %: `([^`]+)`/,
    trips_per_van_per_day: /- Trips per van\/day: `([^`]+)`/,
    margin_per_trip: /- Margin per trip: `([^`]+)`/,
    facility_pipeline_count: /- Facility pipeline count: `([^`]+)`/,
    close_rate_pct: /- Close rate %: `([^`]+)`/,
    broker_trip_share_pct: /- Broker trip share %: `([^`]+)`/
  };

  for (const [k, re] of Object.entries(kpiPatterns)) {
    const m = text.match(re);
    data.kpis[k] = m ? m[1] : '—';
  }

  const ticketRows = [...text.matchAll(/^\| (T-\d+) \|([^|]+)\|([^|]+)\|([^|]+)\|([^|]+)\|([^|]+)\|$/gm)];
  data.tickets = ticketRows.map((m) => ({
    id: m[1].trim(),
    objective: m[2].trim(),
    owner: m[3].trim(),
    reviewer: m[4].trim(),
    due: m[5].trim(),
    status: m[6].trim()
  }));

  const activityRows = [...text.matchAll(/^\| (\d{4}-\d{2}-\d{2} [^|]+) \|([^|]+)\|([^|]+)\|$/gm)];
  data.activity = activityRows.slice(0, 20).map((m) => ({
    time: m[1].trim(),
    source: m[2].trim(),
    activity: m[3].trim()
  }));
}

fs.writeFileSync(outPath, JSON.stringify(data, null, 2));
console.log('synced mission control data ->', outPath);
