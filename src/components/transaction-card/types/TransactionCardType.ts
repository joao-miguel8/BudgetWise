import { Transaction } from "../../../mock-api/models/transaction/Transaction";

export interface TransactionCardType extends Transaction {
	id: number;
	logo: string;
	companyName: string;
	description?: string;
	transactionDate: string;
	category: string;
	transactionAmount: string;
}
