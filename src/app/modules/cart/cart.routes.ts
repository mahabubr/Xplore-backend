import express from "express";
import { CartController } from "./cart.controller";

const router = express.Router();

router.post("/", CartController.addToCart);

router.get("/", CartController.getAllCart);

export const CartRoutes = router;
