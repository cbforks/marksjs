import { TRenderingOption }   from "../Interfaces/IRenderingOption" ;
import { RendererRepository } from "../Renderer/RendererRepository" ;
import { IModel }             from "./IModel"                       ;

export type TModel  = BaseModel & IModel;

export class BaseModel {
  source      : string             = ""   ;
  cleanSource : string             = ""   ;
  output      : string             = ""   ;
  domElement  : HTMLElement | null = null ;
  options     : TRenderingOption   = {}   ;
  processed   : number             = 0    ;
  dirty       : boolean            = false;

  constructor(private _RendererRepository: RendererRepository) {}

  reset() {
    this.cleanSource = "" ;
    this.output      = "" ;
    this.options     = {} ;
    this.processed   = 0  ;
    this.parse();
  }

  process() {
    this.domElement = document.createElement(this.options.pElt ?? "p");
    const renderers = this._RendererRepository.getByType((this as unknown as IModel).type, this.get()).sort((a, b) => b.weight - a.weight);
    renderers.forEach((_, idx) => {
     if (idx === 0) {
        this.output = _.render();
        if (_.domContent) {
          this.domElement?.appendChild(_.domContent);
          _.domContent = null;
        }
        this.processed++;
      } else {
        _.set((this as unknown as IModel).type, this.output, this.options);
        if (_.canProcess()) {
          this.output = _.render();
          if (_.domContent) {
            this.domElement?.appendChild(_.domContent);
            _.domContent = null;
          }
          this.processed++;
        }
      }
      do {
        _.set((this as unknown as IModel).type, this.output, this.options);
        if (_.succeeded()) {
          this.output = _.render();
          if (_.domContent) {
            this.domElement?.appendChild(_.domContent);
            _.domContent = null;
          }
          this.processed++;
        }
      } while(_.succeeded())
    });
    if (this.domElement.childElementCount === 0) {
      this.domElement = null;
    }
    if (this.domElement?.childElementCount === 1) {
      if (this.options.noPElt) {
        this.domElement = this.domElement.children.item(0) as HTMLElement;
      } else {
        switch(this.domElement.children.item(0)?.tagName.toLowerCase()) {
          case "br":
          case "p":
          case "hr":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            this.domElement = this.domElement.children.item(0) as HTMLElement;
            break;
        }
      }
    }
  }

  append(value: {text: string}): void {}

  parse(): void { 
    this.cleanSource = this.source; 
  }

  parseOptions(opts: string) {
    const _options = opts.split(" ").filter((_,i) => i === 0 || _.length > 0);
    if (!_options[0].includes(":")) {
      this.options.name = _options.shift() as string;
    }
    _options.forEach(opt => {
      const elt = opt.split(":");
      this.options[elt[0]] = elt.length === 2 ? elt[1] : "true";
    });
  }

  get() {
    return {
      type    : (this as unknown as IModel).type,
      content : this.cleanSource,
      options : this.options
    };
  }
}