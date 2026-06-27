import { createFileRoute } from '@tanstack/react-router'
import { LegalPage } from '@/components/LegalPage'

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      { title: 'Privacy Policy — Filanwaa' },
      { name: 'description', content: 'How Filanwaa collects, uses, and protects your data, including the use of cookies and Google AdSense advertising.' },
    ],
  }),
  component: PrivacyPage,
})

const li: React.CSSProperties = { marginBottom: 8 }

function PrivacyPage() {
  return (
    <LegalPage
      title={{ en: 'Privacy Policy', so: 'Siyaasadda Asturnaanta' }}
      intro={{
        en: 'Your privacy matters to us. This policy explains what information Filanwaa collects, how we use it, and the choices you have — including how advertising and cookies work on this site.',
        so: 'Asturnaantaadu way muhiim u tahay. Siyaasaddani waxay sharaxaysaa macluumaadka Filanwaa uu ururiyo, sida aan u isticmaalno, iyo xulashooyinka aad leedahay — oo ay ku jiraan sida xayeysiiska iyo cookies-ku ugu shaqeeyaan website-kan.',
      }}
      updated={{ en: 'Last updated: June 2026', so: 'Markii ugu dambeysay ee la cusboonaysiiyay: Juun 2026' }}
      sections={[
        {
          heading: { en: '1. Introduction', so: '1. Hordhac' },
          body: {
            en: <p>Filanwaa ("we", "us", "our") operates the website filanwaa.com (the "Site"). We are committed to protecting the privacy of our visitors. This Privacy Policy describes the types of information we collect and how that information is used, shared, and protected. By using the Site, you agree to the practices described in this policy.</p>,
            so: <p>Filanwaa ("annaga", "naga") waxay maamushaa website-ka filanwaa.com ("Site-ka"). Waxaan ka go'an nahay inaan ilaalino asturnaanta booqdayaashayada. Siyaasaddan Asturnaantu waxay qeexaysaa noocyada macluumaadka aan ururinno iyo sida macluumaadkaas loo isticmaalo, loo wadaago, loona ilaaliyo. Adigoo isticmaalaya Site-ka, waxaad ogolaatay dhaqamada lagu sharaxay siyaasaddan.</p>,
          },
        },
        {
          heading: { en: '2. Information We Collect', so: '2. Macluumaadka Aan Ururinno' },
          body: {
            en: (
              <ul>
                <li style={li}><strong>Information you provide:</strong> When you use our contact form, you voluntarily provide your name, email address, and message so we can respond to you.</li>
                <li style={li}><strong>Automatically collected information:</strong> Like most websites, we and our service providers automatically collect standard log data such as your browser type, device, approximate location, pages visited, and the date and time of your visit.</li>
                <li style={li}><strong>Cookies and similar technologies:</strong> We and third parties use cookies to operate the Site, remember your language preference, understand how the Site is used, and serve advertising.</li>
              </ul>
            ),
            so: (
              <ul>
                <li style={li}><strong>Macluumaadka aad bixiso:</strong> Markaad isticmaasho foomka xiriirka, waxaad si ikhtiyaari ah u bixisaa magacaaga, cinwaanka iimaylkaaga, iyo fariintaada si aan kuugu jawaabno.</li>
                <li style={li}><strong>Macluumaadka si toos ah loo ururiyo:</strong> Sida website-yada badankood, annaga iyo adeeg-bixiyeyaashayadu waxaan si toos ah u ururinnaa xog caadi ah sida nooca browser-kaaga, qalabka, goobta qiyaastii ah, bogagga la booqday, iyo taariikhda iyo waqtiga booqashadaada.</li>
                <li style={li}><strong>Cookies iyo tignoolajiyada la midka ah:</strong> Annaga iyo dhinacyada saddexaad waxaan u isticmaalnaa cookies si aan u shaqeyno Site-ka, u xasuusano luqaddaada, u fahanno sida Site-ka loo isticmaalo, iyo si aan u soo bandhigno xayeysiis.</li>
              </ul>
            ),
          },
        },
        {
          heading: { en: '3. How We Use Information', so: '3. Sida Aan U Isticmaalno Macluumaadka' },
          body: {
            en: (
              <ul>
                <li style={li}>To operate, maintain, and improve the Site and its content.</li>
                <li style={li}>To respond to your messages and requests.</li>
                <li style={li}>To understand how visitors use the Site so we can make it better.</li>
                <li style={li}>To display relevant advertising that helps keep our content free.</li>
              </ul>
            ),
            so: (
              <ul>
                <li style={li}>Si aan u maamulno, u ilaalino, una hagaajinno Site-ka iyo waxa ku jira.</li>
                <li style={li}>Si aan ugu jawaabno fariimahaaga iyo codsiyadaada.</li>
                <li style={li}>Si aan u fahanno sida booqdayaashu u isticmaalaan Site-ka si aan u wanaajinno.</li>
                <li style={li}>Si aan u soo bandhigno xayeysiis ku habboon oo naga caawiya inaan waxa nuxurkeena ah bilaash ka dhigno.</li>
              </ul>
            ),
          },
        },
        {
          heading: { en: '4. Cookies', so: '4. Cookies' },
          body: {
            en: <p>Cookies are small text files placed on your device. We use both essential cookies (required for the Site to function and to remember your language choice) and analytics/advertising cookies. You can control or delete cookies through your browser settings at any time. Disabling cookies may affect some features of the Site. See our <a href="/cookies">Cookie Policy</a> for more detail.</p>,
            so: <p>Cookies waa faylal qoraal yar oo lagu dhejiyo qalabkaaga. Waxaan isticmaalnaa cookies lama-huraan ah (oo loo baahan yahay si Site-ku u shaqeeyo oo loogu xasuusto luqaddaada) iyo cookies falanqayn/xayeysiis. Waqti kasta waxaad ka maamuli kartaa ama tirtiri kartaa cookies-ka adoo isticmaalaya dejinta browser-kaaga. Joojinta cookies-ka waxay saameyn kartaa qaar ka mid ah astaamaha Site-ka. Eeg <a href="/cookies">Siyaasadda Cookies-keena</a> faahfaahin dheeraad ah.</p>,
          },
        },
        {
          heading: { en: '5. Advertising & Google AdSense', so: '5. Xayeysiiska & Google AdSense' },
          body: {
            en: (
              <div>
                <p>We use third-party advertising companies, including Google AdSense, to serve ads when you visit the Site. These companies may use cookies and similar technologies to show ads based on your visits to this and other websites.</p>
                <ul style={{ marginTop: 12 }}>
                  <li style={li}>Google, as a third-party vendor, uses cookies — including the DoubleClick DART cookie — to serve ads to users based on their visit to this Site and other sites on the internet.</li>
                  <li style={li}>Google's use of advertising cookies enables it and its partners to serve ads based on your visits to this and/or other sites.</li>
                  <li style={li}>You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">Google Ads Settings</a>.</li>
                  <li style={li}>You can also opt out of third-party vendor cookies for personalized advertising at <a href="https://www.aboutads.info" target="_blank" rel="noopener">www.aboutads.info</a>.</li>
                </ul>
                <p style={{ marginTop: 12 }}>For more information about how Google uses data, see <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">How Google uses information from sites that use its services</a>.</p>
              </div>
            ),
            so: (
              <div>
                <p>Waxaan isticmaalnaa shirkado xayeysiis oo dhinac saddexaad ah, oo ay ku jirto Google AdSense, si ay xayeysiis u soo bandhigaan markaad booqato Site-ka. Shirkadahaasi waxay isticmaali karaan cookies si ay xayeysiis kuugu soo bandhigaan iyadoo lagu saleynayo booqashooyinkaaga Site-kan iyo website-yo kale.</p>
                <ul style={{ marginTop: 12 }}>
                  <li style={li}>Google, isagoo dhinac saddexaad ah, wuxuu isticmaalaa cookies — oo ay ku jirto DoubleClick DART cookie — si uu xayeysiis ugu soo bandhigo isticmaalayaasha iyadoo lagu saleynayo booqashadooda Site-kan iyo goobaha kale ee internet-ka.</li>
                  <li style={li}>Isticmaalka Google ee cookies-ka xayeysiiska wuxuu u sahlayaa isaga iyo lammaanayaashiisa inay xayeysiis soo bandhigaan iyadoo lagu saleynayo booqashooyinkaaga.</li>
                  <li style={li}>Waxaad ka bixi kartaa xayeysiiska gaarka ah adoo booqanaya <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">Dejinta Xayeysiiska Google</a>.</li>
                  <li style={li}>Sidoo kale waxaad ka bixi kartaa cookies-ka dhinacyada saddexaad ee xayeysiiska gaarka ah <a href="https://www.aboutads.info" target="_blank" rel="noopener">www.aboutads.info</a>.</li>
                </ul>
                <p style={{ marginTop: 12 }}>Macluumaad dheeraad ah oo ku saabsan sida Google u isticmaalo xogta, eeg <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">Sida Google u isticmaalo macluumaadka goobaha isticmaala adeegyadiisa</a>.</p>
              </div>
            ),
          },
        },
        {
          heading: { en: '6. Third-Party Links', so: '6. Xiriirinta Dhinacyada Saddexaad' },
          body: {
            en: <p>The Site may contain links to external websites that we do not operate. We are not responsible for the privacy practices or content of those sites. We encourage you to read the privacy policies of every website you visit.</p>,
            so: <p>Site-ku wuxuu ka kooban yahay xiriirin u dhigma website-yo dibadeed oo aanan annagu maamulin. Uma mas'uul nahay dhaqamada asturnaanta ama waxa ku jira goobahaas. Waxaan kugu dhiirigelinaynaa inaad akhrido siyaasadaha asturnaanta ee website kasta oo aad booqato.</p>,
          },
        },
        {
          heading: { en: "7. Children's Privacy", so: '7. Asturnaanta Carruurta' },
          body: {
            en: <p>The Site is intended for a general audience and is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us so we can remove it.</p>,
            so: <p>Site-ku wuxuu u talagal yahay dhagaystayaal guud mana ku jiheysna carruurta ka yar 13 jir. Si ula kac ah uma ururinno macluumaad shakhsi ah oo carruurta ah. Haddii aad rumeyso in ilmo uu xog shakhsi ah na siiyay, fadlan nala soo xiriir si aan u tirtirno.</p>,
          },
        },
        {
          heading: { en: '8. Your Rights', so: '8. Xuquuqdaada' },
          body: {
            en: <p>Depending on where you live, you may have rights to access, correct, or delete the personal information we hold about you, and to object to certain processing. To exercise these rights, contact us using the details below.</p>,
            so: <p>Iyadoo ku xiran meesha aad ku nooshahay, waxaad yeelan kartaa xuquuq aad ku heli karto, ku saxi karto, ama ku tirtiri karto macluumaadka shakhsiga ah ee aan kaa hayno, iyo inaad diiddo hababka qaar. Si aad xuquuqdan u isticmaasho, nagala soo xiriir faahfaahinta hoose.</p>,
          },
        },
        {
          heading: { en: '9. Changes to This Policy', so: '9. Isbeddelka Siyaasaddan' },
          body: {
            en: <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>,
            so: <p>Mararka qaar waxaan cusboonaysiin karnaa Siyaasaddan Asturnaanta. Isbeddel kasta waxaa lagu soo bandhigi doonaa boggan oo wata taariikh cusboonaysiin. Waxaan kugu dhiirigelinaynaa inaad si joogto ah u eegto siyaasaddan.</p>,
          },
        },
        {
          heading: { en: '10. Contact Us', so: '10. Nala Soo Xiriir' },
          body: {
            en: <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:filanwaa@gmail.com">filanwaa@gmail.com</a> or through our <a href="/contact">Contact page</a>.</p>,
            so: <p>Haddii aad qabto su'aalo ku saabsan Siyaasaddan Asturnaanta, fadlan nagala soo xiriir <a href="mailto:filanwaa@gmail.com">filanwaa@gmail.com</a> ama boggeena <a href="/contact">Nala Xiriirka</a>.</p>,
          },
        },
      ]}
    />
  )
}
