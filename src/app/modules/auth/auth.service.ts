import { User } from "@prisma/client";
import prisma from "../../instance/prisma";

const SignUp = async (payload: User): Promise<User> => {
  const result = await prisma.user.create({
    data: payload,
  });
  return result;
};

export const AuthService = { SignUp };
