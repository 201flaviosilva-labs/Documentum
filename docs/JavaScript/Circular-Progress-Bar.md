---
title: Circular Progress Bar
tags:
  - Exercise
---

import CircularProgressBar from "./Circular-Progress-Bar";
import Code from "@site/src/components/Code"
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";


<Tabs>
  <TabItem value="preview" label="Preview" default>
    <CircularProgressBar />
  </TabItem>

  <TabItem value="html" label="HTML">
    <Code language="html" title="index.html">
{`<div id="app">
  <div class="container-progress">
    <div id="outerProgress">
      <div class="inner-progress">
        <span id="progressValue">10%</span>
      </div>
    </div>
  </div>
  
  <label for="progressRange">
    <input type="range" id="progressRange" min="0" max="100" value="10" />
  </label>
</div>`}
    </Code>
  </TabItem>
</Tabs>

[Check more](https://jsfiddle.net/201flaviosilva/fd9Lzvs6/show)
