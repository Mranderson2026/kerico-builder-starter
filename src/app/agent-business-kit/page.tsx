const checkoutLink = process.env.NEXT_PUBLIC_AGENT_KIT_CHECKOUT || '#';

const bullets = [
  '30 plug-and-play agent prompts for revenue, operations, and content',
  'Mission Control dashboard templates + automation scripts',
  'Daily briefing system (AM/PM) + escalation rules',
  'Client outreach scripts + offer stack templates',
  'Safe autonomy checklist (approval gates + audit logging)'
];

export default function AgentBusinessKitPage() {
  return (
    <main style={{ padding: 24, fontFamily: 'Arial, sans-serif', maxWidth: 960, margin: '0 auto' }}>
      <h1>Agent Business OS Kit</h1>
      <p style={{ fontSize: 18 }}>
        Launch a lean AI-assisted business system in days, not months.
      </p>

      <section style={{ border: '1px solid #dbe4ff', borderRadius: 12, padding: 16, background: '#f8fbff', marginTop: 20 }}>
        <h2 style={{ marginTop: 0 }}>What’s inside</h2>
        <ul>
          {bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
      </section>

      <section style={{ marginTop: 20, border: '1px solid #e2e8f0', borderRadius: 12, padding: 16 }}>
        <h2 style={{ marginTop: 0 }}>Launch Offer</h2>
        <p><strong>$149 one-time</strong> (early-buyer pricing)</p>
        <p>Includes full template pack + implementation checklist.</p>
        <a href={checkoutLink} style={{display:'inline-block',marginTop:10,background:'#111827',color:'white',padding:'10px 16px',borderRadius:8,textDecoration:'none',fontWeight:700}}>
          Buy Agent Business OS Kit
        </a>
        {checkoutLink === '#' && <p style={{ color:'#b45309', marginTop:10 }}>Set <code>NEXT_PUBLIC_AGENT_KIT_CHECKOUT</code> to activate checkout.</p>}
      </section>
    </main>
  );
}
