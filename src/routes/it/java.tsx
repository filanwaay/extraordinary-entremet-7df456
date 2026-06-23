import { createFileRoute } from '@tanstack/react-router'
import { useLang } from '@/contexts/LangContext'
import { PageTemplate, ContentCard } from '@/components/PageTemplate'

export const Route = createFileRoute('/it/java')({
  component: JavaPage,
})

const IT_SUBNAV = [
  { label: 'Python', href: '/it/python' },
  { label: 'CSS', href: '/it/css' },
  { label: 'Java', href: '/it/java' },
  { label: 'SQL', href: '/it/sql' },
  { label: 'PHP', href: '/it/php' },
]

function JavaPage() {
  const { lang, t } = useLang()

  return (
    <PageTemplate
      category={t('nav.it')}
      categoryHref="/it/python"
      title="Java Programming"
      titleSo="Barnaamijka Java"
      subtitle="A robust, object-oriented language powering enterprise apps, Android, and large-scale systems."
      subtitleSo="Luuqad adag, walxo-ku-salaysan oo waxqabadka ka samaysa apps ganacsiga, Android, iyo nidaamyada baaxadda weyn."
      accentColor="var(--indigo)"
      accentBg="var(--indigo-bg)"
      icon={<JavaIcon />}
      subMenuItems={IT_SUBNAV}
    >
      <ContentCard title={lang === 'en' ? 'What is Java?' : 'Maxay tahay Java?'} accentColor="var(--indigo)" accentBg="var(--indigo-bg)">
        <p>{lang === 'en'
          ? 'Java is a class-based, object-oriented programming language designed to run on any platform. "Write once, run anywhere" is Java\'s motto — your compiled code runs on any device with a Java Virtual Machine (JVM). Java powers Android apps, banking systems, and enterprise software used by millions.'
          : 'Java waa luuqad barnaamij ah oo ku salaysan fasallo, walxana ku salaysan oo loogu talagalay in lagu shaqeeyo meel kasta oo xarfaha saaran. "Hal mar qor, meel kasta ku shaqee" ayaa ah moto-ga Java — koodhkaaga la-ururiyay wuxuu ku shaqeeyaa aalad kasta oo Java Virtual Machine (JVM) leh. Java waxay xukuntaa apps-ka Android, nidaamyada bangiga, iyo software ganacsiga ay isticmaalaan malaayiin.'
        }</p>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'Java Basics' : 'Aasaasyada Java'} accentColor="var(--indigo)" accentBg="var(--indigo-bg)">
        <pre>{`// Hello World in Java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

// Variables & data types
int age = 25;
double salary = 1500.50;
String name = "Filanwaa";
boolean isActive = true;

// If-else
if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}

// For loop
for (int i = 0; i < 5; i++) {
    System.out.println("Count: " + i);
}`}</pre>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'Object-Oriented Programming (OOP)' : 'Barnaamijyada Walxaha-Ku-Salaysan (OOP)'} accentColor="var(--indigo)" accentBg="var(--indigo-bg)">
        <pre>{`// Creating a Class
public class Person {
    // Attributes
    String name;
    int age;

    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Method
    public void greet() {
        System.out.println("Hello, I am " + name);
    }
}

// Using the class
Person person1 = new Person("Farax", 30);
person1.greet(); // Output: Hello, I am Farax`}</pre>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'Java Key Concepts' : 'Fikradaha Muhiimka ee Java'} accentColor="var(--indigo)" accentBg="var(--indigo-bg)">
        <ul>
          {(lang === 'en' ? [
            'Classes & Objects — blueprints and instances',
            'Inheritance — a class can inherit from another class',
            'Polymorphism — same method, different behavior',
            'Encapsulation — hiding internal data',
            'Interfaces — define contracts that classes must implement',
            'Exception Handling — try/catch for error management',
          ] : [
            'Fasallada iyo Walxaha — sawirro iyo tusaale',
            'Dhaxalka — fasalku wuxuu ka dhaxli karaa fasalkale',
            'Polymorph — isla habka, dabeecad kala duwan',
            'Encapsulation — qaridhida xogta gudaha',
            'Interfaces — qeexida heshiisyada fasalladaha ay fulinayaan',
            'Maamulka Khaladaadka — isku day/qabo maamulka khaladaadka',
          ]).map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </ContentCard>
    </PageTemplate>
  )
}

function JavaIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg>
}
