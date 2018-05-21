import { Request, Response } from 'express';
import Test from '../api/home/test';

export const index = (req: Request, res: Response) => {
  const payload: Test = new Test('testMessage');
  res.json({
     headers: req.headers,
     payload
  });
};