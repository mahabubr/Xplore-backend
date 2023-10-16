import { Booking } from "@prisma/client";
import prisma from "../../instance/prisma";
import {
  iGenericResponse,
  iPaginationOptions,
} from "../../../interfaces/common";
import { paginationHelpers } from "../../../handler/paginationHandler";

const createBooking = async (payload: Booking): Promise<Booking> => {
  const { serviceId, ...others }: any = payload;

  const result = serviceId.map(
    async (service: string) =>
      await prisma.booking.create({
        data: { ...others, serviceId: service },
      })
  );

  return result;
};

const getBooking = async (
  pagOptions: iPaginationOptions
): Promise<iGenericResponse<Booking[]>> => {
  const { limit, page, skip } =
    paginationHelpers.calculatePagination(pagOptions);

  const result = await prisma.booking.findMany({ skip, take: limit });

  const total = await prisma.booking.count();

  return {
    meta: {
      total,
      limit,
      page,
    },
    data: result,
  };
};

const getUserByBooking = async (
  pagOptions: iPaginationOptions,
  user: any
): Promise<iGenericResponse<Booking[]>> => {
  const { limit, page, skip } =
    paginationHelpers.calculatePagination(pagOptions);

  const result = await prisma.booking.findMany({
    where: {
      user: {
        id: user.id,
      },
    },
    skip,
    take: limit,
  });

  const total = await prisma.booking.count({
    where: {
      user: {
        id: user.id,
      },
    },
  });

  return {
    meta: {
      total,
      limit,
      page,
    },
    data: result,
  };
};

const deleteBooking = async (id: string): Promise<Booking> => {
  const result = await prisma.booking.delete({
    where: { id },
  });

  return result;
};

export const BookingServices = {
  createBooking,
  deleteBooking,
  getBooking,
  getUserByBooking,
};
