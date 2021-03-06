const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
   title: 'Daria Zorina',
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
        text: 'Skills',
        link: '/skills/',
      },
      {
        text: 'Expirience',
        link: '/expirience/',
      },
      {
        text: 'Projects',
        link: '/projects/',
      },
      {
        text: 'Contacts',
        link: '/contacts/',
      },
      {
        text: 'CV',
        link: 'https://empaer.capital/'
      },
      
    ],
    
    sidebar: {
      '/skills/': [
        {
          title: 'My skills',
          collapsable: false,
          children: [
            '',
            'problem',
          ]
        }
      ],
      '/expirience/': [
        {
          title: 'Expirience',
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
      '/contacts/': [
        {
          title: 'Contacts',
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
      lang: 'english',
      title: 'Daria Zorina',
      description: 'CV: Fullstack Designer & Developer',
      serviceWorker: {
        updatePopup: {
          message: '🎉 🎉 New Content Is Available ',
          buttonText: 'Refresh'
        }
      }
    },
    '/ru/': {
      lang: 'русский',
      title: 'Дарья Зорина',
      description: 'CV: Fullstack Designer & Developer',
      serviceWorker: {
        updatePopup: {
          message: '🎉 Есть дополнения',
          buttonText: 'Обновить'
        }
      }
    }
  },


  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/register-components',
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
