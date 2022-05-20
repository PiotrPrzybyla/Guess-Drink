import React, { useEffect, useState } from "react";
import "../Description.css";
function Description(props) {
	const [ingredients, setIngredients] = useState([]);
	useEffect(() => {
		setIngredients([
			props.drink.strIngredient1,
			props.drink.strIngredient2,
			props.drink.strIngredient3,
			props.drink.strIngredient4,
			props.drink.strIngredient5,
			props.drink.strIngredient6,
			props.drink.strIngredient7,
			props.drink.strIngredient8,
			props.drink.strIngredient9,
			props.drink.strIngredient10,
			props.drink.strIngredient11,
			props.drink.strIngredient12,
			props.drink.strIngredient13,
			props.drink.strIngredient14,
			props.drink.strIngredient15,
		]);
	}, []);
	return (
		<ul>
			{ingredients.map((el, id) => {
				if (el !== null) return <li key={id}>{el}</li>;
			})}
		</ul>
	);
}

export default Description;
