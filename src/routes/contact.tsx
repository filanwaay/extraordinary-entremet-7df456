import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useLang } from '@/contexts/LangContext'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  const { lang, t } = useLang()
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setError(false)
    try {
      const body = new URLSearchParams(
        new FormData(e.currentTarget) as unknown as Record<string, string>,
      ).toString()
      // POST to the static skeleton, not '/', so the SSR catch-all doesn't intercept it.
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      if (!res.ok) throw new Error('Submission failed')
      setSent(true)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: 12,
    border: '1.5px solid rgba(44,31,122,0.15)',
    fontSize: 15,
    color: 'var(--ink-dark)',
    background: '#fff',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  }

  return (
    <div>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, var(--ink-dark) 0%, #1b4060 100%)',
        padding: '5rem 1.5rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: 16,
          }}>
            {t('contact.title')}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, maxWidth: 500, lineHeight: 1.7 }}>
            {t('contact.desc')}
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, alignItems: 'start' }}>
          {/* Contact Info */}
          <div>
            <div style={{ background: '#fff', borderRadius: 20, padding: '2rem', border: '1px solid rgba(44,31,122,0.07)', marginBottom: 20 }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 700, color: 'var(--ink-dark)', marginBottom: 20 }}>
                {t('contact.email')}
              </h2>
              <a href="mailto:filanwaa@gmail.com" style={{
                display: 'flex', alignItems: 'center', gap: 12,
                textDecoration: 'none', color: 'var(--indigo)', fontWeight: 600, fontSize: 16,
              }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--indigo-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--indigo)', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                filanwaa@gmail.com
              </a>
            </div>

            <div style={{ background: '#fff', borderRadius: 20, padding: '2rem', border: '1px solid rgba(44,31,122,0.07)' }}>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 700, color: 'var(--ink-dark)', marginBottom: 20 }}>
                {t('contact.social')}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { href: 'https://youtube.com/@filanwaa', label: 'YouTube @filanwaa', color: '#ff0000', icon: 'Y' },
                  { href: 'https://instagram.com/filanwaa', label: 'Instagram /filanwaa', color: '#e1306c', icon: 'I' },
                  { href: 'https://facebook.com/filanwaaa', label: 'Facebook /filanwaaa', color: '#1877f2', icon: 'F' },
                  { href: 'https://twitter.com/filanwaay', label: 'Twitter /filanwaay', color: '#1da1f2', icon: 'X' },
                ].map(s => (
                  <a key={s.href} href={s.href} target="_blank" rel="noopener" style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    textDecoration: 'none', color: 'var(--ink-mid)',
                    fontSize: 14, fontWeight: 500,
                    transition: 'color 0.15s',
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = s.color}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--ink-mid)'}
                  >
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: `${s.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: s.color, fontWeight: 800, fontSize: 14 }}>
                      {s.icon}
                    </div>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ background: '#fff', borderRadius: 20, padding: '2rem', border: '1px solid rgba(44,31,122,0.07)' }}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 700, color: 'var(--ink-dark)', marginBottom: 24 }}>
              {t('contact.send')}
            </h2>
            {sent ? (
              <div style={{
                background: 'var(--teal-bg)',
                border: '1.5px solid var(--teal)',
                borderRadius: 12, padding: '1.5rem',
                textAlign: 'center', color: 'var(--teal)',
                fontWeight: 600, fontSize: 16,
              }}>
                {t('contact.sent')}
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--ink-mid)', marginBottom: 6 }}>
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'var(--indigo)'}
                    onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(44,31,122,0.15)'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--ink-mid)', marginBottom: 6 }}>
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'var(--indigo)'}
                    onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'rgba(44,31,122,0.15)'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--ink-mid)', marginBottom: 6 }}>
                    {t('contact.message')}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
                    onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = 'var(--indigo)'}
                    onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(44,31,122,0.15)'}
                  />
                </div>
                {error && (
                  <div style={{ color: 'var(--ruby)', fontSize: 14, fontWeight: 600 }}>
                    {lang === 'en'
                      ? 'Something went wrong. Please try again.'
                      : 'Khalad ayaa dhacay. Fadlan mar kale isku day.'}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    background: 'var(--indigo)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 12,
                    padding: '14px',
                    fontSize: 16,
                    fontWeight: 700,
                    cursor: sending ? 'not-allowed' : 'pointer',
                    opacity: sending ? 0.7 : 1,
                    transition: 'opacity 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => {
                    if (sending) return
                    (e.currentTarget as HTMLElement).style.opacity = '0.88'
                    ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
                  }}
                  onMouseLeave={e => {
                    if (sending) return
                    (e.currentTarget as HTMLElement).style.opacity = '1'
                    ;(e.currentTarget as HTMLElement).style.transform = 'none'
                  }}
                >
                  {sending
                    ? (lang === 'en' ? 'Sending…' : 'Waa la dirayaa…')
                    : t('contact.send')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
