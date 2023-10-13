import express from "express";
import { BookingController } from "./booking.controller";
import ZodValidate from "../../middleware/ZodValidate";
import { BookingValidation } from "./booking.validation";

const router = express.Router();

router.post(
  "/",
  ZodValidate(BookingValidation.createBookingValidation),
  BookingController.createBooking
);

router.delete("/:id", BookingController.deleteBooking);

export const BookingRoutes = router;
