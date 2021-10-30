/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "NUCHAIN",
  tagline: "Own your data, Rule your privacy, Make it trust!",
  url: "https://wiki.nuchain.network",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "nusantarachain",
  projectName: "wiki",
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
        alt: "Nuchain Logo",
        src: "img/logo_nuchain_wiki.png",
      },
      items: [
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          type: "doc",
          docId: "general/welcome",
          position: "right",
          label: "Memulai Pertama",
        },
        {
          href: "https://github.com/nusantarachain/nuchain",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Build",
              to: "/docs/build/build-intro",
            },
            {
              label: "FAQ",
              to: "/docs/general/faq",
            },
            {
              label: "Learn",
              to: "/docs/learn/main",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/nusantarachain",
            },
            {
              label: "Telegram",
              href: "https://t.me/nusantarachain",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/channel/UC2of6i3ywKX5xyMvcPZt8AQ",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/nusantarachain",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rantai Nusantara Foundation.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/nusantarachain/wiki/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/nusantarachain/wiki/edit/master/docs/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
  },
};
