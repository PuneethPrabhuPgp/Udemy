import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);
	const email = useRef(null);
	const password = useRef(null);
	const fullName = useRef(null);
	const [errorMessage, setErrorMessage] = useState(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const toogleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	const handleButtonClick = () => {
		// validate the form data
		const message = checkValidateData(email.current.value, password.current.value);
		setErrorMessage(message);

		if (message) return;

		// Sign In or Signup logic

		if (!isSignInForm) {
			// sign up logic
			createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
				.then((userCredential) => {
					// Signed up
					const user = userCredential.user;
					updateProfile(auth.currentUser, {
						displayName: fullName.current.value,
						photoURL: "https://example.com/jane-q-user/profile.jpg",
					})
						.then(() => {
							const { uid, email, displayName, photoURL } = auth.currentUser;
							dispatch(
								addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }),
							);
							navigate("/browse");
						})
						.catch((error) => {
							setErrorMessage(error.code + ":" + error.errorMessage);
						});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + ":" + errorMessage);
				});
		} else {
			// sigin in logic
			signInWithEmailAndPassword(auth, email.current.value, password.current.value)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					navigate("/browse");
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + ":" + errorMessage);
				});
		}
	};

	return (
		<div>
			<Header />
			<div className="absolute">
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
					alt="background"
				/>
			</div>
			<form
				className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
				onClick={(e) => e.preventDefault()}
			>
				<h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
				{!isSignInForm && (
					<input
						ref={fullName}
						type="text"
						placeholder="Full Name"
						className="p-4 my-4 w-full bg-gray-700"
					/>
				)}
				<input
					ref={email}
					type="text"
					placeholder="Email address"
					className="p-4 my-4 w-full bg-gray-700"
				/>

				<input
					ref={password}
					type="password"
					placeholder="password"
					className="p-4 my-4 w-full bg-gray-700"
				/>
				<p className="text-red-500 font-bold text-lg p-2 ">{errorMessage}</p>
				<button
					className="p-4 my-6 bg-red-700 w-full rounded-lg"
					onClick={handleButtonClick}
				>
					{isSignInForm ? "Sign In" : "Sign Up"}
				</button>
				<p
					className="py-4 cursor-pointer"
					onClick={toogleSignInForm}
				>
					{isSignInForm ? "New to Netflix? Sign Up Now" : "ALready registered? Sign In Now"}
				</p>
			</form>
		</div>
	);
};

export default Login;
