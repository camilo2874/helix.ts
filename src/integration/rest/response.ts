import type { Errorstack } from "../../errorstack";

/**
 * Response is the JSON object every HTTP responses of an helix service shall
 * return.
 */
export type Response<Metadata, Data> = {
	status: string;
	error?: Errorstack;
	metadata?: Metadata;
	data?: Data;
};
