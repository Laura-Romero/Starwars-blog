import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Header } from "../component/header";
import { Card } from "../component/card.js";
export const Home = () => {
	const { store } = useContext(Context);
	return (
		<div className="container-fluid ">
			<div className="row header ">
				<Header />
			</div>
			{/* <div className="row">
                <CardsDetails /> 
            </div> */}
			<div className="row">
				{store.arrayPeople.map((person, index) => {
					console.log(person);
					return <Card key={index} person={person} />;
				})}
			</div>
		</div>
	);
};
