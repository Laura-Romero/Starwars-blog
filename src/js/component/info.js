import React from "react";
import PropTypes from "prop-types";

export function Info(props) {
	let person = props.person;

	return (
		<div className="container line">
			<div className="row d-flex justify-content-around py-4">
				<div className="col-1">
					<span>Name</span>
				</div>

				<div className="col-1">
					<span>Gender</span>
				</div>

				<div className="col-1">
					<span>Birthday</span>
				</div>

				<div className="col-1">
					<span>Color Eyes</span>
				</div>

				<div className="col-1">
					<span>Color Hair</span>
				</div>

				<div className="col-1">
					<span>Films</span>
				</div>
			</div>

			<div className="row d-flex justify-content-around">
				<div className="col-1">
					<span>{person.name}</span>
				</div>

				<div className="col-1">
					<span>{person.gender}</span>
				</div>

				<div className="col-1">
					<span>{person.birth_year}</span>
				</div>

				<div className="col-1">
					<span>{person.eye_color}</span>
				</div>

				<div className="col-1">
					<span>{person.hair_color}</span>
				</div>

				<div className="col-1">
					<span>{person.film}</span>
				</div>
			</div>
		</div>
	);
}
Info.propTypes = {
	person: PropTypes.object
};
