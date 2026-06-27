import { createFileRoute } from '@tanstack/react-router'
import { LegalPage } from '@/components/LegalPage'

export const Route = createFileRoute('/disclaimer')({
  head: () => ({
    meta: [
      { title: 'Disclaimer — Filanwaa' },
      { name: 'description', content: 'Educational and informational disclaimer for content published on Filanwaa.' },
    ],
  }),
  component: DisclaimerPage,
})

function DisclaimerPage() {
  return (
    <LegalPage
      title={{ en: 'Disclaimer', so: 'Ka-fogaansho' }}
      intro={{
        en: 'The information on Filanwaa is provided for general educational purposes. Please read how it should and should not be relied upon.',
        so: 'Macluumaadka Filanwaa waxaa loo bixiyaa ujeeddooyin waxbarasho guud. Fadlan akhri sida loogu kalsoonaan karo iyo sida aan loogu kalsoonaan karin.',
      }}
      updated={{ en: 'Last updated: June 2026', so: 'Markii ugu dambeysay ee la cusboonaysiiyay: Juun 2026' }}
      sections={[
        {
          heading: { en: 'General Information', so: 'Macluumaad Guud' },
          body: {
            en: <p>All content published on filanwaa.com is for general informational and educational purposes only. While we make every effort to keep the information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the content.</p>,
            so: <p>Dhammaan nuxurka lagu daabaco filanwaa.com waxaa loo bixiyaa ujeeddooyin macluumaad guud iyo waxbarasho oo keliya. In kasta oo aan dadaal kasta gelinno si aan macluumaadka u hagaajinno oo aan cusbooneysiinno, ma bixinno wax matalaad ama dammaanad nooc kasta ah, oo cad ama tusmeysan, oo ku saabsan dhammaystirka, saxnaanta, lagu kalsoonaan karo, ama helitaanka nuxurka.</p>,
          },
        },
        {
          heading: { en: 'Religious Content', so: 'Nuxurka Diineed' },
          body: {
            en: <p>Islamic content on this Site is presented to share knowledge and encourage learning. It is not a substitute for guidance from qualified religious scholars. For rulings on personal matters, please consult a knowledgeable and trusted scholar.</p>,
            so: <p>Nuxurka Islaamiga ah ee Site-kan waxaa loo soo bandhigay si loo wadaago cilmiga loona dhiirigeliyo waxbarashada. Kuma beddelmo hagitaanka culimada diinta ee aqoonta leh. Xukunnada arrimaha shakhsiga ah, fadlan la tasho aalin aqoon iyo kalsooni leh.</p>,
          },
        },
        {
          heading: { en: 'Technical Content', so: 'Nuxurka Farsamada' },
          body: {
            en: <p>Programming tutorials and code examples are provided for learning. Technology changes quickly; always test code in a safe environment and consult official documentation before using it in production. We are not responsible for any outcome resulting from the use of code or instructions found on the Site.</p>,
            so: <p>Casharrada barnaamijyada iyo tusaalooyinka koodhka waxaa loo bixiyaa waxbarasho. Teknoolojiyadu si dhakhso ah ayey isu beddeshaa; had iyo jeer tijaabi koodhka deegaan ammaan ah oo la tasho dukumeentiga rasmiga ah ka hor inta aanad si wax-soo-saar ah u isticmaalin. Mas'uul kama nahay natiijo kasta oo ka dhalata isticmaalka koodhka ama tilmaamaha Site-ka laga helay.</p>,
          },
        },
        {
          heading: { en: 'External Links', so: 'Xiriirinta Dibadda' },
          body: {
            en: <p>This Site may contain links to other websites. We have no control over the content and nature of these external sites and are not responsible for them. The inclusion of any link does not imply endorsement.</p>,
            so: <p>Site-kan wuxuu ka kooban yahay xiriirin u dhigma website-yo kale. Xakameyn kuma laheyn nuxurka iyo nooca goobahan dibadeed mana mas'uul ka nahay. Ku jiritaanka xiriirin kasta micnaheedu maaha taageero.</p>,
          },
        },
        {
          heading: { en: 'Consent', so: 'Ogolaansho' },
          body: {
            en: <p>By using our Site, you hereby consent to this disclaimer and agree to its terms. If you require further information, please <a href="/contact">contact us</a>.</p>,
            so: <p>Adigoo isticmaalaya Site-keena, waxaad ogolaatay ka-fogaanshahan oo aad aqbashay shuruudihiisa. Haddii aad u baahan tahay macluumaad dheeraad ah, fadlan <a href="/contact">nala soo xiriir</a>.</p>,
          },
        },
      ]}
    />
  )
}
