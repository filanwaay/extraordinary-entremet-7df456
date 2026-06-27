import { createFileRoute, Link } from '@tanstack/react-router'
import { useLang } from '@/contexts/LangContext'
import { AdUnit, AD_SLOTS } from '@/components/AdUnit'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const { t } = useLang()

  return (
    <main>
      {/* Hero Section */}
      <section
        className="geo-pattern"
        style={{
          background: 'linear-gradient(135deg, var(--ink-dark) 0%, var(--indigo) 60%, #1a0d5e 100%)',
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div style={{
          position: 'absolute', top: -120, right: -80,
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,149,42,0.15) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', bottom: -80, left: -60,
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,139,143,0.2) 0%, transparent 70%)',
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '5rem 1.5rem', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 760 }}>
            {/* Badge */}
            <div className="fade-up-delay-1" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(201,149,42,0.15)', border: '1px solid rgba(201,149,42,0.3)',
              borderRadius: 20, padding: '5px 16px', marginBottom: 24,
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
              <span style={{ fontSize: 13, color: 'var(--gold-light)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                filanwaa.com
              </span>
            </div>

            <h1 className="fade-up-delay-2" style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: '#ffffff',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}>
              <span className="gold-shimmer">{t('home.hero.title')}</span>
            </h1>

            <p className="fade-up-delay-3" style={{
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
              maxWidth: 580,
            }}>
              {t('home.hero.subtitle')}
            </p>

            <div className="fade-up-delay-4" style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              <Link
                to="/it/python"
                style={{
                  background: 'var(--gold)',
                  color: 'var(--ink-dark)',
                  textDecoration: 'none',
                  padding: '14px 32px',
                  borderRadius: 50,
                  fontWeight: 700,
                  fontSize: 16,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  display: 'inline-block',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(201,149,42,0.4)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'none'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                {t('home.hero.explore')}
              </Link>
              <Link
                to="/about"
                style={{
                  background: 'transparent',
                  color: 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  padding: '14px 32px',
                  borderRadius: 50,
                  fontWeight: 600,
                  fontSize: 16,
                  border: '1.5px solid rgba(255,255,255,0.25)',
                  transition: 'border-color 0.2s, color 0.2s',
                  display: 'inline-block',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.6)'
                  ;(e.currentTarget as HTMLElement).style.color = '#fff'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)'
                  ;(e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.8)'
                }}
              >
                {t('nav.about')}
              </Link>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: 'block', height: 60, width: '100%' }}>
            <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="var(--bg-cream)" />
          </svg>
        </div>
      </section>

      {/* Sections */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 600,
            color: 'var(--ink-dark)',
            marginBottom: '0.75rem',
          }}>
            {t('home.sections')}
          </h2>
          <div style={{ width: 60, height: 3, background: 'var(--gold)', margin: '0 auto', borderRadius: 2 }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          <SectionCard
            title={t('home.it.title')}
            description={t('home.it.desc')}
            icon={<ITIcon />}
            color="var(--indigo)"
            bgColor="var(--indigo-bg)"
            href="/it/python"
            items={['Python', 'CSS', 'Java', 'SQL', 'PHP']}
            itemHrefs={['/it/python', '/it/css', '/it/java', '/it/sql', '/it/php']}
            t={t}
          />
          <SectionCard
            title={t('home.diinta.title')}
            description={t('home.diinta.desc')}
            icon={<DiintaIcon />}
            color="var(--teal)"
            bgColor="var(--teal-bg)"
            href="/diinta/salaada"
            items={[t('diinta.salaada'), t('diinta.soonka'), t('diinta.zakada'), t('diinta.xajka')]}
            itemHrefs={['/diinta/salaada', '/diinta/soonka', '/diinta/zakada', '/diinta/xajka']}
            t={t}
          />
          <SectionCard
            title={t('home.suugaanta.title')}
            description={t('home.suugaanta.desc')}
            icon={<SuugaantaIcon />}
            color="var(--ruby)"
            bgColor="var(--ruby-bg)"
            href="/suugaanta/maahmaahyo"
            items={[t('suugaanta.maahmaahyo'), t('suugaanta.xikmado'), t('suugaanta.shekooyin'), t('suugaanta.gabayo'), t('suugaanta.heeso')]}
            itemHrefs={['/suugaanta/maahmaahyo', '/suugaanta/xikmado', '/suugaanta/shekooyin', '/suugaanta/gabayo', '/suugaanta/heeso']}
            t={t}
          />
        </div>
      </section>

      {/* In-content ad */}
      <AdUnit slot={AD_SLOTS.inContent} style={{ marginTop: 0 }} />

      {/* CTA Banner */}
      <section style={{
        background: 'linear-gradient(135deg, var(--teal) 0%, var(--indigo) 100%)',
        padding: '5rem 1.5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#fff',
            marginBottom: 16,
            fontWeight: 600,
          }}>
            filanwaa@gmail.com
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 28, fontSize: 17 }}>
            {t('contact.desc')}
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { href: 'https://youtube.com/@filanwaa', label: 'YouTube' },
              { href: 'https://instagram.com/filanwaa', label: 'Instagram' },
              { href: 'https://facebook.com/filanwaaa', label: 'Facebook' },
              { href: 'https://twitter.com/filanwaay', label: 'Twitter' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener" style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#fff',
                textDecoration: 'none',
                padding: '8px 20px',
                borderRadius: 20,
                fontSize: 14,
                fontWeight: 600,
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.25)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.15)'}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function SectionCard({ title, description, icon, color, bgColor, href, items, itemHrefs, t }: {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  bgColor: string
  href: string
  items: string[]
  itemHrefs: string[]
  t: (k: string) => string
}) {
  return (
    <div
      className="card-hover"
      style={{
        background: '#fff',
        borderRadius: 20,
        padding: '2rem',
        border: '1px solid rgba(44,31,122,0.07)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{
        width: 56, height: 56, borderRadius: 14,
        background: bgColor,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color, marginBottom: 20,
      }}>
        {icon}
      </div>
      <h3 style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1.6rem', fontWeight: 700,
        color: 'var(--ink-dark)', marginBottom: 10,
      }}>
        {title}
      </h3>
      <p style={{ color: 'var(--ink-light)', fontSize: 15, lineHeight: 1.7, marginBottom: 20, flexGrow: 1 }}>
        {description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
        {items.map((item, i) => (
          <Link
            key={item}
            to={itemHrefs[i]}
            style={{
              background: bgColor,
              color,
              textDecoration: 'none',
              padding: '4px 12px',
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 600,
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.75'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
          >
            {item}
          </Link>
        ))}
      </div>
      <Link
        to={href}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          color, textDecoration: 'none', fontWeight: 700, fontSize: 15,
          transition: 'gap 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget as HTMLElement).style.gap = '10px'}
        onMouseLeave={e => (e.currentTarget as HTMLElement).style.gap = '6px'}
      >
        {t('home.readmore')}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    </div>
  )
}

function ITIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
}
function DiintaIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
}
function SuugaantaIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
}
