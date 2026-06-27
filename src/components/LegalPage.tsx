import { useLang } from '@/contexts/LangContext'

export interface LegalSection {
  heading: { en: string; so: string }
  body: { en: React.ReactNode; so: React.ReactNode }
}

interface LegalPageProps {
  title: { en: string; so: string }
  intro: { en: string; so: string }
  updated: { en: string; so: string }
  sections: LegalSection[]
}

/**
 * Shared layout for policy / legal pages (Privacy, Terms, Disclaimer).
 * These pages are required for Google AdSense approval and present the same
 * content in both English and Somali based on the active language.
 */
export function LegalPage({ title, intro, updated, sections }: LegalPageProps) {
  const { lang } = useLang()

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, var(--ink-dark) 0%, var(--indigo) 120%)',
        padding: '4.5rem 1.5rem 3rem',
      }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.1,
            marginBottom: 14,
          }}>
            {lang === 'en' ? title.en : title.so}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, maxWidth: 640, lineHeight: 1.7 }}>
            {lang === 'en' ? intro.en : intro.so}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, marginTop: 18, letterSpacing: '0.03em' }}>
            {lang === 'en' ? updated.en : updated.so}
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '3.5rem 1.5rem 5rem' }}>
        {sections.map((section, i) => (
          <section key={i} style={{ marginBottom: '2.25rem' }}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.6rem',
              fontWeight: 700,
              color: 'var(--ink-dark)',
              marginBottom: 12,
            }}>
              {lang === 'en' ? section.heading.en : section.heading.so}
            </h2>
            <div style={{ color: 'var(--ink-mid)', fontSize: 16, lineHeight: 1.85 }}>
              {lang === 'en' ? section.body.en : section.body.so}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
