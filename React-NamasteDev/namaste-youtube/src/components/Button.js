import React from "react";

const Button = ({ name }) => {
	return (
		<div>
			<button className="px-5 m-4 rounded-lg bg-gray-300">{name}</button>
		</div>
	);
};

export default Button;
