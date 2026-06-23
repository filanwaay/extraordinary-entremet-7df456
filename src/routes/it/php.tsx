import { createFileRoute } from '@tanstack/react-router'
import { useLang } from '@/contexts/LangContext'
import { PageTemplate, ContentCard } from '@/components/PageTemplate'

export const Route = createFileRoute('/it/php')({
  component: PHPPage,
})

const IT_SUBNAV = [
  { label: 'Python', href: '/it/python' },
  { label: 'CSS', href: '/it/css' },
  { label: 'Java', href: '/it/java' },
  { label: 'SQL', href: '/it/sql' },
  { label: 'PHP', href: '/it/php' },
]

function PHPPage() {
  const { lang, t } = useLang()

  return (
    <PageTemplate
      category={t('nav.it')}
      categoryHref="/it/python"
      title="PHP Programming"
      titleSo="Barnaamijka PHP"
      subtitle="A server-side scripting language that powers over 75% of all websites, including WordPress."
      subtitleSo="Luuqad script-ka adeegga-dhinaciisa ah oo waxqabadka ka samaysa in ka badan 75% websites-ka oo dhan, oo ay ku jiraan WordPress."
      accentColor="var(--indigo)"
      accentBg="var(--indigo-bg)"
      icon={<PHPIcon />}
      subMenuItems={IT_SUBNAV}
    >
      <ContentCard title={lang === 'en' ? 'What is PHP?' : 'Maxay tahay PHP?'} accentColor="var(--indigo)" accentBg="var(--indigo-bg)">
        <p>{lang === 'en'
          ? 'PHP (Hypertext Preprocessor) is a widely-used, open-source scripting language especially suited for web development. PHP code runs on the server and generates dynamic HTML content for the browser. It can connect to databases, handle forms, manage sessions, and send emails.'
          : 'PHP (Hypertext Preprocessor) waa luuqad script ah oo furan, oo si ballaaran loo isticmaalo, gaar ahaan horumarinta websiteyaasha. Koodhka PHP waxuu ku shaqeeyaa adeegyaha wuxuuna soo saaraa nuxurka HTML ee firfircoon ee browsers-ka. Waxay ku xidhi kartaa xog-uruuriyeyaasha, maamuli foomamka, maamusha xaaladaha, iyo dir iimeylaasha.'
        }</p>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'PHP Basics' : 'Aasaasyada PHP'} accentColor="var(--indigo)" accentBg="var(--indigo-bg)">
        <pre>{`<?php
// Variables
$name = "Filanwaa";
$age  = 25;
$price = 9.99;

// Echo output
echo "Hello, " . $name . "!";
echo "<br>";
echo "You are $age years old.";

// If-else
if ($age >= 18) {
    echo "Welcome, adult!";
} else {
    echo "Access restricted.";
}

// Array
$fruits = ["Apple", "Mango", "Banana"];
foreach ($fruits as $fruit) {
    echo $fruit . "<br>";
}
?>`}</pre>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'PHP Functions' : 'Shaqooyinka PHP'} accentColor="var(--indigo)" accentBg="var(--indigo-bg)">
        <pre>{`<?php
// Define a function
function greet($name) {
    return "Hello, " . $name . "!";
}

echo greet("Somalia");

// Function with default parameter
function add($a, $b = 10) {
    return $a + $b;
}

echo add(5);     // 15
echo add(5, 3);  // 8

// Built-in functions
$text = "  Hello World  ";
echo trim($text);          // removes whitespace
echo strtoupper($text);    // HELLO WORLD
echo strlen("Filanwaa");   // 8
?>`}</pre>
      </ContentCard>

      <ContentCard title={lang === 'en' ? 'PHP & MySQL Database' : 'PHP iyo Xogta MySQL'} accentColor="var(--indigo)" accentBg="var(--indigo-bg)">
        <pre>{`<?php
// Connect to database
$conn = mysqli_connect("localhost", "user", "pass", "mydb");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Query the database
$result = mysqli_query($conn, "SELECT * FROM users");

while ($row = mysqli_fetch_assoc($result)) {
    echo $row['name'] . " - " . $row['email'] . "<br>";
}

// Insert data (use prepared statements to prevent SQL injection)
$stmt = $conn->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $email);
$name  = "Cali";
$email = "cali@example.com";
$stmt->execute();

mysqli_close($conn);
?>`}</pre>
      </ContentCard>
    </PageTemplate>
  )
}

function PHPIcon() {
  return <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
}
