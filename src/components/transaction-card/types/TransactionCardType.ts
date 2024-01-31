import { Transaction } from "../../../mock-api/models/transaction/Transaction";

export interface TransactionCardType extends Transaction {
	id: number;
	logo: string;
	companyName: string;
	description?: string;
	transactionDate: Date;
	category: string;
	transactionAmount: string;
}
