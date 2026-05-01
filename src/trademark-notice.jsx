// Shared trademark notice shown only near content that mentions QR code terms.
function TrademarkNotice({ lang, variant = "default" }) {
  const text = lang === "jp"
    ? "QRコードは株式会社デンソーウェーブの登録商標です。"
    : "QR Code is a registered trademark of DENSO WAVE INCORPORATED in Japan and in other countries.";
  const className = [
    "trademark-notice",
    variant !== "default" ? `trademark-notice--${variant}` : "",
  ].filter(Boolean).join(" ");

  return (
    <p className={className}>{text}</p>
  );
}

window.TrademarkNotice = TrademarkNotice;
