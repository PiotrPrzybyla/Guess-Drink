import "./App.css";
import React, { useState } from "react";
function App() {
	const [isStarted, setIsStarted] = useState(false);
	function startGame() {
		setIsStarted(true);
	}
	return (
		<section>
			<img className="logo" src="img/logo.png" alt="" />
			{isStarted ? (
				<div></div>
			) : (
				<button onClick={startGame} className="primary_btn">
					Start Game
				</button>
			)}
		</section>
	);
}

export default App;
