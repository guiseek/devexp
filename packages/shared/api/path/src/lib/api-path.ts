import type { PathHandler } from './types/path-handler';
import type { Express } from 'express';

export function api<D>(app: Express, prefix = '') {
  return {
    get<P extends typeof prefix>(path: P, handler: PathHandler<P>): void {
      app.get([prefix, path].join('/'), handler);
    },

    post<P extends typeof prefix, B = D>(
      path: P,
      handler: PathHandler<P, B>
    ): void {
      app.post([prefix, path].join('/'), handler);
    },

    put<P extends typeof prefix, B = D>(
      path: P,
      handler: PathHandler<P, B>
    ): void {
      app.put([prefix, path].join('/'), handler);
    },

    patch<P extends typeof prefix, B = D>(
      path: P,
      handler: PathHandler<P, B>
    ): void {
      app.patch([prefix, path].join('/'), handler);
    },

    delete<P extends typeof prefix>(path: P, handler: PathHandler<P>): void {
      app.delete([prefix, path].join('/'), handler);
    },

    options<P extends typeof prefix, B = D>(
      path: P,
      handler: PathHandler<P, B>
    ): void {
      app.options([prefix, path].join('/'), handler);
    },

    all<P extends typeof prefix, B = D>(
      path: P,
      handlers: PathHandler<P, B>
    ): void {
      app.all([prefix, path].join('/'), handlers);
    },
  };
}
