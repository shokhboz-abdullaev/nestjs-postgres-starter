export interface MergableConfig<Handler = any> {
	token?: string;
	dependencies?: string[];
	handler?: () => Handler;
}
