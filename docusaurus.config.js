module.exports = {
  title: "PagoPA Company Handbook",
  tagline: "PagoPA Company Handbook",
  url: "https://pagopa.github.io",
  baseUrl: "/handbook/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "pagopa", // Usually your GitHub org/user name.
  projectName: "handbook", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "PagoPA Company Handbook",
      logo: {
        alt: "PagopPA logo",
        src: "img/logo.jpg",
      },
      items: [
        {
          href: "https://www.pagopa.gov.it/",
          label: "PagoPA",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Projects",
          items: [
            {
              label: "IO project",
              href: "https://io.italia.it",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PagoPA S.p.a.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/pagopa/handbook/edit/master/",

          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
