import { createFileRoute } from '@tanstack/react-router'
import { useLang } from '@/contexts/LangContext'
import { PageTemplate, ContentCard } from '@/components/PageTemplate'

export const Route = createFileRoute('/it/python')({
  component: PythonPage,
})

const IT_SUBNAV = (t: (k: string) => string) => [
  { label: 'Python', href: '/it/python' },
  { label: 'CSS', href: '/it/css' },
  { label: 'Java', href: '/it/java' },
  { label: 'SQL', href: '/it/sql' },
  { label: 'PHP', href: '/it/php' },
]

function PythonPage() {
  const { lang, t } = useLang()

  return (
    <PageTemplate
      category={t('nav.it')}
      categoryHref="/it/python"
      title="Python Programming"
      titleSo="Barnaamijka Python"
      subtitle="A beginner-friendly, powerful language used in web development, AI, and data science."
      subtitleSo="Luuqad fudud oo xooggan oo loo isticmaalo horumarinta websiteyaasha, fekerka machinada, iyo sayniska xogta."
      accentColor="var(--indigo)"
      accentBg="var(--indigo-bg)"
      icon={<CodeIcon />}
      subMenuItems={IT_SUBNAV(t)}
    >
      <ContentCard title={lang === 'en' ? 'What is Python?' : 'Maxay tahay Python?'} accentColor="var(--indigo)" accentBg="var(--indigo-bg)">
        <p>{lang === 'en'
          ? 'Python is one of the most popular programming languages in the world. It was created by Guido van Rossum in 1991. Python is known for its simple, readable syntax that resembles plain English — making it ideal for beginners and experts alike.'
          : 'Python waa mid ka mid ah luuqadaha barnaamijyada ee ugu caansan adduunka. Guido van Rossum ayaa sameyay sannadkii 1991. Python waxaa lagu yaqaan naxwehiisa fudud oo la aqrin karo oo u eg Ingiriisiga caadiga ah — taas oo ka dhigaysa in ay ku habboon tahay labadaba bilowga iyo xirfadlayaasha.'
        }</p>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'Why Learn Python?' : 'Maxaa looga baahan yahay barantiisa Python?'} accentColor="var(--indigo)" accentBg="var(--indigo-bg)">
        <ul>
          {(lang === 'en' ? [
            'Easy to read and write — great for beginners',
            'Used in Artificial Intelligence (AI) and Machine Learning',
            'Web development with frameworks like Django and Flask',
            'Data analysis with Pandas and NumPy',
            'Automation of repetitive tasks',
            'Large community and thousands of free libraries',
          ] : [
            'Si fudud ayaa loo akhrin karaa — waa ku habboon tahay bilowga',
            'Loo isticmaalaa Fekerka Machinada (AI) iyo Barashada Machinada',
            'Horumarinta websiteyaasha iyada oo la adeegsanayo Django iyo Flask',
            'Falanqaynta xogta iyada oo la adeegsanayo Pandas iyo NumPy',
            'Maamulidda hawlaha la-soo-celiya',
            'Bulshada weyn iyo kumanaankaanka maktabadaha bilaashka ah',
          ]).map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'Basic Syntax Examples' : 'Tusaalayaasha Naxwaha Asaasiga'} accentColor="var(--indigo)" accentBg="var(--indigo-bg)">
        <p style={{ marginBottom: 12 }}>{lang === 'en' ? 'Here are some simple Python examples:' : 'Waxaa halkan ku jira tusaalayaal Python oo fudud:'}</p>
        <pre>{`# Hello World
print("Hello, World!")

# Variables
name = "Filanwaa"
age = 25
print(f"My name is {name}, I am {age} years old.")

# If statement
if age >= 18:
    print("Adult")
else:
    print("Minor")

# Loop
for i in range(5):
    print(f"Number: {i}")

# Function
def greet(name):
    return f"Welcome, {name}!"

print(greet("Somalia"))`}</pre>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'Python Data Types' : 'Noocyada Xogta ee Python'} accentColor="var(--indigo)" accentBg="var(--indigo-bg)">
        <ul>
          {(lang === 'en' ? [
            'int — Integer numbers (1, 2, 100)',
            'float — Decimal numbers (3.14, 0.5)',
            'str — Text strings ("Hello", "Python")',
            'bool — True or False',
            'list — Ordered collection [1, 2, 3]',
            'dict — Key-value pairs {"name": "Ali", "age": 30}',
          ] : [
            'int — Abaabul tiro (1, 2, 100)',
            'float — Tiro jajab leh (3.14, 0.5)',
            'str — Xarafyo qoraal ("Nabad", "Python")',
            'bool — Saxiix ama Been',
            'list — Ururso habaysan [1, 2, 3]',
            'dict — Fure-qiime lama-garaad {"magac": "Cali", "da": 30}',
          ]).map((item, i) => <li key={i}><code>{item.split(' — ')[0]}</code> — {item.split(' — ')[1]}</li>)}
        </ul>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'Getting Started' : 'Sidee Loo Bilaabaa'} accentColor="var(--indigo)" accentBg="var(--indigo-bg)">
        <p>{lang === 'en'
          ? 'Download Python from python.org — it is free and available for Windows, Mac, and Linux. Use a code editor like VS Code or PyCharm to write your programs. The best way to learn is by practicing daily with small projects.'
          : 'Python ka soo dejiso python.org — waa bilaash oo diyaar u ah Windows, Mac, iyo Linux. Isticmaal tafatir kood sida VS Code ama PyCharm si aad u qorto barnaamijaadaada. Habka ugu wanaagsan ee lagu barto waa ku tababar maalin kasta iyada oo la samaynayo mashaariic yar-yar.'
        }</p>
      </ContentCard>
    </PageTemplate>
  )
}

function CodeIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
}
