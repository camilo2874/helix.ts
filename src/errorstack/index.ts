/**
 * Errorstack follows the helix.go errorstack package convention for handling
 * errors in the ecosystem.
 *
 * Every errors in helix follow this format.
 */
export type Errorstack = {
	readonly message: string;
	validations?: Validation[];
};

/**
 * Validation holds some details about a validation failure.
 */
export type Validation = {
	message: string;
	path?: string[];
};
