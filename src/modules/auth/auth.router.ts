import { Request, Response, Router } from "express";
import { requireAuth } from "../../middlewares/requireAuth";
import { loginController } from "./auth.controller";

const router = Router();

router.post("/login", loginController);
router.post("/test", requireAuth, (req: Request, res: Response) => {
	return res.send("End reached");
});

export default router;
