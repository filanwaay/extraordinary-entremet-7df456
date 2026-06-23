import { createFileRoute } from '@tanstack/react-router'
import { useLang } from '@/contexts/LangContext'
import { PageTemplate, ContentCard } from '@/components/PageTemplate'

export const Route = createFileRoute('/suugaanta/gabayo')({
  component: GabayoPage,
})

const SUUGAANTA_SUBNAV = (t: (k: string) => string) => [
  { label: t('suugaanta.maahmaahyo'), href: '/suugaanta/maahmaahyo' },
  { label: t('suugaanta.xikmado'), href: '/suugaanta/xikmado' },
  { label: t('suugaanta.shekooyin'), href: '/suugaanta/shekooyin' },
  { label: t('suugaanta.gabayo'), href: '/suugaanta/gabayo' },
  { label: t('suugaanta.heeso'), href: '/suugaanta/heeso' },
]

const poems = [
  {
    title_so: 'Hooyo — Haweenka Ugu Sharafta Badan',
    title_en: 'Mother — The Most Honoured Woman',
    lines_so: [
      'Hooyo, adiga oo maad ahayn nolosheydu waa madow,',
      'Gacantaadu waxay ii qabtay markii aan dhacay.',
      'Eraygiina wuxuu ii ahaa biyo kulul qaboobay,',
      'Jacaylkaaga waa jiid aan dhammaanin.',
    ],
    lines_en: [
      'Mother, without you my life would be darkness,',
      'Your hand held me every time I fell.',
      'Your words were warm water that cooled my fever,',
      'Your love is a pull that never ends.',
    ],
    poet: 'Gabay Soomaaliyeed',
  },
  {
    title_so: 'Dhulkeyga Soomaaliya',
    title_en: 'My Land, Somalia',
    lines_so: [
      'Dhulkeyga Soomaaliya, sidaad u qurxoon tahay!',
      'Badda buluugga ah oo ku wareegsan,',
      'Xiddigaha iyo dayaxu kugu dhuubaan habeenkii,',
      'Waa dalkaygii hiddihiisiina waan lahaanayaa.',
    ],
    lines_en: [
      'My land, Somalia, how beautiful you are!',
      'Surrounded by the deep blue sea,',
      'Stars and the moon shine upon you at night,',
      'You are my country and I will always claim your heritage.',
    ],
    poet: 'Gabay Wadaniyeed',
  },
]

function GabayoPage() {
  const { lang, t } = useLang()

  return (
    <PageTemplate
      category={t('nav.suugaanta')}
      categoryHref="/suugaanta/maahmaahyo"
      title="Somali Poetry (Gabay)"
      titleSo="Gabayada Soomaaliyeed"
      subtitle="The crown of Somali arts — poetry that speaks of love, heritage, loss, and beauty."
      subtitleSo="Taajka farshaxanka Soomaaliyeed — gabayo ka hadlaya jacaylka, hidaha, khasaaraha, iyo quruxda."
      accentColor="var(--ruby)"
      accentBg="var(--ruby-bg)"
      icon={<PoemIcon />}
      subMenuItems={SUUGAANTA_SUBNAV(t)}
    >
      <ContentCard title={lang === 'en' ? 'The Art of Somali Poetry' : 'Farshaxanka Gabayga Soomaaliyeed'} accentColor="var(--ruby)" accentBg="var(--ruby-bg)">
        <p>{lang === 'en'
          ? 'Somali poetry (Gabay) is considered the highest form of art in Somali culture. Historically, Somali poets were the philosophers, historians, and moral guides of their communities. The great Sayyid Mohammed Abdullah Hassan — called the "Mad Mullah" by the British — was as famous for his devastating poetic rebuttals as his military resistance. Poetry forms include the Gabay (formal, long-form), Jiifto (love poetry), and Buraanbur (women\'s poetry).'
          : 'Gabayga Soomaaliyeed waxaa loo arkaa mid ah nooca ugu sarreeya farshaxanka dhaqanka Soomaaliyeed. Taariikhiga ahaan, gabayaansha Soomaaliga waxay ahaayeen falsafiyiinta, taariikhiyiinta, iyo hanuuniyeyaasha akhlaaqi ee bulshadooda. Sayyid Maxamed Cabdille Xasan — oo Ingiriisigu ugu yeeraan "Wadaadka Waalan" — sida uu u caan ahaa ku jawaabistiisa gabyada ee burburiya iyo sida uu uga caan ahaa halyeynimada militariga. Noocyada gabayga waxaa ka mid ah Gabayga (rasmiga, qiyaaska dheer), Jiifto (gabayga jacaylka), iyo Buraanbur (gabayga haweenka).'
        }</p>
      </ContentCard>

      <div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 600, color: 'var(--ink-dark)', marginBottom: '1.5rem' }}>
          {lang === 'en' ? 'Featured Poems' : 'Gabayada La Xushay'}
        </h2>
        <div style={{ display: 'grid', gap: 24 }}>
          {poems.map((poem, i) => (
            <div key={i} style={{
              background: 'linear-gradient(160deg, var(--ink-dark) 0%, #3d1545 100%)',
              borderRadius: 20,
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(232,105,122,0.1)', pointerEvents: 'none' }} />
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 700, color: 'var(--ruby-light)', marginBottom: '1.25rem' }}>
                {lang === 'en' ? poem.title_en : poem.title_so}
              </h3>
              <div style={{ marginBottom: '1.25rem' }}>
                {(lang === 'en' ? poem.lines_en : poem.lines_so).map((line, j) => (
                  <p key={j} style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.15rem',
                    fontStyle: 'italic',
                    color: 'rgba(255,255,255,0.85)',
                    lineHeight: 2,
                    paddingLeft: j % 2 === 1 ? '2rem' : 0,
                  }}>
                    {line}
                  </p>
                ))}
              </div>
              <span style={{ fontSize: 12, color: 'rgba(232,105,122,0.7)', fontWeight: 600 }}>— {poem.poet}</span>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  )
}

function PoemIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
}
