import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";

function Header() {
	return (
		<header className="border-b-[0.5px] w-full fixed z-50 bg-white">
			<div className="py-2 px-4 flex justify-between">
				<button>
					<HiMenuAlt1 size={"1.6rem"} />
				</button>
				<button className="relative">
					<span className="p-[0.2rem] w-[0.1rem] h-[0.2px] absolute -top-[0.2rem] right-1 bg-red-500 rounded-full"></span>
					<IoMdNotificationsOutline size={"1.6rem"} />
				</button>
			</div>
		</header>
	);
}

export default Header;
