import React from "react";

const VideoTitle = ({ title, overview }) => {
	return (
		<div className="w-screen aspect-video  pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
			<h1 className="text-6xl font-bold">{title}</h1>
			<p className="py-6 text-lg w-1/4">{overview}</p>
			<div>
				<button className="bg-white text-black p-4 px-16 text-xl text-center rounded-lg hover:bg-opacity-80">
					▶ Play
				</button>
				<button className="bg-gray-500 mx-4 text-white p-4 px-16 text-xl text-center opacity-2 rounded-lg">
					ℹ More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
