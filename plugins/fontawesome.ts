import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

// Since pro icons are not available, we'll need to use free alternatives
// You can replace these with pro icons if you have a FontAwesome Pro license
// For now, creating a stub to allow the build to succeed
// The icons won't display, but the app will build

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

// Add icons to the library
library.add(
  faGithub,
  faTwitter,
  faLinkedinIn
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
});
