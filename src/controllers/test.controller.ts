import { NextFunction, Request, Response } from "express";

export const textController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send({ msg: "hey bro" });
};
