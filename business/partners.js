const BUSINESS_PARTNER_LINE_LINKS = {
    b001: "https://z6q4xhbt.autosns.app/addfriend/s/PwRfhlWu3Z/@974fckcu",
};

(() => {
    const params = new URLSearchParams(window.location.search);
    const partnerKey = params.get("p") || params.get("partner");
    const selectedLineUrl = BUSINESS_PARTNER_LINE_LINKS[partnerKey];
    const hasValidPartner = Boolean(selectedLineUrl);

    document.querySelectorAll(".js-line-cta").forEach((link) => {
        link.href = selectedLineUrl || "#";
        link.setAttribute("aria-label", "公式LINEで申し込む");
        link.classList.toggle("is-disabled", !hasValidPartner);
        link.setAttribute("aria-disabled", String(!hasValidPartner));
        if (!hasValidPartner) {
            link.addEventListener("click", (event) => event.preventDefault());
        }
    });

    document.querySelectorAll(".js-partner-note").forEach((note) => {
        note.textContent = hasValidPartner
            ? "公式LINEへ移動します。"
            : "配布された専用URLからアクセスしてください。";
    });
})();
