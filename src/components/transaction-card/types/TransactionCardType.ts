import { Transaction } from "@/mock-api/models/transaction/transaction";

export interface TransactionCardType extends Transaction {
	logo: string;
	companyName: string;
	transactionDate: string;
	category: string;
	transactionAmount: string;
}
