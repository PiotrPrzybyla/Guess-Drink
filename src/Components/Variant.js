import React from "react";
import "../style/Variant.css";
function Variant(props) {
	return (
		<button
			onClick={props.onPick}
			className={props.isChosen ? "variant chosen_btn" : "variant "}
		>
			<img className="variant_img" src={props.drink.strDrinkThumb} alt="" />
			<h2>{props.drink.strDrink}</h2>
		</button>
	);
}

export default Variant;
