import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import DashboardHeader from "./DashboardHeader";
import DashboardNav from "./DashboardNav";
import TransactionsFeed from "@/components/transactions-feed/TransactionsFeed";
import AddTransactionModal from "@/components/add-transaction-modal/AddTransactionModal";

function Dashboard() {
	const [showAddTransactionModal, setShowAddTransactionModal] = useState(false);

	return (
		<>
			<div className="h-screen">
				<div className="h-full grid grid-cols-4">
					{/* Left aside menu container */}
					<DashboardNav />
					{/* Header and inner 2 columns content containers */}
					<div className="flex flex-col col-span-3">
						<DashboardHeader />
						{/* Left main container content (transactions) */}
						<div className="flex flex-1">
							{/* Transaction feed list container */}
							<div className="px-4 w-9/12">
								<div className="mt-4 flex items-center">
									<h3 className="text-20">Transactions</h3>
									<button onClick={() => setShowAddTransactionModal(true)} className="ml-2">
										<IoIosAddCircle size={"1.8rem"} color={"#21C55D"} />
									</button>
								</div>
								{/* Transaction feed list  */}
								<TransactionsFeed />
							</div>
							{/* container 02 */}
							<div className="w-1/2 bg-purple-300">2</div>
						</div>
					</div>
				</div>
			</div>

			<AddTransactionModal showAddTransactionModal={showAddTransactionModal} setShowAddTransactionModal={setShowAddTransactionModal} />
		</>
	);
}

export default Dashboard;
