import { IRenderingEnine } from "../../Interfaces/IRenderingEngine";

export const waitAsync = (delay: number = 0) => new Promise(r => setTimeout(() => { r(); }, delay));


export function loadScript(url: string) {
  return new Promise(function(resolve) {
      const script = document.createElement('script');
      script.src = url;
      script.addEventListener('load', function() {
          resolve(true);
      });
      document.head.appendChild(script);
  });
};

export async function loadAssets(urls: string[]) {
  for (let i=0; i<urls.length; i++) {
    if (urls[i].endsWith(".js")) {
      await loadScript(urls[i]);
    }
    
    if (urls[i].endsWith(".css")) {
      const tagElement = document.createElement("link");
      tagElement.setAttribute("rel", "stylesheet");
      tagElement.setAttribute("href", urls[i]);
      document.head.appendChild(tagElement);
    }
  }
}

export function formatMinSpace(text: string): string {
  let space = text.length;
  const txt = text.split("\n");

  txt.forEach(_ => {
    const nbSpace = _.search(/\S/);
    if (nbSpace < space) space = nbSpace;
  });
  if (space < 0) space = 0
  
  return txt.map(_ => _.substring(space)).join("\n");
}

export function prepareNestedRef(r: IRenderingEnine) {
  const refRgx = /@@(\w+)@@/g; 
  if (refRgx.test(r.content)) {
    r.content = r.content.replace(refRgx, `<${r.options.refElt ?? "div"} data-mk-ref="true" id='$1'></${r.options.refElt ?? "div"}>`);
  }
}

export function processNestedRef(r: IRenderingEnine) {
  const refs = r.domContent!.querySelectorAll(`[data-mk-ref="true"]`);
  refs.forEach(d => {
    if (d.id in r.globalRefs) {
      d.appendChild(r.globalRefs[d.id]);
      delete r.globalRefs[d.id];
    } 
  });
}

export function prepareInternals(r: IRenderingEnine) {
  prepareNestedRef(r);
}

export function processRef(r: IRenderingEnine) {
  if (r.options.ref) {
    r.globalRefs[r.options.ref] = r.domContent;
    r.domContent = null;
  }
}

export function processInternals(r: IRenderingEnine, blocktype: string) {
  processNestedRef(r);
  applyStyle(r, blocktype);
  processRef(r);
}

export function applyStyle(r: IRenderingEnine, type: string) {
  if (r.options.theme) {
    if (r.themeStyles[type].theme[r.options.theme]) {
      r.domContent!.classList.add(r.themeStyles[type].theme[r.options.theme]);
    } else if(r.themeStyles.all.theme[r.options.theme]) {
      r.domContent!.classList.add(r.themeStyles.all.theme[r.options.theme]);
    }
  }

  if (r.options.variant) {
    const variants = r.options.variant.split(",");
    variants.forEach(v => {
      if (r.themeStyles[type]?.variant[v]) {
        r.domContent!.classList.add(r.themeStyles[type].variant[v]);
        return;
      }
      if (r.themeStyles.all?.variant[v]) {
        r.domContent!.classList.add(r.themeStyles.all.variant[v]);
        return;
      }
    });
  } 

  if (r.themeStyles?.[type]?.classes) {
    const classes = r.themeStyles[type].classes.split(",") as string[];
    classes.forEach(c => r.domContent!.classList.add(c));
  }

  if (r.options.classes) {
    const classes = r.options.classes.split(",");
    classes.forEach(c => r.domContent!.classList.add(c));
  }
}