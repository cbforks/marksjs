#### Marks features
Marks is a markup language that aims to keep what is great with Markdown, but with 
simple addition that allows it to be extended in a very simpler way.

To be clear, Marks allow custom block definition with a universal declaration syntax, and adds the ability to use options with any line.

**_This page itself is rendered on the fly by the `Marks` rendering engine, after fetching the md file representing this page_**.
____ ::- variant:dashed

##### Feature comparaison

Here you will find a feature comparaison between Marks and Markdown, and then what makes **Marks** a better solution for static page rendering.

``` ::- ref:RMD
# Heading 1
## Heading 2
### Heading 3
```

``` ::- ref:RMK
# Heading 1
## Heading 2
### Heading 3
```

[marks ref:RRO]{{
# Heading 1
## Heading 2
### Heading 3
}}
____ ::- variant:dashed

##### Heading

To create a heading, add number signs `#` in front of a word or phrase. The number of number signs you use should correspond to the heading level, from 1 to 6

[table format:csv variant:bordered,headDark nested] {{
Markdown;Marks;Output
@@RMD@@ ; @@RMK@@ ; @@RRO@@
}}

``` ::- ref:RMD
Not supported
```

``` ::- ref:RMD2
Heading level 1
===============
Heading level 2
---------------
```

``` ::- ref:RMK
Heading 4
====
Heading 5
=====
Heading 6
======
```

[marks ref:RRO]{{
Heading 4
====
Heading 5
=====
Heading 6
======
}}

[marks ref:RRO]{{
Heading 4
====
Heading 5
=====
Heading 6
======
}}

##### Heading Alternate Syntax

Alternatively, on the line below the text, add any number of = from 1 to 6

[table format:csv variant:bordered,headDark nested] {{
Markdown;Marks;Output
@@RMD@@ ; @@RMK@@ ; @@RRO@@
@@RMD2@@ ; Not supported ; ---
}}

*Marks* keeps the same syntax as *Markdown* whenever ::- classes:bd-callout,bd-callout-info elt:div
it is possible. But you will see that you can do `more` than that.

``` ::- ref:RMD
I really like using Markdown.

I think I'll use it to format
all of my documents from now on.
```

``` ::- ref:RMK
I really like using Markdown.

I think I'll use it to format
all of my documents from now on.
```

[marks ref:RRO]{{
I really like using Markdown.

I think I'll use it to format 
all of my documents from now on.
}}

##### Paragraph

To create paragraphs, use a blank line to separate one or more lines of text.

[table format:csv variant:bordered,headDark nested] {{
Markdown;Marks;Output
@@RMD@@ ; @@RMK@@ ; @@RRO@@
}}

``` ::- ref:RMD
This is the first line.  
And this is the second line.
```

``` ::- ref:RMK
This is the first line.  
And this is the second line.
```

[marks ref:RRO]{{
This is the first line.   
And this is the second line.
}}

##### Line Breaks

To create a line break (&lt;br&gt;), end a line with two or more spaces, and then a line feed.

[table format:csv variant:bordered,headDark nested] {{
Markdown;Marks;Output
@@RMD@@ ; @@RMK@@ ; @@RRO@@
}}

##### Emphasis

You can provide some `Emphasis` to part of the text as describe in the following table.

[table format:csv variant:bordered,headDark separator:| emp] {{
type|Markdown|Marks|Output
`Italic`|\*Word\*|\*Word\*|*Word*
`Italic`|\_Word\_|\_Word\_|_Word_
`Bold`|\*\*Word\*\*|\*\*Word\*\*|**Word**
`Bold`|\_\_Word\_\_|\_\_Word\_\_|__Word__
`Strikethrough`|\~\~Word\~\~|\~\~Word\~\~|~~Word~~
`Underline`|---|\~Word\~|~Word~
`Combine`|\_\_\*Word\*\_\_|\_\_\*Word\*\_\_|__*Word*__
}}

When you escape a character , ::- classes:bd-callout,bd-callout-danger elt:div
it will be replace by the HTML equivalent.  
It means for example that `\\*` will be rendered as `\&#42;`.  
   
Be aware that using it in a csv table whose separator is a `;` will have side effect.

##### Blockquote

To create a blockquote, add a `>` in front of each line that are included in the blockquote.

- [x] Markdown ::- noBullet
- [x] Marks

```md
> This is a simple `Blockquote`
```

> This is a simple `Blockquote`

```md
> This is a *Multiline* Blockquote
> With nested syntax **support**
> And it is so cool `:-)`
```

> This is a *Multiline* Blockquote  
> With nested syntax **support**  
> And it is so cool `:-)`

____ ::- variant:dashed
##### Nested Blockquote

Blockquotes can be nested. Add a `>>` in front of the line you want to nest.

