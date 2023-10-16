import { Request, Response } from "express";
import AsyncCatch from "../../../shared/AsyncCatch";
import { userServices } from "./user.service";
import ProvideResponse from "../../../shared/ProviceResponse";
import httpStatus from "http-status";

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

const updateUser = AsyncCatch(async (req: Request, res: Response) => {
  const { ...userData } = req.body;
  const user = req.user;

  const result = await userServices.updateUser(userData, user);

  ProvideResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Profile Update Successful",
    data: result,
  });
});

export const UserController = {
  getUserProfile,
  updateUser,
};
