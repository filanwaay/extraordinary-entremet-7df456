import { createFileRoute } from '@tanstack/react-router'
import { useLang } from '@/contexts/LangContext'
import { PageTemplate, ContentCard } from '@/components/PageTemplate'

export const Route = createFileRoute('/diinta/zakada')({
  component: ZakadaPage,
})

const DIINTA_SUBNAV = (t: (k: string) => string) => [
  { label: t('diinta.salaada'), href: '/diinta/salaada' },
  { label: t('diinta.soonka'), href: '/diinta/soonka' },
  { label: t('diinta.zakada'), href: '/diinta/zakada' },
  { label: t('diinta.xajka'), href: '/diinta/xajka' },
]

function ZakadaPage() {
  const { lang, t } = useLang()

  return (
    <PageTemplate
      category={t('nav.diinta')}
      categoryHref="/diinta/salaada"
      title="Zakat — Obligatory Charity"
      titleSo="Zakada — Sadaqada Waajibka ah"
      subtitle="The third pillar of Islam — purifying wealth by giving a portion to those in need."
      subtitleSo="Tiirka saddexaad ee Islaamka — nadiifinta maalka iyada oo qayb loogu dhiibayo kuwa u baahan."
      accentColor="var(--teal)"
      accentBg="var(--teal-bg)"
      icon={<ZakatIcon />}
      subMenuItems={DIINTA_SUBNAV(t)}
    >
      <ContentCard title={lang === 'en' ? 'What is Zakat?' : 'Maxay tahay Zakada?'} accentColor="var(--teal)" accentBg="var(--teal-bg)">
        <p>{lang === 'en'
          ? 'Zakat is the third pillar of Islam. It is the obligatory act of giving 2.5% of one\'s accumulated wealth (above the Nisab threshold) to designated categories of recipients. Zakat purifies one\'s remaining wealth, helps those in need, and reduces inequality in society. It is one of the most powerful tools for social justice in Islam.'
          : 'Zakada waa tiirka saddexaad ee Islaamka. Waa ficilka waajibka ah ee siinta 2.5% hantida urursanay (oo ka sarraysa xadka Nisaab) kooxaha ka faa\'iideystayaasha ee la qoondeeyay. Zakadu waxay daahirisaa hantidaada dhimanaaysa, waxay kaalmaysaa kuwa u baahan, waxayna yaraynaysaa sinnaanadka bulshada. Waa mid ka mid ah qalabka ugu xooggan ee caddaaladda bulshada ee Islaamka.'
        }</p>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'Nisab — The Minimum Threshold' : 'Nisaabka — Heerka Ugu Yar'} accentColor="var(--teal)" accentBg="var(--teal-bg)">
        <p>{lang === 'en'
          ? 'Zakat becomes obligatory when your wealth exceeds the Nisab threshold and has been held for one complete lunar year (Hawl). The Nisab is equivalent to:'
          : 'Zakadu waxay noqotaa waajib markii hantidaadu ka badsato xadka Nisaabka oo lagu hayay hal sano dayaxeed oo dhaman (Hawl). Nisaabku wuxuu la mid yahay:'
        }</p>
        <ul>
          {(lang === 'en' ? [
            '87.48 grams of gold (approx. value varies)',
            'OR 612.36 grams of silver',
            'Zakat rate: 2.5% of total qualifying wealth',
          ] : [
            '87.48 giram oo dahab ah (qiimihiisu wuu kala duwan yahay)',
            'AMA 612.36 giram oo lacag ah',
            'Heerka Zakada: 2.5% hantida oo dhan ee ugu socoto',
          ]).map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'Recipients of Zakat (8 Categories)' : 'Qaadayaasha Zakada (8 Kooxood)'} accentColor="var(--teal)" accentBg="var(--teal-bg)">
        <ul>
          {(lang === 'en' ? [
            'Al-Fuqara — the poor',
            'Al-Masakin — the needy',
            'Amil — Zakat administrators/collectors',
            'Mu\'allafah — those whose hearts are to be reconciled (new Muslims)',
            'Riqab — freeing slaves or captives',
            'Al-Gharimin — those overwhelmed by debt',
            'Fi Sabilillah — those striving in the cause of Allah',
            'Ibn al-Sabil — travelers in need',
          ] : [
            'Al-Fuqara — masaakiinta',
            'Al-Masaakiin — kuwa u baahan',
            'Aamil — maamulayaasha/ururinayaasha Zakada',
            'Mu\'allafah — kuwa qalbiyadooda la is-dheellitirayo (Muslimiin cusub)',
            'Riqaab — xoraynta addoommada ama maxaabiista',
            'Al-Ghaarimiin — kuwa aad ku dami dooni dayn',
            'Fii Sabiilillah — kuwa ku doodaya sabab-ka Alle',
            'Ibn al-Sabiil — musaafirada u baahan',
          ]).map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'Zakat al-Fitr' : 'Zakaat al-Fitr'} accentColor="var(--teal)" accentBg="var(--teal-bg)">
        <p>{lang === 'en'
          ? 'Zakat al-Fitr is a special charity given at the end of Ramadan before Eid prayer. It is obligatory on every Muslim who has food beyond their needs on the day and night of Eid. The amount is equivalent to one Saa\' (about 2.5–3 kg) of the local staple food (rice, wheat, dates, etc.) per person in the household. Its purpose is to purify the fasting person and bring joy to the poor on Eid.'
          : 'Zakaat al-Fitr waa sadaqad gaar ah oo la bixiyo dhammaadka Ramadaan kahor salaadda Ciidda. Waajib bay ku tahay Muslim kasta oo cunto ka badan baahidiisa maalinta iyo habeenkii Ciidda leh. Qadarka wuxuu la mid yahay hal Saa\' (qiyaastii 2.5–3 kg) oo cuntada aasaasiga ah ee maxaliga ah (bariis, sarreen, timir, iwm.) qof kasta oo guriga ku nool. Ujeedadeedu waa daahirintta soomanaha iyo faro-xumidda masaakiinta Ciidda.'
        }</p>
      </ContentCard>
    </PageTemplate>
  )
}

function ZakatIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
}
