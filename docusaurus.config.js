// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const lightCodeTheme = require("prism-react-renderer/themes/github");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Documentum",
  tagline: "Learn how to program",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://documentumm.netlify.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "201flaviosilva", // Usually your GitHub org/user name.
  projectName: "documentum", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/201flaviosilva-labs/Documentum/tree/main/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Documentum",
        logo: {
          alt: "Documentum Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Learning",
          },
          {
            to: "/docs/tags/exercise",
            position: "left",
            label: "Exercises",
          },
          {
            href: "https://github.com/201flaviosilva-labs/Documentum",
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
                label: "Learning",
                to: "/docs/intro",
              },
              {
                label: "Exercises",
                to: "/docs/tags/exercise",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/201flaviosilva-labs/Documentum",
              },
              {
                label: "GitHub forum (discussions)",
                href: "https://github.com/201flaviosilva-labs/Documentum/discussions",
              },
              {
                label: "Issues",
                href: "https://github.com/201flaviosilva-labs/Documentum/issues",
              },
              {
                label: "Pull Requests",
                href: "https://github.com/201flaviosilva-labs/Documentum/pulls",
              },
            ],
          },
          {
            title: "Learn More",
            items: [
              {
                label: "Edgar Front-End",
                href: "https://github.com/ed1992alves/frontend",
              },
              {
                label: "W3schools",
                href: "https://www.w3schools.com/",
              },
              {
                label: "Mozilla",
                href: "https://developer.mozilla.org/en-US/",
              },
              {
                label: "Dev Docs",
                href: "https://devdocs.io/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["powershell"],
      },
    }),
};

module.exports = config;
