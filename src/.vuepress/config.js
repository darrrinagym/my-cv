const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
   title: 'EMPAER',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#5D45BA' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: '#5D45BA' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#5D45BA' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#5D45BA' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: 'src/docs',
    editLinkText: '',
    lastUpdated: false,
    logo: '/logo.webp',
  
    nav: [
      {
        text: 'Как это работает',
        link: '/guide/',
      },
      {
        text: 'Вопросы и ответы',
        link: '/faq/',
      },
      {
        text: 'Дорожная карта',
        link: '/roadmap/',
      },
      {
        text: 'На сайт',
        link: 'https://empaer.capital/'
      },
      {
        text: 'Whitepaper',
        link: 'https://empaer.ru/'
      },
    ],
    
    sidebar: {
      '/guide/': [
        {
          title: 'О проекте',
          collapsable: false,
          children: [
            '',
            'problem',
          ]
        }
      ],
      '/faq/': [
        {
          title: 'Вопросы и ответы',
          collapsable: false,
          children: [
            '',
            'pochemu-vygodno-investirovat-v-empaer',
            'akcii-vs-bankovsky-deposit',
            'hranenie-i-vyvod-akcii',
            'luchshee-vremya-dlya-investicii',
            'zachita-investicii',
            'mejdunarodnye-investicii',
            'kak-investirovat-nalichnye-v-kryptu',
            'vip-investicii',
            'kak-poluchit-investicii',
            'perspectivy',
          ]
        }
      ],
      '/roadmap/': [
        {
          title: 'Дорожная карта',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
    }
  },
  locales: {
    '/': {
      lang: 'ru-RU',
      title: 'EMPAER',
      description: 'Документация',
      serviceWorker: {
        updatePopup: {
          message: '🎉 Новый контент доступен ',
          buttonText: 'Обновить'
        }
      }
    },
    '/en/': {
      lang: 'en-US',
      title: 'EMPAER',
      description: 'Project documentations',
      serviceWorker: {
        updatePopup: {
          message: '🎉 New Content Is Available ',
          buttonText: 'Refresh'
        }
      }
    }
  },


  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    ['@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ]
}
