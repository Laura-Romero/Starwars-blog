import React, { useContext } from "react";
import { Fragment } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/home.scss";

export const Card = props => {
	let person = props.person;
	return (
		<Fragment>
			<div className="card">
				<img src="..." className="cardtop" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{person.name}</h5>
					<p className="card-text mb-0">Gender: {person.gender}</p>
					<p className="card-text mb-0">Hair color: {person.hair_color}</p>
					<p className="card-text">Birthday: {person.birth_year}</p>
				</div>
				<button className="learnMore">Learn more!</button>
				<i className="fa fa-heart" aria-hidden="true" />
			</div>
		</Fragment>
	);
};

Card.propTypes = {
	person: PropTypes.object
};
