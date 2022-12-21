import React, { useEffect, useState } from "react";
import "./Gameboard.css";
import images from "../images/images";
import Card from "./card";
import uniqid from "uniqid";

const initialiseArray = () => {
	const cards = [];
	for (const i in images) {
		let obj = { image: images[i], isClicked: false };
		cards.push(obj);
	}
	return cards;
};
const cardArray = initialiseArray();

const Gameboard = () => {
	const [allCards, setAllCards] = useState(cardArray);

	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	};

	useEffect(() => {
		const mountArray = shuffleArray(cardArray);
		setAllCards([...mountArray]);

		document.addEventListener("click", shuffleCards);
	}, []);

	const shuffleCards = () => {
		const shuffled = shuffleArray(allCards);
		setAllCards([...shuffled]);
	};

	return (
		<div className="gameboard">
			{allCards.map((card) => (
				<Card image={card.image} key={uniqid()} />
			))}
		</div>
	);
};

export default Gameboard;
