import React from "react";
import "../style/Rules.css";

function Rules(props) {
	function handleQuit(e) {
		props.onQuit();
	}
	return (
		<React.Fragment>
			<div className="rules">
				<h1>Rules</h1>
				<p>
					Rules are simple - based on ingredients you have to pick matching
					drink
				</p>
			</div>
			<button onClick={handleQuit} className="tertiary_btn">
				Menu
			</button>
		</React.Fragment>
	);
}

export default Rules;
