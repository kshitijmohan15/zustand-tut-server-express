import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectToDb = async () => {
	const dbUri = process.env.dbUri as string;
	try {
		await mongoose.connect(dbUri);
	} catch (error) {
		process.exit(1);
	}
};
