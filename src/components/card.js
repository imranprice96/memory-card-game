import React, { useEffect, useState } from "react";
import "./card.css";

const Card = (props) => {
	return (
		<img
			src={props.image}
			alt=""
			className="card"
			id={props.id}
			value={props.value}
		></img>
	);
};

export default Card;
