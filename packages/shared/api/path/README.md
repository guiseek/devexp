# api-path

```ts
import { api } from './api-path';
import * as express from 'express';

const app = express();

const controller = api(app, 'api');

controller.get('users/:id', (req, res) => {
  req.params.id
})

```

---

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test shared-api-path` to execute the unit tests via [Jest](https://jestjs.io).

## Running lint

Run `nx lint shared-api-path` to execute the lint via [ESLint](https://eslint.org/).
