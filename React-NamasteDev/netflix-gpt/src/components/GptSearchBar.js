import React from "react";
import langConstants from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
	const langKey = useSelector((store) => store.config.lang);

	return (
		<div className="pt-[10%] flex justify-center">
			<form className="w-1/2 bg-black grid grid-cols-12">
				<input
					type="text"
					className="px-4 m-4 col-span-9"
					placeholder={langConstants[langKey].placeholder}
				/>
				<button className="py-2 px-4 m-4  bg-red-700 text-white rounded-lg col-span-3">
					{langConstants[langKey].search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
