// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Top Group Express',
            link: [
                { rel: 'icon', type: 'image/x-icon', href: 'https://cdn.topgroups.travel/websites/assets/images/favicon.png' }
            ],
            meta: [
                {
                    name: 'description',
                    content: 'Book a hotel for a group of more than 7 people online in just a few clicks right now!'
                },
            ]
        },
    },
    css: [
        '~/assets/css/main.css',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['@nuxtjs/i18n', "@nuxt/image", 'nuxt-swiper', '@nuxtjs/seo', 'nuxt-og-image', 'nuxt-calendly', 'nuxt-aos'],
    i18n: {
        locales: [
            { code: 'en', iso: 'en-UK', file: 'en.js', name: 'English (UK)' },
            { code: 'es', iso: 'es-ES', file: 'es.js', name: 'Español' },
            { code: 'cn', iso: 'zh-CN', file: 'cn.js', name: '简体中文' },
            { code: 'fr', iso: 'fr-FR', file: 'fr.js', name: 'Français' },
        ],
        langDir: 'locales/',
        defaultLocale: 'en',
        strategy: "prefix_and_default",
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
            alwaysRedirect: true
        }
    },
    nitro: {
        prerender: {
          autoSubfolderIndex: false
        }
    },
    site: {
        url: process.env.SITE_URL
    },
    runtimeConfig: {
        public: {
            siteUrl: process.env.SITE_URL,
            backendUrl: process.env.BACKEND_URL
        }
    },
    aos: {
        once: true,
        duration: 1000,
        anchorPlacement: 'top-bottom',
        disable: 'mobile'
    },
})