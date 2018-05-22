import { BaseJson } from '../shared/api/base';
import { Test } from '../shared/api/home/test';

import { Response, Request } from 'express';

export const index = (req: Request, res: Response) => {
  const payload: BaseJson = new Test('testMessage').json;
  res.json({
    payload,
    headers: req.headers,
  });
};
