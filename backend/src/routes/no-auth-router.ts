import { Router } from "express";
import decMiddleware from "../helper/decryptData";
import authAdminService from "../controllers/admin/auth";
import authValidation from "../validation/admin/auth-validation"
// Constants
const noAuthRouter = Router();
noAuthRouter.use(decMiddleware.DecryptedData);

noAuthRouter.post("/admin/login", authValidation.login, authAdminService.login);
noAuthRouter.post("/admin/forget-password", authValidation.emailValidation, authAdminService.forgetPassword);
noAuthRouter.post("/admin/reset-password", authValidation.resetPassword, authAdminService.resetPassword);

// Export default
export default noAuthRouter;
