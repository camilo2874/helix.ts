/**
 * Subscription holds the details about the account/customer from which the event
 * has been triggered. It's useful for tracking customer usages.
 */
export type Subscription = {
	id?: string;
	tenant_id?: string;
	customer_id?: string;
	product_id?: string;
	price_id?: string;
	usage?: string;
	increment_by?: number;
	metadata?: Record<string, string>;
};
