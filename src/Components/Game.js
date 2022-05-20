import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import Description from "./Description";

function Game(props) {
	const [drawnDrinks, setDrawnDrinks] = useState([]);
	const [correctDrink, setCorrectDrink] = useState([]);
	const [currentDrinks, setCurrentDrinks] = useState([]);
	const [currentPackage, setCurrentPackage] = useState(1);
	const [isLoaded, setIsLoaded] = useState(false);
	const [message, setMessage] = useState("");
	useEffect(() => {
		const drawnNumber = Math.floor(Math.random() * props.variantAmount);
		for (let i = 0; i < props.drinkAmount * props.variantAmount; i++) {
			axios
				.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
				.then((res) => {
					setDrawnDrinks((drawnDrinks) => [
						...drawnDrinks,
						[Math.floor(i % props.variantAmount), res.data.drinks[0]],
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
					{drawnDrinks.map((drink, id) => {
						if (
							id < currentPackage * props.variantAmount &&
							id >= currentPackage * props.variantAmount - props.variantAmount
						) {
							return (
								<button
									onClick={(e) =>
										drink[1].idDrink === correctDrink.idDrink
											? setMessage("Correct")
											: setMessage("Incorrect")
									}
									className="secondary_btn"
									key={drink[1].idDrink}
								>
									{drink[1].strDrink}
								</button>
							);
						}
					})}
				</div>
				<div className="message">{message}</div>
				<button
					className="tertiary_btn"
					onClick={(e) => setCurrentPackage(currentPackage + 1)}
				>
					Choose
				</button>
				<button className="tertiary_btn" onClick={handleQuit}>
					Quit
				</button>
			</React.Fragment>
		);
}

export default Game;
