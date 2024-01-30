import classNames from "classnames";
import { IoMdNotificationsOutline } from "react-icons/io";

function DashboardHeader() {
	//w-full fixed top-0
	return (
		<header className="col-span-2 border-b-[0.5px] w-full z-40 bg-red-300">
			<div className={classNames(`py-2 px-4 flex justify-end`)}>
				<button className="relative">
					<span className="p-[0.2rem] w-[0.1rem] h-[0.2px] absolute -top-[0.2rem] right-1 bg-red-500 rounded-full"></span>
					<IoMdNotificationsOutline size={"1.6rem"} />
				</button>
			</div>
		</header>
	);
}

export default DashboardHeader;
