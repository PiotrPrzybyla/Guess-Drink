import React, { useEffect, useState } from "react";
import "../style/Description.css";
function Description(props) {
	const [ingredients, setIngredients] = useState([]);
	const [measures, setMeasures] = useState([]);
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
		setMeasures([
			props.drink.strMeasure1,
			props.drink.strMeasure2,
			props.drink.strMeasure3,
			props.drink.strMeasure4,
			props.drink.strMeasure5,
			props.drink.strMeasure6,
			props.drink.strMeasure7,
			props.drink.strMeasure8,
			props.drink.strMeasure9,
			props.drink.strMeasure10,
			props.drink.strMeasure11,
			props.drink.strMeasure12,
			props.drink.strMeasure13,
			props.drink.strMeasure14,
			props.drink.strMeasure15,
		]);
	}, [props]);
	return (
		<div className="description">
			<div className="measures">
				<ul>
					{measures.map((el, id) => {
						if (el !== null) return <li key={id}>{el}</li>;
						else if (ingredients[id] !== null) return <li key={id}> - </li>;
					})}
				</ul>
			</div>
			<div className="ingredients">
				<ul>
					{ingredients.map((el, id) => {
						if (el !== null) return <li key={id}>{el}</li>;
					})}
				</ul>
			</div>
		</div>
	);
}

export default Description;
