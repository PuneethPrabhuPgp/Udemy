import React, { useRef } from "react";
import langConstants from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openAi from "../utils/openAi";

const GptSearchBar = () => {
	const langKey = useSelector((store) => store.config.lang);
	const searchText = useRef(null);

	const handleGptSearchClick = async () => {
		// make an OpeAi api call and get moview results

		const gptQuery =
			"Act as a movie recommendation system and suggest some movie for the query:" +
			searchText.current.value +
			"only gives me names of 5 movies, comma seprated like the example result given ahead. Example result : Gadar, Don, Sholay, Bettab, Ek Parinda Tha";

		const gptResults = await openAi.chat.completions.create({
			messages: [{ role: "user", content: gptQuery }],
			model: "gpt-3.5-turbo",
		});
		console.log(gptResults.choices);
	};

	return (
		<div className="pt-[10%] flex justify-center">
			<form
				className="w-1/2 bg-black grid grid-cols-12"
				onSubmit={(e) => e.preventDefault()}
			>
				<input
					ref={searchText}
					type="text"
					className="px-4 m-4 col-span-9"
					placeholder={langConstants[langKey].placeholder}
				/>
				<button
					className="py-2 px-4 m-4  bg-red-700 text-white rounded-lg col-span-3"
					onClick={handleGptSearchClick}
				>
					{langConstants[langKey].search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
