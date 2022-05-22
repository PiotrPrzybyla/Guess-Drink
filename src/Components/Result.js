import React from "react";
import "../style/Result.css";

function Result(props) {
	function handleQuit(e) {
		props.onQuit();
	}
	return (
		<React.Fragment>
			<div className="correct_answers">
				<h1>
					Result: {props.correctAnswers} / {props.allAnswers}
				</h1>
			</div>
			<div className="answers">
				<div className="correct_drinks">
					<ul>
						<h2>Correct drinks</h2>
						{props.correctDrinks.map((el, id) => (
							<li key={id}>
								{id + 1}. {el.strDrink}
							</li>
						))}
					</ul>
				</div>
				<div className="user_drinks">
					<ul>
						<h2>You choose</h2>
						{props.answers.map((el, id) => (
							<li key={id}>{el.strDrink}</li>
						))}
					</ul>
				</div>
			</div>

			<button className="tertiary_btn" onClick={handleQuit}>
				Menu
			</button>
		</React.Fragment>
	);
}

export default Result;
