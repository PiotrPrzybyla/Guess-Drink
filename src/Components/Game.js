import React, { useState, useEffect } from "react";
import axios from "axios";

function Game(props) {
	const [drawnDrinks, setDrawnDrinks] = useState([]);
	const [currentDrinks, setCurrentDrinks] = useState([]);
	useEffect(() => {
		for (let i = 0; i < props.drinkAmount * props.variantAmount; i++) {
			axios
				.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
				.then((res) => {
					setDrawnDrinks((drawnDrinks) => [...drawnDrinks, res.data.drinks[0]]);
					if (i < props.variantAmount)
						setCurrentDrinks((currentDrinks) => [
							...currentDrinks,
							res.data.drinks[0],
						]);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, []);
	function handleQuit(e) {
		props.onQuit();
	}
	return (
		<React.Fragment>
			<div className="variants">
				{currentDrinks.map((drink) => (
					<button
						onClick={(e) => console.log(drink.idDrink)}
						className="secondary_btn"
						key={drink.idDrink}
					>
						{drink.strDrink}
					</button>
				))}
			</div>
			<button className="tertiary_btn">Choose</button>
			<button className="tertiary_btn" onClick={handleQuit}>
				{" "}
				Quit
			</button>
		</React.Fragment>
	);
}

export default Game;
