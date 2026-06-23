import { createFileRoute } from '@tanstack/react-router'
import { useLang } from '@/contexts/LangContext'
import { PageTemplate, ContentCard } from '@/components/PageTemplate'

export const Route = createFileRoute('/suugaanta/heeso')({
  component: HeesoPage,
})

const SUUGAANTA_SUBNAV = (t: (k: string) => string) => [
  { label: t('suugaanta.maahmaahyo'), href: '/suugaanta/maahmaahyo' },
  { label: t('suugaanta.xikmado'), href: '/suugaanta/xikmado' },
  { label: t('suugaanta.shekooyin'), href: '/suugaanta/shekooyin' },
  { label: t('suugaanta.gabayo'), href: '/suugaanta/gabayo' },
  { label: t('suugaanta.heeso'), href: '/suugaanta/heeso' },
]

const genres = [
  {
    name_en: 'Niiko Songs',
    name_so: 'Heesaha Niikada',
    desc_en: 'Traditional dance songs performed at weddings and celebrations. Known for their rhythmic beats and joyful lyrics.',
    desc_so: 'Heesaha dhaqameed ee lagu tumayo arooska iyo xafladaha. Loo yaqaan duqumaha ritmiga ah iyo ereyada farxadda leh.',
  },
  {
    name_en: 'Dhaanto',
    name_so: 'Dhaanto',
    desc_en: 'A traditional Somali folk music genre originating from northern Somalia. Features call-and-response singing and distinctive percussion.',
    desc_so: 'Nooc muusig hees-dhaqameed oo Soomaaliyeed ah oo ka soo jeeda waqooyi Soomaaliya. Waxaa ka muuqda heesidda yeeddhis-iyo-jawaab iyo garaac gaara.',
  },
  {
    name_en: 'Heello',
    name_so: 'Heello',
    desc_en: 'A modern Somali music genre blending traditional elements with modern instruments. Became popular in the 1950s.',
    desc_so: 'Nooc muusig Soomaaliyeed casri ah oo isku daray curiyayaasha dhaqameed iyo aaladaha casriga ah. Caanka noqday 1950-meeyadii.',
  },
  {
    name_en: 'Durdur / Romantic Songs',
    name_so: 'Heesaha Jacaylka (Durdur)',
    desc_en: 'Love songs celebrating beauty, longing, and romance. A beloved genre among Somali youth.',
    desc_so: 'Heesaha jacaylka ee oo xusaya quruxda, xiisaha, iyo xuubsanaanta. Nooc la jecel yahay dhallinyarada Soomaaliyeed.',
  },
]

function HeesoPage() {
  const { lang, t } = useLang()

  return (
    <PageTemplate
      category={t('nav.suugaanta')}
      categoryHref="/suugaanta/maahmaahyo"
      title="Somali Songs (Heeso)"
      titleSo="Heesaha Soomaaliyeed"
      subtitle="Music and song — the heartbeat of Somali celebrations, emotions, and identity."
      subtitleSo="Muusig iyo hees — garaaca qalbiga xafladaha Soomaaliyeed, dareenka, iyo aqoonsiga."
      accentColor="var(--ruby)"
      accentBg="var(--ruby-bg)"
      icon={<MusicIcon />}
      subMenuItems={SUUGAANTA_SUBNAV(t)}
    >
      <ContentCard title={lang === 'en' ? 'Somali Musical Heritage' : 'Dhaxalkii Muusig-ka Soomaaliyeed'} accentColor="var(--ruby)" accentBg="var(--ruby-bg)">
        <p>{lang === 'en'
          ? 'Somali music has a rich history deeply connected to oral poetry and cultural life. The national radio and theater (Radio Muqdisho/Somali Theatre) played a massive role in preserving and promoting Somali songs during the 1960s-1980s — considered the golden age of Somali music. Great artists like Magool, Hibo Nuura, Cabdullaahi Qarshe, and Khadra Dahir defined a generation. Today, Somali music continues to evolve while honoring its roots.'
          : 'Muusigga Soomaalidu wuxuu leeyahay taariikh taajir oo xidid ku leh gabayga afka iyo nolosha dhaqameed. Raadiyaha qaranka iyo masraxa (Raadiyaha Muqdisho/Masraxa Soomaaliyeed) waxay ka ciyaareen door weyn ilaalinta iyo kobcinta heesaha Soomaaliyeed inta u dhaxaysa 1960-1980-meeyadii — oo loo arkaa xilliyada dahab ee muusigga Soomaaliyeed. Fanaaniinta waaweyni sida Magool, Hiibo Nuuraa, Cabdullaahi Qarshe, iyo Khadra Daahir ayaa jiil goosatay. Maanta, muusigga Soomaaliyeed wuu sii kobcayaa isagoo xurmeynaya xididadiisa.'
        }</p>
      </ContentCard>

      <div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 600, color: 'var(--ink-dark)', marginBottom: '1.5rem' }}>
          {lang === 'en' ? 'Genres of Somali Music' : 'Noocyada Muusigga Soomaaliyeed'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {genres.map((g, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: 16,
              padding: '1.5rem',
              border: '1px solid rgba(184,60,80,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'default',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 12px 24px rgba(184,60,80,0.12)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'none'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--ruby-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ruby)', marginBottom: 14 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
              </div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink-dark)', marginBottom: 8 }}>
                {lang === 'en' ? g.name_en : g.name_so}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--ink-light)', lineHeight: 1.7 }}>
                {lang === 'en' ? g.desc_en : g.desc_so}
              </p>
            </div>
          ))}
        </div>
      </div>

      <ContentCard title={lang === 'en' ? 'Famous Somali Singers' : 'Fanaaniinta Caan ah ee Soomaaliyeed'} accentColor="var(--ruby)" accentBg="var(--ruby-bg)">
        <ul>
          {[
            { name: 'Magool (Fadumo Qaasin)', role: lang === 'en' ? 'The Queen of Somali Music' : 'Boqoradda Muusigga Soomaaliyeed' },
            { name: 'Hibo Nuura', role: lang === 'en' ? 'Legendary romantic singer' : 'Fanaan jacayl caan ah' },
            { name: 'Cabdullaahi Qarshe', role: lang === 'en' ? 'Father of modern Somali music' : 'Aabbaha muusigga casriga Soomaaliyeed' },
            { name: 'Khadra Dahir', role: lang === 'en' ? 'Beloved folk and pop singer' : 'Fanaan dhaqameed iyo pop ah oo la jecel yahay' },
            { name: 'Ahmed Siyad Bridgaade', role: lang === 'en' ? 'Iconic voice of Somali radio era' : 'Codka caanka ah ee xilliga raadiyaha Soomaaliyeed' },
          ].map((artist, i) => (
            <li key={i} style={{ marginBottom: 8 }}>
              <strong>{artist.name}</strong> — {artist.role}
            </li>
          ))}
        </ul>
      </ContentCard>
    </PageTemplate>
  )
}

function MusicIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
}
