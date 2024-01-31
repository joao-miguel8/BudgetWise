export type TransactionCardType = {
	id: number;
	logo: string;
	companyName: string;
	description?: string;
	transactionDate: Date;
	category: string;
	transactionAmount: number;
};
