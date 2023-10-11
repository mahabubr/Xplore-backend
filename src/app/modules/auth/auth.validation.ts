import { z } from "zod";

const createZodValidate = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }),
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Invalid email address" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, { message: "Must be 5 or more characters long" })
      .max(16, { message: "Must be 5 or fewer characters long" }),
    role: z.enum(["admin", "super_admin", "tourist"], {
      required_error: "Role not match",
    }),
    phone: z.string({ required_error: "Phone number is required" }),
    address: z.string({ required_error: "Address is required" }),
    image: z.string({ required_error: "Image number is required" }),
  }),
});

export const AuthValidator = {
  createZodValidate,
};
