import { createFileRoute } from '@tanstack/react-router'
import { useLang } from '@/contexts/LangContext'
import { PageTemplate, ContentCard } from '@/components/PageTemplate'

export const Route = createFileRoute('/diinta/salaada')({
  component: SalaadaPage,
})

const DIINTA_SUBNAV = (t: (k: string) => string) => [
  { label: t('diinta.salaada'), href: '/diinta/salaada' },
  { label: t('diinta.soonka'), href: '/diinta/soonka' },
  { label: t('diinta.zakada'), href: '/diinta/zakada' },
  { label: t('diinta.xajka'), href: '/diinta/xajka' },
]

function SalaadaPage() {
  const { lang, t } = useLang()

  return (
    <PageTemplate
      category={t('nav.diinta')}
      categoryHref="/diinta/salaada"
      title="Salaah — The Five Daily Prayers"
      titleSo="Salaada — Shanta Salaadood ee Maalinlaha ah"
      subtitle="The second pillar of Islam — the direct connection between the believer and Allah."
      subtitleSo="Tiirka labaad ee Islaamka — xiriirka tooska ah ee u dhexeeya mu'minka iyo Alle."
      accentColor="var(--teal)"
      accentBg="var(--teal-bg)"
      icon={<PrayerIcon />}
      subMenuItems={DIINTA_SUBNAV(t)}
    >
      <ContentCard title={lang === 'en' ? 'What is Salaah?' : 'Maxay tahay Salaada?'} accentColor="var(--teal)" accentBg="var(--teal-bg)">
        <p>{lang === 'en'
          ? 'Salaah (Prayer) is the second pillar of Islam and the most important act of worship after the declaration of faith (Shahada). Muslims are required to pray five times a day, at dawn (Fajr), noon (Dhuhr), afternoon (Asr), sunset (Maghrib), and night (Isha). Each prayer is a direct conversation with Allah.'
          : 'Salaada waa tiirka labaad ee Islaamka waana ficilka cibaadadda ee ugu muhiimsan ka dib Shahaadada. Muslimiinta waxaa looga baahan yahay inay salaadaan shan jeer maalin kasta — Subax (Fajr), Dharaar (Dhuhr), Galabnimo (Casr), Gardaad (Maqrib), iyo Habeennimo (Cisho). Salaad walba waa sheekaysiga tooska ah ee Alle la.'
        }</p>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'The Five Daily Prayers' : 'Shanta Salaadood ee Maalinlaha ah'} accentColor="var(--teal)" accentBg="var(--teal-bg)">
        <ul>
          {(lang === 'en' ? [
            'Fajr (Dawn) — 2 Rak\'ah — before sunrise',
            'Dhuhr (Noon) — 4 Rak\'ah — after midday',
            'Asr (Afternoon) — 4 Rak\'ah — late afternoon',
            'Maghrib (Sunset) — 3 Rak\'ah — after sunset',
            'Isha (Night) — 4 Rak\'ah — at night',
          ] : [
            'Fajr (Subax) — 2 Rak\'ah — kahor inta qorraxdu soo bixin',
            'Dhuhr (Dharaar) — 4 Rak\'ah — ka dib dhexdhexaadka maalinta',
            'Casr (Galabnimo) — 4 Rak\'ah — galabnimadii dambe',
            'Maqrib (Gardaad) — 3 Rak\'ah — ka dib qorraxda dhacaysa',
            'Cisho (Habeennimo) — 4 Rak\'ah — habeenkii',
          ]).map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'Conditions for Prayer (Shurut)' : 'Shuruudaha Salaada'} accentColor="var(--teal)" accentBg="var(--teal-bg)">
        <ul>
          {(lang === 'en' ? [
            'Tahaarah — ritual purity through Wudu (ablution)',
            'Covering the Awrah — appropriate dress',
            'Facing the Qibla — direction of the Kaaba in Mecca',
            'Entering the time — each prayer has a specific time window',
            'Niyyah — intention in the heart before beginning',
          ] : [
            'Dahaarta — nadiifin caadada ah iyada oo la samaynayo Wudu',
            'Xijabinta Cawrada — dharka ku habboon',
            'Ku socoshada Qiblada — jiho Ka\'abada Maka',
            'Gelin waqtiga — salaad walba waxay leedahay daaqad waqti gaar ah',
            'Niyyada — niyad qalbiga gudaha kahor bilowga',
          ]).map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'Steps of Wudu (Ablution)' : 'Tallaabada Wudu'} accentColor="var(--teal)" accentBg="var(--teal-bg)">
        <ul>
          {(lang === 'en' ? [
            '1. Make the intention (Niyyah) in your heart',
            '2. Say Bismillah and wash both hands three times',
            '3. Rinse mouth three times',
            '4. Rinse nose three times',
            '5. Wash face three times',
            '6. Wash right arm to elbow three times, then left',
            '7. Wipe over head once',
            '8. Wipe outer ears with index fingers and inner ears with thumbs',
            '9. Wash right foot to ankles three times, then left',
          ] : [
            '1. Ku geli niyada (Niyyada) qalbigaaga',
            '2. Wax ka sheeg Bismillah oo laba gacmaha labadaba saddex jeer u dhaq',
            '3. Afka saddex jeer gari',
            '4. Sanka saddex jeer gari',
            '5. Wejiga saddex jeer u dhaq',
            '6. Midigta bidixda ilaa xanjiiskii saddex jeer u dhaq, ka bacdi bidixda',
            '7. Madaxa hal jeer mas-masi',
            '8. Dhegaha dibadda faraha afaraadka ku mas-masi, gudaha admaanayaasha',
            '9. Cagta midigta ilaa cirbadda saddex jeer u dhaq, ka bacdi bidixda',
          ]).map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'Virtues of Prayer' : 'Fadliga Salaada'} accentColor="var(--teal)" accentBg="var(--teal-bg)">
        <p>{lang === 'en'
          ? 'The Prophet Muhammad ﷺ said: "The first matter that the servant will be questioned about on the Day of Resurrection is prayer. If it is good, his entire deed will be good. If it is spoiled, his entire deed will be spoiled." Prayer is the light of the believer\'s life, protecting from evil and bringing peace to the heart.'
          : 'Rasuulka Muhammed ﷺ ayaa yiri: "Shaqada ugu horraysa ee addoonku ka weydiiyey maalinta qiyaamaha waa salaada. Haddii ay fiicantahay, dhammaan amalkaagii wuu fiicnaanayaa. Haddii ay xumaatay, dhammaan amalkaagii wuu xumaanayaa." Salaada waa nuurka nolosha mu\'minka, ka ilaalisaysa xumaanta oo nabad u keenta qalbi.'
        }</p>
      </ContentCard>
    </PageTemplate>
  )
}

function PrayerIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
}
