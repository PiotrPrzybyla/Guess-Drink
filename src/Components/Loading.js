import React, { useEffect, useState } from "react";
import "../style/Loading.css";
function Loading() {
	const [dots, setDots] = useState("");
	useEffect(() => {
		const dotsArray = [".", "..", "..."];
		let index = 0;
		const dotsInterval = setInterval(() => {
			setDots(dotsArray[index++]);
			if (index === dotsArray.length) index = 0;
		}, 300);
		return () => clearInterval(dotsInterval);
	}, []);

	return <div className="loading">{dots}</div>;
}

export default Loading;
