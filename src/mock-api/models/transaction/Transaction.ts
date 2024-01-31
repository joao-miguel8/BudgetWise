export interface Transaction {
	id: number;
	logo: string;
	companyName: string;
	transactionDate: string;
	description?: string;
	category: string;
	transactionAmount: string;
}
