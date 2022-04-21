export type CSSIDSelector = `#${string}` | `${string}#${string}`;
export type CSSClassSelector = `.${string}` | `${string}.${string}`;
export type CSSChildSelector = `>${string}` | `${string}>${string}`;
export type CSSAttributeSelector = `[${string}]`;
export type CSSSelector =
  | CSSIDSelector
  | CSSClassSelector
  | CSSChildSelector
  | CSSAttributeSelector;

export type ElementByName<K extends keyof HTMLElementTagNameMap> =
  K extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[K]
    : HTMLElement;
