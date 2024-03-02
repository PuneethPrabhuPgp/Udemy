import React from "react";

const VideoCard = ({ info }) => {
	const { snippet, statistics } = info;
	const { channelTitle, title, thumbnails } = snippet;

	return (
		<div className="p-2 m-2 w-72 shadow-lg">
			<img
				className="rounded-lg"
				src={thumbnails.medium.url}
				alt="thumbnail"
			/>
			<ul>
				<li className="font-bold py-2">{title}</li>
				<li>{channelTitle}</li>
				<li>{statistics.viewCount + " views"} </li>
			</ul>
		</div>
	);
};

//Higher order function
export const RedBorderdVideoCard = ({ info }) => {
	return (
		<div className="p-1 m-1 border-red-900 border">
			<VideoCard info={info} />
		</div>
	);
};

export default VideoCard;
