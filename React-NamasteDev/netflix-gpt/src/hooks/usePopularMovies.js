import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

// fetach now playing Data TMDB API and store the movie list in movieSlice store
const usePopularMovies = () => {
	const dispatch = useDispatch();

	const getNowPlayingMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
			API_OPTIONS,
		);
		const json = await data.json();
		dispatch(addPopularMovies(json.results));
	};

	useEffect(() => {
		getNowPlayingMovies();
	}, []);
};

export default usePopularMovies;
