import type { TransactionCardType } from "./types/TransactionCardType";

function TransactionCard({ transactionDetails }: { transactionDetails: TransactionCardType }) {
	const { companyName, category, transactionDate, transactionAmount } = transactionDetails;

	return (
		<div className="py-2 px-4 flex justify-between items-center bg-white">
			{/* Logo img | Comp name | Transaction date */}
			<div className="flex flex-1 items-center">
				<div>
					<h5 className="text-16 font-medium text-[#121219]">{companyName}</h5>
					<span className="text-12 text-[#7777]">{transactionDate.toDateString()}</span>
				</div>
			</div>
			{/* Filter tag | Balance amount */}
			<div className="flex flex-1 items-center justify-between">
				<div className="flex items-center">
					<div className="flex justify-center item-center w-6 h-6 bg-orange-100 rounded-md">
						<span className="m-auto w-2 h-2 bg-orange-500 rounded-full"></span>
					</div>
					<span className="ml-2 text-12">{category}</span>
				</div>
				{/* Balance amount */}
				<span className="ml-6 font-semibold text-green-500">{transactionAmount}</span>
			</div>
		</div>
	);
}

export default TransactionCard;
