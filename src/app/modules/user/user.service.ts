import { User } from "@prisma/client";
import { iAuthJWT } from "../../../types/userTypes";
import prisma from "../../instance/prisma";

const getUserProfile = async (user: any): Promise<User | null> => {
  const email = user.email;
  const result = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  return result;
};

export const userServices = {
  getUserProfile,
};
