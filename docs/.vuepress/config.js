const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "VIZ",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  locales: {
    "/": {
      lang: "en",
      title: "VIZ",
      description: "VIZ blockchain",
    },
    "/ru/": {
      lang: "ru",
      title: "VIZ",
      description: "Блокчейн VIZ",
    },
  },

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/ios-appicon-152-152.png' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/android-launchericon-144-144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "viz-cx/docs.viz.cx",
    domain: "docs.viz.cx",
    logo: "/logo.png",
    editLinks: true,
    docsDir: "docs",
    locales: {
      "/": {
        label: "🇺🇸English",
        selectText: "Languages",
        ariaLabel: "Select language",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh",
          },
        },
        // nav: [{ text: "Cookbook", link: "/cookbook/contents" }],
        sidebar: {
          "/": [
            {
              title: "VIZ blockchain",
              collapsable: false,
              children: [
                "",
                "economy",
                "witnesses",
                "bandwidth",
                "accounts",
                "check",
                "subscriptions",
                "escrow",
                "glossary",
                "links",
              ],
            },
          ],
        },
      },
      "/ru/": {
        label: "🇷🇺Русский",
        selectText: "Языки",
        ariaLabel: "Выбрать язык",
        editLinkText: "Редактировать страницу на GitHub",
        lastUpdated: "Последнее редактирование",
        serviceWorker: {
          updatePopup: {
            message: "Доступно обновление.",
            buttonText: "Обновить",
          },
        },
        nav: [{ text: "Рецепты", link: "/ru/cookbook/basic-concept" }],
        sidebar: {
          "/ru/cookbook/": [
            {
              title: "Поваренная книга",
              collapsable: false,
              children: [
                "basic-concept",
                "economy",
                "node-types",
                "operations",
                "object-structures",
                "state",
                "plugins-api",
                "libraries",
                "code-examples",
                "transaction-formatting",
              ],
            },
          ],
          "/ru/": [
            {
              title: "Блокчейн VIZ",
              collapsable: false,
              children: [
                "",
                "economy",
                "witnesses",
                "bandwidth",
                "accounts",
                "check",
                "subscriptions",
                "escrow",
                "glossary",
                "links",
              ],
            },
          ],
        },
      },
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "check-md",
    // "seo",
    ["@vuepress/pwa", {
      serviceWorker: true,
      updatePopup: true,
    }],
    ["sitemap", {
      hostname: "https://docs.viz.cx",
    }],
    ["robots", {
      host: "https://docs.viz.cx",
      sitemap: "/sitemap.xml"
    }]
  ],
};
