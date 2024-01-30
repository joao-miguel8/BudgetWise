import DashboardHeader from "./DashboardHeader";
import DashboardNav from "./DashboardNav";

function Dashboard() {
	return (
		<div className="h-screen">
			<div className="h-full grid grid-cols-4">
				{/* left aside menu container */}
				<DashboardNav />
				{/* Header and inner 2 columns content containers */}
				<div className="flex flex-col col-span-3">
					<DashboardHeader />
					<div className="flex flex-1">
						<div className="bg-green-300 w-1/2">1</div>
						<div className="w-1/2 bg-purple-300">2</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
