import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
	const dispatch = useDispatch();
	const getVideoTrailer = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
			API_OPTIONS,
		);
		const json = await data.json();
		const fileterData = json.results.filter((x) => x.type === "Trailer");
		const trailer = fileterData.length ? fileterData[0] : json.results[0];
		dispatch(addTrailerVideo(trailer));
	};

	useEffect(() => {
		getVideoTrailer();
	}, []);
};

export default useTrailerVideo;
