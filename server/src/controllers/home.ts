import { Text } from '../shared/api/home/text';
import { TextList } from '../shared/api/home/text-list';
import { logger } from '../shared/logging/logger';

import { Response, Request } from 'express';

export const index = (req: Request, res: Response) => {
  res.json({ headers: req.headers });
};

const inMemoryDB: Text[] = []; // NOTE(jeffk): use an actual DB

export const createText = (req: Request, res: Response) => {
  logger.debug(req.body);
  const text = new Text(req.body.message);
  inMemoryDB.push(text);
  res.json(new TextList(inMemoryDB).json);
};

export const listTexts = (req: Request, res: Response) => {
  logger.debug(req.body);
  res.json(new TextList(inMemoryDB).json);
};
