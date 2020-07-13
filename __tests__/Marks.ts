import { MarksRenderer, Plugins } from "../src/Index";

describe("Test dom", () => {
  it("Should be empty", () => {
    const r = new MarksRenderer();
    r.registerRenderers(...Plugins.map(_ => new _()));

    const elt = r.render(``);
    expect(elt.outerHTML).toBe("<div><p></p></div>");
  });
})

describe("Emphasis", () => {
  it("Should render italic", () => {
    const r = new MarksRenderer();
    r.registerRenderers(...Plugins.map(_ => new _()));

    let elt = r.render(`This is *Italic*`);
    expect(elt.outerHTML).toBe("<div><p><span>This is <em>Italic</em></span></p></div>");

    elt = r.render(`This is _Italic_`);
    expect(elt.outerHTML).toBe("<div><p><span>This is <em>Italic</em></span></p></div>");
  });

  it("Should render bold", () => {
    const r = new MarksRenderer();
    r.registerRenderers(...Plugins.map(_ => new _()));

    let elt = r.render(`This is **Bold**`);
    expect(elt.outerHTML).toBe("<div><p><span>This is <b>Bold</b></span></p></div>");

    elt = r.render(`This is __Bold__`);
    expect(elt.outerHTML).toBe("<div><p><span>This is <b>Bold</b></span></p></div>");
  });

  it("Should render underline", () => {
    const r = new MarksRenderer();
    r.registerRenderers(...Plugins.map(_ => new _()));

    const elt = r.render(`This is ~underline~`);
    expect(elt.outerHTML).toBe(`<div><p><span>This is <span style="text-decoration: underline">underline</span></span></p></div>`);
  });

  it("Should render stroke", () => {
    const r = new MarksRenderer();
    r.registerRenderers(...Plugins.map(_ => new _()));

    const elt = r.render(`This is ~~stroke~~`);
    expect(elt.outerHTML).toBe(`<div><p><span>This is <span style="text-decoration: line-through">stroke</span></span></p></div>`);
  });

  it("Should render inline quote", () => {
    const r = new MarksRenderer();
    r.registerRenderers(...Plugins.map(_ => new _()));

    const elt = r.render(`This is \`inline quote\``);
    expect(elt.outerHTML).toBe(`<div><p><span>This is <code>inline quote</code></span></p></div>`);
  });

  it("Should render Bold & Italic", () => {
    const r = new MarksRenderer();
    r.registerRenderers(...Plugins.map(_ => new _()));
    const elt = r.render(`This is __*Bold & Italic*__`);
    expect(elt.outerHTML).toBe(`<div><p><span>This is <b><em>Bold &amp; Italic</em></b></span></p></div>`);
  });

  it("Should render multiline emphasis", () => {
    const r = new MarksRenderer();
    r.registerRenderers(...Plugins.map(_ => new _()));
    const elt = r.render(`This is *Italic*  
This is **Bold**  
This is ~underline~  
This is ~stroke~  
This is \`inline quote\``);
    expect(elt.outerHTML).toBe(`<div><p><span>This is <em>Italic</em>  <br>This is <b>Bold</b>  <br>This is <span style=\"text-decoration: underline\">underline</span>  <br>This is <span style=\"text-decoration: underline\">stroke</span>  <br>This is <code>inline quote</code></span></p></div>`);
  });
});

describe("Ordered lists", () => {
  const expectedSimpleList = "<div><p><ol><li>Item 1</li><li>Item 2</li><li>Item 3</li></ol></p></div>";
  const expectedNestedList = "<div><p><ol><li>Item 1</li><li>Item 2<ol><li>Item 2.1<ol><li>Item 2.1.1</li></ol></li><li>Item 2.2</li></ol></li><li>Item 3</li></ol></p></div>"

  it("Should render list starting with 1", () => {
    const r = new MarksRenderer();
    r.registerRenderers(...Plugins.map(_ => new _()));
    const elt = r.render(`1. Item 1
1. Item 2
1. Item 3`);
    expect(elt.outerHTML).toBe(expectedSimpleList);
  });

  it("Should render list starting with any number from 0 to 9", () => {
    const r = new MarksRenderer();
    r.registerRenderers(...Plugins.map(_ => new _()));
    const elt = r.render(`0. Item 1
8. Item 2
1. Item 3`);
    expect(elt.outerHTML).toBe(expectedSimpleList);
  });


  it("Should render nested list starting with 1", () => {
    const r = new MarksRenderer();
    r.registerRenderers(...Plugins.map(_ => new _()));
    const elt = r.render(`1. Item 1
1. Item 2
  1. Item 2.1
    1. Item 2.1.1
  1. Item 2.2
1. Item 3`);
    expect(elt.outerHTML).toBe(expectedNestedList);
  });

  it("Should render nested list starting with any number from 0 to 9", () => {
    const r = new MarksRenderer();
    r.registerRenderers(...Plugins.map(_ => new _()));
    const elt = r.render(`9. Item 1
1. Item 2
  8. Item 2.1
    2. Item 2.1.1
  6. Item 2.2
0. Item 3`);
    expect(elt.outerHTML).toBe(expectedNestedList);
  });
});