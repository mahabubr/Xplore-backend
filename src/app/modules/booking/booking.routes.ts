import express from "express";
import { BookingController } from "./booking.controller";

const router = express.Router();

router.post("/", BookingController.createBooking);

router.delete("/:id", BookingController.deleteBooking);

export const BookingRoutes = router;
