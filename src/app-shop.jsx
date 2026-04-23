// Shop page (placeholder — coming soon)
function ShopHero({ lang }) {
  return (
    <section className="hero" id="top" style={{ minHeight: "auto", paddingBottom: 24 }}>
      <div className="hero-topline">
        <div className="mono">N—05 / SHOP</div>
        <div className="hero-topline-mid">
          <a href="index.html" className="mono">← INDEX</a>
        </div>
        <div className="mono">{lang === "jp" ? "ショップ" : "SHOP"}</div>
      </div>
      <div className="hero-main" style={{ paddingBottom: 16 }}>
        <h1 className="hero-headline contact-headline">
          <span className="line" data-reveal>{lang === "jp" ? "もうすぐ、" : "Coming"}</span>
          <span className="line" data-reveal>
            <span className="accent">{lang === "jp" ? "オープンします" : "soon"}</span>
            <span className="dot" />
          </span>
        </h1>
        <aside className="hero-side" data-reveal>
          <div className="mono hero-side-label">
            {lang === "jp" ? "ショップ準備中" : "SHOP IN PREPARATION"}
          </div>
          <p className="hero-side-body">
            {lang === "jp"
              ? "Q-CUBE、Art Panel、SDGs Productsなど、\nNOTICのプロダクトをオンラインでお求めいただける\nショップを準備中です。\nオープンの際はSNS等でお知らせいたします。"
              : "We're getting ready an online shop for NOTIC products —\nQ-CUBE, Art Panel, SDGs Products and more.\nFollow us on social to hear when it opens."}
          </p>
        </aside>
      </div>
    </section>
  );
}

function ShopCTA({ lang }) {
  const d = CONTENT.contact[lang];
  return (
    <section className="section product-cta-section">
      <div className="container product-cta" data-reveal>
        <div className="mono product-cta-eyebrow">{lang === "jp" ? "INQUIRY" : "INQUIRY"}</div>
        <h2 className="product-cta-title serif">
          {lang === "jp" ? "プロダクトのお問い合わせは\nこちらから。" : "Product inquiries\nare welcome."}
        </h2>
        <div className="product-cta-actions">
          <a className="contact-email" href={`mailto:${d.email}`}>{d.email} <span>↗</span></a>
          <a className="contact-btn" href="contact.html">{d.cta}</a>
        </div>
      </div>
    </section>
  );
}

function AppShop() {
  const [lang, setLang] = useLang();
  const [accent, setAccent] = useAccent("blue");
  useReveal();
  return (
    <>
      <TopBar lang={lang} setLang={setLang} accent={accent} setAccent={setAccent} />
      <main>
        <ShopHero lang={lang} />
        <ShopCTA lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppShop />);
