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

router.get(
  "/",
  auth(EAuthGuardRoles.ADMIN, EAuthGuardRoles.SUPER_ADMIN),
  UserController.getAllUser
);

router.patch(
  "/",
  auth(
    EAuthGuardRoles.ADMIN,
    EAuthGuardRoles.SUPER_ADMIN,
    EAuthGuardRoles.TOURIST
  ),
  UserController.updateUser
);

router.patch(
  "/update-role/:id",
  auth(EAuthGuardRoles.ADMIN, EAuthGuardRoles.SUPER_ADMIN),
  UserController.updateRole
);

export const UserRoutes = router;
