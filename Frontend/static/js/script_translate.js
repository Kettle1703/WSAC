// переключает язык интерфейса для элемнтов с пометкой data-i18n-key. перевод не автоматический, а по массиву
function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n-key]").forEach(el => {
    const key = el.getAttribute("data-i18n-key");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Обновляем текст текущего выбранного языка в переключателе
  const currentLangElem = document.getElementById("language-current");
  if (lang === "ru") {
    currentLangElem.textContent = "Русский";
  } else if (lang === "en") {
    currentLangElem.textContent = "English";
  }

  // Меняем видимость языков в списке
  document.querySelectorAll(".language-options li").forEach(li => {
    li.style.display = (li.getAttribute("data-lang") === lang) ? "none" : "block";
  });
}

document.querySelectorAll(".language-options li").forEach(li => {
  li.addEventListener("click", () => {
    const selectedLang = li.getAttribute("data-lang");
    applyTranslations(selectedLang);
  });
});