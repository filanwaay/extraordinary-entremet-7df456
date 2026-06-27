import { createFileRoute } from '@tanstack/react-router'
import { LegalPage } from '@/components/LegalPage'

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      { title: 'Terms of Service — Filanwaa' },
      { name: 'description', content: 'The terms and conditions that govern your use of the Filanwaa website.' },
    ],
  }),
  component: TermsPage,
})

function TermsPage() {
  return (
    <LegalPage
      title={{ en: 'Terms of Service', so: 'Shuruudaha Adeegga' }}
      intro={{
        en: 'These terms govern your use of Filanwaa. By accessing the Site, you agree to be bound by them.',
        so: 'Shuruudahani waxay maamulaan isticmaalkaaga Filanwaa. Adigoo gala Site-ka, waxaad ogolaatay inaad ku xiridid shuruudahaas.',
      }}
      updated={{ en: 'Last updated: June 2026', so: 'Markii ugu dambeysay ee la cusboonaysiiyay: Juun 2026' }}
      sections={[
        {
          heading: { en: '1. Acceptance of Terms', so: '1. Aqbalaadda Shuruudaha' },
          body: {
            en: <p>By accessing and using filanwaa.com (the "Site"), you accept and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use the Site.</p>,
            so: <p>Adigoo gala oo isticmaalaya filanwaa.com ("Site-ka"), waxaad aqbashay oo ogolaatay inaad ku xiridid Shuruudahan Adeegga. Haddii aanad ogolayn qayb ka mid ah shuruudahan, fadlan ha isticmaalin Site-ka.</p>,
          },
        },
        {
          heading: { en: '2. Use of Content', so: '2. Isticmaalka Nuxurka' },
          body: {
            en: <p>All content on Filanwaa — including articles on technology, religion, and Somali literature — is provided for educational and informational purposes only. You may read and share the content for personal, non-commercial use. You may not republish, sell, or redistribute substantial portions of our content without prior written permission.</p>,
            so: <p>Dhammaan nuxurka Filanwaa — oo ay ku jiraan maqaallada teknoolojiyada, diinta, iyo suugaanta Soomaaliga — waxaa loo bixiyaa ujeeddooyin waxbarasho iyo macluumaad oo keliya. Waxaad u akhriyi kartaa una wadaagi kartaa nuxurka isticmaal shakhsi ah oo aan ganacsi ahayn. Ma aad dib u daabici kartid, iibin kartid, ama qaybin kartid qaybo waaweyn oo nuxurkeena ah iyadoon ogolaansho qoraal ah horay loo helin.</p>,
          },
        },
        {
          heading: { en: '3. Intellectual Property', so: '3. Hantida Aqooneed' },
          body: {
            en: <p>The Filanwaa name, logo, and original content are the property of Filanwaa and are protected by applicable intellectual property laws. Traditional Somali proverbs, poetry, and religious texts presented on the Site belong to the public cultural and religious heritage; our presentation, translation, and arrangement of that material remain our work.</p>,
            so: <p>Magaca Filanwaa, astaanta, iyo nuxurka asalka ah waa hanti Filanwaa waxaana ilaaliya sharciyada hantida aqooneed ee khuseeya. Maahmaahyada, gabayada, iyo qoraallada diineed ee dhaqameed ee lagu soo bandhigay Site-ka waxay ka tirsan yihiin hiddaha dhaqameed iyo diineed ee dadweynaha; soo bandhigiddeena, turjumaaddeena, iyo habaynteenna agabkaas waxay ahaanayaan shaqadeena.</p>,
          },
        },
        {
          heading: { en: '4. Acceptable Use', so: '4. Isticmaalka La Aqbali Karo' },
          body: {
            en: <p>You agree not to use the Site in any way that is unlawful, harmful, or could damage, disable, or impair the Site. You may not attempt to gain unauthorized access to any part of the Site, its servers, or any connected systems.</p>,
            so: <p>Waxaad ogolaatay inaadan u isticmaalin Site-ka si sharci-darro ah, dhibaato leh, ama si waxyeello, naafeyn, ama liid ku keeni karta Site-ka. Ma aad isku dayi kartid inaad si aan la oggolayn u gasho qayb ka mid ah Site-ka, server-yadiisa, ama nidaam kasta oo ku xiran.</p>,
          },
        },
        {
          heading: { en: '5. Advertising', so: '5. Xayeysiiska' },
          body: {
            en: <p>The Site displays advertising, including ads served by Google AdSense, which helps keep our content free. Advertisements are clearly distinguishable from editorial content. Your interactions with advertisers are solely between you and the advertiser.</p>,
            so: <p>Site-ku wuxuu soo bandhigaa xayeysiis, oo ay ku jirto xayeysiiska Google AdSense, kaas oo naga caawiya inaan nuxurkeena bilaash ka dhigno. Xayeysiisku si cad ayuu uga soocan yahay nuxurka tafatirka. Wax kasta oo aad la dhameystirto xayeysiiyeyaasha waa adiga iyo xayeysiiyaha oo keliya.</p>,
          },
        },
        {
          heading: { en: '6. Disclaimer & Limitation of Liability', so: '6. Ka-fogaansho & Xaddidaadda Mas\'uuliyadda' },
          body: {
            en: <p>The Site and its content are provided "as is" without warranties of any kind. While we strive for accuracy, we do not guarantee that all content is complete or error-free. Filanwaa shall not be liable for any loss or damage arising from your use of the Site. See our <a href="/disclaimer">Disclaimer</a> for more information.</p>,
            so: <p>Site-ka iyo nuxurkiisa waxaa loo bixiyaa "sida uu yahay" iyadoon dammaanad nooc kasta ah lahayn. In kasta oo aan u dadaalno saxnaan, ma dammaanad qaadno in dhammaan nuxurku dhameystiran yahay ama khalad la'aan yahay. Filanwaa mas'uul kama noqon doonto khasaare ama waxyeello kasta oo ka dhalata isticmaalkaaga Site-ka. Eeg <a href="/disclaimer">Ka-fogaanshaheena</a> macluumaad dheeraad ah.</p>,
          },
        },
        {
          heading: { en: '7. Changes to These Terms', so: '7. Isbeddelka Shuruudahan' },
          body: {
            en: <p>We may revise these Terms of Service at any time. The updated version will be posted on this page. Your continued use of the Site after changes are posted constitutes acceptance of the revised terms.</p>,
            so: <p>Waqti kasta waxaan dib u eegi karnaa Shuruudahan Adeegga. Nooca cusboonaysiiyay waxaa lagu soo bandhigi doonaa boggan. Sii wadidaada isticmaalka Site-ka ka dib markii isbeddelada la soo bandhigo waxay tilmaamaysaa aqbalaadda shuruudaha la cusboonaysiiyay.</p>,
          },
        },
        {
          heading: { en: '8. Contact', so: '8. Xiriir' },
          body: {
            en: <p>Questions about these Terms can be sent to <a href="mailto:filanwaa@gmail.com">filanwaa@gmail.com</a> or via our <a href="/contact">Contact page</a>.</p>,
            so: <p>Su'aalaha ku saabsan Shuruudahan waxaa loo diri karaa <a href="mailto:filanwaa@gmail.com">filanwaa@gmail.com</a> ama boggeena <a href="/contact">Nala Xiriirka</a>.</p>,
          },
        },
      ]}
    />
  )
}
