import React from "react";
import ButtonList from "./ButtonList";
import VideoConatiner from "./VideoConatiner";

const MainContainer = () => {
	return (
		<div className="col-span-11">
			<ButtonList />
			<VideoConatiner />
		</div>
	);
};

export default MainContainer;
