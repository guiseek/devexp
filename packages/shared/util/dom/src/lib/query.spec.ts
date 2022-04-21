import { query, queryAll } from './query';


function wrapper<K extends keyof HTMLElementTagNameMap>(selectors: K[]) {
  let old: HTMLElement | null = null;

  while (selectors.length) {
    const selector = selectors.shift() as K;
    const element = document.createElement(selector);

    if (!old) {
      document.body.append(element)
    } else {
      old.append(element)
    }

    old = element
  }
}

describe('query', () => {
  let main: HTMLElement

  beforeEach(() => {
    main = document.createElement('main')
    document.body.appendChild(main)
  })

  it('should find a main element in the document body', () => {

    expect(query('main', document.body)).toBeInstanceOf(HTMLElement)
  });

  it('should find a main element in the document body', () => {
    wrapper(['main', 'p'])
    console.log(document.body.querySelector('main'));

    expect(query('main > p', document.body)).toBeInstanceOf(HTMLParagraphElement)
  });
});

describe('queryAll', () => {
  let main: HTMLElement

  beforeEach(() => {
    main = document.createElement('main')
    document.body.appendChild(main)
  })

  it('should find a main element in the document body', () => {
    expect(queryAll('main', document.body).item(0)).toStrictEqual(main)
  });
});
