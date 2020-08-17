import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card.js";
import { Planets } from "../component/card.js";

export const Home = () => {
	return (
		<div>
			<h1>Characters</h1>
			<div className="d-flex cardContainer">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<h1>planets</h1>
			<div className="d-flex cardContainer">
				<Planets />
				<Planets />
				<Planets />
				<Planets />
				<Planets />
				<Planets />
			</div>
			<div />
		</div>
	);
};
