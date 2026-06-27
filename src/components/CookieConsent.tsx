import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useLang } from '@/contexts/LangContext'

const STORAGE_KEY = 'filanwaa-cookie-consent'

/**
 * Cookie consent notice shown to first-time visitors. Required context for
 * Google AdSense / GDPR — informs users that the Site uses cookies (including
 * advertising cookies) and links to the Cookie Policy. The choice is stored in
 * localStorage so it is only shown once.
 */
export function CookieConsent() {
  const { lang } = useLang()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
    } catch {
      // localStorage unavailable — don't block the page.
    }
  }, [])

  const decide = (value: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // ignore
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={lang === 'en' ? 'Cookie notice' : 'Ogeysiiska cookies'}
      style={{
        position: 'fixed',
        bottom: 16,
        left: 16,
        right: 16,
        zIndex: 1000,
        maxWidth: 640,
        margin: '0 auto',
        background: 'var(--ink-dark)',
        color: 'rgba(255,255,255,0.9)',
        borderRadius: 16,
        padding: '1.25rem 1.5rem',
        boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <p style={{ flex: '1 1 280px', fontSize: 14, lineHeight: 1.6, margin: 0, color: 'rgba(255,255,255,0.8)' }}>
        {lang === 'en'
          ? 'We use cookies to improve your experience and to serve personalized ads via Google AdSense.'
          : 'Waxaan isticmaalnaa cookies si aan u wanaajinno khibradaada iyo si aan kuugu soo bandhigno xayeysiis gaar ah oo Google AdSense ah.'}{' '}
        <Link to="/cookies" style={{ color: 'var(--gold-light)', textDecoration: 'underline' }}>
          {lang === 'en' ? 'Learn more' : 'Wax dheeraad ah baro'}
        </Link>
      </p>
      <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
        <button
          onClick={() => decide('declined')}
          style={{
            background: 'transparent',
            color: 'rgba(255,255,255,0.7)',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: 20,
            padding: '8px 18px',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          {lang === 'en' ? 'Decline' : 'Diid'}
        </button>
        <button
          onClick={() => decide('accepted')}
          style={{
            background: 'var(--gold)',
            color: 'var(--ink-dark)',
            border: 'none',
            borderRadius: 20,
            padding: '8px 20px',
            fontSize: 14,
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          {lang === 'en' ? 'Accept' : 'Aqbal'}
        </button>
      </div>
    </div>
  )
}
