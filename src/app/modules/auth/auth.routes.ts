import express from "express";
import { AuthController } from "./auth.controller";
import ZodValidate from "../../middleware/ZodValidate";
import { AuthValidator } from "./auth.validation";

const router = express.Router();

router.post(
  "/sign-up",
  ZodValidate(AuthValidator.createZodValidate),
  AuthController.signUp
);

router.post(
  "/sign-in",
  ZodValidate(AuthValidator.loginZodValidate),
  AuthController.login
);

router.post("/refresh-token", AuthController.refreshToken);

export const AuthRoutes = router;
