import type { TransactionCardType } from "@/components/transaction-card/types/TransactionCardType";

export const transactionsData: TransactionCardType[] = [
	{
		id: 0,
		logo: "img",
		companyName: "Zara",
		description: "",
		transactionDate: new Date("2024-01-10T15:00:00Z"),
		category: "fashion",
		transactionAmount: 250_000,
	},
	{
		id: 1,
		logo: "img",
		companyName: "AMC",
		description: "",
		transactionDate: new Date("2024-01-10T12:00:00Z"),
		category: "entertainment",
		transactionAmount: 14_00,
	},
	{
		id: 0,
		logo: "img",
		companyName: "Planet Fitness",
		description: "",
		transactionDate: new Date("2024-01-12T12:00:00Z"),
		category: "Health",
		transactionAmount: 12_00,
	},
];
