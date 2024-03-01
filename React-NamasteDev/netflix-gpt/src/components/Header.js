import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toogleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
	const navigate = useNavigate();
	const userSlice = useSelector((store) => store.user);
	const dispatch = useDispatch();
	const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

	const handleGptSearchClick = () => {
		dispatch(toogleGptSearchView());
	};

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

	const handleLanguageChange = (e) => {
		dispatch(changeLanguage(e.target.value));
	};

	return (
		<div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
			<img
				className="w-44"
				src={Logo}
				alt="logo"
			/>
			{userSlice && (
				<div className="flex p-2">
					{showGptSearch && (
						<select
							className="p-2 bg-gray-700 text-white m-2"
							onChange={handleLanguageChange}
						>
							{SUPPORTED_LANGUAGES.map((lang) => (
								<option
									key={lang.identifier}
									value={lang.identifier}
								>
									{lang.name}
								</option>
							))}
						</select>
					)}

					<button
						className="py-2 m-2 px-4 bg-violet-700 text-white rounded-lg"
						onClick={handleGptSearchClick}
					>
						{showGptSearch ? "Home" : "GPT Search"}
					</button>
					<img
						className="w-12 h-12"
						src={userSlice?.photoURL}
						alt="user logo"
					/>
					<button
						className="px-4  mx-4 my-2 rounded-lg bg-red-700 text-white  h-7 justify-center"
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
