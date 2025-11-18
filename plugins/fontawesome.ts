import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faClipboardCheck,
  faSlidersH,
  faStopwatch,
  faRepeat,
  faDatabase,
  faTools,
  faShieldAlt,
  faChartLine,
  faUser,
  faMapMarkerAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

// Add icons to the library
// Brand icons
library.add(
  faGithub,
  faTwitter,
  faLinkedinIn
);

// Solid icons (free alternatives to pro light icons)
// Note: These use 'fas' prefix instead of 'fal'
library.add(
  faCode,
  faClipboardCheck,
  faSlidersH,
  faStopwatch,
  faRepeat,
  faDatabase,
  faTools,
  faShieldAlt, // shield-check in pro becomes shield-alt in free
  faChartLine, // analytics in pro becomes chart-line in free
  faUser,
  faMapMarkerAlt,
  faEnvelope
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
});
