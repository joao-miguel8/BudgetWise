export interface Transaction {
	id: number;
	logo: string;
	companyName: string;
	transactionDate: Date;
	description?: string;
	category: string;
	transactionAmount: string;
}
