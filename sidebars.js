/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // https://docusaurus.io/docs/sidebar/autogenerated
  mySidebar: [
    "intro",
    { // Java
      type: "category",
      label: "Java",
      items: [
        {
          type: "autogenerated",
          dirName: "Java",
        },
      ]
    },
    { // Git
      type: "category",
      label: "Git",
      items: [
        {
          type: "autogenerated",
          dirName: "Git",
        },
      ]
    },
    { // HTML
      type: "category",
      label: "HTML",
      items: [
        {
          type: "autogenerated",
          dirName: "HTML",
        },
      ]
    },
    { // CSS
      type: "category",
      label: "CSS",
      items: [
        {
          type: "autogenerated",
          dirName: "CSS",
        },
      ]
    },
    { // JavaScript
      type: "category",
      label: "JavaScript",
      items: [
        {
          type: "autogenerated",
          dirName: "JavaScript",
        },
      ]
    },
    { // VS Code
      type: "category",
      label: "VS Code",
      items: [
        "VS-Code/intro",
        "VS-Code/My-Config",
      ]
    },
    { // React
      type: "category",
      label: "React",
      items: [
        "React/intro",
        "React/CreateTheFirstApp",
        "React/Key-Prop",
        {
          type: "category",
          label: "CSS in React",
          items: [
            "React/CSS-in-React/intro",
            "React/CSS-in-React/Global",
            "React/CSS-in-React/Inline",
            "React/CSS-in-React/Modules",
            "React/CSS-in-React/Quiz",
          ]
        },
      ]
    },
    { // ESLint
      type: "category",
      label: "ESLint",
      items: [
        "ESLint/intro",
        "ESLint/Installation-And-Configuration",
        "ESLint/See-The-Magic-Happening",
        "ESLint/Some-Example-Configs",
        "ESLint/Quiz",
      ]
    },
  ],
};

module.exports = sidebars;
