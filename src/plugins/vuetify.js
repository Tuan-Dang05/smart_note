// src/plugins/vuetify.js

import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Make sure this is the correct path to Vuetify styles

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases as mdiAliases, mdi } from 'vuetify/iconsets/mdi-svg';

import '@fortawesome/fontawesome-free/css/all.css'; // Font Awesome CSS import

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases: {
            ...mdiAliases, // Spread the MDI aliases
        },
        sets: {
            mdi, // Use the MDI icon set
            fa: {
                component: 'FontAwesomeIcon',
                iconfont: 'fa',
            },
        },
    },
    ssr: true, // Enable SSR support if needed
});

export default vuetify;
