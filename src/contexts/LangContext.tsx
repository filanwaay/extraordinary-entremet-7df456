import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Lang = 'en' | 'so'

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {},
  t: (k) => k,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('filanwaa-lang') as Lang) || 'en'
    }
    return 'en'
  })

  const setLang = (l: Lang) => {
    setLangState(l)
    if (typeof window !== 'undefined') localStorage.setItem('filanwaa-lang', l)
  }

  const t = (key: string): string => {
    const entry = translations[key]
    if (!entry) return key
    return entry[lang] || entry['en'] || key
  }

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)

const translations: Record<string, { en: string; so: string }> = {
  // Nav
  'nav.it': { en: 'IT', so: 'IT' },
  'nav.diinta': { en: 'Religion', so: 'Diinta' },
  'nav.suugaanta': { en: 'Literature', so: 'Suugaanta' },
  'nav.about': { en: 'About Us', so: 'Naga Warran' },
  'nav.contact': { en: 'Contact Us', so: 'Nala Xiriir' },

  // IT submenus
  'it.python': { en: 'Python', so: 'Python' },
  'it.css': { en: 'CSS', so: 'CSS' },
  'it.java': { en: 'Java', so: 'Java' },
  'it.sql': { en: 'SQL', so: 'SQL' },
  'it.php': { en: 'PHP', so: 'PHP' },

  // Diinta submenus
  'diinta.salaada': { en: 'Prayer (Salaah)', so: 'Salaada' },
  'diinta.soonka': { en: 'Fasting (Sawm)', so: 'Soonka' },
  'diinta.zakada': { en: 'Zakat', so: 'Zakada' },
  'diinta.xajka': { en: 'Hajj (Pilgrimage)', so: 'Xajka' },

  // Suugaanta submenus
  'suugaanta.maahmaahyo': { en: 'Proverbs', so: 'Maahmaahyo' },
  'suugaanta.xikmado': { en: 'Wisdom', so: 'Xikmado' },
  'suugaanta.shekooyin': { en: 'Stories', so: 'Shekooyin' },
  'suugaanta.gabayo': { en: 'Poetry', so: 'Gabayo' },
  'suugaanta.heeso': { en: 'Songs', so: 'Heeso' },

  // Home page
  'home.hero.title': { en: 'Knowledge. Faith. Culture.', so: 'Cilmi. Diin. Dhaqan.' },
  'home.hero.subtitle': {
    en: 'Your gateway to technology, Islamic teachings, and Somali literary heritage.',
    so: 'Xaruntaada teknoolojiyada, waxbarashada Islaamka, iyo suugaanta Soomaalida.',
  },
  'home.hero.explore': { en: 'Explore Now', so: 'Baadhi Hadda' },
  'home.it.title': { en: 'Information Technology', so: 'Teknoolojiyada Macluumaadka' },
  'home.it.desc': {
    en: 'Master modern programming languages with clear, practical tutorials.',
    so: 'Ku baro luuqadaha barnaamijyada casriga ah oo faa\'iidayn kara.',
  },
  'home.diinta.title': { en: 'Islamic Religion', so: 'Diinta Islaamka' },
  'home.diinta.desc': {
    en: 'Deepen your understanding of the five pillars and Islamic principles.',
    so: 'Fahamkaaga ku cor tiirarka shanta ee Islaamka iyo mabaadi\'diisa.',
  },
  'home.suugaanta.title': { en: 'Somali Literature', so: 'Suugaanta Soomaalida' },
  'home.suugaanta.desc': {
    en: 'Celebrate Somali oral tradition — proverbs, poetry, wisdom, and stories.',
    so: 'Xusid hiddaha afka Soomaaliga — maahmaah, gabayadda, xigmadda, iyo sheekooyin.',
  },
  'home.sections': { en: 'Our Sections', so: 'Qaybahayaga' },
  'home.readmore': { en: 'Read More', so: 'Akhri Wax Dheeraad Ah' },

  // About
  'about.title': { en: 'About Filanwaa', so: 'Naga Warran Filanwaa' },
  'about.p1': {
    en: 'Filanwaa is a bilingual knowledge platform dedicated to bridging the gap between technology education, Islamic guidance, and Somali cultural heritage. Our mission is to make quality content accessible in both English and Somali.',
    so: 'Filanwaa waa madal waxbarasho laba-luuqadleh oo ku dallacsan in laga xidho farqiga ka dhexeeya waxbarashada teknoolojiyada, hanuuninta Islaamka, iyo dhaqanka hiddaha Soomaaliga. Hadafkayagu waa in nuxurka tayo leh laga helayo labada luuqadood — Ingiriisiga iyo Soomaaliga.',
  },
  'about.p2': {
    en: 'Whether you are a student learning to code, a Muslim seeking religious knowledge, or a lover of Somali literature, Filanwaa has something for you. We believe knowledge should be free, accessible, and presented in the languages people think and dream in.',
    so: 'Ha ahaato arday baranaya koodhka, Muslim raadinaya cilmiga diinta, ama qof jeclaanaya suugaanta Soomaalida, Filanwaa waxaad ku heli doontaa waxa aad u baahantahay. Waannu aaminanahay in cilmigu lacag la\'aan, la gaadhi karo, oo ku dhegantahay luuqadaha dadku ku fekera oo ku riyoodaan.',
  },
  'about.mission': { en: 'Our Mission', so: 'Hadafkayaga' },
  'about.vision': { en: 'Our Vision', so: 'Aragtiday' },
  'about.vision.text': {
    en: 'A world where every Somali speaker has access to quality education in their own language.',
    so: 'Adduun ay guri kasta oo Soomaali ku hadla waxbarasho tayo leh ugu heli karto luuqaddooda.',
  },

  // Contact
  'contact.title': { en: 'Contact Us', so: 'Nala Xiriir' },
  'contact.desc': {
    en: 'Have a question, suggestion, or want to collaborate? We\'d love to hear from you.',
    so: 'Ma qabtaa su\'aal, talo, ama rabtaa wadashaqayn? Waannu doonayaa inaan kaa maqalno.',
  },
  'contact.email': { en: 'Email', so: 'Iimeyl' },
  'contact.social': { en: 'Follow Us', so: 'Na Raac' },
  'contact.name': { en: 'Your Name', so: 'Magacaaga' },
  'contact.message': { en: 'Message', so: 'Fariin' },
  'contact.send': { en: 'Send Message', so: 'Dir Fariin' },
  'contact.sent': { en: 'Message sent! Thank you.', so: 'Fariin la diray! Mahadsanid.' },

  // Footer
  'footer.rights': { en: 'All rights reserved.', so: 'Dhammaan xuquuqaha way xidantahay.' },
  'footer.tagline': { en: 'Knowledge · Faith · Culture', so: 'Cilmi · Diin · Dhaqan' },

  // IT Pages
  'it.intro': { en: 'Programming Language Guide', so: 'Hagaha Luuqadaha Barnaamijyada' },
  'it.learnmore': { en: 'Learn More', so: 'Wax Dheeraad Ah Baaro' },

  // Diinta
  'diinta.pillar': { en: 'Pillar of Islam', so: 'Tiirka Islaamka' },
  'diinta.learn': { en: 'Learn More', so: 'Wax Dheeraad Ah Baaro' },

  // Suugaanta
  'suugaanta.explore': { en: 'Explore', so: 'Baadhi' },
}
