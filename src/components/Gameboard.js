import React, { useEffect, useState } from "react";
import "./Gameboard.css";
import images from "../images/images";
import Card from "./card";
import uniqid from "uniqid";

const Gameboard = () => {
	const initialiseArray = () => {
		const cards = [];
		for (const i in images) {
			let obj = { image: images[i], isClicked: false };
			cards.push(obj);
		}
		console.log(cards);
		return cards;
	};

	const [allCards, setAllCards] = useState(initialiseArray());

	useEffect(() => {
		const displayCards = () => {
			for (const card in allCards) {
				console.log(allCards[card]);
				return <Card image={allCards[card].image} />;
			}
		};
	}, []);

	return (
		<div className="gameboard">
			{allCards.map((card) => (
				<Card image={card.image} key={uniqid()} />
			))}
		</div>
	);
};

export default Gameboard;
