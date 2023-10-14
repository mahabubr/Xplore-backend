import express from "express";
import { ServicesController } from "./services.controller";

const router = express.Router();

router.post("/", ServicesController.createService);

router.get("/", ServicesController.getServices);

router.get("/:id", ServicesController.getSingleService);

router.patch("/:id", ServicesController.updateService);

router.delete("/:id", ServicesController.deleteService);

export const ServicesRoutes = router;
