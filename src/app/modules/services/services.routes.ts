import express from "express";
import { ServicesController } from "./services.controller";
import ZodValidate from "../../middleware/ZodValidate";
import { ServicesValidation } from "./services.validation";

const router = express.Router();

router.post(
  "/",
  ZodValidate(ServicesValidation.createServiceValidation),
  ServicesController.createService
);

router.get("/", ServicesController.getServices);

router.get("/:id", ServicesController.getSingleService);

router.patch(
  "/:id",
  ZodValidate(ServicesValidation.updateServiceValidation),
  ServicesController.updateService
);

router.delete("/:id", ServicesController.deleteService);

export const ServicesRoutes = router;
