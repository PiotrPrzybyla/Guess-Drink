import React, { useState, useEffect } from "react";
import axios from "axios";
function Game() {
	const [drawnDrinks, setDrawnDrinks] = useState([]);
	useEffect(() => {
		for (let i = 0; i < 5; i++) {
			axios
				.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
				.then((res) => {
					setDrawnDrinks((drawnDrinks) => [...drawnDrinks, res.data.drinks[0]]);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, []);

	return (
		<React.Fragment>
			<ul>
				{drawnDrinks.map((drink) => (
					<li key={drink.idDrink}>{drink.strDrink}</li>
				))}
			</ul>
		</React.Fragment>
	);
}

export default Game;
