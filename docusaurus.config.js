import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lucas Picinini',
  tagline: 'Desenvolvedor 🧑🏻‍💻',
  favicon: 'img/favicon.ico',
  url: 'https://lucas-picinini.netlify.app',
  baseUrl: '/',
  organizationName: 'Lucas Picinini',
  projectName: 'my-portfolio',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Portfolio',
          },
          {to: '/blog', label: 'Artigos', position: 'left'},
          {
            href: 'https://github.com/lucaspicinini',
            label: 'GitHub',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Extra',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/lucas-picinini/',
              },
              {
                label: 'YouTube - Conheça meu canal de traduções.',
                href: 'https://www.youtube.com/@brazilianmmalegends',
              },
            ],
          },
        ],
        copyright: `Created by Lucas Picinini`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
