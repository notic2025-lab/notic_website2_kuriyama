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

// ---------- Hero ----------
function ProductHero({ lang, product, idx, total }) {
  const parent = CONTENT.products[lang];
  const d = product.detail;
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
        <div className="product-hero-head">
          <div className="mono product-hero-kicker" data-reveal>{product.num} · {product.type} · {product.year}</div>
          <h1 className="product-hero-name serif" data-reveal>{product.name}</h1>
          {d?.tagline && (
            <p className="product-hero-tagline serif" data-reveal>{d.tagline}</p>
          )}
          {d?.taglineSub && (
            <p className="product-hero-tagline-sub" data-reveal>{d.taglineSub}</p>
          )}
        </div>
      </div>
    </section>
  );
}

// ---------- Cover image ----------
function ProductCover({ product }) {
  return (
    <section className="product-cover-section">
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

// ---------- CONCEPT ----------
function ProductConcept({ product }) {
  const d = product.detail;
  if (!d?.concept) return null;
  return (
    <section className="section qc-section">
      <div className="container qc-concept-wrap">
        <div className="mono qc-section-label" data-reveal>CONCEPT</div>
        <div className="qc-concept-body" data-reveal>
          {d.concept.split("\n\n").map((para, i) => (
            <p key={i} className="qc-concept-para serif">{para.replace(/\n/g, "​\n")}</p>
          ))}
        </div>
        {d.conceptEn && (
          <div className="qc-concept-en" data-reveal>
            {d.conceptEn.split("\n\n").map((para, i) => (
              <p key={i} className="qc-concept-para-en">{para}</p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ---------- WHY ----------
function ProductWhy({ lang, product }) {
  const d = product.detail;
  if (!d?.why) return null;
  const label = lang === "jp" ? "WHY Q-CUBE / 特徴" : "WHY Q-CUBE / 特徴";
  return (
    <section className="section qc-section">
      <div className="container qc-why-wrap">
        <div className="mono qc-section-label" data-reveal>{label}</div>
        <ul className="qc-why-list">
          {d.why.map((item, i) => (
            <li key={i} className="qc-why-item" data-reveal>
              <span className="qc-why-bullet">·</span>
              <span className="qc-why-text serif">{item}</span>
            </li>
          ))}
        </ul>
        {d.whyEn && (
          <ul className="qc-why-list qc-why-list-en">
            {d.whyEn.map((item, i) => (
              <li key={i} className="qc-why-item" data-reveal>
                <span className="qc-why-bullet">-</span>
                <span className="qc-why-text-en">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

// ---------- FEATURES ----------
function ProductFeatures({ lang, product }) {
  const d = product.detail;
  if (!d?.features) return null;
  const label = lang === "jp" ? "FEATURES / 機能" : "FEATURES";
  return (
    <section className="section qc-section">
      <div className="container">
        <div className="mono qc-section-label" data-reveal>{label}</div>
        <div className="qc-features-grid">
          {d.features.map((f, i) => (
            <div key={i} className="qc-feature-card" data-reveal>
              <div className="qc-feature-meta mono">
                <span>{f.num}</span>
                {f.plus && <span className="qc-feature-plus">Q-CUBE Plus+</span>}
              </div>
              <h3 className="qc-feature-title serif">{f.title}</h3>
              <p className="qc-feature-body">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- EFFECTS ----------
function ProductEffects({ lang, product }) {
  const d = product.detail;
  if (!d?.effects) return null;
  const label = lang === "jp" ? "WHAT CHANGES / 期待できる効果" : "WHAT CHANGES";
  return (
    <section className="section qc-section">
      <div className="container">
        <div className="mono qc-section-label" data-reveal>{label}</div>
        <div className="qc-effects-list">
          {d.effects.map((e, i) => (
            <div key={i} className="qc-effect-row" data-reveal>
              <span className="qc-effect-bullet mono">·</span>
              <div className="qc-effect-content">
                <div className="qc-effect-title serif">{e.title}</div>
                <p className="qc-effect-body">{e.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- SPECS ----------
function ProductSpecs({ lang, product }) {
  const specs = product.detail?.specs || [];
  if (!specs.length) return null;
  const label = lang === "jp" ? "SPEC / 仕様" : "SPEC";
  return (
    <section className="section qc-section">
      <div className="container">
        <div className="mono qc-section-label" data-reveal>{label}</div>
        <div className="qc-specs-table" data-reveal>
          {specs.map((s, i) => (
            <div key={i} className="qc-spec-row">
              <div className="qc-spec-k serif">{s.k}</div>
              <div className="qc-spec-v">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Q-CUBE ORIGINAL ----------
function ProductOriginal({ lang, product }) {
  const o = product.detail?.original;
  if (!o) return null;
  const email = CONTENT.contact[lang].email;
  const sectionLabel = lang === "jp" ? "Q-CUBE ORIGINAL / オーダーメイド" : "Q-CUBE ORIGINAL";
  const optionsLabel = lang === "jp" ? "CUSTOM OPTIONS / カスタム項目" : "CUSTOM OPTIONS";
  const usecasesLabel = lang === "jp" ? "USE CASES / 活用シーン" : "USE CASES";
  const pricingLabel = lang === "jp" ? "PRICING / 価格目安" : "PRICING";
  return (
    <section className="section qc-section qc-original-section">
      <div className="container">
        <div className="mono qc-section-label" data-reveal>{sectionLabel}</div>

        <div className="qc-original-head" data-reveal>
          <h2 className="qc-original-tagline serif">{o.tagline}</h2>
          <p className="qc-original-tagline-sub">{o.taglineSub}</p>
        </div>

        <p className="qc-original-lead serif" data-reveal>{o.lead}</p>

        <div className="mono qc-section-label qc-section-label-inner" data-reveal>{optionsLabel}</div>
        <div className="qc-specs-table" data-reveal>
          {o.options.map((opt, i) => (
            <div key={i} className="qc-spec-row">
              <div className="qc-spec-k serif">{opt.k}</div>
              <div className="qc-spec-v">{opt.v}</div>
            </div>
          ))}
        </div>

        <div className="mono qc-section-label qc-section-label-inner" data-reveal>{usecasesLabel}</div>
        <div className="qc-usecases-grid" data-reveal>
          {o.usecases.map((uc, i) => (
            <div key={i} className="qc-usecase-col">
              <h4 className="qc-usecase-title serif">{uc.title}</h4>
              <ul className="qc-usecase-list">
                {uc.items.map((item, j) => (
                  <li key={j} className="qc-usecase-item">· {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mono qc-section-label qc-section-label-inner" data-reveal>{pricingLabel}</div>
        <div className="qc-specs-table" data-reveal>
          {o.pricing.map((p, i) => (
            <div key={i} className="qc-spec-row">
              <div className="qc-spec-k serif">{p.item}</div>
              <div className="qc-spec-v">{p.price}</div>
            </div>
          ))}
        </div>
        {o.note && <p className="qc-pricing-note mono" data-reveal>{o.note}</p>}

        <div className="qc-original-cta" data-reveal>
          <h3 className="qc-original-cta-title serif">{o.cta}</h3>
          <p className="qc-original-cta-sub">{o.ctaSub}</p>
          <a className="contact-email qc-cta-email" href={`mailto:${email}`}>{email} <span>↗</span></a>
        </div>
      </div>
    </section>
  );
}

// ---------- Related products ----------
function ProductRelated({ lang, current }) {
  const d = CONTENT.products[lang];
  const others = d.items.filter((x) => x.id !== current.id);
  const label = lang === "jp" ? "他のサービス" : "OTHER SERVICES";
  return (
    <section className="section product-related-section">
      <div className="container">
        <div className="mono product-related-label" data-reveal>{label}</div>
        <div className="product-related-grid">
          {others.map((it) => (
            <a className="product-related-card" key={it.id} href={`products.html?p=${it.id}`} data-reveal>
              <Placeholder label={it.name} ratio="16/9" tone={it.color} image={it.image} alt={it.name} />
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

// ---------- CTA ----------
function ProductCTA({ lang }) {
  const d = CONTENT.contact[lang];
  return (
    <section className="section product-cta-section">
      <div className="container product-cta" data-reveal>
        <div className="mono product-cta-eyebrow">CONTACT</div>
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

// ---------- App ----------
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

  const hasRichContent = !!product.detail?.concept;

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
          <ProductCover product={product} />
          {hasRichContent ? (
            <>
              <ProductConcept product={product} />
              <ProductWhy lang={lang} product={product} />
              <ProductFeatures lang={lang} product={product} />
              <ProductEffects lang={lang} product={product} />
              <ProductSpecs lang={lang} product={product} />
              <ProductOriginal lang={lang} product={product} />
            </>
          ) : (
            <>
              <ProductSpecs lang={lang} product={product} />
            </>
          )}
          <ProductRelated lang={lang} current={product} />
          <ProductCTA lang={lang} />
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppProduct />);
