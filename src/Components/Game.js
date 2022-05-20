import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import Description from "./Description";

function Game(props) {
	const [drawnDrinks, setDrawnDrinks] = useState([]);
	const [correctDrink, setCorrectDrink] = useState();
	const [currentDrinks, setCurrentDrinks] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [message, setMessage] = useState("");
	useEffect(() => {
		const drawnNumber = Math.floor(Math.random() * props.variantAmount);
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
					if (i === drawnNumber) setCorrectDrink(res.data.drinks[0]);
					if (i === props.drinkAmount * props.variantAmount - 1) {
						setIsLoaded(true);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, []);
	function handleQuit(e) {
		props.onQuit();
	}

	if (!isLoaded) {
		return <Loading></Loading>;
	} else
		return (
			<React.Fragment>
				<Description drink={correctDrink}></Description>

				<div className="variants">
					{currentDrinks.map((drink) => (
						<button
							onClick={(e) =>
								drink.idDrink === correctDrink.idDrink
									? setMessage("Correct")
									: setMessage("Incorrect")
							}
							className="secondary_btn"
							key={drink.idDrink}
						>
							{drink.strDrink}
						</button>
					))}
				</div>
				<div className="message">{message}</div>
				<button className="tertiary_btn">Choose</button>
				<button className="tertiary_btn" onClick={handleQuit}>
					Quit
				</button>
			</React.Fragment>
		);
}

export default Game;
