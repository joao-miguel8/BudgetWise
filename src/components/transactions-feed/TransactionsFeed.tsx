import { getAllTransactions } from "@/mock-api/routes/transaction/getAllTransaction";
import TransactionCard from "../transaction-card/TransactionCard";
import { useState } from "react";

function TransactionsFeed() {
	// const getTransactions = getAllTransactions();
	// const [transactions, setTransactions] = useState(getTransactions);

	return (
		<div className="border-2 border-red-600">
			<div>
				<span className="my-4 inline-block text-[#515151]">25 March, 2023</span>
				{/* Transaction card  */}
				{/* {transactions.map(transaction => {
					return <TransactionCard transactionDetails={transaction} />;
				})} */}
			</div>
		</div>
	);
}

export default TransactionsFeed;
