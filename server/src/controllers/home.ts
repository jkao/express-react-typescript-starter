import { Request, Response } from 'express';
import { Test } from '../shared/api/home/test';
import { BaseJson } from '../shared/base';

export const index = (req: Request, res: Response) => {
  const payload: BaseJson = new Test('testMessage').json;
  res.json({
     headers: req.headers,
     payload
  });
};