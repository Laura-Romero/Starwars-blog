import React, { useContext } from "react";
import { Context } from "../store/appContext";

export function Info() {
	const { store} = useContext(Context);
	return (
		<div className="container line">
			<div className="row d-flex justify-content-around py-4">
				{store.arrayPeople.map((item, index) => {
					if (index == 0) {
						return (
							<div key={index}>
								<h3>Name</h3>
								<p>{item.name}</p>
								<div className="col-1">
									<span>{item.gender}</span>
								</div>
								<div className="col-1">
									<span>{item.films}</span>
								</div>
							</div>
						);
					}
				})}

				<div className="col-1">
					<span>Population</span>
				</div>
				<div className="col-1">
					<span>Orbital Period</span>
				</div>
				<div className="col-1">
					<span>Rotation Period</span>
				</div>
				<div className="col-1">
					<span>Diameter</span>
				</div>
			</div>

			<div className="row d-flex justify-content-around">
				<div className="col-1">
					<span>Tatooine</span>
				</div>

				<div className="col-1">
					<span>arid</span>
				</div>

				<div className="col-1">
					<span>200000</span>
				</div>

				<div className="col-1">
					<span>304</span>
				</div>

				<div className="col-1">
					<span>23</span>
				</div>

				<div className="col-1">
					<span>10465</span>
				</div>
			</div>
		</div>
	);
}
