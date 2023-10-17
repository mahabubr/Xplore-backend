import express from "express";
import { BlogController } from "./blog.controller";
import auth from "../../middleware/auth";
import { EAuthGuardRoles } from "../../../enums/AuthGuard";

const router = express.Router();

router.post(
  "/",
  auth(EAuthGuardRoles.SUPER_ADMIN, EAuthGuardRoles.ADMIN),
  BlogController.createBlog
);

router.get(
  "/",
  auth(EAuthGuardRoles.SUPER_ADMIN, EAuthGuardRoles.ADMIN),
  BlogController.getAllBlog
);

router.get(
  "/:id",
  auth(EAuthGuardRoles.SUPER_ADMIN, EAuthGuardRoles.ADMIN),
  BlogController.getSingleBlog
);

router.patch(
  "/:id",
  auth(EAuthGuardRoles.SUPER_ADMIN, EAuthGuardRoles.ADMIN),
  BlogController.createBlog
);

router.delete(
  "/:id",
  auth(EAuthGuardRoles.SUPER_ADMIN, EAuthGuardRoles.ADMIN),
  BlogController.createBlog
);

export const BlogRoutes = router;
