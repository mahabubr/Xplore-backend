import { Booking } from "@prisma/client";
import prisma from "../../instance/prisma";

const createBooking = async (payload: Booking): Promise<Booking> => {
  const result = await prisma.booking.create({
    data: payload,
  });

  return result;
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
};
