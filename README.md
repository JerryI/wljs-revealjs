# RevealJS Plugin
*An extension for [WLJS-Editor](https://github.com/JerryI/wljs-editor) that allows you to make slides and an entire presentation using Markdown, HTML, JS, Wolfram Language or WLX*

__Alpha preview__

*if you have __no idea about__ titles mentioned, __please visit [the official page](https://github.com/JerryI/wolfram-js-frontend)__ ;)*

The core library is [RevealJS](https://revealjs.com), that is running in Markdown mode.

## Making slides using Markdown

To create a slide type in a new cell

```markdown
.slide

# Title
Paragraph 1

---

# Second slide

Paragraph 2

<div style="color: red">with some HTML</div>
```

![](imgs/Screenshot%202023-09-01%20at%2018.40.15.png)

The output can be projected into a separate window for the convinience. 

## Merging slides from a different cells
To merge the all slides into a single fat presentation use

```markdown
.slides

```
It will merge and print slides from all cells in the notebook into a single one.

## Embed Wolfram Language
The real power comes, if you are using __[WLX addon](https://jerryi.github.io/wljs-docs/wlx)__, which is shipped as a separate plugin [wljs-wlx-support](https://github.com/JerryI/wljs-wlx-support) allowing you to write in WL language XML-like style

*first cell*
```mathematica
Figure = Plot[x, {x, 0, 1}];
```

*second cell*
```markdown
.slide

# Embedded Wolfram

<TextString><Now/></TextString>

Or even some graphics, like

<div style="text-align: center">
    <Figure/>
</div>
```

![](imgs/Screenshot%202023-09-01%20at%2018.41.08.png)

## Installation
Clone this repository to the `Packages` folder of the frontend. To locate it, use
```mathematica
FrontEndDirectory[]
``` 

or wait until the official release and it will be the part of core libraries of the frontend.

## License
Project is released under the GNU General Public License (GPL).
