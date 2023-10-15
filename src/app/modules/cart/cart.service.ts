import { Cart } from "@prisma/client";
import prisma from "../../instance/prisma";

const addToCart = async (payload: Cart) => {
  const result = await prisma.cart.createMany({
    data: payload,
  });

  return result;
};

const getAllCart = async (): Promise<Cart[]> => {
  const result = await prisma.cart.findMany({
    include: {
      service: true,
      user: true,
    },
  });

  return result;
};

export const CartServices = {
  addToCart,
  getAllCart,
};
