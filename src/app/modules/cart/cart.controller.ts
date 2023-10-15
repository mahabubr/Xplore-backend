import httpStatus from "http-status";
import ProvideResponse from "../../../shared/ProviceResponse";
import { CartServices } from "./cart.service";
import AsyncCatch from "../../../shared/AsyncCatch";
import { Request, Response } from "express";

const addToCart = AsyncCatch(async (req: Request, res: Response) => {
  const cartData = req.body;

  const result = await CartServices.addToCart(cartData);

  ProvideResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cart Added Successful",
    data: result,
  });
});

export const CartController = {
  addToCart,
};
