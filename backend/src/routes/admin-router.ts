import { Router } from "express";

import { authAdmin } from "../middleware/admin-guard";
import decMiddleware from "../helper/decryptData";

import authService from "../controllers/admin/auth";
import commonValidation from "../validation/common-validation";

// Constants
const adminRouter = Router();
adminRouter.use(decMiddleware.DecryptedData);
adminRouter.use(authAdmin);

adminRouter.post("/change-password", authService.changePassword);
adminRouter.post("/logout", authService.logout);
adminRouter.post("/profile-update", authService.updateProfile);
adminRouter.get("/profile", authService.getProfile);


// Export default
export default adminRouter;
