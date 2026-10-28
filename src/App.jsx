function Hero() {
  return (
    <header className="hero">
      <p className="salut">Bonjour, je suis</p>
      <h1>Fadil</h1>
      <p className="titre">
        Développeur web et data, en Master 2 Expert IT Development & Big Data à
        l'IRIS Paris. Je cherche une alternance.
      </p>
      <div className="boutons">
        <a className="btn principal" href="#projets">Voir mes projets</a>
        <a className="btn" href="https://github.com/Didi700" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </header>
  );
}

function Chips({ items, cours = false }) {
  return (
    <div className="chips">
      {items.map((item) => (
        <span key={item} className={cours ? "chip cours" : "chip"}>
          {item}
        </span>
      ))}
    </div>
  );
}

function APropos() {
  return (
    <section className="section" id="a-propos">
      <h2>À propos</h2>
      <p>
        Originaire du Bénin, j'ai commencé par une licence en systèmes
        informatiques et logiciels, puis un stage de trois mois dans un
        ministère : corrections de bugs, assistance aux utilisateurs et travail
        sur les bases de données.
      </p>
      <p>
        Je vis aujourd'hui à Paris, où je prépare un Master 2 en développement
        et Big Data. J'aime construire des applications complètes, de la base de
        données jusqu'à l'interface.
      </p>
    </section>
  );
}

function Competences() {
  return (
    <section className="section" id="competences">
      <h2>Compétences</h2>
      <div className="groupe">
        <h3>Développement web</h3>
        <Chips items={["PHP", "Laravel", "JavaScript", "React", "Vue.js", "API REST"]} />
      </div>
      <div className="groupe">
        <h3>Données</h3>
        <Chips items={["MySQL", "SQLite", "pandas"]} />
      </div>
      <div className="groupe">
        <h3>Outils</h3>
        <Chips items={["Git / GitHub", "Postman", "PHPUnit", "FastAPI"]} />
      </div>
      <div className="groupe">
        <h3>En cours d'apprentissage</h3>
        <Chips items={["Python", "SQL avancé"]} cours />
      </div>
    </section>
  );
}

const PROJETS = [
  {
    titre: "Dashboard transport IDF",
    description:
      "Dashboard de la fréquentation du réseau ferré francilien, construit à partir de l'open data d'Île-de-France Mobilités (~480 000 lignes). Chaîne complète : nettoyage avec pandas, base SQLite, API REST et interface React.",
    image: "/dashboard.png",
    technos: ["Python", "pandas", "SQLite", "FastAPI", "React"],
    github: "https://github.com/Didi700/dashboard-transport-idf",
  },
];

function Projets() {
  return (
    <section className="section" id="projets">
      <h2>Projets</h2>
      <div className="projets-grid">
        {PROJETS.map((p) => (
          <article className="projet" key={p.titre}>
            <img src={p.image} alt={`Aperçu du projet ${p.titre}`} />
            <div className="corps">
              <h3>{p.titre}</h3>
              <p>{p.description}</p>
              <Chips items={p.technos} />
              <div className="liens">
                <a href={p.github} target="_blank" rel="noreferrer">Voir le code</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
function Contact() {
  return (
    <section className="section contact" id="contact">
      <h2>Contact</h2>
      <p>
        Je recherche une alternance en développement web et data. N'hésitez pas
        à me écrire, je réponds volontiers.
      </p>
      <div className="boutons">
        <a className="btn principal" href="mailto:fadilassane06@gmail.com">
          M'envoyer un email
        </a>
        <a className="btn" href="https://github.com/Didi700" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="footer">© 2026 Fadil · Construit avec React</footer>;
}

export default function App() {
  return (
    <>
      <div className="container">
        <Hero />
        <Projets />
        <APropos />
        <Competences />
        <Contact />
      </div>
      <Footer />
    </>
  );
}