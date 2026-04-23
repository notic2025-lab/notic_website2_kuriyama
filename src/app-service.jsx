// Service detail page
const { useEffect: useEffS, useMemo: useMemoS } = React;

function getServiceIdFromURL() {
  try {
    const s = new URLSearchParams(window.location.search).get("s");
    return s || "3d-printing";
  } catch {
    return "3d-printing";
  }
}

function ServiceHero({ lang, service, idx, total }) {
  const parent = CONTENT.services[lang];
  const lines = parent.title.split("\n");
  const lastIdx = lines.length - 1;
  return (
    <section className="hero" id="top" style={{ minHeight: "auto", paddingBottom: 40 }}>
      <div className="hero-topline">
        <div className="mono">{parent.eyebrow}</div>
        <div className="hero-topline-mid">
          <a href="index.html#technology" className="mono">← INDEX</a>
        </div>
        <div className="mono">{String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</div>
      </div>
      <div className="hero-main" style={{ paddingBottom: 24 }}>
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
          <div className="mono hero-side-label">{service.title}</div>
          <p className="hero-side-body">{service.body}</p>
        </aside>
      </div>
    </section>
  );
}

function ServiceTitle({ lang, service }) {
  return (
    <section className="section detail-title-section">
      <div className="container detail-title-wrap">
        <div className="mono detail-title-kicker" data-reveal>{service.num}</div>
        <h2 className="detail-title serif" data-reveal>{service.title}</h2>
      </div>
    </section>
  );
}

function ServiceLead({ lang, service }) {
  return (
    <section className="section product-lead-section">
      <div className="product-lead container">
        <div className="mono product-lead-label" data-reveal>
          {lang === "jp" ? "CONCEPT" : "CONCEPT"}
        </div>
        <p className="product-lead-body serif" data-reveal>
          {service.detail?.lead}
        </p>
      </div>
    </section>
  );
}

function ServiceSections({ lang, service }) {
  const sections = service.detail?.sections || [];
  return (
    <section className="section product-sections">
      <div className="container">
        {sections.map((s, i) => (
          <div className="product-section-row" key={i} data-reveal>
            <div className="mono product-section-num">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="product-section-head serif">{s.h}</h3>
            <div className="product-section-body">{s.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServiceSpecs({ lang, service }) {
  const specs = service.detail?.specs || [];
  return (
    <section className="section product-specs-section">
      <div className="container">
        <div className="mono product-specs-label" data-reveal>
          {lang === "jp" ? "概要" : "OVERVIEW"}
        </div>
        <div className="product-specs-grid">
          {specs.map((s, i) => (
            <div className="product-spec" key={i} data-reveal>
              <div className="mono product-spec-k">{s.k}</div>
              <div className="product-spec-v">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRelated({ lang, current }) {
  const d = CONTENT.services[lang];
  const others = d.items.filter((x) => x.id !== current.id);
  return (
    <section className="section product-related-section">
      <div className="container">
        <div className="mono product-related-label" data-reveal>
          {lang === "jp" ? "他のサービス" : "OTHER SERVICES"}
        </div>
        <div className="service-related-list">
          {others.map((it) => (
            <a className="service-related-row" key={it.id} href={`services.html?s=${it.id}`} data-reveal>
              <div className="mono service-related-num">{it.num}</div>
              <h4 className="service-related-title serif">{it.title}</h4>
              <p className="service-related-body">{it.body}</p>
              <div className="service-arrow">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCTA({ lang }) {
  const d = CONTENT.contact[lang];
  return (
    <section className="section product-cta-section">
      <div className="container product-cta" data-reveal>
        <div className="mono product-cta-eyebrow">{lang === "jp" ? "CONTACT" : "CONTACT"}</div>
        <h2 className="product-cta-title serif">
          {lang === "jp" ? "気になったことがあれば、\nお気軽にご相談ください。" : "Got something on your mind?\nTell us."}
        </h2>
        <div className="product-cta-actions">
          <a className="contact-email" href={`mailto:${d.email}`}>{d.email} <span>↗</span></a>
          <a className="contact-btn" href="contact.html">{d.cta}</a>
        </div>
      </div>
    </section>
  );
}

function AppService() {
  const [lang, setLang] = useLang();
  const [accent, setAccent] = useAccent("blue");
  useReveal();

  const id = useMemoS(() => getServiceIdFromURL(), []);
  const items = CONTENT.services[lang].items;
  const idx = Math.max(0, items.findIndex((x) => x.id === id));
  const service = items[idx] || items[0];

  useEffS(() => {
    document.title = `${service.title} — NOTIC`;
  }, [service.title]);

  return (
    <>
      <TopBar lang={lang} setLang={setLang} accent={accent} setAccent={setAccent} />
      <main>
        <div className="detail-firstview">
          <ServiceHero lang={lang} service={service} idx={idx} total={items.length} />
          <a href="#detail-body" className="detail-firstview-scroll mono" aria-label="scroll to content">
            <span>{lang === "jp" ? "スクロール" : "SCROLL"}</span>
            <span className="detail-firstview-scroll-arrow">↓</span>
          </a>
        </div>
        <div id="detail-body">
          <ServiceTitle lang={lang} service={service} />
          <ServiceLead lang={lang} service={service} />
          <ServiceSections lang={lang} service={service} />
          <ServiceSpecs lang={lang} service={service} />
          <ServiceRelated lang={lang} current={service} />
          <ServiceCTA lang={lang} />
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppService />);
