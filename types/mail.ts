export type Mail = {
	from?: string;
	to?: string;
	subject: string;
	html: string;
	text: string;
};

export type MailResponse = {
	accepted: string[];
	rejected: any[];
	ehlo: string[];
	envelopeTime: number;
	messageTime: number;
	messageSize: number;
	response: string;
	envelope: Envelope;
	messageId: string;
};

export interface Envelope {
	from: string;
	to: string[];
}
