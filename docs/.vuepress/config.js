const path = require("path")

module.exports = {
  lang: 'pt-BR',

  locales: {
    '/': {
      lang: 'pt-BR',
      title: 'MeUI',
      description: '',
    },
    '/en/': {
      lang: 'en-US',
      title: 'MeUI',
      description: '',
    },
  },

  themeConfig: {
    repo: 'jonathanbergson/me.ui',

    locales: {
      '/': {
        selectLanguageName: 'Português',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
    },

    sidebar: [
      '/README.md',
      {
        text: 'Componentes',
        children: [
          '/components/Button.md',
          '/components/Icon.md',
        ],
      },
    ],
  }
}