- [x] Markdown ::- noBullet
- [x] Marks

```md
> This is a simple `Blockquote`
>> With nested *one*
```

> This is a simple `Blockquote`
>> With nested *one*

____ ::- variant:dashed

##### Blockquotes with Other Elements
Since the `BlockQuote` element use a dedicated renderer, there is no limitation to directly add Marks's elements

- [x] Markdown ::- noBullet
- [x] Marks

```md
> #### The quarterly results look great!
>
> * Revenue was off the chart.
> * Profits were higher than ever.
>
>  *Everything* is going according to **plan**.
```

> #### The quarterly results look great!
>
> * Revenue was off the chart.
> * Profits were higher than ever.
>
>  *Everything* is going according to **plan**.

____ ::- variant:dashed

##### Lists
The lists work almost the same way as in Markdown, but in a simpler way.
An unordered list can only be defined by an asterisk `*`, and an ordered list by a number followed by a period.

``` ::- ref:RMK
* Item 1
* Item 2
* Item 3
```

[marks ref:RRO]{{
* Item 1
* Item 2
* Item 3
}}

``` ::- ref:RMK2
* Item 1
* Item 2
  * Item 2.1
    * Item 2.1.1
  * Item 2.2
* Item 3
```

[marks ref:RRO2]{{
* Item 1
* Item 2
  * Item 2.1
    * Item 2.1.1
  * Item 2.2
* Item 3
}}

###### Unordered lists

- [x] Markdown ::- noBullet
- [x] Marks

[table format:csv variant:bordered,headDark nested] {{
Marks;Output;Marks;Output
@@RMK@@ ; @@RRO@@ ; @@RMK2@@ ; @@RRO2@@
}}

``` ::- ref:RMK
1. Item 1
1. Item 2
1. Item 3
```

[marks ref:RRO]{{
1. Item 1
1. Item 2
1. Item 3
}}

``` ::- ref:RMK2
1. Item 1
8. Item 2
  0. Item 2.1
    6. Item 2.1.1
  3. Item 2.2
2. Item 3
```

[marks ref:RRO2]{{
1. Item 1
8. Item 2
  0. Item 2.1
    6. Item 2.1.1
  3. Item 2.2
2. Item 3
}}

###### Ordered lists

- [x] Markdown ::- noBullet
- [x] Marks

[table format:csv variant:bordered,headDark nested] {{
Marks;Output;Marks;Output
@@RMK@@ ; @@RRO@@ ; @@RMK2@@ ; @@RRO2@@
}}

```md ::- ref:RMD
*   This is the first list item.
*   Here's the second list item.

    > A blockquote would look great below the second list item.

*   And here's the third list item.
```

```md ::- ref:RMK2
> A blockquote would look great below the second list item. ::- ref:RMK <-- Defines the reference to be nested

*   This is the first list item. ::- nested <-- Defines the nested option for the list
*   Here's the second list item. @@RMK@@ <-- Defines the entrypoint for the RMK reference
*   And here's the third list item.
```


> A blockquote would look great below the second list item. ::- ref:RMK


 ::- classes:bd-callout,bd-callout-danger elt:div nested
**Marks** does not render `nested` list items with a recursive rendering for performance reasons. So it is not possible 
to directly embed advanced element in an `Item`.  
   
You can still nest elements by using the **Marks**`s corresponding option.  
So in markdown you can do this :  
   @@RMD@@   
In **Marks** you need to do that instead :  
  @@RMK2@@

*   This is the first list item. ::- nested
*   Here's the second list item. @@RMK@@
*   And here's the third list item.

____ ::- variant:dashed

###### Code Blocks
**Markdown** allows code block declaration by indenting with 4 spaces each line, or by defining a bloc starting and ending a line with `\`\`\`` 

 ::- classes:bd-callout,bd-callout-danger elt:div
 **Marks** is only compatible with the explicit block definition `\`\`\``.

So to define a bloc just do the following :
```
This is a bloc of code
```

You can add the language name in order to have some color syntax on the block  
`\`\`\`javascript`
```javascript
class Hello {
  sayHello() {
    return "Hello Kitty";
  }
}
```

`\`\`\`css`
```css
.cat {
  background-color #000000;
}
```
____ ::- variant:dashed

###### Images
You can insert images with the followinf syntax :
```
![Alt](Uri "Title")

```

