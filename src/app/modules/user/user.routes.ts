import express from "express";
import { UserController } from "./user.controller";
import auth from "../../middleware/auth";
import { EAuthGuardRoles } from "../../../enums/AuthGuard";

const router = express.Router();

router.get(
  "/profile",
  auth(
    EAuthGuardRoles.ADMIN,
    EAuthGuardRoles.SUPER_ADMIN,
    EAuthGuardRoles.TOURIST
  ),
  UserController.getUserProfile
);

export const UserRoutes = router;
