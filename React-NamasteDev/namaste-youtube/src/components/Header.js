import React from "react";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../utils/appSlice";

const Header = () => {
	const dispatch = useDispatch();

	const toggleMenuHandler = () => {
		dispatch(toogleMenu());
	};

	return (
		<div className="grid grid-flow-col p-5 m-2 shadow-lg">
			<div className="flex col-span-1 cursor-pointer">
				<img
					onClick={toggleMenuHandler}
					className="h-11 w-10"
					alt="menu"
					src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
				/>
				<a href="/">
					<img
						className="h-14 w-14 mx-2"
						alt="logo"
						src="https://as1.ftcdn.net/v2/jpg/04/74/05/94/1000_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg"
					/>
				</a>
			</div>
			<div className="col-span-10 px-10">
				<input
					type="text"
					className="w-1/2 border border-gray-500 p-2 rounded-l-full "
				/>
				<button className="border border-gray-500 px-5 rounded-r-full py-2 bg-gray-100">🔍</button>
			</div>
			<div className="col-span-1">
				<img
					className="h-11 w-10"
					alt="user"
					src="https://cdn.iconscout.com/icon/free/png-256/free-user-1493-459372.png"
				/>
			</div>
		</div>
	);
};

export default Header;