![allo](https://lh3.googleusercontent.com/ogw/ADGmqu-044H6d-MJZedy-JTdyjnimsYJbqe38bUl5R1S=s48-c-mo "Title")

____ ::- variant:dashed

###### Code
To denote a word or phrase as code, enclose it in backticks '**`\``**'.
```md
Marks `Roxxxxx` !!
```
~Will output : ~  
Marks `Roxxxxx` !!

 ::- classes:bd-callout,bd-callout-danger elt:div nested
**Markdown** allows escaping the `backtick` by doubling it. **Marks** does not support this syntax. Instead, you can escape it with `\\` char.
```md
You can `escape it like that \` !`
```
You can `escape it like that \` !`

____ ::- variant:dashed


###### Horizontal Rules
To create a horizontal rule, use three or more underscores (___) on a line, wihtout any other character.

 ::- classes:bd-callout,bd-callout-danger elt:div nested
**Marks** does not allows `**\*\*\***` and `**---**` annotation style, to avoid having too many ways to do a simple declaration.

```md
___
```
___

###### Links
To create a link, enclose the link text in brackets follow it immediately with the URL in parentheses.

```md
What is the best search engine ? [Duck Duck Go](https://duckduckgo.com).
```
What is the best search engine ? [Duck Duck Go](https://duckduckgo.com).

____ ::- variant:dashed

#### Marks options system

Now that is where funny things will begin.  
**Marks** is able to let you specify some options per kind of block of text / components. Options can be extended per plugin, per theme.
We have 2 ways to set options in **Marks**.

The first way to set options is to add a specific separator at the end of the first line of a block. You need to add \``**::\- **`\`, so 4 characters : : - and a space.

Options will differ per themes / plugins, but 3 shared params exists to style components.

[table format:csv variant:small,bordered,headDark emp] {{
OptionName;OptionType;Effect
**theme**;`string`;*Used to apply a specific theme to a component*
}}

This is the default rendering of the table with Bootstrap theme
``` ::- ref:RMK
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | *centered*    |   $12 |
```
[marks ref:RMK2] {{
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | *centered*    |   $12 |
}}

[table format:csv variant:bordered nested] {{
Marks;rendered
@@RMK@@;@@RMK2@@
}}

And now the same with the dark theme applied
``` ::- ref:RMK
| Tables        | Are           | Cool  | ::- theme:dark
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | *centered*    |   $12 |
```
[marks ref:RMK2] {{
| Tables        | Are           | Cool  | ::- theme:dark
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | *centered*    |   $12 |
}}

[table format:csv variant:bordered nested] {{
Marks;rendered
@@RMK@@;@@RMK2@@
}}

[table format:csv variant:small,bordered,headDark emp] {{
OptionName;OptionType;Effect
**variant**;`string`;*Used to apply a specific variant to a component*
}}

This is the default rendering of the text with Bootstrap theme
``` ::- ref:RMK
Primary text

info text

Text with primary background

Text with info background
```
[marks ref:RMK2] {{
Primary text

info text

Text with primary background

Text with info background
}}

[table format:csv variant:bordered nested] {{
Marks;rendered
@@RMK@@;@@RMK2@@
}}

This is the rendering of the text with Bootstrap theme with variant option
``` ::- ref:RMK
Primary text ::- variant:primary

info text ::- variant:info

Text with primary background ::- variant:bgPrimary

Text with info background ::- variant:bginfo
```
[marks ref:RMK2] {{
Primary text ::- variant:primary

info text ::- variant:info

Text with primary background ::- variant:bgPrimary

Text with info background ::- variant:bginfo
}}

[table format:csv variant:bordered nested] {{
Marks;rendered
@@RMK@@;@@RMK2@@
}}

This is the rendering of the text with Bootstrap theme without align option

``` ::- ref:RMK
  Lorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's 
  standard dummy text ever since the 1500s, when an unknown
  printer took a galley of type and scrambled it to make a 
  type specimen book. It has survived not only five centuries, 
  but also the leap into electronic typesetting, 
  remaining essentially unchanged. 
```

[marks ref:RMK2] {{
  Lorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's 
  standard dummy text ever since the 1500s, when an unknown
  printer took a galley of type and scrambled it to make a 
  type specimen book. It has survived not only five centuries, 
  but also the leap into electronic typesetting, 
  remaining essentially unchanged. 
}}

[table format:csv variant:bordered nested] {{
Marks;rendered
@@RMK@@;@@RMK2@@
}}

Now the same with text justify

``` ::- ref:RMK
  ::- variant:justify elt:p
  Lorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's 
  standard dummy text ever since the 1500s, when an unknown
  printer took a galley of type and scrambled it to make a 
  type specimen book. It has survived not only five centuries, 
  but also the leap into electronic typesetting, 
  remaining essentially unchanged. 
```

[marks ref:RMK2] {{
  ::- variant:justify elt:p
  Lorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's 
  standard dummy text ever since the 1500s, when an unknown
  printer took a galley of type and scrambled it to make a 
  type specimen book. It has survived not only five centuries, 
  but also the leap into electronic typesetting, 
  remaining essentially unchanged. 
}}

[table format:csv variant:bordered nested] {{
Marks;rendered
@@RMK@@;@@RMK2@@
}}

___ ::- variant:dashed

Any kind of customization can be applied. From global ones to specific for a theme.

Global One sample.  
##### The task list

[marks ref:RMK] {{
```
- [ ] Todo
- [x] Done !!
```

___ ::- variant:dashed

- [ ] Todo
- [x] Done !!
}}

[marks ref:RMK2] {{
```
- [ ] Todo ::- noBullet
- [x] Done !!
```

___ ::- variant:dashed

- [ ] Todo ::- noBullet
- [x] Done !!
}}

[table format:csv variant:bordered nested] {{
Default;With option
@@RMK@@;@@RMK2@@
}}

A Bootstrap specific one.  
##### Image
``` ::- ref:RMK
[img] {{
  "alt"   : "Alt",
  "src"   : "/img/MyAvatar.png",
  "title" : "My avatar"
}}
```
[img ref:RMK2] {{
  "alt"   : "Alt",
  "src"   : "https://lh3.googleusercontent.com/ogw/ADGmqu-044H6d-MJZedy-JTdyjnimsYJbqe38bUl5R1S=s48-c-mo",
  "title" : "My avatar"
}}
``` ::- ref:RMK3
[img variant:circle] {{
  "alt"   : "Alt",
  "src"   : "/img/MyAvatar.png",
  "title" : "My avatar"
}}
```
[img variant:circle ref:RMK4] {{
  "alt"   : "Alt",
  "src"   : "https://lh3.googleusercontent.com/ogw/ADGmqu-044H6d-MJZedy-JTdyjnimsYJbqe38bUl5R1S=s48-c-mo",
  "title" : "My avatar"
}}

[table format:csv variant:bordered nested] {{
Definition;Rendered
@@RMK@@;@@RMK2@@
@@RMK3@@;@@RMK4@@
}}

____ ::- variant:dashed

##### The `ref` and the `nested`

If you want to nest something that cannot be in standard markdown, **Marks** let you use 2 great options.  
**`ref`** option will keep the component as a reference and will not render it.  
**`nested`** option will enable the possibility to replace placeholder **`ref`** with the real referenced component

For example, let`s show how to nest 2 tables declared with the **Markdown** syntax.

```
| Rows id       | A1            | A2    | 
| ------------- |:-------------:| -----:|
| Row 1         | AA-AA         | AA-AA |
```

```
| Rows id       | B1            | B2    | 
| ------------- |:-------------:| -----:|
| Row 1         | BB-BB         | BB-BB |
```

We want to nest the first one into the middle column of the last row of the second table. To do the magic, just put a ref on the first one, and nest it in the other.

```
| Rows id       | A1            | A2    | ::- ref:TAB_1
| ------------- |:-------------:| -----:|
| Row 1         | AA-AA         | AA-AA |
```

```
| Rows id       | B1            | B2    | ::- nested
| ------------- |:-------------:| -----:|
| Row 1         | @@TAB_1@@     | BB-BB |
```

~**_Et voilà_**~ (We added some variant style just to help visualize the result)

| Rows id       | A1            | A2    | ::- ref:TAB_1 variant:small,bordered theme:dark
| ------------- |:-------------:| -----:|
| Row 1         | AA-AA         | AA-AA |

| Rows id       | B1            | B2    | ::- nested width:500px variant:small,bordered
| ------------- |:-------------:| -----:|
| Row 1         | @@TAB_1@@     | BB-BB |

____ ::- variant:dashed

#### Marks component / plugin system

Here we go !!! **Marks**`s real power is in the way we extend the renderer. We love **Markdown** but we are always frustrated to see that stylizing even a little is painfull in **Marddown** and the way we have to use components is tricky and limited.

So **Marks** provides a **UNIQUE** component interface, so it is very easy to use and unlimited in possibility.  
To use a component, just add it with `this` syntax : 

```
[NAME OPTIONS] {{
  BODY
}}
```

And that's all. You can extends **Marks** the way you want, the way you need.

The following sample shows how to use the mermaid extention with **Marks**

```
[mermaid theme:forest] {{
sequenceDiagram
  par Alice to Bob
    Alice->>Bob: Go help John
  and Alice to John
    Alice->>John: I want this done today
    par John to Charlie
      John->>Charlie: Can we do this today?
    and John to Diana
      John->>Diana: Can you help us today?
    end
  end
}}
```

[mermaid theme:forest] {{
sequenceDiagram
  par Alice to Bob
    Alice->>Bob: Go help John
  and Alice to John
    Alice->>John: I want this done today
    par John to Charlie
      John->>Charlie: Can we do this today?
    and John to Diana
      John->>Diana: Can you help us today?
    end
  end
}}