import { NextFunction, Request, Response } from "express";
import userModel from "../models/userModel";

// get single user by id
export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await userModel.findOne({ _id: id });
    if (!result) {
      return res.status(404).send({ msg: "No user found" });
    }
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
};

// update id based user privacy
export const updatePrivacy = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const { privacy } = req.body;
  try {
    const result = await userModel.findByIdAndUpdate(id, { privacy: privacy });
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
  }
};
