import { HeadContent, Outlet, Scripts, createRootRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { LangProvider, useLang } from '@/contexts/LangContext'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Filanwaa — Knowledge · Faith · Culture' },
      { name: 'description', content: 'Filanwaa: IT, Islamic Religion, and Somali Literature — bilingual knowledge platform' },
      { name: 'google-adsense-account', content: 'ca-pub-8273218830552772' },
    ],
    links: [
      { rel: 'icon', type: 'image/svg+xml', href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%232c1f7a'/%3E%3Ctext x='16' y='22' font-family='serif' font-size='18' font-weight='bold' fill='%23c9952a' text-anchor='middle'%3EF%3C/text%3E%3C/svg%3E" },
    ],
  }),
  shellComponent: RootDocument,
  component: RootLayout,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8273218830552772"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <LangProvider>
          {children}
        </LangProvider>
        <Scripts />
      </body>
    </html>
  )
}

// Nav component used by the layout
function NavBar() {
  const { lang, setLang, t } = useLang()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const itItems = [
    { key: 'it.python', href: '/it/python' },
    { key: 'it.css', href: '/it/css' },
    { key: 'it.java', href: '/it/java' },
    { key: 'it.sql', href: '/it/sql' },
    { key: 'it.php', href: '/it/php' },
  ]

  const diintaItems = [
    { key: 'diinta.salaada', href: '/diinta/salaada' },
    { key: 'diinta.soonka', href: '/diinta/soonka' },
    { key: 'diinta.zakada', href: '/diinta/zakada' },
    { key: 'diinta.xajka', href: '/diinta/xajka' },
  ]

  const suugaantaItems = [
    { key: 'suugaanta.maahmaahyo', href: '/suugaanta/maahmaahyo' },
    { key: 'suugaanta.xikmado', href: '/suugaanta/xikmado' },
    { key: 'suugaanta.shekooyin', href: '/suugaanta/shekooyin' },
    { key: 'suugaanta.gabayo', href: '/suugaanta/gabayo' },
    { key: 'suugaanta.heeso', href: '/suugaanta/heeso' },
  ]

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(253,247,239,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(44,31,122,0.1)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 38, height: 38, borderRadius: '50%',
              background: 'var(--indigo)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, fontWeight: 700, color: 'var(--gold)' }}>F</span>
            </div>
            <div>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, fontWeight: 700, color: 'var(--ink-dark)', letterSpacing: '-0.02em' }}>
                Filanwaa
              </span>
              <div style={{ fontSize: 10, color: 'var(--ink-light)', letterSpacing: '0.12em', textTransform: 'uppercase', lineHeight: 1 }}>
                Knowledge · Faith · Culture
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden-mobile">
            <DropdownMenu label={t('nav.it')} items={itItems} t={t} color="var(--indigo)" active={activeDropdown === 'it'} onToggle={() => setActiveDropdown(activeDropdown === 'it' ? null : 'it')} onClose={() => setActiveDropdown(null)} />
            <DropdownMenu label={t('nav.diinta')} items={diintaItems} t={t} color="var(--teal)" active={activeDropdown === 'diinta'} onToggle={() => setActiveDropdown(activeDropdown === 'diinta' ? null : 'diinta')} onClose={() => setActiveDropdown(null)} />
            <DropdownMenu label={t('nav.suugaanta')} items={suugaantaItems} t={t} color="var(--ruby)" active={activeDropdown === 'suugaanta'} onToggle={() => setActiveDropdown(activeDropdown === 'suugaanta' ? null : 'suugaanta')} onClose={() => setActiveDropdown(null)} />
            <Link to="/about" style={{ ...navLinkStyle, marginLeft: 4 }} onClick={() => setActiveDropdown(null)}>{t('nav.about')}</Link>
            <Link to="/contact" style={{ ...navLinkStyle }} onClick={() => setActiveDropdown(null)}>{t('nav.contact')}</Link>
          </div>

          {/* Lang toggle + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              onClick={() => setLang(lang === 'en' ? 'so' : 'en')}
              style={{
                background: 'var(--indigo)',
                color: '#fff',
                border: 'none',
                borderRadius: 20,
                padding: '5px 14px',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                letterSpacing: '0.05em',
                transition: 'opacity 0.2s',
              }}
            >
              {lang === 'en' ? 'SO' : 'EN'}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'none' }}
              className="show-mobile"
              aria-label="Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink-dark)" strokeWidth="2" strokeLinecap="round">
                {mobileOpen ? (
                  <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                ) : (
                  <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="mobile-menu" style={{ borderTop: '1px solid rgba(44,31,122,0.1)', paddingBottom: '1rem' }}>
            <MobileSection label={t('nav.it')} items={itItems} t={t} onClose={() => setMobileOpen(false)} />
            <MobileSection label={t('nav.diinta')} items={diintaItems} t={t} onClose={() => setMobileOpen(false)} />
            <MobileSection label={t('nav.suugaanta')} items={suugaantaItems} t={t} onClose={() => setMobileOpen(false)} />
            <Link to="/about" style={mobileLinkStyle} onClick={() => setMobileOpen(false)}>{t('nav.about')}</Link>
            <Link to="/contact" style={mobileLinkStyle} onClick={() => setMobileOpen(false)}>{t('nav.contact')}</Link>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  )
}

const navLinkStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: 'var(--ink-mid)',
  fontSize: 15,
  fontWeight: 500,
  padding: '6px 12px',
  borderRadius: 8,
  transition: 'background 0.15s, color 0.15s',
}

const mobileLinkStyle: React.CSSProperties = {
  display: 'block',
  textDecoration: 'none',
  color: 'var(--ink-mid)',
  fontSize: 16,
  padding: '10px 1rem',
  borderRadius: 8,
}

function DropdownMenu({ label, items, t, color, active, onToggle, onClose }: {
  label: string
  items: { key: string; href: string }[]
  t: (k: string) => string
  color: string
  active: boolean
  onToggle: () => void
  onClose: () => void
}) {
  return (
    <div style={{ position: 'relative' }} onMouseEnter={() => onToggle()} onMouseLeave={() => onClose()}>
      <button
        onClick={onToggle}
        style={{
          background: active ? 'rgba(44,31,122,0.07)' : 'none',
          border: 'none',
          cursor: 'pointer',
          color: active ? 'var(--indigo)' : 'var(--ink-mid)',
          fontSize: 15,
          fontWeight: 500,
          padding: '6px 12px',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          transition: 'background 0.15s, color 0.15s',
        }}
      >
        {label}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ transform: active ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {active && (
        <div
          className="nav-dropdown"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            minWidth: 200,
            background: '#fff',
            borderRadius: 12,
            boxShadow: '0 8px 32px rgba(44,31,122,0.15)',
            border: '1px solid rgba(44,31,122,0.08)',
            overflow: 'hidden',
            paddingTop: 4,
            paddingBottom: 4,
            marginTop: 4,
          }}
        >
          {items.map((item) => (
            <Link
              key={item.key}
              to={item.href}
              style={{
                display: 'block',
                padding: '9px 18px',
                textDecoration: 'none',
                color: 'var(--ink-mid)',
                fontSize: 14,
                fontWeight: 500,
                transition: 'background 0.15s, color 0.15s',
                borderLeft: `3px solid transparent`,
              }}
              onClick={onClose}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(44,31,122,0.05)'
                ;(e.currentTarget as HTMLElement).style.borderLeftColor = color
                ;(e.currentTarget as HTMLElement).style.color = color
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'transparent'
                ;(e.currentTarget as HTMLElement).style.borderLeftColor = 'transparent'
                ;(e.currentTarget as HTMLElement).style.color = 'var(--ink-mid)'
              }}
            >
              {t(item.key)}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function MobileSection({ label, items, t, onClose }: {
  label: string
  items: { key: string; href: string }[]
  t: (k: string) => string
  onClose: () => void
}) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        style={{ ...mobileLinkStyle, width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 600, color: 'var(--ink-dark)' }}
      >
        {label}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div style={{ paddingLeft: '1rem' }}>
          {items.map((item) => (
            <Link key={item.key} to={item.href} style={{ ...mobileLinkStyle, fontSize: 14, color: 'var(--indigo)' }} onClick={onClose}>
              {t(item.key)}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function Footer() {
  const { t } = useLang()
  return (
    <footer style={{ background: 'var(--ink-dark)', color: 'rgba(255,255,255,0.85)', marginTop: 80 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontWeight: 700, color: 'var(--ink-dark)' }}>F</span>
              </div>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, fontWeight: 700, color: '#fff' }}>Filanwaa</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{t('footer.tagline')}</p>
          </div>

          {/* Sections */}
          <div>
            <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 16, fontWeight: 600, color: 'var(--gold)', marginBottom: 12, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{t('nav.it')}</h4>
            {['python', 'css', 'java', 'sql', 'php'].map(s => (
              <Link key={s} to={`/it/${s}`} style={{ display: 'block', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: 13, marginBottom: 6, transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.9)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)'}
              >
                {s.toUpperCase()}
              </Link>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 16, fontWeight: 600, color: 'var(--teal-light)', marginBottom: 12, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{t('nav.diinta')}</h4>
            {[
              { href: '/diinta/salaada', label: t('diinta.salaada') },
              { href: '/diinta/soonka', label: t('diinta.soonka') },
              { href: '/diinta/zakada', label: t('diinta.zakada') },
              { href: '/diinta/xajka', label: t('diinta.xajka') },
            ].map(item => (
              <Link key={item.href} to={item.href} style={{ display: 'block', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: 13, marginBottom: 6, transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.9)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)'}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 16, fontWeight: 600, color: '#e8a0a8', marginBottom: 12, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{t('nav.suugaanta')}</h4>
            {[
              { href: '/suugaanta/maahmaahyo', label: t('suugaanta.maahmaahyo') },
              { href: '/suugaanta/xikmado', label: t('suugaanta.xikmado') },
              { href: '/suugaanta/shekooyin', label: t('suugaanta.shekooyin') },
              { href: '/suugaanta/gabayo', label: t('suugaanta.gabayo') },
              { href: '/suugaanta/heeso', label: t('suugaanta.heeso') },
            ].map(item => (
              <Link key={item.href} to={item.href} style={{ display: 'block', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: 13, marginBottom: 6, transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.9)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)'}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social / Contact */}
          <div>
            <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 16, fontWeight: 600, color: 'var(--gold-light)', marginBottom: 12, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{t('contact.social')}</h4>
            <a href="https://youtube.com/@filanwaa" target="_blank" rel="noopener" style={socialLinkStyle}>
              <YoutubeIcon /> YouTube
            </a>
            <a href="https://instagram.com/filanwaa" target="_blank" rel="noopener" style={socialLinkStyle}>
              <InstagramIcon /> Instagram
            </a>
            <a href="https://facebook.com/filanwaaa" target="_blank" rel="noopener" style={socialLinkStyle}>
              <FacebookIcon /> Facebook
            </a>
            <a href="https://twitter.com/filanwaay" target="_blank" rel="noopener" style={socialLinkStyle}>
              <TwitterIcon /> Twitter / X
            </a>
            <a href="mailto:filanwaa@gmail.com" style={{ ...socialLinkStyle, marginTop: 8 }}>
              <MailIcon /> filanwaa@gmail.com
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} Filanwaa. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}

const socialLinkStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  color: 'rgba(255,255,255,0.55)',
  textDecoration: 'none',
  fontSize: 13,
  marginBottom: 8,
  transition: 'color 0.15s',
}

// SVG Icons
function YoutubeIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
}
function InstagramIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
}
function FacebookIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
}
function TwitterIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
}
function MailIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
}

// Default layout with nav + outlet + footer
export default function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}
