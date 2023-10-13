import { Services } from "@prisma/client";
import prisma from "../../instance/prisma";

const createService = async (payload: Services): Promise<Services> => {
  const result = await prisma.services.create({
    data: payload,
    include: {
      review: {
        include: {
          user: true,
        },
      },
    },
  });

  return result;
};

const getServices = async (): Promise<Services[]> => {
  const result = await prisma.services.findMany();

  return result;
};

const getSingleService = async (id: string): Promise<Services | null> => {
  const result = await prisma.services.findUnique({
    where: {
      id,
    },
    include: {
      review: {
        include: {
          user: true,
        },
      },
    },
  });

  return result;
};

const updateService = async (
  id: string,
  payload: Partial<Services>
): Promise<Services | null> => {
  const result = await prisma.services.update({
    where: { id },
    data: payload,
    include: {
      review: {
        include: {
          user: true,
        },
      },
    },
  });

  return result;
};

const deleteService = async (id: string): Promise<Services> => {
  const result = await prisma.services.delete({
    where: { id },
    include: {
      review: {
        include: {
          user: true,
        },
      },
    },
  });

  return result;
};

export const ServicesService = {
  createService,
  getServices,
  getSingleService,
  updateService,
  deleteService,
};
