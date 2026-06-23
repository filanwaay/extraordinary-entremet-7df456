import { createFileRoute } from '@tanstack/react-router'
import { useLang } from '@/contexts/LangContext'
import { PageTemplate, ContentCard } from '@/components/PageTemplate'

export const Route = createFileRoute('/suugaanta/xikmado')({
  component: XikmadoPage,
})

const SUUGAANTA_SUBNAV = (t: (k: string) => string) => [
  { label: t('suugaanta.maahmaahyo'), href: '/suugaanta/maahmaahyo' },
  { label: t('suugaanta.xikmado'), href: '/suugaanta/xikmado' },
  { label: t('suugaanta.shekooyin'), href: '/suugaanta/shekooyin' },
  { label: t('suugaanta.gabayo'), href: '/suugaanta/gabayo' },
  { label: t('suugaanta.heeso'), href: '/suugaanta/heeso' },
]

const wisdoms = [
  {
    text_so: 'Nabad iyo caano ayaa nolol ah.',
    text_en: 'Peace and milk are life itself.',
    author: 'Somali Wisdom',
  },
  {
    text_so: 'Galbeed ha u socon cid galbeed kugu raacsanaysa adigoo ku soconaya bari.',
    text_en: 'Do not go west with someone heading west while you are heading east.',
    author: 'Xigmad Soomaaliyeed',
  },
  {
    text_so: 'Wax walba ku baro — xataa haddaad u maqnaatid isticmaalkiisa, waad ogaan doontaa.',
    text_en: 'Learn everything — even if you do not use it, you will understand.',
    author: 'Xigmad Soomaaliyeed',
  },
  {
    text_so: 'Ninkii ogaadaa inuu garanwaayaan waxa, waa garanwaayo garanwaayaantiisa.',
    text_en: 'The one who knows he does not know is wiser than the one who does not know he does not know.',
    author: 'Falsafad Soomaaliyeed',
  },
  {
    text_so: 'Baryo ka dib waxa la gaaro waa ka macaan tahay waxa si fudud loo gaaro.',
    text_en: 'What is achieved after struggle is sweeter than what is achieved easily.',
    author: 'Xigmad Soomaaliyeed',
  },
]

function XikmadoPage() {
  const { lang, t } = useLang()

  return (
    <PageTemplate
      category={t('nav.suugaanta')}
      categoryHref="/suugaanta/maahmaahyo"
      title="Somali Wisdom"
      titleSo="Xigmadda Soomaalida"
      subtitle="Deep insights and philosophical reflections from Somali oral tradition."
      subtitleSo="Aragtiyo qoto dheer iyo ka tarjumiyo falsafiyeed ka yimada hiddaha afka Soomaaliga."
      accentColor="var(--ruby)"
      accentBg="var(--ruby-bg)"
      icon={<WisdomIcon />}
      subMenuItems={SUUGAANTA_SUBNAV(t)}
    >
      <ContentCard title={lang === 'en' ? 'The Role of Wisdom in Somali Culture' : 'Doorka Xigmadda Dhaqanka Soomaalida'} accentColor="var(--ruby)" accentBg="var(--ruby-bg)">
        <p>{lang === 'en'
          ? 'In Somali culture, wisdom (Xigmad) is one of the most valued qualities a person can possess. Wise elders (Odayaal) are respected community leaders who mediate disputes, guide the young, and preserve cultural values. Wisdom is expressed through poetry, storytelling, and proverbs — the oral library of the Somali people.'
          : 'Dhaqanka Soomaalida, xigmadda waa mid ka mid ah sifooyinka ugu qiimaha badan ee qofku lahaado. Odayaasha caqliga leh (Odayaasha) waxaa loo xurmeeyaa hoggaamiyeyaasha bulshada ee dhexdhexaadiya colaadaha, hanuuniya dhalinyarada, oo dhaqanka ka ilaaliya. Xigmadda waxaa lagu muujiyaa gabayga, sheekooynta, iyo maahmaahyada — maktabadda afka ee dadka Soomaaliyeed.'
        }</p>
      </ContentCard>

      <div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 600, color: 'var(--ink-dark)', marginBottom: '1.5rem' }}>
          {lang === 'en' ? 'Words of Wisdom' : 'Ereyada Xigmadda'}
        </h2>
        <div style={{ display: 'grid', gap: 20 }}>
          {wisdoms.map((w, i) => (
            <div key={i} style={{
              background: 'linear-gradient(135deg, #fff 0%, var(--ruby-bg) 100%)',
              borderRadius: 16,
              padding: '2rem',
              border: '1px solid rgba(184,60,80,0.12)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 16, right: 20, fontSize: 60, opacity: 0.06, fontFamily: 'serif', lineHeight: 1, color: 'var(--ruby)' }}>"</div>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontStyle: 'italic', color: 'var(--ink-dark)', marginBottom: 10, lineHeight: 1.6 }}>
                {lang === 'en' ? w.text_en : w.text_so}
              </p>
              {lang === 'en' && (
                <p style={{ color: 'var(--ink-light)', fontSize: 13, fontStyle: 'italic', marginBottom: 6 }}>
                  ({w.text_so})
                </p>
              )}
              <p style={{ color: 'var(--ruby)', fontSize: 13, fontWeight: 600 }}>— {w.author}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  )
}

function WisdomIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
}
