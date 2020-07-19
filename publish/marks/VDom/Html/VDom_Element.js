"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _createNodeFromJson;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VDom_Element = void 0;
const Index_1 = require("../Parser/Index");
class VDom_Element {
    constructor(_doc, _tagName, target, textContent) {
        this._doc = _doc;
        this._tagName = _tagName;
        this.target = target;
        this.textContent = textContent;
        this.childNodes = [];
        this._classList = [];
        this._attributes = {};
        this._styles = {};
        this._style = "";
        this.classList = {
            add: (className) => {
                var _a;
                !this._classList.includes(className) && this._classList.push(className);
                (_a = this.dom) === null || _a === void 0 ? void 0 : _a.classList.add(className);
            },
            remove: (className) => {
                var _a;
                this._classList = this._classList.filter(_ => _ !== className);
                (_a = this.dom) === null || _a === void 0 ? void 0 : _a.classList.remove(className);
            },
            toggle: (className) => {
                var _a;
                this._classList.includes(className) ? this.classList.add(className) : this.classList.remove(className);
                (_a = this.dom) === null || _a === void 0 ? void 0 : _a.classList.toggle(className);
            }
        };
        _createNodeFromJson.set(this, (json, parentNode) => {
            if (json.nodeType === Index_1.NODE_TYPE.TEXT_NODE) {
                const elt = this._doc.createElement(json.tagName, json.textContent);
                return elt;
            }
            if (json.nodeType === Index_1.NODE_TYPE.ELEMENT_NODE) {
                const elt = this._doc.createElement(json.tagName);
                if (json.className) {
                    json.className
                        .split(" ")
                        .map(_ => _.trim())
                        .forEach(_ => {
                        elt.classList.add(_);
                    });
                }
                json.id && elt.setAttribute("id", json.id);
                if (json.attrs) {
                    for (const i in json.attrs) {
                        if (i === "class")
                            continue;
                        elt.setAttribute(i, json.attrs[i]);
                    }
                }
                json.childNodes.forEach(_ => {
                    var _a;
                    if (_.nodeType === Index_1.NODE_TYPE.TEXT_NODE && ((_a = _.textContent) === null || _a === void 0 ? void 0 : _a.trim().length) === 0)
                        return;
                    elt.appendChild(__classPrivateFieldGet(this, _createNodeFromJson).call(this, _));
                });
                return elt;
            }
            ;
        });
        this._tagName = this._tagName.toLocaleLowerCase();
        if (target === "Dom" && _tagName === "text") {
            this.dom = document.createElement("span");
            this.dom.innerHTML = textContent;
        }
        ;
        if (target === "Dom" && _tagName === "innerText") {
            this.dom = document.createTextNode(textContent);
        }
        ;
        target === "Dom" && _tagName !== "text" && _tagName !== "inenrText" && (this.dom = document.createElement(_tagName));
    }
    get id() {
        return this.getAttribute("id");
    }
    get childElementCount() {
        return this.childNodes.length;
    }
    get tagName() {
        return this._tagName;
    }
    getChildItem(index) {
        return this.childNodes[index];
    }
    prepend(element) {
        var _a;
        this.childNodes.unshift(element);
        (_a = this.dom) === null || _a === void 0 ? void 0 : _a.prepend(element.dom);
    }
    appendChild(element) {
        var _a;
        this.childNodes.push(element);
        (_a = this.dom) === null || _a === void 0 ? void 0 : _a.appendChild(element.dom);
    }
    setStyle(cssStyleName, value) {
        var _a;
        this._styles[cssStyleName] = String(value);
        let style = this._style;
        for (const i in this._styles) {
            style = `${style}${style.trim().length > 0 ? "; " : ""}${i}:${this._styles[i]}`;
        }
        this._attributes.style = style;
        (_a = this.dom) === null || _a === void 0 ? void 0 : _a.setAttribute("style", style);
    }
    setInnerHTML(html) {
        const htmlParser = new Index_1.HtmlParser();
        const jsonDom = htmlParser.parse(html);
        this.childNodes.length = 0;
        if (this.target === "Dom") {
            this.dom.innerHTML = "";
        }
        jsonDom.childNodes.forEach(_ => {
            var _a;
            if (_.nodeType === Index_1.NODE_TYPE.TEXT_NODE && ((_a = _.textContent) === null || _a === void 0 ? void 0 : _a.trim().length) === 0)
                return;
            this.appendChild(__classPrivateFieldGet(this, _createNodeFromJson).call(this, _));
        });
    }
    setInnerText(text) {
        if (this.target === "Dom") {
            this.dom.innerHTML = text;
        }
        this.textContent = text;
    }
    setAttribute(attName, value) {
        var _a;
        this._attributes[attName] = value;
        (_a = this.dom) === null || _a === void 0 ? void 0 : _a.setAttribute(attName, value);
        if (attName === "style") {
            this._style = value;
            this._styles = {};
        }
    }
    getAttribute(attName) {
        return this._attributes[attName];
    }
    removeAttribute(attName) {
        var _a;
        delete this._attributes[attName];
        (_a = this.dom) === null || _a === void 0 ? void 0 : _a.removeAttribute(this.target);
    }
    findFirst(predicate, deepLevel = -1) {
        const res = this.childNodes.filter(_ => predicate(_));
        if (res.length) {
            return res[0];
        }
        if (deepLevel > 0 || deepLevel < 0) {
            for (const elt of this.childNodes) {
                const resChild = elt.findFirst(predicate, deepLevel - 1);
                if (resChild)
                    return resChild;
            }
        }
        return null;
    }
    findAll(predicate, deepLevel = -1) {
        const res = this.childNodes.filter(_ => predicate(_));
        if (deepLevel > 0 || deepLevel < 0) {
            for (const elt of this.childNodes) {
                const resChild = elt.findAll(predicate, deepLevel - 1);
                if (resChild) {
                    res.push(...resChild);
                }
            }
        }
        return res.length ? res : null;
    }
    addEventListener(eventName, handler) {
        var _a;
        (_a = this.dom) === null || _a === void 0 ? void 0 : _a.addEventListener(eventName, handler);
    }
    toDom() {
        var _a;
        return (_a = this.dom) !== null && _a !== void 0 ? _a : null;
    }
    toHtml(indentLevel = 0) {
        if (this.tagName === "text" && this.textContent)
            return `<span>${this.textContent}</span>`;
        if (this.tagName === "br")
            return "<br>";
        if (this.tagName === "hr")
            return "<hr>";
        let attrs = "";
        for (const i in this._attributes) {
            attrs += ` ${i}=${JSON.stringify(this._attributes[i])}`;
        }
        const classes = this._classList.join(" ");
        const children = this.childNodes.map(_ => _.toHtml(indentLevel !== -1 ? indentLevel + 2 : -1)).join(indentLevel !== -1 ? "\n" : "");
        const tagName = this._tagName;
        let prepareEndInlineTag = "";
        if (this.childNodes.length === 0)
            prepareEndInlineTag = `</${tagName}>`;
        if (["input", "img"].includes(tagName))
            prepareEndInlineTag = "";
        const html = [];
        html.push(`${"".padStart(indentLevel, " ")}<${tagName}${classes.length ? ` class="${classes}"` : ""}${attrs}>${prepareEndInlineTag}`);
        this.textContent && html.push(this.textContent);
        this.childNodes.length && html.push(children);
        this.childNodes.length && (html.push(`${"".padStart(indentLevel, " ")}</${tagName}>`));
        return html.join(indentLevel !== -1 ? "\n" : "");
    }
}
exports.VDom_Element = VDom_Element;
_createNodeFromJson = new WeakMap();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVkRvbV9FbGVtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL1ZEb20vSHRtbC9WRG9tX0VsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUErRDtBQUkvRCxNQUFhLFlBQVk7SUFnQnZCLFlBQW9CLElBQWMsRUFBVSxRQUFnQixFQUFVLE1BQXNCLEVBQVUsV0FBb0I7UUFBdEcsU0FBSSxHQUFKLElBQUksQ0FBVTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFTO1FBZGxILGVBQVUsR0FBdUIsRUFBRSxDQUFZO1FBQy9DLGVBQVUsR0FBZ0IsRUFBRSxDQUFtQjtRQUMvQyxnQkFBVyxHQUE2QixFQUFFLENBQUs7UUFDL0MsWUFBTyxHQUFvQyxFQUFFLENBQUU7UUFDL0MsV0FBTSxHQUFrQixFQUFFLENBQXFCO1FBa0R2RCxjQUFTLEdBQUc7WUFDVixHQUFHLEVBQU0sQ0FBQyxTQUFpQixFQUFFLEVBQUU7O2dCQUM3QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN4RSxNQUFBLElBQUksQ0FBQyxHQUFHLDBDQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFO1lBQ3JDLENBQUM7WUFDRCxNQUFNLEVBQUcsQ0FBQyxTQUFpQixFQUFFLEVBQUU7O2dCQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDO2dCQUMvRCxNQUFBLElBQUksQ0FBQyxHQUFHLDBDQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ3hDLENBQUM7WUFDRCxNQUFNLEVBQUcsQ0FBQyxTQUFpQixFQUFFLEVBQUU7O2dCQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2RyxNQUFBLElBQUksQ0FBQyxHQUFHLDBDQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ3hDLENBQUM7U0FDRixDQUFBO1FBRUQsOEJBQXNCLENBQUMsSUFBVSxFQUFFLFVBQXlCLEVBQUUsRUFBRTtZQUM5RCxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssaUJBQVMsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3pDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNwRSxPQUFPLEdBQUcsQ0FBQzthQUNaO1lBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLGlCQUFTLENBQUMsWUFBWSxFQUFFO2dCQUM1QyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLFNBQVM7eUJBQ2IsS0FBSyxDQUFDLEdBQUcsQ0FBQzt5QkFDVixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7eUJBQ2xCLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDWCxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsQ0FBQyxDQUFDLENBQUE7aUJBQ0g7Z0JBRUQsSUFBSSxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBRTNDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDZCxLQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7d0JBQ3pCLElBQUksQ0FBQyxLQUFLLE9BQU87NEJBQUUsU0FBUzt3QkFDNUIsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNwQztpQkFDRjtnQkFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTs7b0JBQzFCLElBQUksQ0FBQyxDQUFDLFFBQVEsS0FBSyxpQkFBUyxDQUFDLFNBQVMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLDBDQUFFLElBQUksR0FBRyxNQUFNLE1BQUssQ0FBQzt3QkFBRSxPQUFPO29CQUNyRixHQUFHLENBQUMsV0FBVyxDQUFDLHVEQUFBLElBQUksRUFBcUIsQ0FBQyxDQUFFLENBQUMsQ0FBQztnQkFDaEQsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsT0FBTyxHQUFHLENBQUM7YUFDWjtZQUFBLENBQUM7UUFDSixDQUFDLEVBQUE7UUF2RkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDbEQsSUFBSSxNQUFNLEtBQUssS0FBSyxJQUFJLFFBQVEsS0FBSyxNQUFNLEVBQUU7WUFDM0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBMkIsQ0FBQztZQUNwRSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxXQUFZLENBQUM7U0FDbkM7UUFBQSxDQUFDO1FBQ0YsSUFBSSxNQUFNLEtBQUssS0FBSyxJQUFJLFFBQVEsS0FBSyxXQUFXLEVBQUU7WUFDaEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVksQ0FBdUIsQ0FBQztTQUN4RTtRQUFBLENBQUM7UUFDRixNQUFNLEtBQUssS0FBSyxJQUFJLFFBQVEsS0FBSyxNQUFNLElBQUksUUFBUSxLQUFLLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3ZILENBQUM7SUFsQkQsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO0lBQ2hDLENBQUM7SUFjRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFhO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQXNCOztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxNQUFBLElBQUksQ0FBQyxHQUFHLDBDQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBSSxFQUFFO0lBQ2xDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7O1FBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLE1BQUEsSUFBSSxDQUFDLEdBQUcsMENBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFJLEVBQUU7SUFDdEMsQ0FBQztJQUVELFFBQVEsQ0FBQyxZQUFvQixFQUFFLEtBQVU7O1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDeEIsS0FBSSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzNCLEtBQUssR0FBRyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUNqRjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUMvQixNQUFBLElBQUksQ0FBQyxHQUFHLDBDQUFFLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFO0lBQ3pDLENBQUM7SUFvREQsWUFBWSxDQUFDLElBQVk7UUFDdkIsTUFBTSxVQUFVLEdBQUcsSUFBSSxrQkFBVSxFQUFFLENBQVE7UUFDM0MsTUFBTSxPQUFPLEdBQU0sVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBRTtRQUUzQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTtZQUN6QixJQUFJLENBQUMsR0FBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7U0FDMUI7UUFFRCxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTs7WUFDN0IsSUFBSSxDQUFDLENBQUMsUUFBUSxLQUFLLGlCQUFTLENBQUMsU0FBUyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsMENBQUUsSUFBSSxHQUFHLE1BQU0sTUFBSyxDQUFDO2dCQUFFLE9BQU87WUFDckYsSUFBSSxDQUFDLFdBQVcsQ0FBQyx1REFBQSxJQUFJLEVBQXFCLENBQUMsQ0FBRSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQVk7UUFDdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTtZQUN6QixJQUFJLENBQUMsR0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsWUFBWSxDQUFDLE9BQWUsRUFBRSxLQUFhOztRQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsQyxNQUFBLElBQUksQ0FBQyxHQUFHLDBDQUFFLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFO1FBQ3ZDLElBQUksT0FBTyxLQUFLLE9BQU8sRUFBRTtZQUN2QixJQUFJLENBQUMsTUFBTSxHQUFJLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUNuQjtJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsT0FBZTtRQUMxQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGVBQWUsQ0FBQyxPQUFlOztRQUM3QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsTUFBQSxJQUFJLENBQUMsR0FBRywwQ0FBRSxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtJQUN6QyxDQUFDO0lBRUQsU0FBUyxDQUFDLFNBQTBDLEVBQUUsWUFBb0IsQ0FBQyxDQUFDO1FBQzFFLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ2QsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDZjtRQUVELElBQUksU0FBUyxHQUFHLENBQUMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLEtBQUksTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDaEMsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6RCxJQUFJLFFBQVE7b0JBQUUsT0FBTyxRQUFRLENBQUM7YUFDL0I7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELE9BQU8sQ0FBQyxTQUEwQyxFQUFFLFlBQW9CLENBQUMsQ0FBQztRQUN4RSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXRELElBQUksU0FBUyxHQUFHLENBQUMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLEtBQUksTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDaEMsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxJQUFJLFFBQVEsRUFBRTtvQkFDWixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7aUJBQ3ZCO2FBQ0Y7U0FDRjtRQUVELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVELGdCQUFnQixDQUFDLFNBQWlCLEVBQUUsT0FBaUM7O1FBQ25FLE1BQUEsSUFBSSxDQUFDLEdBQUcsMENBQUUsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRTtJQUNqRCxDQUFDO0lBRUQsS0FBSzs7UUFDSCxhQUFPLElBQUksQ0FBQyxHQUFHLG1DQUFJLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsTUFBTSxDQUFDLGNBQXNCLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU8sU0FBUyxJQUFJLENBQUMsV0FBVyxTQUFTLENBQUM7UUFDM0YsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUk7WUFBRSxPQUFPLE1BQU0sQ0FBQztRQUN6QyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSTtZQUFFLE9BQU8sTUFBTSxDQUFDO1FBRXpDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLEtBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUMvQixLQUFLLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUN6RDtRQUNELE1BQU0sT0FBTyxHQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BJLE1BQU0sT0FBTyxHQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFL0IsSUFBSSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsbUJBQW1CLEdBQUcsS0FBSyxPQUFPLEdBQUcsQ0FBQztRQUN4RSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFBRSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7UUFFakUsTUFBTSxJQUFJLEdBQUcsRUFBYyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEtBQUssSUFBSSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7UUFDdEksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxLQUFLLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUV2RixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRjtBQWxORCxvQ0FrTkMifQ==