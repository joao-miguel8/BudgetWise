import { transactionsData } from "@/lib/transactionData";
import { useState } from "react";
import TransactionCard from "../transaction-card/TransactionCard";

function TransactionsFeed() {
	const [transactions, setTransactions] = useState(transactionsData);

	return (
		<div>
			<div>
				<span className="my-4 inline-block text-[#515151]">25 March, 2023</span>
				{/* Transaction card  */}
				{transactions.map(transaction => {
					return <TransactionCard key={transaction.companyName} transactionDetails={transaction} />;
				})}
			</div>
		</div>
	);
}

export default TransactionsFeed;
