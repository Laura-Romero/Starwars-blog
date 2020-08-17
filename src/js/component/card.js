import React from "react";
import { Fragment } from "react";

import "../../styles/home.scss";

export const Card = () => {
	return (
		<Fragment>
			<div className="card mx-5">
				<img src="..." className="cardtop" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{"LUKE SKYWALKER"}</h5>
					<p className="card-text">{"Gender: male Hair Color:blonde Eye-Color:blue"}</p>
				</div>
				<div className="d-flex justify-content-between">
					<button className="learnMore">Learn more!</button>
					<i className="fa fa-heart" aria-hidden="true" />
				</div>
			</div>
		</Fragment>
	);
};

export const Planets = () => {
	return (
		<Fragment>
			<div className="Planets">
				<img src="" className="cardbox" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{"Alderaan"}</h5>
					<p className="card-text">{"Population: 2000000000 Terrain: grassiands, mountains"}</p>
				</div>
				<div className="d-flex justify-content-between">
					<button className="learnMore1">Learn more!</button>
					<i className="fa fa-heart" aria-hidden="true" />
				</div>
			</div>
		</Fragment>
	);
};
