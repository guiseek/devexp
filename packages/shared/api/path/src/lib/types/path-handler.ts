import type { Request, Response, RequestHandler } from 'express';
import { PathArgs } from './path-args';

export type PathHandler<P extends string, B = any> = (
  req: Request<PathArgs<P>, B>,
  res: Response<B>,
  ...next: RequestHandler<PathArgs<P>>[]
) => void;
