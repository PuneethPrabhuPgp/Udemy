import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo } from "../utils/constants";

const Header = () => {
	const navigate = useNavigate();
	const userSlice = useSelector((store) => store.user);
	const dispatch = useDispatch();

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				navigate("/error");
			});
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user;
				dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
				navigate("/browse");
			} else {
				dispatch(removeUser());
				navigate("/");
			}
		});

		// unsubscribe when the component unmount
		return () => unSubscribe();
	}, []);

	return (
		<div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
			<img
				className="w-44"
				src={Logo}
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
