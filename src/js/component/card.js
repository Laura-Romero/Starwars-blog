import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Fragment } from "react";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import { DetailsView } from "../views/details-info-view";
import { Link } from "react-router-dom";

export const Card = props => {
	const { actions } = useContext(Context);
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
				{/* <Link to="/details">
					<button className="learnMore">Learn more!</button>
				</Link> */}
				<Link
					to={{
						pathname: "/details/"
					}}>
					<button className="learnMore" onClick={() => actions.infoDetails(person)}>
						Learn more!
					</button>
				</Link>
				<i className="fa fa-heart" aria-hidden="true" />
			</div>
		</Fragment>
	);
};

Card.propTypes = {
	person: PropTypes.object
};
