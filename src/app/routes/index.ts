import express from "express";
import { AuthRoutes } from "../modules/auth/auth.routes";
import { ServicesRoutes } from "../modules/services/services.routes";
import { ReviewsRoutes } from "../modules/reviews/reviews.routes";
import { BookingRoutes } from "../modules/booking/booking.routes";

const router = express.Router();

const routes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/services",
    route: ServicesRoutes,
  },
  {
    path: "/ratting",
    route: ReviewsRoutes,
  },
  {
    path: "/booking",
    route: BookingRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
