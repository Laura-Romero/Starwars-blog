import React from "react";
import PropTypes from "prop-types";
export function CardsDetails(props) {
	let person = props.person;
	return (
		<div className="row">
			<div className="col-12 d-flex justify-content-around">
				<img className="img-2" src="https://via.placeholder.com/800x600" />
				<div className="row d-flex justify-content-center px-5 py-4">
					<h2>{person.name}</h2>
					<p className="text">
						Lorem ipsum dolor sit amet consectetur adipiscing elit mus aenean laoreet, rutrum ad vehicula
						arcu consequat libero velit fermentum auctor, quis magnis tempor nostra tortor fringilla
						maecenas posuere pulvinar. Conubia augue placerat feugiat tempus iaculis platea dictumst mattis
						erat habitasse suscipit class, ante blandit varius vivamus leo vitae eget sagittis felis natoque
					</p>
				</div>
			</div>
		</div>
	);
}
CardsDetails.propTypes = {
	person: PropTypes.object
};
