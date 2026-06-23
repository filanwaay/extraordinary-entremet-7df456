import { createFileRoute } from '@tanstack/react-router'
import { useLang } from '@/contexts/LangContext'
import { PageTemplate, ContentCard } from '@/components/PageTemplate'

export const Route = createFileRoute('/suugaanta/maahmaahyo')({
  component: MaahmaahyoPage,
})

const SUUGAANTA_SUBNAV = (t: (k: string) => string) => [
  { label: t('suugaanta.maahmaahyo'), href: '/suugaanta/maahmaahyo' },
  { label: t('suugaanta.xikmado'), href: '/suugaanta/xikmado' },
  { label: t('suugaanta.shekooyin'), href: '/suugaanta/shekooyin' },
  { label: t('suugaanta.gabayo'), href: '/suugaanta/gabayo' },
  { label: t('suugaanta.heeso'), href: '/suugaanta/heeso' },
]

const proverbs = [
  {
    somali: 'Nin aan caaqil ahayn, caqliga looma dhiibo.',
    english: 'Wisdom is not given to one who is not already wise.',
    theme: 'Wisdom',
  },
  {
    somali: 'Gacan la\'aani waa guri la\'aan.',
    english: 'Lack of cooperation is like having no home.',
    theme: 'Unity',
  },
  {
    somali: 'Aqoon la\'aani waa iftiin la\'aan.',
    english: 'Lack of knowledge is lack of light.',
    theme: 'Education',
  },
  {
    somali: 'Hadal badan waa had iyo jeer been.',
    english: 'Too much talking always leads to lies.',
    theme: 'Speech',
  },
  {
    somali: 'Nin deeqsi ah, Alle baa u deeqsa.',
    english: 'Allah is generous to a generous person.',
    theme: 'Generosity',
  },
  {
    somali: 'Guriga hooyadaa waa guri kuu yaal.',
    english: 'Your mother\'s home is always a home for you.',
    theme: 'Family',
  },
  {
    somali: 'Nin walba waa la aqoon karaa, laakiin la mid noqon kari maayso.',
    english: 'You can know anyone, but you can never truly become them.',
    theme: 'Identity',
  },
  {
    somali: 'Dhiig waa biyo kama barro.',
    english: 'Blood is thicker than water.',
    theme: 'Kinship',
  },
]

function MaahmaahyoPage() {
  const { lang, t } = useLang()

  return (
    <PageTemplate
      category={t('nav.suugaanta')}
      categoryHref="/suugaanta/maahmaahyo"
      title="Somali Proverbs"
      titleSo="Maahmaahyada Soomaalida"
      subtitle="Timeless wisdom passed down through generations — the moral compass of Somali culture."
      subtitleSo="Xigmad weligeed ah oo jiilalka ka dhaxashay — qiyaas-ahaan moralka dhaqanka Soomaalida."
      accentColor="var(--ruby)"
      accentBg="var(--ruby-bg)"
      icon={<QuoteIcon />}
      subMenuItems={SUUGAANTA_SUBNAV(t)}
    >
      <ContentCard title={lang === 'en' ? 'About Somali Proverbs' : 'Ku Saabsan Maahmaahyada Soomaalida'} accentColor="var(--ruby)" accentBg="var(--ruby-bg)">
        <p>{lang === 'en'
          ? 'Somali proverbs (Maahmaahyo) are short, wise sayings that encapsulate deep truths about life, society, relationships, and morality. They are an essential part of Somali oral tradition, used in speeches, conflict resolution, and everyday conversation. Each proverb carries the collective wisdom of generations.'
          : 'Maahmaahyada Soomaalida waa hadal gaagaaban oo caqli leh oo lagu ururiyo xaqiiqado qoto dheer oo ku saabsan nolosha, bulshada, xiriirka, iyo akhlaaqa. Waa qayb muhiim ah oo hiddaha afka Soomaaliga, loo isticmaalo khutabada, xallinta colaadda, iyo xaraaridda maalinlaha ah. Maahmaah kasta wuxuu qaadaa xigmaddii urursan ee jiilalka.'
        }</p>
      </ContentCard>

      <div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 600, color: 'var(--ink-dark)', marginBottom: '1.5rem' }}>
          {lang === 'en' ? 'Selected Proverbs' : 'Maahmaahyo La Xushay'}
        </h2>
        <div style={{ display: 'grid', gap: 16 }}>
          {proverbs.map((p, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: 16,
              padding: '1.5rem',
              borderLeft: '4px solid var(--ruby)',
              boxShadow: '0 2px 8px rgba(184,60,80,0.08)',
            }}>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--ink-dark)', marginBottom: 8, lineHeight: 1.5 }}>
                "{p.somali}"
              </p>
              <p style={{ color: 'var(--ink-light)', fontSize: 14, marginBottom: 8 }}>
                {p.english}
              </p>
              <span style={{ background: 'var(--ruby-bg)', color: 'var(--ruby)', fontSize: 12, fontWeight: 600, padding: '2px 10px', borderRadius: 20 }}>
                {p.theme}
              </span>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  )
}

function QuoteIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
}
