import { createFileRoute } from '@tanstack/react-router'
import { useLang } from '@/contexts/LangContext'
import { PageTemplate, ContentCard } from '@/components/PageTemplate'

export const Route = createFileRoute('/suugaanta/shekooyin')({
  component: ShekooyinPage,
})

const SUUGAANTA_SUBNAV = (t: (k: string) => string) => [
  { label: t('suugaanta.maahmaahyo'), href: '/suugaanta/maahmaahyo' },
  { label: t('suugaanta.xikmado'), href: '/suugaanta/xikmado' },
  { label: t('suugaanta.shekooyin'), href: '/suugaanta/shekooyin' },
  { label: t('suugaanta.gabayo'), href: '/suugaanta/gabayo' },
  { label: t('suugaanta.heeso'), href: '/suugaanta/heeso' },
]

function ShekooyinPage() {
  const { lang, t } = useLang()

  return (
    <PageTemplate
      category={t('nav.suugaanta')}
      categoryHref="/suugaanta/maahmaahyo"
      title="Somali Stories"
      titleSo="Sheekooyin Soomaaliyeed"
      subtitle="Traditional tales that carry moral lessons and preserve cultural heritage."
      subtitleSo="Sheekooyin dhaqameed oo qaada darsooyin akhlaaqi ah oo dhaqanka hiddaha ka ilaaliya."
      accentColor="var(--ruby)"
      accentBg="var(--ruby-bg)"
      icon={<BookIcon />}
      subMenuItems={SUUGAANTA_SUBNAV(t)}
    >
      <ContentCard title={lang === 'en' ? 'The Tradition of Somali Storytelling' : 'Dhaqanka Sheekooynta Soomaaliyeed'} accentColor="var(--ruby)" accentBg="var(--ruby-bg)">
        <p>{lang === 'en'
          ? 'Somali storytelling is a rich oral tradition where tales are passed down from grandparents to grandchildren around the fire at night. These stories (Sheekooyinka Soomaaliyeed) feature animals, heroes, wise elders, and moral dilemmas. They entertain while teaching values like honesty, courage, generosity, and wisdom.'
          : 'Sheekooynta Soomaaliyeed waa dhaqan afeed oo taajir ah halkaas oo sheekooyin loogu gudbiyo awooweyaasha caruurtooda habeenkii agagaarka dabka. Sheekooyin Soomaaliyeed (Sheekooyinka Soomaaliyeed) waxaa ku jira xayawaanka, geesiyadda, odayaasha caqliga leh, iyo mashaakilaha akhlaaqi. Waxay madadaalinayaan iyagoo bartaya qiyamka sida daacadnimada, geesinimada, deeqsinimada, iyo xigmadda.'
        }</p>
      </ContentCard>

      {/* Story 1 */}
      <div style={{ background: '#fff', borderRadius: 20, padding: '2rem', border: '1px solid rgba(184,60,80,0.1)', marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--ruby-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ruby)', flexShrink: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          </div>
          <div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 700, color: 'var(--ink-dark)' }}>
              {lang === 'en' ? 'The Lion and the Hare' : 'Libaaxii iyo Bakaalkii'}
            </h3>
            <span style={{ fontSize: 12, color: 'var(--ruby)', fontWeight: 600 }}>{lang === 'en' ? 'Moral: Intelligence over Strength' : 'Darso: Caqli ka weyn xoog'}</span>
          </div>
        </div>
        <div className="prose-content">
          <p>{lang === 'en'
            ? 'Once upon a time, all the animals of the savanna were terrified of a mighty lion who ate one animal every day. They gathered and proposed a deal: each day, one animal would willingly go to the lion, so he would not hunt. The lion agreed. When the hare\'s turn came, he arrived late. "Why are you late?" roared the lion. "There was another lion blocking my path," said the hare. The lion, enraged by jealousy, followed the hare to a deep well. Looking in, he saw his reflection and, thinking it was a rival, leaped in — and drowned. Intelligence overcomes brute force.'
            : 'Markii hore, xayawaankii savannada oo dhammi waxay ka baqayeen libaax xooggan oo maalin kasta hal xayawaan cunayay. Waxay isku urursadeen oo soo jeediyeen heshiis: maalin kasta, hal xayawaan oo diyaar ah ayaa tagi doona libaaxii, si uusan ugaadhsan. Libaaxii wuu aqbalay. Markii bakaalaha raasigiisu yimaado, waa laabtay. "Maxaad u laabtay?" ayuu libaaxii u ooyay. "Libaax kale ayaa jidkeyga iman jiray," ayuu bakaalku yiri. Libaaxii, xasadkii abuurtay, wuxuu bakaalka raacay buunta qoto dheer. Dhinac ka eegaya, wuxuu arkay muuqaalkiisa, oo uu ka maleeyay inuu adag yahay, wuu ku boodday — oo wuu biyaha ku dhintay. Caqligu waxa uu ka adag yahay xoogga qaloocan.'
          }</p>
        </div>
      </div>

      {/* Story 2 */}
      <div style={{ background: '#fff', borderRadius: 20, padding: '2rem', border: '1px solid rgba(184,60,80,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--ruby-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ruby)', flexShrink: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          </div>
          <div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 700, color: 'var(--ink-dark)' }}>
              {lang === 'en' ? 'The Generous Farmer' : 'Beeraleyihii Deeqsiga ahaa'}
            </h3>
            <span style={{ fontSize: 12, color: 'var(--ruby)', fontWeight: 600 }}>{lang === 'en' ? 'Moral: Generosity is rewarded' : 'Darso: Deeqsinimada waa lagu abaalmarin'}</span>
          </div>
        </div>
        <div className="prose-content">
          <p>{lang === 'en'
            ? 'A poor farmer shared his last meal with a stranger who knocked on his door during a drought. That night he dreamed of a garden full of water and fruit. The next morning, he found a spring had appeared on his land. The village gathered and the farmer shared the water with everyone. In time, his land became the most fertile in the region, and he was known as the most blessed man in the land. What you give away returns to you multiplied.'
            : 'Beeralaye miskiin ah ayaa cuntadiisii ugu dambaysay la qaybsaday qof ajnabi ah oo kiriif ku garaacay xilliga abaarowga. Habeenkaas wuxuu riyaday beerey biyo iyo midhaha buuxda. Subax hore, wuxuu helay buul ka soo baxay dhulkiisa. Tuuladu waxay isku urursatay beeraleyihiina biyaha oo dhan wuu la qaybsaday. Wakhti ka dib, dhulkiisu wuxuu noqday mid ugu bacaadsan gobolka, waana loo yaqaanay ninki Alle uga barakaysan gobolka. Waxa aad siisid ayaad ku soo celisaa, oo ku badan.'
          }</p>
        </div>
      </div>
    </PageTemplate>
  )
}

function BookIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
}
