import { createFileRoute } from '@tanstack/react-router'
import { useLang } from '@/contexts/LangContext'
import { PageTemplate, ContentCard } from '@/components/PageTemplate'

export const Route = createFileRoute('/diinta/soonka')({
  component: SoonkaPage,
})

const DIINTA_SUBNAV = (t: (k: string) => string) => [
  { label: t('diinta.salaada'), href: '/diinta/salaada' },
  { label: t('diinta.soonka'), href: '/diinta/soonka' },
  { label: t('diinta.zakada'), href: '/diinta/zakada' },
  { label: t('diinta.xajka'), href: '/diinta/xajka' },
]

function SoonkaPage() {
  const { lang, t } = useLang()

  return (
    <PageTemplate
      category={t('nav.diinta')}
      categoryHref="/diinta/salaada"
      title="Sawm — Fasting in Ramadan"
      titleSo="Soonka — Soomada Ramadaan"
      subtitle="The fourth pillar of Islam — fasting the holy month of Ramadan for spiritual purification."
      subtitleSo="Tiirka afraad ee Islaamka — sooman bisha quduuska ah ee Ramadaan si daahirnimada ruuxiga ah."
      accentColor="var(--teal)"
      accentBg="var(--teal-bg)"
      icon={<MoonIcon />}
      subMenuItems={DIINTA_SUBNAV(t)}
    >
      <ContentCard title={lang === 'en' ? 'What is Sawm (Fasting)?' : 'Maxay tahay Soonka?'} accentColor="var(--teal)" accentBg="var(--teal-bg)">
        <p>{lang === 'en'
          ? 'Sawm (Fasting) is the fourth pillar of Islam. Muslims fast during the entire month of Ramadan — the 9th month of the Islamic lunar calendar — by abstaining from food, drink, and other physical needs from dawn (Fajr) until sunset (Maghrib). It is a time of spiritual reflection, increased devotion, and self-discipline.'
          : 'Soonka waa tiirka afraad ee Islaamka. Muslimiintu waxay soomanayaan bisha Ramadaan oo dhan — bishii 9-aad ee taariikhda dayax-gacmeedka Islaamka — iyagoo ka fogaanaya cuntada, cabbitaanka, iyo baahiyaha jidhka kale laga bilaabo habeenimo (Fajr) ilaa qorraxda dhacaysa (Maqrib). Waa waqti ka tarjumid ruuxi, cibaadad kordhay, iyo xukun-nafsi.'
        }</p>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'Virtues of Ramadan' : 'Fadliga Ramadaan'} accentColor="var(--teal)" accentBg="var(--teal-bg)">
        <ul>
          {(lang === 'en' ? [
            'The gates of Paradise are opened and gates of Hell are closed',
            'Shaytan (Satan) is chained during Ramadan',
            'Laylatul Qadr — the Night of Power — is in the last 10 nights, better than 1000 months',
            'Sins of the past year are forgiven for those who fast sincerely',
            'Ramadan ends with Eid al-Fitr, a celebration of gratitude',
          ] : [
            'Albaabada jannadda waa furmaan albaabada naarta waa xidmaan',
            'Shaydaanka waxaa xidma inta Ramadaan socoto',
            'Laylatul Qadr — Habeenka Xoogga — waxaa ku jira 10-kii habeenood ee dambe, waa ka wanaagsan 1000 bilood',
            'Dambiyada sannadkii la soo dhaafay waxaa la cafiyi doonaa kuwa sooma si daacad ah',
            'Ramadaan waxaa ku dhammaanaya Ciid al-Fitr, xafladda mahadnaqidda',
          ]).map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'Things that Break the Fast' : 'Waxyaalaha Ka Jabiya Soonka'} accentColor="var(--teal)" accentBg="var(--teal-bg)">
        <ul>
          {(lang === 'en' ? [
            'Eating or drinking intentionally',
            'Sexual intercourse',
            'Deliberate vomiting',
            'The start of menstruation',
            'Apostasy (leaving Islam)',
          ] : [
            'Si ula-kac ah u cunid ama cabitaanka',
            'Galmo',
            'Si ula-kac ah u matashid',
            'Bilawga xaaydda',
            'Ridda (ka tegida Islaamka)',
          ]).map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'Suhoor and Iftar' : 'Suhuurta iyo Futuurta'} accentColor="var(--teal)" accentBg="var(--teal-bg)">
        <p>{lang === 'en'
          ? 'Suhoor is the pre-dawn meal eaten before Fajr begins. It is a Sunnah (prophetic tradition) and provides energy for the day. Iftar is the meal to break the fast at sunset (Maghrib time). It is recommended to break the fast with dates and water, following the Sunnah of the Prophet ﷺ. Then perform Maghrib prayer.'
          : 'Suhuurtu waa cuntada habeennimada ee la cuno kahor bilowga Fajr. Waa Sunnah (caadada nabi) waxayna siisaa tamarta maalinta. Futuurtu waa cuntada lagu jabayo soonka markii qorraxdu dhacayso (waqtiga Maqrib). Waxaa lagu talinayaa in soonka lagu jabo timir iyo biyo, caadada Nabiga ﷺ la raacaayo. Kadib saloo salaadda Maqrib.'
        }</p>
      </ContentCard>
    </PageTemplate>
  )
}

function MoonIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
}
