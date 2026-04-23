// Members page
function MembersHero({ lang }) {
  const d = CONTENT.members[lang];
  const lines = d.title.split("\n");
  const lastIdx = lines.length - 1;
  return (
    <section className="hero" id="top" style={{ minHeight: "auto", paddingBottom: 24 }}>
      <div className="hero-topline">
        <div className="mono">{d.eyebrow}</div>
        <div className="hero-topline-mid">
          <a href="index.html#about" className="mono">← INDEX</a>
        </div>
        <div className="mono">{lang === "jp" ? "メンバー" : "MEMBERS"}</div>
      </div>
      <div className="hero-main" style={{ paddingBottom: 16 }}>
        <h1 className="hero-headline contact-headline">
          {lines.map((l, i) => (
            <span key={i} className="line" data-reveal>
              {i === lastIdx ? (
                <>
                  <span className="accent">{l}</span>
                  <span className="dot" />
                </>
              ) : l}
            </span>
          ))}
        </h1>
        <aside className="hero-side" data-reveal>
          <div className="mono hero-side-label">{d.sideLabel}</div>
          <p className="hero-side-body">{d.sideBody}</p>
        </aside>
      </div>
    </section>
  );
}

function MembersList({ lang }) {
  const d = CONTENT.members[lang];
  return (
    <section className="section members-section">
      <div className="container members-grid">
        {d.members.map((m, i) => (
          <article className="member-card" key={m.id} data-reveal>
            <div className="member-portrait">
              {m.image ? (
                <img src={m.image} alt={m.name} />
              ) : (
                <div className="member-portrait-placeholder mono">
                  {String(i + 1).padStart(2, "0")}
                </div>
              )}
            </div>
            <div className="member-meta mono">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <span>{m.role}</span>
            </div>
            <h3 className="member-name serif">{m.name}</h3>
            <p className="member-bio">{m.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function MembersCTA({ lang }) {
  const d = CONTENT.contact[lang];
  return (
    <section className="section product-cta-section">
      <div className="container product-cta" data-reveal>
        <div className="mono product-cta-eyebrow">{lang === "jp" ? "JOIN US" : "JOIN US"}</div>
        <h2 className="product-cta-title serif">
          {lang === "jp" ? "一緒につくる仲間を、\nいつでも探しています。" : "We're always open to\npeople who make."}
        </h2>
        <div className="product-cta-actions">
          <a className="contact-email" href={`mailto:${d.email}`}>{d.email} <span>↗</span></a>
          <a className="contact-btn" href="contact.html">{d.cta}</a>
        </div>
      </div>
    </section>
  );
}

function AppMembers() {
  const [lang, setLang] = useLang();
  const [accent, setAccent] = useAccent("blue");
  useReveal();
  return (
    <>
      <TopBar lang={lang} setLang={setLang} accent={accent} setAccent={setAccent} />
      <main>
        <div className="detail-firstview">
          <MembersHero lang={lang} />
          <a href="#detail-body" className="detail-firstview-scroll mono" aria-label="scroll to members">
            <span>{lang === "jp" ? "スクロール" : "SCROLL"}</span>
            <span className="detail-firstview-scroll-arrow">↓</span>
          </a>
        </div>
        <div id="detail-body">
          <MembersList lang={lang} />
          <MembersCTA lang={lang} />
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppMembers />);
