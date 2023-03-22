---
title: CSS In React Quiz
tags:
  - Quiz
---

import Quiz from "@site/src/components/Quiz";

<Quiz
  questions={[
    {
      question: "Will Global CSS affect all components? (Even if you are a super grandson when importing the CSS file)?",
      options: ["Yes", "Nop"],
      answer: "Yes",
    },
    {
      question: "Can I use SCSS as Global CSS?",
      options: ["Yes", "Nop"],
      answer: "Yes",
    },
    {
      question: "Can I create external variables to define inline styles in React?",
      options: ["Yes", "Nop"],
      answer: "Yes",
    },
    {
      question: "In the DOM, is the inline style output of React and Vanilla JS the same?",
      options: ["Yes", "Nop"],
      answer: "Yes",
    },
    {
      question: "Why do we have to use `className` instead of `class` to define classes in components?",
      options: ["`className` it's more fancy", "`class` it's a JS keyword", "`className` makes more sense", "`class` means you need to study"],
      answer: "`class` it's a JS keyword",
    },
    {
      question: "With Global CSS how can I avoid component styles being affected 'globally'?",
      options: ["Not using CSS", "Creating a class for each component", "Not using React"],
      answer: "Creating a class for each component",
    },
    {
      question: "Can I use SCSS as Module CSS?",
      options: ["Yes", "Nop"],
      answer: "Yes",
    },
    {
      question: "What is the correct way to write CSS in React?",
      options: ["Global", "Inline", "Module", "There is no correct way"],
      answer: "There is no correct way",
    },
  ]}
/>
