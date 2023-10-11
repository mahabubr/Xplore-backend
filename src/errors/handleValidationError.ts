import { iGenericErrorResponse } from "../interfaces/common";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";

const handleValidationError = (
  error: PrismaClientValidationError
): iGenericErrorResponse => {
  const errors = [
    {
      path: "",
      message: error.message,
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: "Validation Error",
    errorMessages: errors,
  };
};

export default handleValidationError;
