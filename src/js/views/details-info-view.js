import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { CardsDetails } from "../component/cardsDetails";
import { Info } from "../component/info";

export const DetailsView = () => {
	const { store } = useContext(Context);
	let person = store.detailObject;
	return (
		<div className="container-fluid">
			<CardsDetails person={person} />
			<Info person={person} />
		</div>
	);
};
