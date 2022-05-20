import "./App.css";
import Game from "./Components/Game";
import logo from "./img/logo.png";
import React, { useState } from "react";
function App() {
	const [isStarted, setIsStarted] = useState(false);
	function startGame() {
		setIsStarted(true);
	}
	//if user quit game while gaming
	function handleQuit() {
		setIsStarted(false);
	}
	return (
		<section>
			<img className="logo" src={logo} alt="" />
			{isStarted ? (
				<Game drinkAmount={5} variantAmount={3} onQuit={handleQuit}></Game>
			) : (
				<button onClick={startGame} className="primary_btn">
					Start Game
				</button>
			)}
		</section>
	);
}

export default App;
