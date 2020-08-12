import React from "react";
import { Fragment } from "react";
import "../../styles/home.scss";

export const Card = () => {
	return (
		<Fragment>
			<div className="card">
				<img src="..." className="cardtop" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{"LUKE SKYWALKER"}</h5>
					<p className="card-text">{"Gender: male Hair Color: blonde Eye-Color:blue"}</p>
				</div>
				<button className="learnMore">Learn more!</button>
				<i className="fa fa-heart" aria-hidden="true" />
			</div>
		</Fragment>
	);
};
