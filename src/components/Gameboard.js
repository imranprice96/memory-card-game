import React, { useEffect, useState } from "react";
import "./Gameboard.css";
import images from "../images/images";
import Card from "./card";
import uniqid from "uniqid";

const initialiseArray = () => {
	const cards = [];
	for (const i in images) {
		let obj = { id: uniqid(), image: images[i], isClicked: false };
		cards.push(obj);
	}
	return cards;
};
const cardArray = initialiseArray();

const Gameboard = () => {
	const [allCards, setAllCards] = useState(cardArray);
	const [score, setScore] = useState(0);

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

		const cards = Array.from(document.getElementsByClassName("card"));
		cards.forEach((element) => {
			element.addEventListener("click", toggleElement);
			//console.log(element);
		});
	}, []);

	const shuffleCards = () => {
		const shuffled = shuffleArray(allCards);
		setAllCards([...shuffled]);
	};

	const toggleElement = (e) => {
		const array = allCards.slice();
		const id = e.target.id;
		const result = array.find((card) => card.id === id).isClicked;
		if (!result) {
			array.find((card) => card.id === id).isClicked = true;
			setScore((score) => score + 1);
			setAllCards([...array]);
			shuffleCards();
		} else {
			array.find((card) => card.id === id).isClicked = false;
			setScore(0);
			shuffleCards();
		}
		console.log(allCards);
	};

	return (
		<div className="gameboard">
			{allCards.map((card) => (
				<Card
					image={card.image}
					key={card.id}
					id={card.id}
					value={card.isClicked}
				/>
			))}
		</div>
	);
};

export default Gameboard;
