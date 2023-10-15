import { Request, Response } from "express";
import AsyncCatch from "../../../shared/AsyncCatch";
import { userServices } from "./user.service";
import ProvideResponse from "../../../shared/ProviceResponse";
import httpStatus from "http-status";
import { iAuthJWT } from "../../../types/userTypes";

const getUserProfile = AsyncCatch(async (req: Request, res: Response) => {
  const user = req.user;

  const result = await userServices.getUserProfile(user);

  ProvideResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Profile Get Successful",
    data: result,
  });
});

export const UserController = {
  getUserProfile,
};
