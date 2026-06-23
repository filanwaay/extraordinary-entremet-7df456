import { createFileRoute } from '@tanstack/react-router'
import { useLang } from '@/contexts/LangContext'
import { PageTemplate, ContentCard } from '@/components/PageTemplate'

export const Route = createFileRoute('/it/sql')({
  component: SQLPage,
})

const IT_SUBNAV = [
  { label: 'Python', href: '/it/python' },
  { label: 'CSS', href: '/it/css' },
  { label: 'Java', href: '/it/java' },
  { label: 'SQL', href: '/it/sql' },
  { label: 'PHP', href: '/it/php' },
]

function SQLPage() {
  const { lang, t } = useLang()

  return (
    <PageTemplate
      category={t('nav.it')}
      categoryHref="/it/python"
      title="SQL — Structured Query Language"
      titleSo="SQL — Luuqadda Su'aalaha Qaab-dhismeedka leh"
      subtitle="The standard language for managing and querying relational databases."
      subtitleSo="Luuqadda caadiga ah ee maamulidda iyo su'aalaha xogta-salaysan xiriirka."
      accentColor="var(--indigo)"
      accentBg="var(--indigo-bg)"
      icon={<DBIcon />}
      subMenuItems={IT_SUBNAV}
    >
      <ContentCard title={lang === 'en' ? 'What is SQL?' : 'Maxay tahay SQL?'} accentColor="var(--indigo)" accentBg="var(--indigo-bg)">
        <p>{lang === 'en'
          ? 'SQL (Structured Query Language) is used to communicate with databases. It allows you to create tables, insert data, update records, delete information, and query (search) data. SQL is used by virtually every application that stores data — from websites to mobile apps to enterprise systems.'
          : 'SQL (Luuqadda Su\'aalaha Qaab-dhismeedka leh) waxaa loo isticmaalaa xiriirka xog-uruuriyeyaasha. Waxay kuu oggolaanaysaa in aad samaynto miisaska, geliso xogta, cusboonaysii diiwaanada, tirtir macluumaadka, iyo su\'aasho (raadinta) xogta. SQL waxaa isticmaala arjiyada oo dhan ee keydsanaya xogta — websiteyaashay ilaa apps-ka gacmaha ilaa nidaamyada ganacsiga.'
        }</p>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'Basic SQL Commands' : 'Amarada SQL ee Aasaasiga'} accentColor="var(--indigo)" accentBg="var(--indigo-bg)">
        <pre>{`-- Create a table
CREATE TABLE students (
  id       INT PRIMARY KEY AUTO_INCREMENT,
  name     VARCHAR(100) NOT NULL,
  age      INT,
  city     VARCHAR(50)
);

-- Insert data
INSERT INTO students (name, age, city)
VALUES ('Fadumo', 22, 'Mogadishu');

-- Select / Query data
SELECT * FROM students;
SELECT name, age FROM students WHERE age > 20;

-- Update a record
UPDATE students
SET city = 'Hargeisa'
WHERE name = 'Fadumo';

-- Delete a record
DELETE FROM students WHERE id = 1;`}</pre>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'SQL Joins' : 'Kudar SQL (Joins)'} accentColor="var(--indigo)" accentBg="var(--indigo-bg)">
        <p style={{ marginBottom: 12 }}>{lang === 'en' ? 'Joins combine rows from multiple tables:' : 'Kudarku wuxuu isku darayaa safofka miisaska badan:'}</p>
        <pre>{`-- INNER JOIN: only matching rows
SELECT students.name, courses.title
FROM students
INNER JOIN enrollments ON students.id = enrollments.student_id
INNER JOIN courses ON enrollments.course_id = courses.id;

-- LEFT JOIN: all from left table
SELECT students.name, courses.title
FROM students
LEFT JOIN enrollments ON students.id = enrollments.student_id;`}</pre>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'Aggregate Functions' : 'Shaqooyinka Isku-darka'} accentColor="var(--indigo)" accentBg="var(--indigo-bg)">
        <pre>{`-- COUNT: number of rows
SELECT COUNT(*) FROM students;

-- SUM, AVG, MIN, MAX
SELECT AVG(age) AS average_age FROM students;
SELECT MAX(age), MIN(age) FROM students;

-- GROUP BY
SELECT city, COUNT(*) AS total
FROM students
GROUP BY city
ORDER BY total DESC;`}</pre>
      </ContentCard>
    </PageTemplate>
  )
}

function DBIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
}
