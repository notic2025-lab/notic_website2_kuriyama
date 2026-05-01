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
  const hasSimulator = !!d?.designs;
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
          {hasSimulator && (
            <a href="#simulator" className="ap-hero-sim-btn" data-reveal>
              <span className="ap-hero-sim-badge mono">3 STEPS</span>
              <span>{lang === "jp" ? "今すぐ簡単お見積もり" : "Get an instant estimate"}</span>
              <span className="mono">↓</span>
            </a>
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
function ProductOriginal({ lang, product, showTrademark }) {
  const o = product.detail?.original;
  if (!o) return null;
  const email = CONTENT.contact[lang].email;
  const TrademarkNoticeComponent = window.TrademarkNotice;
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
        {showTrademark && TrademarkNoticeComponent ? (
          <TrademarkNoticeComponent lang={lang} variant="product" />
        ) : null}

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
        <div className="ap-option-block" data-reveal>
          <div className="mono ap-option-label">
            {lang === "jp" ? "OPTION / ライティング" : "OPTION / Lighting"}
          </div>
          <p className="ap-option-body">
            {lang === "jp"
              ? "パネルにライティングを組み合わせることで、夜間・暗所での演出や、昼夜で異なる表情をつくることができます。"
              : "Pair the panel with lighting to create evening and low-light effects, or to give the panel a different presence by day and by night."}
          </p>
          <ul className="ap-option-list">
            <li className="ap-option-item">· {lang === "jp" ? "設置環境・演出イメージをヒアリングのうえ、個別にご提案" : "We propose a setup after briefing on environment and intent"}</li>
            <li className="ap-option-item">· {lang === "jp" ? "料金はヒアリング後のお見積もりとなります" : "Pricing is quoted following consultation"}</li>
          </ul>
        </div>
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
  const [panelsW, setPanelsW] = useStP(2);
  const [panelsH, setPanelsH] = useStP(2);

  const t = (jp, en) => lang === "jp" ? jp : en;
  const LOGO_PRICE = 15000;
  const designs = d.designs;
  const standard = designs.filter((x) => x.id !== "custom");
  const custom = designs.find((x) => x.id === "custom");
  const selected = designs.find((x) => x.id === selectedId);
  const isCustom = selectedId === "custom";

  const adjW = (delta) => setPanelsW((p) => Math.min(20, Math.max(1, p + delta)));
  const adjH = (delta) => setPanelsH((p) => Math.min(20, Math.max(1, p + delta)));

  const totalPanels = panelsW * panelsH;
  const panelSubtotal = selected?.pricePerPanel ? selected.pricePerPanel * totalPanels : 0;
  const grandTotal = panelSubtotal + (hasLogo ? LOGO_PRICE : 0);

  const step2Active = !!selectedId && !isCustom;
  const step3Active = step2Active && hasLogo !== null;
  const resultReady = step3Active;

  return (
    <section className="section ap-order-section" id="simulator">
      <div className="container">
        <div className="mono qc-section-label" data-reveal>
          {t("ORDER SIMULATOR / 簡単お見積もり", "ORDER SIMULATOR")}
        </div>
        <p className="ap-order-lead" data-reveal>
          {t(
            "3ステップで概算が出ます。デザイン · ロゴ · サイズを選ぶだけ。",
            "Three steps to a rough estimate — design, logo, size."
          )}
        </p>

        {/* ── 2-COLUMN LAYOUT ── */}
        <div className="ap-sim-layout" data-reveal>

          {/* LEFT: STEP 01 — Design picker */}
          <div className="ap-sim-left">
            <div className="ap-flow-label">
              <span className="mono ap-step-num">STEP 01</span>
              <span className="ap-step-title serif">{t("デザインを選ぶ", "Choose a design")}</span>
            </div>
            <div className="ap-sim-grid">
              {designs.map((des) => (
                <button
                  key={des.id}
                  className={`ap-sim-card${selectedId === des.id ? " is-selected" : ""}${des.id === "custom" ? " is-custom-card" : ""}`}
                  onClick={() => { setSelectedId(des.id); setHasLogo(null); }}
                >
                  <div className="ap-sim-ph">{des.name}</div>
                  <div className="ap-sim-card-body">
                    <div className="ap-sim-card-name serif">{des.name}</div>
                    <div className="ap-sim-card-jp mono">{des.jp}</div>
                    <div className="ap-sim-card-price mono">
                      {des.pricePerPanel
                        ? `¥${des.pricePerPanel.toLocaleString()}${t("/枚〜", "/panel")}`
                        : t("別途お見積もり", "Quote on request")}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: STEPS 02 + 03 + RESULT */}
          <div className="ap-sim-right">

            {/* STEP 02 */}
            <div className={`ap-sim-right-step${step2Active ? "" : " is-dim"}`}>
              <div className="ap-flow-label">
                <span className="mono ap-step-num">STEP 02</span>
                <span className="ap-step-title serif">{t("ロゴ・文字入れ", "Logo / lettering")}</span>
              </div>
              <div className="ap-choice-row">
                <button
                  className={`ap-choice-card${hasLogo === true ? " is-selected" : ""}`}
                  onClick={() => step2Active && setHasLogo(true)}
                >
                  <span className="ap-choice-mark mono">+</span>
                  <span className="ap-choice-main serif">{t("あり", "Yes")}</span>
                  <span className="ap-choice-sub mono">+¥15,000〜</span>
                </button>
                <button
                  className={`ap-choice-card${hasLogo === false ? " is-selected" : ""}`}
                  onClick={() => step2Active && setHasLogo(false)}
                >
                  <span className="ap-choice-mark mono">—</span>
                  <span className="ap-choice-main serif">{t("なし", "No")}</span>
                  <span className="ap-choice-sub mono">±¥0</span>
                </button>
              </div>
            </div>

            {/* STEP 03 */}
            <div className={`ap-sim-right-step${step3Active ? "" : " is-dim"}`}>
              <div className="ap-flow-label">
                <span className="mono ap-step-num">STEP 03</span>
                <span className="ap-step-title serif">{t("サイズを選ぶ", "Choose size")}</span>
              </div>
              <p className="ap-order-note mono">{t("1枚 = 300mm × 300mm", "1 panel = 300mm × 300mm")}</p>
              <div className="ap-stepper-row">
                <div className="ap-stepper-group">
                  <span className="mono ap-stepper-label">{t("横", "Width")}</span>
                  <div className="ap-stepper">
                    <button className="ap-stepper-btn" onClick={() => adjW(-1)}>−</button>
                    <span className="ap-stepper-val mono">{panelsW}</span>
                    <button className="ap-stepper-btn" onClick={() => adjW(1)}>+</button>
                  </div>
                  <span className="mono ap-stepper-mm">{panelsW * 300}mm</span>
                </div>
                <span className="mono ap-stepper-times">×</span>
                <div className="ap-stepper-group">
                  <span className="mono ap-stepper-label">{t("縦", "Height")}</span>
                  <div className="ap-stepper">
                    <button className="ap-stepper-btn" onClick={() => adjH(-1)}>−</button>
                    <span className="ap-stepper-val mono">{panelsH}</span>
                    <button className="ap-stepper-btn" onClick={() => adjH(1)}>+</button>
                  </div>
                  <span className="mono ap-stepper-mm">{panelsH * 300}mm</span>
                </div>
              </div>
              {step3Active && (
                <div className="ap-stepper-total">
                  <span className="mono ap-stepper-total-val">{panelsW * 300}mm × {panelsH * 300}mm</span>
                  <span className="mono ap-stepper-total-panels">
                    {t(`（合計 ${totalPanels} 枚）`, `(${totalPanels} panels total)`)}
                  </span>
                </div>
              )}
            </div>

            {/* RESULT */}
            <div className={`ap-sim-result-block${resultReady && !isCustom ? " is-ready" : ""}${isCustom ? " is-custom" : ""}`}>
              {!selectedId && (
                <p className="ap-sim-result-hint mono">
                  {t("← デザインを選ぶと\n金額が表示されます", "← Select a design\nto see the estimate")}
                </p>
              )}
              {isCustom && (
                <>
                  <p className="serif ap-custom-quote-note">
                    {t(
                      "フルオーダーは別途\nお見積もりです。",
                      "Full custom is\nquoted separately."
                    )}
                  </p>
                  <div className="ap-order-cta">
                    <a className="contact-btn" href="contact.html">
                      {t("ご相談する →", "Get in touch →")}
                    </a>
                  </div>
                </>
              )}
              {resultReady && !isCustom && (
                <>
                  <div className="mono ap-result-head">
                    {t("お見積もり（概算・税別）", "Estimate (approx., ex. tax)")}
                  </div>
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
                      <span className="mono">¥{grandTotal.toLocaleString()}{t("〜", "+")}</span>
                    </div>
                  </div>
                  <p className="ap-result-note mono">
                    {t("※概算・税別。素材・設置等により変動。", "※ Approx., ex. tax. Varies by material, install, etc.")}
                  </p>
                  <div className="ap-order-cta">
                    <a className="contact-btn" href="contact.html">
                      {t("詳細をご相談する →", "Start a conversation →")}
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="ap-option-block" data-reveal>
          <div className="mono ap-option-label">
            {t("OPTION / ライティング", "OPTION / Lighting")}
          </div>
          <p className="ap-option-body">
            {t(
              "パネルにライティングを組み合わせることで、夜間・暗所での演出や、昼夜で異なる表情をつくることができます。",
              "Pair the panel with lighting to create evening and low-light effects, or to give the panel a different presence by day and by night."
            )}
          </p>
          <ul className="ap-option-list">
            <li className="ap-option-item">· {t("設置環境・演出イメージをヒアリングのうえ、個別にご提案", "We propose a setup after briefing on environment and intent")}</li>
            <li className="ap-option-item">· {t("料金はヒアリング後のお見積もりとなります", "Pricing is quoted following consultation")}</li>
          </ul>
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
  const isArtPanel = product.id === "art-panel";
  const shouldShowQrTrademark = product.id === "q-cube";

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
              <ProductOriginal lang={lang} product={product} showTrademark={shouldShowQrTrademark} />
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
