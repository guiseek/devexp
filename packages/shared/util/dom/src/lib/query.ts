import { CSSSelector, ElementByName } from './types';

export function query<K extends keyof HTMLElementTagNameMap>(
  selector: K | CSSSelector,
  parentElement?: HTMLElement
): ElementByName<K>;

export function query<K extends keyof HTMLElementTagNameMap>(
  selector: K | CSSSelector,
  parentElement = document.body
): ElementByName<K> | null {
  return parentElement.querySelector(selector);
}

export function queryAll<K extends keyof HTMLElementTagNameMap>(
  selector: K,
  parentElement?: HTMLElement
): NodeListOf<ElementByName<K>>;

export function queryAll<K extends keyof HTMLElementTagNameMap>(
  selector: K | CSSSelector,
  parentElement = document.body
): NodeListOf<ElementByName<K>> {
  return parentElement.querySelectorAll(selector);
}
