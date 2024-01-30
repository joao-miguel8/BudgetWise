import classNames from "classnames";
import { IoMdNotificationsOutline } from "react-icons/io";

function DashboardHeader() {
	return (
		<header className="col-span-2 border-b-[0.5px] w-full z-40">
			<div className={classNames(`h-24 py-2 px-4 flex justify-between items-center`)}>
				<h2 className="text-20 font-medium">Hey Welcome, Bob Smith </h2>
				<button className="relative">
					<span className="p-[0.2rem] w-[0.1rem] h-[0.2px] absolute -top-[0.2rem] right-1 bg-red-500 rounded-full"></span>
					<IoMdNotificationsOutline size={"1.6rem"} />
				</button>
			</div>
		</header>
	);
}

export default DashboardHeader;
