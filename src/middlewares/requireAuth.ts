import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
export const requireAuth = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		return res.status(403).send("header does not exist");
	}
	const token = authHeader.split(" ")[1];
	console.log(token);

	if (!token) {
		return res.status(403).send("token does not exist");
	}
	jwt.verify(token, "secretKey", function (error, result) {
		if (error) {
			return res.status(403).json("jwt expired");
		}
		res.locals.payload = result;
		console.log("JWT auth passed!");
		return next();
	});
	// console.log(req.headers);
};
