import { ArrowUpRight, BookOpen, ExternalLink, Instagram, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const assets = {
  portrait: "/assets/alston-fhellype.jpg",
  hero: "",
  paper: "",
  spines: "",
  monogram: "/assets/alston-monogram.svg",
};

const books = [
  {
    number: "01",
    title: "A Arte de Ler as Pessoas Antes Mesmo que Elas Digam Uma Palavra",
    subtitle: "Portuguese Edition",
    category: "Comportamento · Comunicação",
    cover: "/assets/arte-de-ler-pessoas.jpg",
    summary:
      "Um convite a perceber os sinais que acontecem antes da fala. A obra aproxima observação, comportamento e comunicação para quem deseja compreender melhor as pessoas e as relações do cotidiano.",
    amazon:
      "https://www.amazon.com.br/s?k=A+Arte+de+Ler+as+Pessoas+Antes+Mesmo+que+Elas+Digam+Uma+Palavra+Alston+Fhellype",
  },
  {
    number: "02",
    title: "DINOFUN",
    subtitle: "A Fun Dinosaur Coloring Adventure for Kids",
    category: "Infantil · Colorir",
    cover: "/assets/dinofun.jpg",
    summary:
      "Uma aventura divertida para crianças explorarem dinossauros, cores e imaginação. Um livro pensado para transformar cada página em uma pequena descoberta criativa.",
    amazon:
      "https://www.amazon.com.br/s?k=DINOFUN+A+Fun+Dinosaur+Coloring+Adventure+for+Kids+Alston+Fhellype",
  },
  {
    number: "03",
    title: "O Homem que Morava nos Meus Olhos",
    subtitle: "Uma obra sobre memória, identidade e interioridade",
    category: "Ficção · Reflexão",
    cover: "/assets/homem-que-morava-nos-meus-olhos.png",
    summary:
      "Uma narrativa de atmosfera contemplativa, em que olhar para dentro também é uma forma de encontrar o outro. A obra convida o leitor a atravessar imagens, lembranças e perguntas íntimas.",
    amazon:
      "https://www.amazon.com.br/s?k=O+Homem+que+Morava+nos+Meus+Olhos+Alston+Fhellype",
  },
  {
    number: "04",
    title: "EU TE AMO ANTES MESMO DE VOCÊ NASCER",
    subtitle: "Memórias, cartas e ensinamentos de um pai para sua filha",
    category: "Memórias · Paternidade",
    cover: "/assets/eu-te-amo-antes-mesmo-de-voce-nascer.png",
    summary:
      "Cartas escritas a partir da espera, do cuidado e do desejo de deixar palavras como herança. Um livro sobre o amor que começa antes do encontro e continua em cada ensinamento compartilhado.",
    amazon:
      "https://www.amazon.com.br/s?k=EU+TE+AMO+ANTES+MESMO+DE+VOC%C3%8A+NASCER+Alston+Fhellype",
  },
];

function AmazonLink({ href, children = "Pesquisar na Amazon" }: { href: string; children?: React.ReactNode }) {
  return (
    <a className="text-link" href={href} target="_blank" rel="noreferrer">
      {children} <ExternalLink size={15} strokeWidth={1.8} />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Alston Fhellype",
        url: "https://alstonfhellype.com.br/",
        jobTitle: "Autor",
        image: assets.portrait,
        sameAs: ["https://www.amazon.com.br/s?k=Alston+Fhellype"],
      },
      ...books.map((book) => ({
        "@type": "Book",
        name: book.title,
        author: { "@type": "Person", name: "Alston Fhellype" },
        inLanguage: book.number === "02" ? "en" : "pt-BR",
        url: book.amazon,
        description: book.summary,
      })),
    ],
  };

  return (
    <div className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Alston Fhellype, início">
          <img src={assets.monogram} alt="" />
          <span><strong>Alston</strong> Fhellype</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Navegação principal">
          <a href="#livros" onClick={() => setMenuOpen(false)}>Livros</a>
          <a href="#autor" onClick={() => setMenuOpen(false)}>Sobre o autor</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
        </nav>
        <a className="header-cta" href="#livros">Conheça as obras <ArrowUpRight size={16} /></a>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow">Site oficial · Autor brasileiro</p>
            <h1>Quatro livros.<br /><em>Quatro maneiras</em><br />de olhar mais de perto.</h1>
            <p className="hero-lede">Conheça o universo de <strong>Alston Fhellype</strong>: ideias sobre pessoas, aventuras para crianças, narrativas de interioridade e cartas que nascem do amor.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#livros">Explorar os livros <ArrowUpRight size={17} /></a>
              <a className="button button-quiet" href="#autor">Ler sobre o autor <span>↓</span></a>
            </div>
          </div>
          <div className="hero-note"><span>01</span><span>Um espaço para<br />ler, lembrar e imaginar.</span></div>
        </section>

        <section className="intro-section section-wrap">
          <div className="section-kicker"><span className="rule" /> <span>O universo do autor</span></div>
          <div className="intro-grid">
            <h2>Escrever é criar<br /><em>uma nova lente.</em></h2>
            <div className="intro-copy">
              <p>Entre a observação das relações, o encantamento da infância e a delicadeza da memória, Alston Fhellype constrói livros que começam com uma pergunta simples: <strong>o que ainda podemos perceber?</strong></p>
              <p>Esta é a página oficial para conhecer suas quatro obras e encontrar cada título na Amazon.</p>
            </div>
          </div>
        </section>

        <section id="livros" className="books-section">
          <div className="section-wrap">
            <div className="books-heading">
              <div>
                <p className="eyebrow">Bibliografia selecionada</p>
                <h2>Livros para diferentes<br /><em>momentos de leitura.</em></h2>
              </div>
              <p className="heading-aside">Passeie pelas capas, leia os resumos e escolha a obra que conversa com o seu momento.</p>
            </div>
            <div className="books-list">
              {books.map((book) => (
                <article className="book-item" key={book.number}>
                  <div className="book-index">{book.number}</div>
                  <div className="cover-frame"><img src={book.cover} alt={`Capa de ${book.title}`} /></div>
                  <div className="book-details">
                    <p className="book-category">{book.category}</p>
                    <h3>{book.title}</h3>
                    <p className="book-subtitle">{book.subtitle}</p>
                    <p className="book-summary">{book.summary}</p>
                    <AmazonLink href={book.amazon} />
                  </div>
                </article>
              ))}
            </div>
            <p className="availability-note">Os links levam à pesquisa pública da Amazon. Edições, disponibilidade e condições podem variar.</p>
          </div>
        </section>

        <section className="interlude-section">
          <div className="interlude-overlay" />
          <div className="section-wrap interlude-content">
            <span className="quote-mark">“</span>
            <blockquote>Algumas histórias explicam o mundo.<br /><em>Outras nos ensinam a senti-lo.</em></blockquote>
            <span className="quote-credit">— Alston Fhellype</span>
          </div>
        </section>

        <section id="autor" className="author-section">
          <div className="section-wrap author-grid">
            <div className="author-portrait-wrap">
              <div className="portrait-label">02 · Sobre o autor</div>
              <img src={assets.portrait} alt="Alston Fhellype sorrindo, usando terno azul e camisa branca" className="author-portrait" />
              <div className="portrait-caption">Alston Fhellype<br /><span>Autor</span></div>
            </div>
            <div className="author-copy">
              <p className="eyebrow eyebrow-light">Uma voz em construção</p>
              <h2>Olá, eu sou<br /><em>Alston Fhellype.</em></h2>
              <p>Sou autor de histórias que observam o que existe por trás das palavras — e também do que nasce antes delas. Escrevo para aproximar pessoas de novas perguntas, memórias e possibilidades.</p>
              <p>Cada livro percorre um território diferente, mas todos partem do mesmo lugar: a vontade de olhar com mais atenção.</p>
              <a className="light-link" href="#contato">Fale comigo <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="closing-section">
          <div className="section-wrap closing-grid">
            <div><p className="eyebrow">Para continuar a leitura</p><h2>Encontre a obra<br /><em>que conversa com você.</em></h2></div>
            <div className="closing-action"><p>Pesquise os títulos pelo nome do autor e descubra as edições disponíveis na Amazon.</p><a className="button button-primary" href="https://www.amazon.com.br/s?k=Alston+Fhellype" target="_blank" rel="noreferrer">Ver perfil de autor <ExternalLink size={16} /></a></div>
          </div>
        </section>
      </main>

      <footer id="contato" className="site-footer">
        <div className="section-wrap footer-top">
          <a className="brand brand-footer" href="#top"><img src={assets.monogram} alt="" /><span><strong>Alston</strong> Fhellype</span></a>
          <p>Escrever é criar uma nova lente.<br />Obrigado por passar por aqui.</p>
          <div className="footer-links"><a href="mailto:alstonfhellype@gmail.com"><Mail size={15} /> E-mail</a><a href="https://www.amazon.com.br/s?k=Alston+Fhellype" target="_blank" rel="noreferrer"><BookOpen size={15} /> Amazon</a><a href="#top"><Instagram size={15} /> Instagram</a></div>
        </div>
        <div className="section-wrap footer-bottom"><span>© {new Date().getFullYear()} Alston Fhellype</span><span>Site oficial do autor</span><a href="#top">Voltar ao topo ↑</a></div>
      </footer>
    </div>
  );
}
