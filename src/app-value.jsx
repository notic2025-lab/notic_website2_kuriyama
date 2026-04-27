// Value page
function ValueHero({ lang }) {
  const d = CONTENT.value[lang];
  return (
    <section className="hero" id="top" style={{ minHeight: "auto", paddingBottom: 80 }}>
      <div className="hero-topline">
        <div className="mono">N—06 / VALUE</div>
        <div className="hero-topline-mid">
          <a href="index.html" className="mono">← INDEX</a>
        </div>
        <div className="mono">{lang === "jp" ? "大切にすること" : "VALUE"}</div>
      </div>

      <div className="hero-main" style={{ paddingBottom: 24 }}>
        <h1 className="hero-headline contact-headline">
          <span className="line" data-reveal>{lang === "jp" ? "大切にすること" : "What we value"}</span>
          <span className="line" data-reveal>
            <span className="accent">{lang === "jp" ? "Value" : "Value"}</span>
            <span className="dot" />
          </span>
        </h1>
        <aside className="hero-side" data-reveal>
          <div className="mono hero-side-label">{lang === "jp" ? "STATEMENT" : "STATEMENT"}</div>
          <p className="hero-side-body" style={{ whiteSpace: "pre-line" }}>{d.lead}</p>
        </aside>
      </div>
    </section>
  );
}

function ValueRows({ lang }) {
  const d = CONTENT.value[lang];
  return (
    <section className="section" style={{ paddingTop: 56 }}>
      <div className="container timeline" style={{ borderTop: "1px solid var(--line-strong)", paddingTop: 10 }}>
        {d.items.map((it) => (
          <article className="timeline-row" key={it.num} data-reveal style={{ alignItems: "start" }}>
            <div className="mono" style={{ color: "var(--muted)", paddingTop: 8 }}>{it.num}</div>
            <div>
              <h3 className="timeline-t" style={{ margin: 0 }}>{it.title}</h3>
              <p className="philo-body" style={{ whiteSpace: "pre-line", maxWidth: "none", marginTop: 14 }}>{it.body}</p>
              <h4 className="serif" style={{ fontSize: "clamp(24px, 2.2vw, 32px)", margin: "28px 0 10px", fontWeight: 400 }}>{it.enTitle}</h4>
              <p className="philo-body" style={{ whiteSpace: "pre-line", maxWidth: "none" }}>{it.enBody}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AppValue() {
  const [lang, setLang] = useLang();
  const [accent, setAccent] = useAccent("blue");
  useReveal();
  return (
    <>
      <TopBar lang={lang} setLang={setLang} accent={accent} setAccent={setAccent} />
      <main>
        <ValueHero lang={lang} />
        <ValueRows lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppValue />);
