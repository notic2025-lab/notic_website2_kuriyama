// Product detail page
const { useEffect: useEffP, useMemo: useMemoP, useState: useStP } = React;

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
            <p key={i} className="qc-concept-para serif">{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- WHY ----------
function ProductWhy({ lang, product }) {
  const d = product.detail;
  if (!d?.why) return null;
  const label = lang === "jp" ? "WHY Q-CUBE / 特徴" : "WHY Q-CUBE";
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

// ---------- ART PANEL: Design patterns ----------
function ArtPanelDesigns({ lang, product }) {
  const d = product.detail;
  if (!d?.designs) return null;
  const label = lang === "jp" ? "DESIGNS / パターン" : "DESIGNS";
  const standardDesigns = d.designs.filter((des) => des.id !== "custom");
  const customDesign = d.designs.find((des) => des.id === "custom");
  const perPanelLabel = lang === "jp" ? "/枚（税別）" : "/panel (ex. tax)";
  return (
    <section className="section qc-section">
      <div className="container">
        <div className="mono qc-section-label" data-reveal>{label}</div>
        <div className="ap-designs-grid">
          {standardDesigns.map((des) => (
            <div key={des.id} className="ap-design-card" data-reveal>
              <div className="ap-design-ph">
                <div className="ap-design-ph-inner">
                  <span className="ap-design-ph-name mono">{des.name}</span>
                </div>
              </div>
              <div className="ap-design-card-body">
                <div className="ap-design-names">
                  <span className="ap-design-name serif">{des.name}</span>
                  <span className="ap-design-jp mono">{des.jp}</span>
                </div>
                <p className="ap-design-desc">{des.desc}</p>
                {des.pricePerPanel && (
                  <div className="ap-design-price mono">
                    ¥{des.pricePerPanel.toLocaleString()}{perPanelLabel}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {customDesign && (
          <div className="ap-custom-banner" data-reveal>
            <div className="ap-custom-banner-body">
              <span className="ap-custom-banner-name serif">+ {customDesign.name} / {customDesign.jp}</span>
              <p className="ap-custom-banner-desc">{customDesign.desc}</p>
            </div>
            <span className="ap-custom-banner-tag mono">{lang === "jp" ? "別途お見積もり" : "Quote on request"}</span>
          </div>
        )}
      </div>
    </section>
  );
}

// ---------- ART PANEL: Pricing ----------
function ArtPanelPricing({ lang, product }) {
  const d = product.detail;
  if (!d?.pricing) return null;
  const label = lang === "jp" ? "PRICING / 価格目安" : "PRICING";
  return (
    <section className="section qc-section">
      <div className="container">
        <div className="mono qc-section-label" data-reveal>{label}</div>
        <div className="qc-specs-table" data-reveal>
          {d.pricing.map((p, i) => (
            <div key={i} className="qc-spec-row">
              <div className="qc-spec-k serif">{p.k}</div>
              <div className="qc-spec-v">{p.v}</div>
            </div>
          ))}
        </div>
        <p className="qc-pricing-note mono" data-reveal>
          {lang === "jp"
            ? "※価格はすべて税別。パターン・ロット・設置状況により変動します。"
            : "※ All prices ex. tax. Varies by pattern, quantity, and installation scope."}
        </p>
      </div>
    </section>
  );
}

// ---------- ART PANEL: Process ----------
function ArtPanelDelivery({ lang, product }) {
  const d = product.detail;
  if (!d?.delivery?.steps) return null;
  const label = lang === "jp" ? "PROCESS / 制作の流れ" : "PROCESS";
  return (
    <section className="section qc-section">
      <div className="container">
        <div className="mono qc-section-label" data-reveal>{label}</div>
        <div className="ap-process-list">
          {d.delivery.steps.map((s) => (
            <div key={s.num} className="ap-process-step" data-reveal>
              <div className="ap-process-num mono">{s.num}</div>
              <div className="ap-process-body">
                <h4 className="ap-process-title serif">{s.title}</h4>
                <p className="ap-process-text">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- ART PANEL: Interactive order simulator ----------
function ArtPanelOrderFlow({ lang, product }) {
  const d = product.detail;
  if (!d?.designs) return null;

  const [selectedId, setSelectedId] = useStP(null);
  const [hasLogo, setHasLogo] = useStP(null);
  const [panelsW, setPanelsW] = useStP("");
  const [panelsH, setPanelsH] = useStP("");

  const t = (jp, en) => lang === "jp" ? jp : en;
  const LOGO_PRICE = 15000;
  const designs = d.designs;
  const standard = designs.filter((x) => x.id !== "custom");
  const custom = designs.find((x) => x.id === "custom");
  const selected = designs.find((x) => x.id === selectedId);
  const isCustom = selectedId === "custom";

  const w = parseInt(panelsW) || 0;
  const h = parseInt(panelsH) || 0;
  const totalPanels = w * h;
  const panelSubtotal = selected?.pricePerPanel ? selected.pricePerPanel * totalPanels : 0;
  const logoSubtotal = hasLogo ? LOGO_PRICE : 0;
  const grandTotal = panelSubtotal + logoSubtotal;

  const showStep2 = !!selectedId;
  const showStep3 = showStep2 && hasLogo !== null && !isCustom;
  const showResult = showStep3 && totalPanels > 0;

  const sectionLabel = t("ORDER SIMULATOR / 簡単お見積もり", "ORDER SIMULATOR");

  return (
    <section className="section ap-order-section">
      <div className="container">
        <div className="mono qc-section-label" data-reveal>{sectionLabel}</div>
        <p className="ap-order-lead" data-reveal>
          {t(
            "パネルを選んで、ざっくりとした金額感を確認できます。詳細はお気軽にご相談ください。",
            "Pick a panel and get a rough estimate. For the full picture, just reach out."
          )}
        </p>

        {/* STEP 01 */}
        <div className="ap-order-step" data-reveal>
          <div className="ap-order-step-head">
            <span className="mono ap-step-num">STEP 01</span>
            <span className="ap-step-title serif">{t("デザインを選ぶ", "Choose a design")}</span>
          </div>
          <div className="ap-sim-grid">
            {standard.map((des) => (
              <button
                key={des.id}
                className={`ap-sim-card${selectedId === des.id ? " is-selected" : ""}`}
                onClick={() => setSelectedId(des.id)}
              >
                <div className="ap-sim-ph mono">{des.name}</div>
                <div className="ap-sim-card-body">
                  <div className="ap-sim-card-name serif">{des.name}</div>
                  <div className="ap-sim-card-jp mono">{des.jp}</div>
                  <div className="ap-sim-card-price mono">
                    ¥{des.pricePerPanel.toLocaleString()}{t("/枚〜", "/panel")}
                  </div>
                </div>
              </button>
            ))}
          </div>
          {custom && (
            <button
              className={`ap-custom-row${selectedId === "custom" ? " is-selected" : ""}`}
              onClick={() => setSelectedId("custom")}
            >
              <span className="mono ap-custom-row-tag">+ CUSTOM</span>
              <span className="ap-custom-row-text">{t("オリジナルデザイン（別途お見積もり）", "Original design (quote on request)")}</span>
              <span className="mono ap-custom-row-arrow">→</span>
            </button>
          )}
        </div>

        {/* STEP 02 */}
        {showStep2 && (
          <div className="ap-order-step" data-reveal>
            <div className="ap-order-step-head">
              <span className="mono ap-step-num">STEP 02</span>
              <span className="ap-step-title serif">{t("ロゴ・文字入れ", "Logo / lettering")}</span>
            </div>
            <div className="ap-toggle-row">
              <button
                className={`ap-toggle-btn${hasLogo === true ? " is-on" : ""}`}
                onClick={() => setHasLogo(true)}
              >
                {t("あり　＋¥15,000〜", "Yes　＋¥15,000")}
              </button>
              <button
                className={`ap-toggle-btn${hasLogo === false ? " is-on" : ""}`}
                onClick={() => setHasLogo(false)}
              >
                {t("なし", "No")}
              </button>
            </div>
          </div>
        )}

        {/* STEP 03 */}
        {showStep3 && (
          <div className="ap-order-step" data-reveal>
            <div className="ap-order-step-head">
              <span className="mono ap-step-num">STEP 03</span>
              <span className="ap-step-title serif">{t("サイズを入力", "Enter size")}</span>
            </div>
            <p className="ap-order-note mono">
              {t(
                "パネルは 300mm × 300mm が基本単位です。横・縦それぞれの枚数を入力してください。",
                "Each panel is 300mm × 300mm. Enter the number of panels wide and tall."
              )}
            </p>
            <div className="ap-size-inputs">
              <div className="ap-size-field">
                <label className="mono ap-size-label">{t("横（枚数）", "Width (panels)")}</label>
                <div className="ap-size-input-row">
                  <input
                    type="number" min="1" max="30"
                    value={panelsW}
                    onChange={(e) => setPanelsW(e.target.value)}
                    className="ap-size-input"
                    placeholder="1"
                  />
                  <span className="mono ap-size-mm">
                    = {w > 0 ? w * 300 : "—"}mm
                  </span>
                </div>
              </div>
              <span className="ap-size-times mono">×</span>
              <div className="ap-size-field">
                <label className="mono ap-size-label">{t("縦（枚数）", "Height (panels)")}</label>
                <div className="ap-size-input-row">
                  <input
                    type="number" min="1" max="30"
                    value={panelsH}
                    onChange={(e) => setPanelsH(e.target.value)}
                    className="ap-size-input"
                    placeholder="1"
                  />
                  <span className="mono ap-size-mm">
                    = {h > 0 ? h * 300 : "—"}mm
                  </span>
                </div>
              </div>
            </div>
            {totalPanels > 0 && (
              <p className="ap-size-total mono">
                {t(`合計 ${totalPanels} 枚 / ${w * 300}mm × ${h * 300}mm`, `Total ${totalPanels} panels / ${w * 300}mm × ${h * 300}mm`)}
              </p>
            )}
          </div>
        )}

        {/* Result */}
        {showResult && (
          <div className="ap-result" data-reveal>
            <div className="mono ap-result-head">{t("お見積もり（概算・税別）", "Estimate (approx., ex. tax)")}</div>
            <div className="ap-result-rows">
              <div className="ap-result-row">
                <span>{selected.name} × {totalPanels}{t("枚", " panels")}</span>
                <span className="mono">¥{panelSubtotal.toLocaleString()}</span>
              </div>
              {hasLogo && (
                <div className="ap-result-row">
                  <span>{t("ロゴ・文字入れ", "Logo / lettering")}</span>
                  <span className="mono">¥{LOGO_PRICE.toLocaleString()}</span>
                </div>
              )}
              <div className="ap-result-row ap-result-total">
                <span className="serif">{t("合計（概算）", "Total (approx.)")}</span>
                <span className="mono">¥{grandTotal.toLocaleString()}{t("〜（税別）", "+ (ex. tax)")}</span>
              </div>
            </div>
            <p className="ap-result-note mono">
              {t(
                "※この金額は概算です。素材・カラー・設置などにより変動します。",
                "※ Approximate only. Final price varies by material, color, and installation scope."
              )}
            </p>
          </div>
        )}

        {/* Custom quote message */}
        {isCustom && showStep2 && (
          <div className="ap-result" data-reveal>
            <p className="serif ap-custom-quote-note">
              {t(
                "フルオーダーデザインは、空間の規模・世界観によって金額が変わります。まずはお気軽にご相談ください。",
                "Full custom pricing depends on scale and concept. Please reach out and we'll go from there."
              )}
            </p>
          </div>
        )}

        {/* CTA */}
        {(showResult || (isCustom && showStep2)) && (
          <div className="ap-order-cta" data-reveal>
            <a className="contact-btn" href="contact.html">
              {t("詳細をご相談する →", "Start a conversation →")}
            </a>
          </div>
        )}
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
  const isArtPanel = product.id === "art-panel";

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
          {isArtPanel ? (
            <>
              <ProductConcept product={product} />
              <ProductWhy lang={lang} product={product} />
              <ArtPanelDesigns lang={lang} product={product} />
              <ProductSpecs lang={lang} product={product} />
              <ArtPanelPricing lang={lang} product={product} />
              <ArtPanelDelivery lang={lang} product={product} />
              <ArtPanelOrderFlow lang={lang} product={product} />
            </>
          ) : hasRichContent ? (
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
