import { Request, Response } from "express";
import AsyncCatch from "../../../shared/AsyncCatch";
import { userServices } from "./user.service";
import ProvideResponse from "../../../shared/ProviceResponse";
import httpStatus from "http-status";
import pick from "../../../shared/pick";
import { userPaginationOptions } from "./user.constants";

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

const getAllUser = AsyncCatch(async (req: Request, res: Response) => {
  const pagOptions = pick(req.query, userPaginationOptions);

  const result = await userServices.getAllUser(pagOptions);

  ProvideResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All User Fetched Successful",
    meta: result.meta,
    data: result.data,
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
  getAllUser,
};
