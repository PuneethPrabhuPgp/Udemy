import React from "react";
import Button from "./Button";

const btnList = [
	"All",
	"Game",
	"Song",
	"Live",
	"Cricket",
	"Tennis",
	"Soccer",
	"Cooking",
	"Badminton",
	"WWE",
];

const ButtonList = () => {
	return (
		<div className="flex">
			{btnList.map((btn) => (
				<Button
					key={btn}
					name={btn}
				/>
			))}
		</div>
	);
};

export default ButtonList;
