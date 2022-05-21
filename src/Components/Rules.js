import React from "react";

function Rules(props) {
	function handleQuit(e) {
		props.onQuit();
	}
	return (
		<div className="rules">
			<h1>Rules</h1>
			<p></p>
			<button onClick={handleQuit} className="tertiary_btn">
				Menu
			</button>
		</div>
	);
}

export default Rules;
