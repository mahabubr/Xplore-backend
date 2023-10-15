import express from "express";
import { ServicesController } from "./services.controller";
import auth from "../../middleware/auth";
import { EAuthGuardRoles } from "../../../enums/AuthGuard";

const router = express.Router();

router.post(
  "/",
  auth(EAuthGuardRoles.ADMIN, EAuthGuardRoles.SUPER_ADMIN),
  ServicesController.createService
);

router.get("/", ServicesController.getServices);

router.get("/:id", ServicesController.getSingleService);

router.patch("/:id", ServicesController.updateService);

router.delete("/:id", ServicesController.deleteService);

export const ServicesRoutes = router;
