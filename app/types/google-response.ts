export type GoogleResponse = {
	success: boolean;
	challenge_ts: string;
	hostname: string;
	score: number;
	action: string;
	"error-codes": string[];
};
