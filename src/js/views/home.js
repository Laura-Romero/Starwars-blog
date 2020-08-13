import React from "react";
import "../../styles/home.scss";
import { Header } from "../component/header";
import { CardsDetails } from "../component/cardsDetails";

export const Home = () => {
	return (
		<div className="container-fluid ">
			<div className="row header ">
				<Header />
			</div>
			<div className="row">
				<CardsDetails />
			</div>
		</div>
	);
};
