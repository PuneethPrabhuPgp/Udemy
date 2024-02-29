import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
	const navigate = useNavigate();
	const userSlice = useSelector((store) => store.user);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigate("/");
			})
			.catch((error) => {
				navigate("/error");
			});
	};

	return (
		<div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
			<img
				className="w-44"
				src="
        https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
				alt="logo"
			/>
			{userSlice && (
				<div className="flex p-2">
					<img
						className="w-12 h-12"
						src={userSlice?.photoURL}
						alt="user logo"
					/>
					<button
						className="px-4 mx-4 my-2 rounded-lg bg-red-700 text-white text-sm h-7 justify-center"
						onClick={handleSignOut}
					>
						Sign Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
