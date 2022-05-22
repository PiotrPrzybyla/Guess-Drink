import "./style/App.css";
import Game from "./Components/Game";
import logo from "./img/logo.png";
import React, { useState } from "react";
import Rules from "./Components/Rules";
function App() {
	const [isStarted, setIsStarted] = useState(false);
	const [isRules, setIsRules] = useState(false);
	function startGame() {
		setIsStarted(true);
	}
	function goToRules() {
		setIsRules(true);
	}
	//if user quit game while gaming
	function handleQuit() {
		setIsStarted(false);
		setIsRules(false);
	}
	return (
		<section>
			<img className="logo" src={logo} alt="" />
			{isStarted ? (
				<Game drinkAmount={5} variantAmount={4} onQuit={handleQuit}></Game>
			) : isRules ? (
				<Rules onQuit={handleQuit}></Rules>
			) : (
				<div className="menu">
					<button onClick={startGame} className="primary_btn">
						Start Game
					</button>
					<button className="secondary_btn" onClick={goToRules}>
						Rules
					</button>
				</div>
			)}
		</section>
	);
}

export default App;
