import { NextFunction, Request, Response } from "express";
import AsyncCatch from "../../../shared/AsyncCatch";
import ProvideResponse from "../../../shared/ProviceResponse";
import httpStatus from "http-status";
import { AuthService } from "./auth.service";

const SignUp = AsyncCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...userInfo } = req.body;

    const result = await AuthService.SignUp(userInfo);

    ProvideResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Congratulations!! Registration Successful",
      data: result,
    });
  }
);

export const AuthController = {
  SignUp,
};
