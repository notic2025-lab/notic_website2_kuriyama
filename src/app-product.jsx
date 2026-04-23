// Product detail page
const { useEffect: useEffP, useMemo: useMemoP } = React;

function getProductIdFromURL() {
  try {
    const p = new URLSearchParams(window.location.search).get("p");
    return p || "q-cube";
  } catch {
    return "q-cube";
  }
}

function ProductHero({ lang, product, idx, total }) {
  const parent = CONTENT.products[lang];
  const lines = parent.title.split("\n");
  const lastIdx = lines.length - 1;
  return (
    <section className="hero" id="top" style={{ minHeight: "auto", paddingBottom: 40 }}>
      <div className="hero-topline">
        <div className="mono">{parent.eyebrow}</div>
        <div className="hero-topline-mid">
          <a href="index.html#services" className="mono">← INDEX</a>
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
          <div className="mono hero-side-label">{product.name}</div>
          <p className="hero-side-body">{product.body}</p>
        </aside>
      </div>
    </section>
  );
}

function ProductTitle({ lang, product }) {
  return (
    <section className="section detail-title-section">
      <div className="container detail-title-wrap">
        <div className="mono detail-title-kicker" data-reveal>{product.num} · {product.type} · {product.year}</div>
        <h2 className="detail-title serif" data-reveal>{product.name}</h2>
      </div>
    </section>
  );
}

function ProductCover({ product }) {
  return (
    <section className="section product-cover-section">
      <div className="product-cover container">
        <Placeholder
          label={`${product.num} — ${product.name}`}
          ratio="16/9"
          tone={product.color || "bg2"}
          image={product.image}
          alt={product.name}
        />
      </div>
    </section>
  );
}

function ProductLead({ lang, product }) {
  return (
    <section className="section product-lead-section">
      <div className="product-lead container">
        <div className="mono product-lead-label" data-reveal>
          {lang === "jp" ? "CONCEPT" : "CONCEPT"}
        </div>
        <p className="product-lead-body serif" data-reveal>
          {product.detail?.lead}
        </p>
      </div>
    </section>
  );
}

function ProductSections({ lang, product }) {
  const sections = product.detail?.sections || [];
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

function ProductSpecs({ lang, product }) {
  const specs = product.detail?.specs || [];
  return (
    <section className="section product-specs-section">
      <div className="container">
        <div className="mono product-specs-label" data-reveal>
          {lang === "jp" ? "仕様" : "SPECS"}
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

function ProductRelated({ lang, current }) {
  const d = CONTENT.products[lang];
  const others = d.items.filter((x) => x.id !== current.id);
  return (
    <section className="section product-related-section">
      <div className="container">
        <div className="mono product-related-label" data-reveal>
          {lang === "jp" ? "他のサービス" : "OTHER SERVICES"}
        </div>
        <div className="product-related-grid">
          {others.map((it) => (
            <a className="product-related-card" key={it.id} href={`products.html?p=${it.id}`} data-reveal>
              <Placeholder
                label={it.name}
                ratio="16/9"
                tone={it.color}
                image={it.image}
                alt={it.name}
              />
              <div className="product-related-body">
                <div className="mono product-related-meta">
                  <span>{it.num}</span>
                  <span>{it.type}</span>
                </div>
                <h4 className="product-related-name serif">{it.name}</h4>
                <div className="product-related-more mono">
                  <span>{lang === "jp" ? "詳しく見る" : "READ MORE"}</span>
                  <span className="service-arrow">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCTA({ lang }) {
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

function AppProduct() {
  const [lang, setLang] = useLang();
  const [accent, setAccent] = useAccent("blue");
  useReveal();

  const id = useMemoP(() => getProductIdFromURL(), []);
  const items = CONTENT.products[lang].items;
  const idx = Math.max(0, items.findIndex((x) => x.id === id));
  const product = items[idx] || items[0];

  useEffP(() => {
    document.title = `${product.name} — NOTIC`;
  }, [product.name]);

  return (
    <>
      <TopBar lang={lang} setLang={setLang} accent={accent} setAccent={setAccent} />
      <main>
        <div className="detail-firstview">
          <ProductHero lang={lang} product={product} idx={idx} total={items.length} />
          <a href="#detail-body" className="detail-firstview-scroll mono" aria-label="scroll to content">
            <span>{lang === "jp" ? "スクロール" : "SCROLL"}</span>
            <span className="detail-firstview-scroll-arrow">↓</span>
          </a>
        </div>
        <div id="detail-body">
          <ProductTitle lang={lang} product={product} />
          <ProductCover product={product} />
          <ProductLead lang={lang} product={product} />
          <ProductSections lang={lang} product={product} />
          <ProductSpecs lang={lang} product={product} />
          <ProductRelated lang={lang} current={product} />
          <ProductCTA lang={lang} />
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppProduct />);
