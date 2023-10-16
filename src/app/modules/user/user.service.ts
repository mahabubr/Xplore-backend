import { Booking, User } from "@prisma/client";
import { iAuthJWT } from "../../../types/userTypes";
import prisma from "../../instance/prisma";
import {
  iGenericResponse,
  iPaginationOptions,
} from "../../../interfaces/common";
import { paginationHelpers } from "../../../handler/paginationHandler";

const getUserProfile = async (user: any): Promise<User | null> => {
  const email = user.email;
  const result = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  return result;
};

const getAllUser = async (
  pagOptions: iPaginationOptions
): Promise<iGenericResponse<User[]>> => {
  const { limit, page, skip } =
    paginationHelpers.calculatePagination(pagOptions);

  const result = await prisma.user.findMany({
    skip,
    take: limit,
    orderBy: {
      createdAt: "desc",
    },
  });

  const total = await prisma.user.count({});

  return {
    meta: {
      total,
      limit,
      page,
    },
    data: result,
  };
};

const updateUser = async (payload: Partial<User>, user: any): Promise<User> => {
  const { id } = user;

  const result = await prisma.user.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

export const userServices = {
  getUserProfile,
  updateUser,
  getAllUser,
};
