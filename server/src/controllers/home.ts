import { Request, Response } from 'express';
import { Test } from '../api/home/test';
import { BaseJson } from '../api/base';

export const index = (req: Request, res: Response) => {
  const payload: BaseJson = new Test('testMessage').json;
  res.json({
     headers: req.headers,
     payload
  });
};