import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export async function loginController(req: Request, res: Response) {
	return res.send(
		jwt.sign({ secret: "payload" }, "secretKey", { expiresIn: "5s" })
	);
}
