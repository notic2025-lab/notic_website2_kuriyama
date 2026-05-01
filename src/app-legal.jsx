// Legal page app
const { useEffect: useEffectLegal, useMemo: useMemoLegal } = React;

function getLegalSlugFromPath() {
  try {
    const filename = window.location.pathname.split("/").filter(Boolean).pop() || "privacy-policy.html";
    const slug = filename.replace(/\.html$/, "");
    return LEGAL_CONTENT[slug] ? slug : "privacy-policy";
  } catch {
    return "privacy-policy";
  }
}

function LegalHero({ page, lang }) {
  const lines = page.title[lang].split("\n");
  const lastIdx = lines.length - 1;

  return (
    <section className="hero legal-hero" id="top" style={{ minHeight: "auto", paddingBottom: 48 }}>
      <div className="hero-topline">
        <div className="mono">{page.number} / LEGAL</div>
        <div className="hero-topline-mid">
          <a href="index.html" className="mono">← INDEX</a>
        </div>
        <div className="mono">NOTIC</div>
      </div>
      <div className="hero-main legal-hero-main">
        <h1 className="hero-headline contact-headline legal-headline">
          {lines.map((line, i) => (
            <span key={line} className="line" data-reveal>
              {i === lastIdx ? (
                <>
                  <span className="accent">{line}</span>
                  <span className="dot" />
                </>
              ) : line}
            </span>
          ))}
        </h1>
        <aside className="hero-side" data-reveal>
          <div className="mono hero-side-label">{page.metaTitle[lang]}</div>
          <p className="hero-side-body">{page.description[lang]}</p>
        </aside>
      </div>
    </section>
  );
}

function LegalBlock({ section }) {
  return (
    <section className="legal-block" data-reveal>
      <h2 className="legal-block-title serif">{section.title}</h2>

      {section.paragraphs && section.paragraphs.map((paragraph, i) => (
        <p key={i} className="legal-paragraph">{paragraph}</p>
      ))}

      {section.items && (
        <ul className="legal-list">
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      {section.paragraphsAfter && section.paragraphsAfter.map((paragraph, i) => (
        <p key={`after-${i}`} className="legal-paragraph">{paragraph}</p>
      ))}

      {section.rows && (
        <dl className="legal-table">
          {section.rows.map((row) => (
            <div className="legal-row" key={row.label}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}

function LegalBody({ page, lang }) {
  const sections = page.sections[lang] || page.sections.jp;

  return (
    <section className="section legal-section" id="legal-body">
      <div className="container legal-wrap">
        <div className="legal-meta mono" data-reveal>
          <span>{lang === "jp" ? "最終更新" : "Updated"}</span>
          <span>{page.lastUpdated[lang]}</span>
        </div>
        <div className="legal-content">
          {sections.map((section) => (
            <LegalBlock section={section} key={section.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AppLegal() {
  const [lang, setLang] = useLang();
  const [accent, setAccent] = useAccent("blue");
  useReveal();

  const slug = useMemoLegal(() => getLegalSlugFromPath(), []);
  const page = LEGAL_CONTENT[slug] || LEGAL_CONTENT["privacy-policy"];

  useEffectLegal(() => {
    document.title = page.metaTitle[lang];
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute("content", page.description[lang]);
  }, [page, lang]);

  return (
    <>
      <TopBar lang={lang} setLang={setLang} accent={accent} setAccent={setAccent} />
      <main>
        <div className="detail-firstview legal-firstview">
          <LegalHero page={page} lang={lang} />
          <a href="#legal-body" className="detail-firstview-scroll mono" aria-label="scroll to legal content">
            <span>{lang === "jp" ? "スクロール" : "SCROLL"}</span>
            <span className="detail-firstview-scroll-arrow">↓</span>
          </a>
        </div>
        <LegalBody page={page} lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppLegal />);
