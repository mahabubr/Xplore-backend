import { Review } from "@prisma/client";
import prisma from "../../instance/prisma";

const createReviews = async (payload: Review): Promise<Review> => {
  const result = await prisma.review.create({
    data: payload,
    include: {
      service: true,
      user: true,
    },
  });

  return result;
};

export const ReviewsServices = {
  createReviews,
};
