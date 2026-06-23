import { createFileRoute } from '@tanstack/react-router'
import { useLang } from '@/contexts/LangContext'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  const { lang, t } = useLang()

  return (
    <div>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, var(--ink-dark) 0%, var(--gold) 150%)',
        padding: '5rem 1.5rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ffffff' fill-opacity='0.04'/%3E%3C/svg%3E\")",
        }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: 16,
          }}>
            {t('about.title')}
          </h1>
          <div style={{ width: 60, height: 3, background: 'var(--gold)', borderRadius: 2 }} />
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>
        {/* Mission */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 48 }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--indigo-bg) 0%, #fff 100%)',
            borderRadius: 20, padding: '2rem',
            border: '1px solid rgba(44,31,122,0.1)',
          }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--indigo)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 700, color: 'var(--ink-dark)', marginBottom: 12 }}>
              {t('about.mission')}
            </h2>
            <p style={{ color: 'var(--ink-mid)', lineHeight: 1.8, fontSize: 15 }}>
              {t('about.p1')}
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, var(--teal-bg) 0%, #fff 100%)',
            borderRadius: 20, padding: '2rem',
            border: '1px solid rgba(14,139,143,0.1)',
          }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 700, color: 'var(--ink-dark)', marginBottom: 12 }}>
              {t('about.vision')}
            </h2>
            <p style={{ color: 'var(--ink-mid)', lineHeight: 1.8, fontSize: 15 }}>
              {t('about.vision.text')}
            </p>
          </div>
        </div>

        {/* Main text */}
        <div style={{ background: '#fff', borderRadius: 20, padding: '2.5rem', border: '1px solid rgba(44,31,122,0.07)', marginBottom: 32 }}>
          <p style={{ color: 'var(--ink-mid)', lineHeight: 1.9, fontSize: 16, marginBottom: 16 }}>
            {t('about.p2')}
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16 }}>
          {[
            { num: '3', label: lang === 'en' ? 'Main Sections' : 'Qaybood' },
            { num: '14', label: lang === 'en' ? 'Topics Covered' : 'Mawduucyo' },
            { num: '2', label: lang === 'en' ? 'Languages' : 'Luuqadood' },
            { num: '∞', label: lang === 'en' ? 'Free Knowledge' : 'Cilmi Bilaash' },
          ].map((stat, i) => (
            <div key={i} style={{
              textAlign: 'center', background: 'var(--gold-bg)',
              borderRadius: 16, padding: '1.5rem 1rem',
              border: '1px solid rgba(201,149,42,0.15)',
            }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}>
                {stat.num}
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-light)', marginTop: 6, fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
