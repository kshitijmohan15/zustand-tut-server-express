import pino from "pino";
import dayjs from "dayjs";
import dotenv from "dotenv";

dotenv.config();
const level = "info";
export const logger = pino({
	transport: {
		target: "pino-pretty",
	},
	level,
	base: {
		pid: false,
	},
	timestamp: () => `,"time":"${dayjs().format()}"`,
});
