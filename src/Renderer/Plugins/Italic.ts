import { IRenderingEnine } from "../../Interfaces/IRenderingEngine" ;
import { TRenderingOption }              from "../../Interfaces/IRenderingOption" ;

export class ItalicRenderer implements IRenderingEnine {
  themeStyles      !: any                                                                         ;
  globalRefs        : any                                                                                  ;
  private _succeeded: boolean = false                                                                      ;
  public applyTo    : string[]           = ["HEAD", "TEXT", "TABLE", "LIST-O", "LIST-U", "CHECK", "BLOCK"] ;
  public options    : TRenderingOption   = {}                                                              ;
  public content    : string             = ""                                                              ;
  public domContent : HTMLElement | null = null                                                            ;
  public type       : string             = ""                                                              ;
  public weight      : number            = 100                                                             ;

  render(): string {
    let rgx = /\_{1}(.*?)\_{1}/;
    this._succeeded = rgx.test(this.content);
    if (this._succeeded) {
      return this.content.replace(rgx, "<em>$1</em>");
    }

    rgx = /\*{1}(.*?)\*{1}/;
    this._succeeded = rgx.test(this.content);
    if (this._succeeded) {
      return this.content.replace(rgx, "<em>$1</em>");
    }

    return this.content;
  }

  succeeded(): boolean {
    return this._succeeded;
  }

  canProcess(): boolean {
    if (this.type === "BLOCK") {
      return this.options.emp !== undefined ?? false;
    }

    return true;
  }

  set(type: string, content: string, options: TRenderingOption) {
    this.type    = type    ;
    this.content = content ;
    this.options = options ;
  }
}