/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'NUCHAIN',
  tagline: 'Own your data, Rule your privacy, Make it trust!',
  url: 'https://wiki.nuchain.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nusantarachain',
  projectName: 'wiki',
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Work+Sans:400,700&display=swap",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],
  themeConfig: {
      /* Custom fonts for website */
  fonts: {
    myFont: ["Work Sans", "sans-serif"],
  },
    navbar: {
      logo: {
        alt: 'Nuchain Logo',
        src: 'img/logo_nuchain_wiki.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'general/welcome',
          position: 'right',
          label: 'Getting Started',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/nusantarachain/wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Build',
              to: '/docs/build/build-intro',
            },
            {
              label: 'FAQ',
              to: '/docs/general/faq',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/nusantarachain',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/nusantarachain',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/nusantarachain',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rantai Nusantara Foundation.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
