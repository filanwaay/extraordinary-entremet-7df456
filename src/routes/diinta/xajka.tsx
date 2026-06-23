import { createFileRoute } from '@tanstack/react-router'
import { useLang } from '@/contexts/LangContext'
import { PageTemplate, ContentCard } from '@/components/PageTemplate'

export const Route = createFileRoute('/diinta/xajka')({
  component: XajkaPage,
})

const DIINTA_SUBNAV = (t: (k: string) => string) => [
  { label: t('diinta.salaada'), href: '/diinta/salaada' },
  { label: t('diinta.soonka'), href: '/diinta/soonka' },
  { label: t('diinta.zakada'), href: '/diinta/zakada' },
  { label: t('diinta.xajka'), href: '/diinta/xajka' },
]

function XajkaPage() {
  const { lang, t } = useLang()

  return (
    <PageTemplate
      category={t('nav.diinta')}
      categoryHref="/diinta/salaada"
      title="Hajj — The Pilgrimage to Mecca"
      titleSo="Xajka — Socdaalkii Makka"
      subtitle="The fifth pillar of Islam — a once-in-a-lifetime journey to the holy city of Mecca."
      subtitleSo="Tiirka shanaad ee Islaamka — safarki hal mar noloshaada ee magaalada quduuska ah ee Maka."
      accentColor="var(--teal)"
      accentBg="var(--teal-bg)"
      icon={<HajjIcon />}
      subMenuItems={DIINTA_SUBNAV(t)}
    >
      <ContentCard title={lang === 'en' ? 'What is Hajj?' : 'Maxay tahay Xajka?'} accentColor="var(--teal)" accentBg="var(--teal-bg)">
        <p>{lang === 'en'
          ? 'Hajj is the fifth and final pillar of Islam. It is an annual pilgrimage to Mecca, Saudi Arabia, that every financially and physically able Muslim must perform at least once in their lifetime. It takes place during the Islamic month of Dhul Hijjah (the 12th month). Over 2 million Muslims from around the world gather each year for this sacred journey.'
          : 'Xajku waa tiirka shanaad ee ugu dambeeya ee Islaamka. Waa safarki sannadle ee Maka, Sacuudiga, ee Muslim kasta oo maaliyan iyo jirba awood u leh uu ugu yaraan hal mar noloshadiisa ugu safrayo. Waxay dhacaysaa bisha Islaamka ee Dhul-Xijja (bishii 12-aad). In ka badan 2 milyan oo Muslimiin ah oo adduunka ka socda ayaa sannadle u soo urursama safarkan quduuska ah.'
        }</p>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'Rituals of Hajj' : 'Cibaadooyinka Xajka'} accentColor="var(--teal)" accentBg="var(--teal-bg)">
        <ul>
          {(lang === 'en' ? [
            'Ihram — entering the sacred state of purity and wearing white garments',
            'Tawaf — circling the Kaaba 7 times counterclockwise',
            'Sa\'i — walking 7 times between the hills of Safa and Marwah',
            'Wuquf at Arafah — standing at the plain of Arafah (most essential ritual)',
            'Muzdalifah — spending the night and collecting pebbles',
            'Rami al-Jamarat — stoning the three pillars (symbolic rejection of Shaytan)',
            'Qurbani — animal sacrifice (Eid al-Adha)',
            'Halq or Taqsir — shaving or cutting hair to exit Ihram',
            'Final Tawaf al-Wada — farewell circumambulation',
          ] : [
            'Iixraam — gelin xaalada quduuska ah ee nadiifnimada iyo xidashada dharka caddaan ah',
            'Dawaaf — ku wareegida Ka\'abada 7 jeer galbeed-jiho',
            'Sacyiga — socodka 7 jeer u dhexeeya buuraha Safa iyo Marwa',
            'Wuquuf Carafe — taagan Buurta Carafe (cibaadada ugu muhiimsan)',
            'Muzdalifa — habeenka ku sugnaan iyo uruurinta dhagxaanta',
            'Rami al-Jamarat — la jiid seddexda tiir (ka diidista calaamadda Shaydaanka)',
            'Qurbaaniga — naafada xoolaha (Ciid al-Adxa)',
            'Xalq ama Taqsiir — xirjinta ama jarida timaha si looga baxo Iixraanka',
            'Dawaafka Wada\'a — wareegida aa-midnimada',
          ]).map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'The Kaaba' : 'Ka\'abada'} accentColor="var(--teal)" accentBg="var(--teal-bg)">
        <p>{lang === 'en'
          ? 'The Kaaba is a cube-shaped structure at the centre of the Grand Mosque (Al-Masjid al-Haram) in Mecca. Muslims believe it was built by Prophet Ibrahim (Abraham) and his son Ismail ﷺ as the first house of worship for Allah on Earth. It is covered by the Kiswah, a black cloth embroidered with gold Quranic verses. Muslims around the world face the direction of the Kaaba during every prayer.'
          : 'Ka\'abadu waa dhismo qaabka muraayad-leh oo ku yaal bartamaha Masjiidka al-Xaraam ee Maka. Muslimiintu waxay aaminsan yihiin in Nabiga Ibraahiim iyo wiilkiisa Ismaaciil ﷺ ay dhiseen guri ugu horreeya ee cibaadada Alle dhulka. Waxaa lagu daboolaa Kiswadda, maro madow ah oo ay ku qoran yihiin aayadaha Quranka dahab. Muslimiinta adduunka oo dhan waxay u sii jeedaan Ka\'abada salaad kasta.'
        }</p>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'Who Must Perform Hajj?' : 'Cidda Waajibka kuhTahay Xajka?'} accentColor="var(--teal)" accentBg="var(--teal-bg)">
        <ul>
          {(lang === 'en' ? [
            'Must be Muslim',
            'Must be an adult (Baligh)',
            'Must be of sound mind (mentally capable)',
            'Must be physically able to travel',
            'Must be financially able — sufficient funds for travel and family left behind',
            'Safe route must be available',
          ] : [
            'Waa in uu Muslim ahaa',
            'Waa in uu qaangaar yahay (Baaligh)',
            'Waa in uu xaalad caqli ah (awood caqli ah)',
            'Waa in uu awood u leeyahay in uu safro',
            'Waa in uu maaliyan awood u leeyahay — lacago ku filan safarka iyo qoyska laga tagay',
            'Jidka ammaan ah waa in uu diyaar yahay',
          ]).map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </ContentCard>
    </PageTemplate>
  )
}

function HajjIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
}
