import { Request, Response } from "express";
import AsyncCatch from "../../../shared/AsyncCatch";
import { ReviewsServices } from "./reviews.service";
import ProvideResponse from "../../../shared/ProviceResponse";
import httpStatus from "http-status";

const createReviews = AsyncCatch(async (req: Request, res: Response) => {
  const { ...reviewData } = req.body;

  const result = await ReviewsServices.createReviews(reviewData);

  ProvideResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review Post Successful",
    data: result,
  });
});

export const ReviewsController = {
  createReviews,
};
