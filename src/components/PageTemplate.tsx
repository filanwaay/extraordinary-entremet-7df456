import { Link } from '@tanstack/react-router'
import { useLang } from '@/contexts/LangContext'
import { AdUnit, AD_SLOTS } from '@/components/AdUnit'

interface SubMenuItem {
  label: string
  href: string
}

interface PageTemplateProps {
  category: string
  categoryHref: string
  title: string
  titleSo: string
  subtitle: string
  subtitleSo: string
  accentColor: string
  accentBg: string
  icon: React.ReactNode
  subMenuItems: SubMenuItem[]
  children: React.ReactNode
}

export function PageTemplate({
  category,
  categoryHref,
  title,
  titleSo,
  subtitle,
  subtitleSo,
  accentColor,
  accentBg,
  icon,
  subMenuItems,
  children,
}: PageTemplateProps) {
  const { lang, t } = useLang()

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Page Hero */}
      <div style={{
        background: `linear-gradient(135deg, var(--ink-dark) 0%, ${accentColor} 100%)`,
        padding: '4rem 1.5rem 3rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, right: 0, bottom: 0, left: 0,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cg fill='none' stroke='white' stroke-width='0.3' opacity='0.06'%3E%3Crect x='10' y='10' width='60' height='60' rx='8'/%3E%3Crect x='20' y='20' width='40' height='40' rx='4'/%3E%3Cline x1='10' y1='40' x2='20' y2='40'/%3E%3Cline x1='60' y1='40' x2='70' y2='40'/%3E%3Cline x1='40' y1='10' x2='40' y2='20'/%3E%3Cline x1='40' y1='60' x2='40' y2='70'/%3E%3C/g%3E%3C/svg%3E\")",
        }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link to={categoryHref} style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>{category}</Link>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>{lang === 'en' ? title : titleSo}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
            <div style={{
              width: 64, height: 64, borderRadius: 16,
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', flexShrink: 0,
            }}>
              {icon}
            </div>
            <div>
              <h1 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.1,
                marginBottom: 12,
              }}>
                {lang === 'en' ? title : titleSo}
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, maxWidth: 600, lineHeight: 1.7 }}>
                {lang === 'en' ? subtitle : subtitleSo}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sub Navigation */}
      <div style={{ background: '#fff', borderBottom: '1px solid rgba(44,31,122,0.08)', overflowX: 'auto' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', gap: 4 }}>
          {subMenuItems.map(item => (
            <Link
              key={item.href}
              to={item.href}
              style={{
                padding: '14px 18px',
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--ink-light)',
                whiteSpace: 'nowrap',
                borderBottom: '3px solid transparent',
                transition: 'color 0.15s, border-color 0.15s',
              }}
              activeProps={{
                style: {
                  color: accentColor,
                  borderBottom: `3px solid ${accentColor}`,
                  padding: '14px 18px',
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                if (!el.getAttribute('data-active')) {
                  el.style.color = accentColor
                }
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                if (!el.getAttribute('data-active')) {
                  el.style.color = 'var(--ink-light)'
                }
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
        <div className="prose-content">
          {children}
        </div>
        <AdUnit slot={AD_SLOTS.inContent} />
      </div>
    </div>
  )
}

// Reusable content card
export function ContentCard({ title, children, accentColor, accentBg }: {
  title: string
  children: React.ReactNode
  accentColor: string
  accentBg: string
}) {
  return (
    <div style={{
      background: accentBg,
      borderRadius: 16,
      padding: '1.75rem',
      marginBottom: '1.5rem',
      border: `1px solid ${accentColor}22`,
    }}>
      <h3 style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1.4rem', fontWeight: 700,
        color: accentColor, marginBottom: 12,
      }}>
        {title}
      </h3>
      {children}
    </div>
  )
}
