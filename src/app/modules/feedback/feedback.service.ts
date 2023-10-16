import { Feedback } from "@prisma/client";
import prisma from "../../instance/prisma";

const createFeedback = async (
  payload: Feedback,
  user: any
): Promise<Feedback> => {
  const result = await prisma.feedback.create({
    data: { ...payload, userId: user.id },
  });

  return result;
};

export const FeedbackServices = {
  createFeedback,
};
