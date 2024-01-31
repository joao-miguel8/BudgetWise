import { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardNav from "./DashboardNav";
import TransactionsFeed from "@/components/transactions-feed/TransactionsFeed";

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
							<TransactionsFeed />
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
