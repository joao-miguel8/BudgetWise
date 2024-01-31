import DashboardHeader from "./DashboardHeader";
import DashboardNav from "./DashboardNav";
import TransactionCard from "@/components/transaction-card/TransactionCard";

function Dashboard() {
	return (
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
						<div className="w-9/12">
							<h3 className="text-20">Transactions</h3>
							{/* Transaction feed list  */}
							<div>
								<span className="my-4 inline-block text-[#515151]">25 March, 2023</span>
								{/* Transaction card  */}
								<TransactionCard id={0} logo={"img"} companyName={"Zara"} transactionDate={"25 March, 2023 at 7:15PM"} category={"Fashion"} transactionAmount={"+350,000"} />
							</div>
						</div>
						{/* container 02 */}
						<div className="w-1/2 bg-purple-300">2</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
