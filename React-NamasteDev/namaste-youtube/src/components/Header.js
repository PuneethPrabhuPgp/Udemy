import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestion] = useState(false);
	const searchCache = useSelector((store) => store.search);
	const dispatch = useDispatch();

	useEffect(() => {
		//implementing debouncing
		// make an api call after every key press.
		// but if the difference /w two key press is less than 200 ms decline the api call

		const timer = setTimeout(() => {
			//implementing caching
			if (searchCache[searchQuery]) {
				setSuggestions(searchCache[searchQuery]);
			} else {
				getSearchSuggestions();
			}
		}, 200);
		return () => clearTimeout(timer);
	}, [searchQuery]);

	const getSearchSuggestions = async () => {
		console.log(searchQuery);
		const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
		const json = await data.json();
		setSuggestions(json[1]);
		dispatch(cacheResults({ [searchQuery]: json[1] }));
	};

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
				<div>
					<input
						type="text"
						className="w-1/2 border border-gray-500 p-2 rounded-l-full px-2"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						onFocus={() => setShowSuggestion(true)}
						onBlur={() => setShowSuggestion(false)}
					/>
					<button className="border border-gray-500 px-5 rounded-r-full py-2 bg-gray-100">
						🔍
					</button>
				</div>
				{showSuggestions && (
					<div className="fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg border border-gray-100">
						<ul>
							{suggestions.map((suggest) => (
								<li
									key={suggest}
									className="py-2 shadow-lg hover:bg-gray-300"
								>
									🔍 {suggest}
								</li>
							))}
						</ul>
					</div>
				)}
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
