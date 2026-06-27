import { createFileRoute } from '@tanstack/react-router'
import { LegalPage } from '@/components/LegalPage'

export const Route = createFileRoute('/cookies')({
  head: () => ({
    meta: [
      { title: 'Cookie Policy — Filanwaa' },
      { name: 'description', content: 'How Filanwaa uses cookies, including advertising cookies from Google AdSense, and how to manage them.' },
    ],
  }),
  component: CookiePolicyPage,
})

const li: React.CSSProperties = { marginBottom: 8 }

function CookiePolicyPage() {
  return (
    <LegalPage
      title={{ en: 'Cookie Policy', so: 'Siyaasadda Cookies-ka' }}
      intro={{
        en: 'This policy explains what cookies are, how Filanwaa uses them, and how you can control them.',
        so: 'Siyaasaddani waxay sharaxaysaa waxa cookies-ku yihiin, sida Filanwaa u isticmaasho, iyo sida aad u maamuli karto.',
      }}
      updated={{ en: 'Last updated: June 2026', so: 'Markii ugu dambeysay ee la cusboonaysiiyay: Juun 2026' }}
      sections={[
        {
          heading: { en: 'What Are Cookies?', so: 'Waa Maxay Cookies?' },
          body: {
            en: <p>Cookies are small text files stored on your device when you visit a website. They help the site remember your actions and preferences over time, and allow site owners and advertisers to understand how the site is used.</p>,
            so: <p>Cookies waa faylal qoraal yar oo lagu kaydiyo qalabkaaga markaad booqato website. Waxay ka caawiyaan goobta inay xasuusato ficiladaada iyo doorbidkaaga muddo ka dib, waxayna u oggolaadaan milkiilayaasha goobta iyo xayeysiiyeyaasha inay fahmaan sida goobta loo isticmaalo.</p>,
          },
        },
        {
          heading: { en: 'Types of Cookies We Use', so: 'Noocyada Cookies-ka Aan Isticmaalno' },
          body: {
            en: (
              <ul>
                <li style={li}><strong>Essential cookies:</strong> Required for the Site to function properly, including remembering your selected language (English or Somali).</li>
                <li style={li}><strong>Analytics cookies:</strong> Help us understand how visitors interact with the Site so we can improve it.</li>
                <li style={li}><strong>Advertising cookies:</strong> Set by Google AdSense and its partners to deliver relevant ads and measure their performance.</li>
              </ul>
            ),
            so: (
              <ul>
                <li style={li}><strong>Cookies lama-huraan ah:</strong> Loo baahan yahay si Site-ku si sax ah u shaqeeyo, oo ay ku jirto xasuusinta luqadda aad dooratay (Ingiriis ama Soomaali).</li>
                <li style={li}><strong>Cookies falanqayn:</strong> Naga caawiya inaan fahanno sida booqdayaashu ula falgalaan Site-ka si aan u hagaajinno.</li>
                <li style={li}><strong>Cookies xayeysiis:</strong> Waxaa dejiya Google AdSense iyo lammaanayaashiisa si ay u keenaan xayeysiis ku habboon oo ay u cabbiraan waxqabadkooda.</li>
              </ul>
            ),
          },
        },
        {
          heading: { en: 'Third-Party Advertising Cookies', so: 'Cookies-ka Xayeysiis ee Dhinaca Saddexaad' },
          body: {
            en: <p>Google, as a third-party vendor, uses cookies (including the DoubleClick DART cookie) to serve ads based on your visits to this and other sites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">Google Ads Settings</a>, or opt out of third-party vendor cookies at <a href="https://www.aboutads.info" target="_blank" rel="noopener">www.aboutads.info</a>.</p>,
            so: <p>Google, isagoo dhinac saddexaad ah, wuxuu isticmaalaa cookies (oo ay ku jirto DoubleClick DART cookie) si uu xayeysiis ugu soo bandhigo iyadoo lagu saleynayo booqashooyinkaaga goobtan iyo goobaha kale. Waxaad ka bixi kartaa xayeysiiska gaarka ah adoo booqanaya <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">Dejinta Xayeysiiska Google</a>, ama ka bixi cookies-ka dhinaca saddexaad <a href="https://www.aboutads.info" target="_blank" rel="noopener">www.aboutads.info</a>.</p>,
          },
        },
        {
          heading: { en: 'Managing Cookies', so: 'Maamulka Cookies-ka' },
          body: {
            en: <p>Most web browsers let you control cookies through their settings. You can block or delete cookies at any time. Please note that disabling some cookies may affect how the Site functions for you.</p>,
            so: <p>Browser-yada badankood waxay kuu oggolaadaan inaad cookies ka maamusho dejintooda. Waqti kasta waxaad xannibi kartaa ama tirtiri kartaa cookies. Fadlan ogow in joojinta cookies-ka qaarkood ay saameyn karto sida Site-ku kuu shaqeeyo.</p>,
          },
        },
      ]}
    />
  )
}
