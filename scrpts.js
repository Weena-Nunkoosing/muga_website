// JavaScript code for interactivity can be added here
// Placeholder for JavaScript functionalities
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript Loaded');
});


i18next
  .use(i18nextBrowserLanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome to the MUGA Community Center",
          "new_center": "New Community Center Opening",
          "registration": "Summer Workshops Registration",
          "volunteer": "Volunteer Opportunities"
        }
      },
      fr: {
        translation: {
          "welcome": "Bienvenue au Centre Communautaire MUGA",
          "new_center": "Ouverture du Nouveau Centre Communautaire",
          "registration": "Inscription aux Ateliers d'Été",
          "volunteer": "Opportunités de Volontariat"
        }
      }
    },
    lng: "en", // Default language
    fallbackLng: "en"
  }, function(err, t) {
    // Initialize your page
    updateContent();
  });

function updateContent() {
  document.querySelector('#welcome').textContent = i18next.t('welcome');
  document.querySelector('#new_center').textContent = i18next.t('new_center');
  document.querySelector('#registration').textContent = i18next.t('registration');
  document.querySelector('#volunteer').textContent = i18next.t('volunteer');
}

function changeLanguage(lang) {
  i18next.changeLanguage(lang, () => {
    updateContent();
  });
}
