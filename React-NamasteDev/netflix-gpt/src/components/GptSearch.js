import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSugesstions from "./GptMovieSugesstions";
import { Background } from "../utils/constants";

const GptSearch = () => {
	return (
		<div>
			<div className="absolute -z-10">
				<img
					src={Background}
					alt="background"
				/>
			</div>
			<GptSearchBar />
			<GptMovieSugesstions />
		</div>
	);
};

export default GptSearch;
