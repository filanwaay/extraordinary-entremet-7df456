import { createFileRoute } from '@tanstack/react-router'
import { useLang } from '@/contexts/LangContext'
import { PageTemplate, ContentCard } from '@/components/PageTemplate'

export const Route = createFileRoute('/it/css')({
  component: CSSPage,
})

const IT_SUBNAV = [
  { label: 'Python', href: '/it/python' },
  { label: 'CSS', href: '/it/css' },
  { label: 'Java', href: '/it/java' },
  { label: 'SQL', href: '/it/sql' },
  { label: 'PHP', href: '/it/php' },
]

function CSSPage() {
  const { lang, t } = useLang()

  return (
    <PageTemplate
      category={t('nav.it')}
      categoryHref="/it/python"
      title="CSS — Cascading Style Sheets"
      titleSo="CSS — Xaashida Qaabdhismeedka"
      subtitle="The language that makes websites beautiful. Control colors, layouts, fonts, and animations."
      subtitleSo="Luuqadda ka dhigaysa websiteyaasha qurxoon. Xukun midabada, qaab-dhismeedka, fonta, iyo dhaqdhaqaaqa."
      accentColor="var(--indigo)"
      accentBg="var(--indigo-bg)"
      icon={<StyleIcon />}
      subMenuItems={IT_SUBNAV}
    >
      <ContentCard title={lang === 'en' ? 'What is CSS?' : 'Maxay tahay CSS?'} accentColor="var(--indigo)" accentBg="var(--indigo-bg)">
        <p>{lang === 'en'
          ? 'CSS (Cascading Style Sheets) is a stylesheet language used to describe the appearance of HTML documents. While HTML provides the structure of a web page, CSS controls how that structure looks — colors, sizes, spacing, fonts, and layouts.'
          : 'CSS (Cascading Style Sheets) waa luuqad xaashi-qaab ah oo loo isticmaalo sharaxaada muuqaalka dukumiintiyada HTML. Halka HTML uu bixiyo qaab-dhismeedka bogga webiga, CSS ayaa xukuma sida ay u muuqato qaabdhismeedkaas — midabada, xajmiyada, qaaduusta, fonta, iyo qaab-dhismeedyada.'
        }</p>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'Core CSS Properties' : 'Sifooyinka Muhiimka ee CSS'} accentColor="var(--indigo)" accentBg="var(--indigo-bg)">
        <pre>{`/* Text styling */
h1 {
  color: #1a1232;
  font-size: 3rem;
  font-family: 'Georgia', serif;
  font-weight: bold;
}

/* Background & box */
.card {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

/* Flexbox layout */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

/* CSS Variables */
:root {
  --primary: #2c1f7a;
  --gold: #c9952a;
}

button {
  background: var(--primary);
  color: var(--gold);
}`}</pre>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'CSS Selectors' : 'Xulanayaasha CSS'} accentColor="var(--indigo)" accentBg="var(--indigo-bg)">
        <ul>
          {(lang === 'en' ? [
            'Element selector: h1, p, div — targets all elements of that type',
            'Class selector: .my-class — targets elements with that class',
            'ID selector: #my-id — targets one specific element',
            'Hover state: .btn:hover — styles on mouse hover',
            'Descendant: .parent .child — child inside parent',
          ] : [
            'Xulasha curiyaha: h1, p, div — waxay beegsataa dhammaan curiyayaasha noocaas',
            'Xulasha fasalka: .fasalkeyga — waxay beegsataa curiyayaasha fasalkaas leh',
            'Xulasha aqoonsiga: #aqoonsigeeyga — waxay beegsataa hal curiye gaar ah',
            'Xaalada hover: .btn:hover — qaababka markii jiirku dul joogto',
            'Farac: .waalidka .ubadka — ubad gudaha waalidka',
          ]).map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'CSS Grid & Flexbox' : 'CSS Grid iyo Flexbox'} accentColor="var(--indigo)" accentBg="var(--indigo-bg)">
        <p style={{ marginBottom: 12 }}>{lang === 'en' ? 'Two powerful layout systems:' : 'Laba nidaam qaab-dhismeed oo xooggan:'}</p>
        <pre>{`/* CSS Grid — for 2D layouts */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* Flexbox — for 1D layouts */
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

/* Responsive design */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}`}</pre>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'CSS Animations' : 'Dhaqdhaqaaqa CSS'} accentColor="var(--indigo)" accentBg="var(--indigo-bg)">
        <pre>{`/* Transition */
.button {
  background: #2c1f7a;
  transition: background 0.3s ease, transform 0.2s;
}

.button:hover {
  background: #c9952a;
  transform: translateY(-2px);
}

/* Keyframe animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero-text {
  animation: fadeIn 0.8s ease forwards;
}`}</pre>
      </ContentCard>
    </PageTemplate>
  )
}

function StyleIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>
}
