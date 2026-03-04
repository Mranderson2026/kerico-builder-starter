const products = [
  {
    slug: 'facility-growth-kit',
    name: 'NEMT Facility Growth Kit',
    price: '$249',
    desc: 'Direct contract outreach system for dialysis/oncology/specialty clinics.',
    badge: 'Best for growth'
  },
  {
    slug: 'dispatch-margin-optimizer',
    name: 'Dispatch Margin Optimizer',
    price: '$199',
    desc: 'Route/utilization/margin control templates + weekly intervention playbook.',
    badge: 'Best for margins'
  },
  {
    slug: 'compliance-sop-pack',
    name: 'NEMT Compliance SOP Pack',
    price: '$149',
    desc: 'Operational SOP templates for consistent service and audit readiness.',
    badge: 'Best for operations'
  }
];

const trustPoints = [
  'Built from real-world NEMT operations workflows',
  'Pricing and process discipline (25% margin-floor framework)',
  'Playbooks designed for immediate implementation',
  'Founder-led operator insights, not generic templates',
  'Backed by testimonials published on kericocare.com'
];

const outcomes = [
  { label: 'Execution speed', value: '2-4x faster' },
  { label: 'Process clarity', value: 'High' },
  { label: 'Team adoption', value: 'Simple templates' },
  { label: 'Use case depth', value: 'Growth + Ops + Compliance' }
];

const testimonials = [
  {
    quote:
      'Having a reliable transportation partner like Kerico allows us to focus on our core business, knowing that our employees and clients are well taken care of.',
    role: 'Business Partner',
    name: 'PADS, Houston, TX'
  },
  {
    quote: 'My driver is always kind and patient and makes getting to dialysis appointments stress-free.',
    role: 'Rider',
    name: 'Houston, TX'
  },
  {
    quote:
      'I love the flexibility of this job. I get to help people and make a difference while still having time for my family.',
    role: 'Driver',
    name: 'Dallas, TX'
  }
];

const testimonialVideos = [
  'https://www.youtube.com/embed/BvJV-k86abw',
  'https://www.youtube.com/embed/aWD5CKEyYbg',
  'https://www.youtube.com/embed/7J1PH8H4x1o'
];

export default function NemtProductsPage() {
  return (
    <main style={{ fontFamily: 'Inter, Arial, sans-serif', background: '#f4f8ff', color: '#0f172a' }}>
      <section
        style={{
          padding: '56px 24px',
          background:
            'radial-gradient(circle at 20% 20%, #dbeafe 0%, #eff6ff 35%, #f8fafc 70%)'
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24 }}>
          <div>
            <p style={{ fontWeight: 700, color: '#1d4ed8', marginBottom: 8 }}>KERICO NEMT PRODUCT SUITE</p>
            <h1 style={{ fontSize: 44, lineHeight: 1.1, margin: '0 0 14px' }}>
              Trusted Operator Systems to Grow Revenue and Protect Margin
            </h1>
            <p style={{ fontSize: 18, maxWidth: 680, color: '#334155' }}>
              These products are built from execution-tested NEMT workflows — designed to help operators win direct
              contracts, improve route economics, and run cleaner operations.
            </p>
            <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {trustPoints.map((p) => (
                <span
                  key={p}
                  style={{
                    background: '#e2e8f0',
                    borderRadius: 999,
                    padding: '8px 12px',
                    fontSize: 13,
                    fontWeight: 600
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div style={{ background: '#0f172a', color: '#e2e8f0', borderRadius: 16, padding: 18 }}>
            <p style={{ marginTop: 0, fontWeight: 700, color: '#7dd3fc' }}>Quick Product Intro</p>
            <div style={{ position: 'relative', paddingTop: '56.25%', borderRadius: 12, overflow: 'hidden', background: '#111827' }}>
              <video
                controls
                playsInline
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, objectFit: 'cover' }}
                src="/videos/nemt-product-intro.mp4"
              />
            </div>
            <p style={{ fontSize: 12, color: '#94a3b8', marginBottom: 0, marginTop: 10 }}>
              Custom product intro video generated for this page.
            </p>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '10px 24px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
          {outcomes.map((o) => (
            <div key={o.label} style={{ background: '#fff', border: '1px solid #dbeafe', borderRadius: 12, padding: 14 }}>
              <div style={{ fontSize: 12, color: '#64748b' }}>{o.label}</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: '#1e3a8a' }}>{o.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '28px 24px 52px' }}>
        <h2 style={{ marginTop: 0, fontSize: 30 }}>Choose Your Product</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
          {products.map((p) => (
            <a
              key={p.slug}
              href={`/nemt-products/${p.slug}`}
              style={{
                textDecoration: 'none',
                color: '#0f172a',
                background: '#fff',
                border: '1px solid #cbd5e1',
                borderRadius: 16,
                padding: 18,
                boxShadow: '0 8px 20px rgba(15,23,42,0.06)'
              }}
            >
              <div style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, color: '#1d4ed8', background: '#dbeafe', padding: '6px 8px', borderRadius: 8 }}>
                {p.badge}
              </div>
              <h3 style={{ marginBottom: 8 }}>{p.name}</h3>
              <p style={{ fontWeight: 800, fontSize: 24, margin: '0 0 8px' }}>{p.price}</p>
              <p style={{ margin: '0 0 14px', color: '#334155' }}>{p.desc}</p>
              <span style={{ color: '#1d4ed8', fontWeight: 700 }}>View product →</span>
            </a>
          ))}
        </div>
      </section>

      <section style={{ background: '#0f172a', color: '#e2e8f0', padding: '36px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h3 style={{ marginTop: 0 }}>Why buyers trust this suite</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 14 }}>
            {testimonials.map((t) => (
              <div key={t.quote} style={{ border: '1px solid #334155', borderRadius: 12, padding: 14, background: '#111827' }}>
                <p style={{ marginTop: 0, color: '#e2e8f0' }}>“{t.quote}”</p>
                <p style={{ marginBottom: 0, color: '#7dd3fc', fontWeight: 700 }}>{t.role}</p>
                <p style={{ marginTop: 2, marginBottom: 0, color: '#94a3b8', fontSize: 13 }}>{t.name}</p>
              </div>
            ))}
          </div>

          <h3 style={{ marginTop: 26 }}>Video testimonials</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 12 }}>
            {testimonialVideos.map((v) => (
              <div key={v} style={{ position: 'relative', paddingTop: '56.25%', borderRadius: 10, overflow: 'hidden' }}>
                <iframe
                  src={v}
                  title="Kerico testimonial video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                />
              </div>
            ))}
          </div>

          <p style={{ color: '#94a3b8', marginTop: 14 }}>
            Testimonials and videos sourced from kericocare.com and adapted for this product trust section.
          </p>
        </div>
      </section>
    </main>
  );
}
