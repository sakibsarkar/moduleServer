import { NextFunction, Request, Response } from "express";
import userModel from "../models/userModel";
import { generateOtp } from "../utils/gtOtp";
import sendMessage from "../utils/sendMessage";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;
  try {
    let otp = 0;
    const isExist = await userModel.findOne({ email: body.email });
    if (isExist) {
      return res.send({ msg: `user already exist in ${body.email}` });
    }

    otp = generateOtp();
    let isExistOtp = await userModel.findOne({ otp: otp });

    while (isExistOtp) {
      otp = generateOtp();
      isExistOtp = await userModel.findOne({ otp: otp });
    }
    sendMessage(
      "legendxpro123455@gmail.com",
      body.email,
      "varify Your OTP bruhh..",
      `<p>${otp}</p>`
    );
    const result = await userModel.create({ ...body, otp: otp });
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  const user = await userModel.findOne({ email: email });
  if (!user) {
    return res.send({ msg: `user not found for ${email}` });
  }

  res.send({ succes: true, token: "ai nao tomar token kaw ke dio na" });
};

export const verifyOTP = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { otp: reqOtp } = req.body;
  const otp = parseInt(reqOtp);
  try {
    const user = await userModel.findOne({ otp });
    if (!user) {
      return res.send({ msg: `Bro your opt is wrong, try again` });
    }

    const updateUser = await userModel.findOneAndUpdate(
      { email: user.email },
      {
        $set: {
          otp: "",
          isVarify: true,
        },
      }
    );

    res.send({ succes: true, token: "Damn man, you got the right otp" });
  } catch (err) {
    console.log(err);
  }
};
