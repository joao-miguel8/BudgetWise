import type { TransactionCardType } from "./types/TransactionCardType";

function TransactionCard({ logo, name, date, filter, transactionAmount }: TransactionCardType) {
	return (
		<div className="py-2 px-4 flex justify-between items-center bg-white">
			{/* Logo img | Comp name | Transaction date */}
			<div className="flex flex-1 items-center">
				<img src={logo} alt={logo} className="w-8 h-8 rounded-full bg-green-200" />
				<div className="ml-4">
					<h5 className="text-16 font-medium text-[#121219]">{name}</h5>
					<span className="text-12 text-[#7777]">{date}</span>
				</div>
			</div>
			{/* Filter tag | Balance amount */}
			<div className="flex flex-1 items-center justify-between">
				<div className="flex items-center">
					<div className="flex justify-center item-center w-6 h-6 bg-orange-100 rounded-md">
						<span className="m-auto w-2 h-2 bg-orange-500 rounded-full"></span>
					</div>
					<span className="ml-2 text-12">{filter}</span>
				</div>
				{/* Balance amount */}
				<span className="ml-6 font-semibold text-green-500">{transactionAmount}</span>
			</div>
		</div>
	);
}

export default TransactionCard;
