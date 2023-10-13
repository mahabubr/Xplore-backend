import { Request, Response } from "express";
import AsyncCatch from "../../../shared/AsyncCatch";
import { BookingServices } from "./booking.service";
import ProvideResponse from "../../../shared/ProviceResponse";
import httpStatus from "http-status";

const createBooking = AsyncCatch(async (req: Request, res: Response) => {
  const { ...bookingData } = req.body;

  const result = await BookingServices.createBooking(bookingData);

  ProvideResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking Added Successful",
    data: result,
  });
});

const deleteBooking = AsyncCatch(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await BookingServices.deleteBooking(id);

  ProvideResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking Deleted Successful",
    data: result,
  });
});

export const BookingController = {
  createBooking,
  deleteBooking,
};
